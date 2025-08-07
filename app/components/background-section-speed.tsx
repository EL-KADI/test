import React from 'react';
import Image from 'next/image';

const BackgroundSectionSpeed = () => {
  return (
    <div className="relative h-screen">
      <Image
        className="absolute top-0 right-0 w-[250px]"
        alt="Background Image"
        src="/bluebg-right.svg"
        width={398}
        height={897}
      />
      <Image
        className="absolute top-0 left-0 w-[250px]"
        alt="Background Image"
        src="/bluebg-left.svg"
        width={399}
        height={897}
      />
      <Image
        className="absolute  w-auto sm:max-w-md md:max-w-2xl lg:max-w-4xl  max-w-sm xl:max-w-full left-1/2 transform top-[10%] -translate-x-1/2"
        alt="Background Image"
        src="/center-bg.svg"
        width={1850}
        height={1850}
      />
    </div>
  );
};

export default BackgroundSectionSpeed;