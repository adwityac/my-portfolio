import React, { SVGProps } from 'react';

interface CloseProps extends SVGProps<SVGSVGElement> {}

const Close = (props: CloseProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m4.795 3.912-.883.883.147.146L7.117 8 4.06 11.059l-.147.146.883.883.146-.147L8 8.883l3.059 3.058.146.147.883-.883-.147-.146L8.883 8l3.058-3.059.147-.146-.883-.883-.146.147L8 7.117 4.941 4.06z"
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

export { Close };
