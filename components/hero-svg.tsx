import Image from "next/image";
import AnimatedOnLoad from "./animated-on-load";

export default function HeroSvg() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full max-w-8xl  mx-auto z-10">
      <AnimatedOnLoad
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          className=" animate-wave absolute 2xl:left-4 xl:bottom-32  bottom-11 sm:bottom-16 md:bottom-20 lg:bottom-28 left-0 h-auto object-bottom   z-10"
          src="/HeroElements.webp"
          alt="Hero Background"
          width={1470}
          height={1080}
          priority
        />
        <Image
          className="w-full h-auto relative z-0"
          src="/HeroColumn.svg"
          alt="Hero Background"
          width={1920}
          height={1080}
          priority
        />
      </AnimatedOnLoad>
    </div>
  );
}

