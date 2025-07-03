import React from 'react';

interface VSCodeProps {
  id: string;
}

const VSCode = ({ id }: VSCodeProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow">
        <iframe
          src="https://github1s.com/adwityac/my-portfolio/blob/HEAD/components/ubuntu/index.tsx"
          frameBorder="0"
          title="VsCode"
          className="bg-ub-cool-grey h-full w-full"
        ></iframe>
      </div>
    </div>
  );
};

export { VSCode };
