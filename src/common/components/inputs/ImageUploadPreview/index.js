// @flow
import * as React from 'react';

import Attach from 'common/components/icons/Attach';
import Close from 'common/components/icons/Close';
import FieldWithError from '../FieldWithError';
import {
  LabelTextCont,
  StyledLabel,
  StyledInput,
  ButtonTextCont,
  HelpTextCont,
  ImagesCont,
  ImageCont,
  StyledImg,
  CloseCont,
} from './styled';

type FileChoiceEvent = SyntheticInputEvent<HTMLInputElement>;

type Props = {
  name: string,
  label: string,
  buttonText: string,
  helperText: string | React.Node,
  errorText?: string,
  onChange?: FileChoiceEvent => void,
  onRemove?: File => void,
};

type Image = {
  file: File,
  previewUrl: string | ArrayBuffer,
};

const ImageUploadPreview = (props: Props) => {
  const [images, setImages] = React.useState([]);

  function handleChange(event: FileChoiceEvent) {
    event.preventDefault();

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const image = {
            file,
            previewUrl: reader.result,
          };
          setImages([...images, image]);
        };
        reader.readAsDataURL(file);
      }
    }

    props.onChange && props.onChange(event);
  }

  function handleImageRemove(image: Image) {
    setImages(images.filter(item => item.file !== image.file));
    props.onRemove && props.onRemove(image.file);
  }

  function renderImagePreview(image: Image, index: number) {
    return (
      <ImageCont key={index}>
        <StyledImg src={image.previewUrl} />
        <CloseCont onClick={() => handleImageRemove(image)}>
          <Close height={13} />
        </CloseCont>
      </ImageCont>
    );
  }

  return (
    <FieldWithError errorText={props.errorText}>
      <LabelTextCont error={Boolean(props.errorText)}>
        {props.label}
      </LabelTextCont>
      <StyledLabel>
        <StyledInput
          type="file"
          multiple={true}
          name={props.name}
          onChange={handleChange}
        />
        <ButtonTextCont>
          <Attach height={18} />
          {props.buttonText}
        </ButtonTextCont>
      </StyledLabel>
      <HelpTextCont>{props.helperText}</HelpTextCont>
      <ImagesCont>{images.map(renderImagePreview)}</ImagesCont>
    </FieldWithError>
  );
};

export default ImageUploadPreview;
