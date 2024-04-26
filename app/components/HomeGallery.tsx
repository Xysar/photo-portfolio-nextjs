"use client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../sanity/urlForImage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomeGallery = ({ homeSeries }: { homeSeries: any }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 m-auto justify-center max-w-[80%] md:max-w-[1500px]">
      <div className=" ">
        <Image
          alt="wow"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          priority
          sizes="(max-width: 768px) 50vw, 20vw"
          width={500}
          height={500}
          src={urlForImage(homeSeries[0]).width(700).height(700).url()}
        />
      </div>
      <div className="">
        <Image
          alt="wow"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="1000"
          priority
          width={500}
          height={500}
          src={urlForImage(homeSeries[1]).width(500).height(500).url()}
        />
      </div>
      <div className="">
        <Image
          alt="wow"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
          data-aos-duration="1200"
          priority
          width={500}
          height={500}
          src={urlForImage(homeSeries[2]).width(500).height(500).url()}
        />
      </div>
      <div className="">
        <Image
          alt="wow"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          data-aos-duration="1000"
          priority
          width={500}
          height={500}
          src={urlForImage(homeSeries[3]).width(500).height(500).url()}
        />
      </div>
    </div>
  );
};

export default HomeGallery;
