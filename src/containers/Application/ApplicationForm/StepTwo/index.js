// @flow
import React, { useState } from 'react';
import { Formik, type FormikActions, type FormikProps } from 'formik';
import type { IntlShape } from 'react-intl';

import ImageUploadPreview from 'common/components/inputs/ImageUploadPreview';
import Button from 'common/components/buttons/Button';
import DoubleBounceSpinner from 'common/components/spinners/DoubleBounceSpinner';
import { api, uploadToS3 } from 'helpers/rest';
import messages from './messages';
import { MIN_IMAGES, MAX_IMAGES, MAX_IMAGES_SIZE } from './constants';
import {
  StyledForm,
  FieldCont,
  SpinnerCont,
  ErrorCont,
  LoadingTextCont,
  StepCont,
} from '../styled';

type FileChoiceEvent = SyntheticInputEvent<HTMLInputElement>;

type Props = {
  applicationId: number,
  visible: boolean,
  onSuccess: () => void,
  intl: IntlShape,
};

type Values = {};

const StepTwo = (props: Props) => {
  const [images, setImages] = useState([]);

  async function onSubmit(
    values: Values,
    { setSubmitting, setFieldError }: FormikActions<Values>
  ) {
    const {
      applicationId,
      onSuccess,
      intl: { formatMessage },
    } = props;

    const success = [];
    const errors = [];

    images.forEach(async file => {
      const signS3Resp = await api.get('sign-s3', {
        file_name: `application${applicationId}/${file.name}`,
        file_type: file.type,
      });
      if (!signS3Resp.ok || !signS3Resp.data) {
        errors.push(
          formatMessage(messages.presignedRequestError, { fileName: file.name })
        );
        return;
      }
      const s3RequestData = signS3Resp.data.data;
      const uploadS3Resp = await uploadToS3(
        s3RequestData.url,
        s3RequestData.fields,
        file
      );

      if (!uploadS3Resp.ok) {
        errors.push(
          formatMessage(messages.s3UploadError, { fileName: file.name })
        );
        return;
      }

      const holoApiResp = await api.post(
        `stores/applications/${applicationId}/images/`,
        {
          imageUrl: signS3Resp.data.url,
        }
      );

      if (holoApiResp.ok) {
        success.push(file.name);
      } else {
        errors.push(
          formatMessage(messages.submitError, {
            fileName: file.name,
            url: signS3Resp.data.url,
          })
        );
      }

      if (success.length === images.length) {
        onSuccess();
      } else if (success.length + errors.length === images.length) {
        errors.unshift(formatMessage(messages.errorsOccurred));
        errors.push(formatMessage(messages.contactUs));
        setFieldError('nonFieldErrors', errors.join(' '));
        setSubmitting(false);
      }
    });
  }

  function validate() {
    const formatMessage = props.intl.formatMessage;
    let errors = {};
    const imagesErrors = [];
    const nonImages = images.filter(item => !item.type.startsWith('image/'));
    if (nonImages.length) {
      const nonImagesNames = nonImages.map(item => item.name).join(', ');
      imagesErrors.push(
        formatMessage(messages.invalidImages, { nonImagesNames })
      );
    }
    const imagesCount = images.length;
    const imagesSize = images.reduce((acc, curr) => acc + curr.size, 0);
    if (imagesCount < MIN_IMAGES) {
      imagesErrors.push(
        formatMessage(messages.tooFewImages, { minNumber: MIN_IMAGES })
      );
    } else if (imagesCount > MAX_IMAGES) {
      imagesErrors.push(
        formatMessage(messages.tooManyImages, { maxNumber: MAX_IMAGES })
      );
    }
    if (imagesSize > MAX_IMAGES_SIZE * 1024 * 1024) {
      imagesErrors.push(
        formatMessage(messages.tooBigImages, {
          maxSize: MAX_IMAGES_SIZE,
          actualSize: Math.round(imagesSize / 1024 / 1024),
        })
      );
    }
    if (imagesErrors.length) {
      errors.images = imagesErrors.join('. ');
    }
    return errors;
  }

  function handleImagesChange(event: FileChoiceEvent) {
    const files = event.target.files;
    const newFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newFiles.push(file);
      }
    }
    setImages([...images, ...newFiles]);
  }

  function handleImageRemove(file: File) {
    setImages(images.filter(image => image !== file));
  }

  function formRenderer({
    errors,
    handleSubmit,
    isSubmitting,
  }: FormikProps<Values>) {
    const formatMessage = props.intl.formatMessage;

    const uploadHelpText = (
      <>
        <p>
          {formatMessage(messages.imagesHelpText1, {
            minNumber: MIN_IMAGES,
            maxNumber: MAX_IMAGES,
            maxSize: MAX_IMAGES_SIZE,
          })}
        </p>
        <p>{formatMessage(messages.imagesHelpText2)}</p>
      </>
    );

    return (
      <>
        {isSubmitting && (
          <SpinnerCont>
            <DoubleBounceSpinner />
            <LoadingTextCont>
              {formatMessage(messages.loadingText)}
            </LoadingTextCont>
          </SpinnerCont>
        )}
        <StyledForm onSubmit={handleSubmit} isSubmitting={isSubmitting}>
          {errors.nonFieldErrors && (
            <ErrorCont>{errors.nonFieldErrors}</ErrorCont>
          )}
          <FieldCont>
            <ImageUploadPreview
              name="images"
              label={formatMessage(messages.imagesLabel)}
              buttonText={formatMessage(messages.imagesButtonText)}
              helperText={uploadHelpText}
              errorText={errors.images}
              onChange={handleImagesChange}
              onRemove={handleImageRemove}
            />
          </FieldCont>
          <Button type="submit" width={250} disabled={isSubmitting}>
            {formatMessage(messages.submitButtonText)}
          </Button>
        </StyledForm>
      </>
    );
  }

  return (
    <StepCont visible={props.visible}>
      <Formik onSubmit={onSubmit} validate={validate}>
        {formRenderer}
      </Formik>
    </StepCont>
  );
};

export default StepTwo;
