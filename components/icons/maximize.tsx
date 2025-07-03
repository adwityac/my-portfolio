import { SVGProps } from 'react';

interface MaximizeProps extends SVGProps<SVGSVGElement> {}

const Maximize = (props: MaximizeProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <path
        fill="#fff"
        d="M4 4v8h8V4zm1 1h6v6H5z"
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
    </svg>
  );
};

export { Maximize };
