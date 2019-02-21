// @flow
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  errorsOccurred: {
    id: 'ApplicationForm.StepTwo.errorsOccurred',
    defaultMessage: 'Some errors occurred during images upload.',
  },
  presignedRequestError: {
    id: 'ApplicationForm.StepTwo.presignedRequestError',
    defaultMessage: 'Error getting presigned request. File name: {fileName}.',
  },
  s3UploadError: {
    id: 'ApplicationForm.StepTwo.s3UploadError',
    defaultMessage: 'Error uploading file. File name: {fileName}.',
  },
  submitError: {
    id: 'ApplicationForm.StepTwo.submitError',
    defaultMessage:
      'Error submitting file URL. File name: {fileName}, URL: {url}.',
  },
  contactUs: {
    id: 'ApplicationForm.StepTwo.contactUs',
    defaultMessage:
      'Please try again in a moment or contact us via email ira@holo-apollo.art or Instagram @holo.apollo.art.',
  },
  loadingText: {
    id: 'ApplicationForm.StepTwo.loadingText',
    defaultMessage: 'We are loading your photos. Please wait a moment',
  },
  imagesLabel: {
    id: 'ApplicationForm.StepTwo.imagesLabel',
    defaultMessage: 'Upload photos of your goods in good quality',
  },
  imagesButtonText: {
    id: 'ApplicationForm.StepTwo.imagesButtonText',
    defaultMessage: 'Upload photos',
  },
  imagesHelpText1: {
    id: 'ApplicationForm.StepTwo.imagesHelpText1',
    defaultMessage:
      'At least {minNumber} and at most {maxNumber} photos, total size up to {maxSize} MB.',
  },
  imagesHelpText2: {
    id: 'ApplicationForm.StepTwo.imagesHelpText2',
    defaultMessage:
      'Photos will be used in a collage, therefore some of them should have minimal, neutral background.',
  },
  submitButtonText: {
    id: 'ApplicationForm.StepTwo.submitButtonText',
    defaultMessage: 'Create application',
  },
  invalidImages: {
    id: 'ApplicationForm.StepTwo.invalidImages',
    defaultMessage: 'Following files are not images: {nonImagesNames}',
  },
  tooFewImages: {
    id: 'ApplicationForm.StepTwo.tooFewImages',
    defaultMessage: 'Please choose at least {minNumber} images',
  },
  tooManyImages: {
    id: 'ApplicationForm.StepTwo.tooManyImages',
    defaultMessage: 'Please choose at most {maxNumber} images',
  },
  tooBigImages: {
    id: 'ApplicationForm.StepTwo.tooBigImages',
    defaultMessage:
      'Total size of images is too big. Maximum size is {maxSize} MB, you uploaded {actualSize}',
  },
});

export default messages;
