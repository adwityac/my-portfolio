import React, { SVGProps } from 'react';

interface WifiProps extends SVGProps<SVGSVGElement> {}

const Wifi = (props: WifiProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <g color="#000">
        <path
          fill="gray"
          d="M1001.003-265c-2.61 0-5.22.838-7.4 2.518l-.266.205.205.263 7.457 9.672 7.668-9.931-.264-.206a12.105 12.105 0 0 0-7.4-2.521zm0 1c2.181 0 4.344.672 6.227 1.951l-6.229 8.07-6.226-8.074c1.883-1.278 4.047-1.948 6.228-1.947z"
          fontFamily="sans-serif"
          fontWeight={400}
          overflow="visible"
          style={{
            lineHeight: 'normal',
            fontVariantLigatures: 'none',
            fontVariantPosition: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantAlternates: 'normal',
            fontFeatureSettings: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            isolation: 'auto',
            mixBlendMode: 'normal',
            marker: 'none',
          }}
          transform="translate(-993 267)"
        />
        <path
          fill="#fff"
          d="M995.427-260.103a9.129 9.125 0 0 1 11.15.003l-5.577 7.225z"
          overflow="visible"
          style={{
            marker: 'none',
          }}
          transform="translate(-993 267)"
        />
      </g>
    </svg>
  );
};

export { Wifi };
