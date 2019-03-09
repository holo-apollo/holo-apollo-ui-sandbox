// @flow
import React from 'react';

import palette from 'common/palette';
import SVGIcon from '../SVGIcon';

type Props = {
  height: number,
  color: string,
};

const Facebook = ({ height, color }: Props) => (
  <SVGIcon
    vBox={{
      minX: 0,
      minY: 0,
      width: 29,
      height: 29,
    }}
    height={height}
    color={color}
  >
    <g fillRule="evenodd">
      <g
        transform="translate(-360.000000, -3622.000000)"
        fill={color}
        fillRule="nonzero"
      >
        <g transform="translate(0.000000, 3371.000000)">
          <path
            d="M387.4,251 L361.6,251 C360.716344,251 360,251.716344 360,252.6 L360,278.4 C360,279.283656 360.716344,280 361.6,280 L375.5,280 L375.5,268.785 L371.725,268.785 L371.725,264.395 L375.5,264.395 L375.5,261.165 C375.5,257.42 377.79,255.38 381.13,255.38 C382.255537,255.377545 383.380424,255.43429 384.5,255.55 L384.5,259.465 L382.2,259.465 C380.38,259.465 380.025,260.325 380.025,261.595 L380.025,264.39 L384.375,264.39 L383.81,268.78 L380,268.78 L380,280 L387.4,280 C388.283656,280 389,279.283656 389,278.4 L389,252.6 C389,251.716344 388.283656,251 387.4,251 Z"
            id="fb"
          />
        </g>
      </g>
    </g>
  </SVGIcon>
);

Facebook.defaultProps = {
  color: palette.darkGrey,
};

export default Facebook;
