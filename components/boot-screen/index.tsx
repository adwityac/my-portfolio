'use client';

import Image from 'next/image';

const BootScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      {/* Ubuntu logo */}
      <Image
        src="/ubuntu_white_hex.svg"
        alt="Ubuntu"
        width={120}
        height={120}
        priority
      />

      {/* Spinner */}
      <div className="mt-8 animate-spin">
        <Image
          src="/process-working-symbolic.svg"
          alt="Loading"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export { BootScreen };
