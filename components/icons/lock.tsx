import React, { SVGProps } from 'react';

interface LockProps extends SVGProps<SVGSVGElement> {}

const Lock = (props: LockProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <path
        fill="#fff"
        d="M8 1a4 4 0 0 0-4 4v2H3v8h10V7h-1V5a4 4 0 0 0-4-4zm0 1c1.67 0 3 1.33 3 3v2H5V5c0-1.67 1.33-3 3-3z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: 'normal',
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
      />
    </svg>
  );
};

export { Lock };
