import { SVGProps } from 'react';

interface AudioVolumeProps extends SVGProps<SVGSVGElement> {}

const AudioVolume = (props: AudioVolumeProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <g fill="#fff">
        <path d="M8 1.333 4.5 5H1.87S1 5.893 1 8.001C1 10.11 1.87 11 1.87 11H4.5L8 14.667z" />
        <path
          d="m10.524 4.926-.707.707.354.354a2.999 2.999 0 0 1 0 4.242l-.354.353.707.707.354-.353a4 4 0 0 0 0-5.656z"
          color="#000"
          fontFamily="sans-serif"
          fontWeight={400}
          overflow="visible"
          style={{
            lineHeight: 'normal',
            fontVariantLigatures: 'normal',
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
            textOrientation: 'mixed',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
        />
        <path
          d="m12.645 2.805-.707.707.354.353a5.999 5.999 0 0 1 0 8.485l-.354.353.707.707.354-.353a7 7 0 0 0 0-9.899z"
          color="#000"
          fontFamily="sans-serif"
          fontWeight={400}
          opacity={0.5}
          overflow="visible"
          style={{
            lineHeight: 'normal',
            fontVariantLigatures: 'normal',
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
            textOrientation: 'mixed',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
        />
      </g>
    </svg>
  );
};

export { AudioVolume };
