import React from 'react';
import Image from 'next/image';

export default function BgSectionTwo() {
  return (
    <div className='w-full mx-auto relative'>
      <Image loading="lazy" className='inset-0 mx-auto' src="/start.svg" alt="bg" width={1920} height={1080} />
    </div>
  );
}