import React from "react";
import Image from "next/image"; // Assuming Next.js Image component, adjust if using a different React image library

const DomainStatsEG = () => {
  return (
    <div className="relative mt-32">
      <Image loading="lazy"
        className="absolute -top-36 right-0 -z-10"
        src="/Rbg.svg"
        alt="SVG Background Right"
        width={400}
        height={400}
      />
      <Image loading="lazy"
        className="absolute -top-36 left-0 -z-10"
        src="/Lbg.svg"
        alt="SVG Background Left"
        width={400}
        height={400}
      />
      <div className="relative container text-black  max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 dir="rtl" className="lg:text-4xl text-xl mb-6 text-center font-semibold">
          احصائيات eg.
        </h1>
        <p dir="rtl" className="text-center text-sm font-light">القِ نضرة على الأرقام:</p>
        <div className="relative">
          <h1 className="text-9xl absolute -top-[85px] left-1/2 transform -translate-x-1/2 -z-[10] text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#E8F2FC] to-[#F9F9F9]/10">
            500
          </h1>
          <h1 className="lg:text-4xl text-xl mb-6 text-center  mt-20">
            نفتخر بتسجيلنا لأكثر من 150 اسم نطاق!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DomainStatsEG;
