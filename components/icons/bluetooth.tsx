import { SVGProps } from 'react';

interface BluetoothProps extends SVGProps<SVGSVGElement> {}

const Bluetooth = (props: BluetoothProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <path
        fill="#fff"
        d="M5.662 0C4.823.01 4.211-.02 3.71.258a1.25 1.25 0 0 0-.56.664C3.038 1.214 3 1.562 3 2v12c0 .438.039.786.148 1.078.11.293.31.528.56.666.503.277 1.115.246 1.954.256h5.676c.839-.01 1.451.021 1.953-.256.251-.138.45-.373.56-.666.11-.292.149-.64.149-1.078V2c0-.438-.039-.786-.148-1.078a1.253 1.253 0 0 0-.561-.664C12.789-.02 12.177.01 11.338 0H5.664zM8 1.303l4.24 4.238L9.3 8.01l2.94 2.469L8 14.717V9.104l-2.428 2.039-.644-.766L7.746 8.01 4.928 5.643l.644-.766L8 6.916zm1 2.414v3.24l1.76-1.48zm0 5.345v3.24l1.76-1.759z"
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

export { Bluetooth };
