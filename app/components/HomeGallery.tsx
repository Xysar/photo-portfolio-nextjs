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
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 m-auto justify-center max-w-[80%] md:max-w-[1500px]">
      {/* {homeSeries.photos?.slice(0, 4).map((single: any, index: any) => (
        <div key={index} className="">
          <Image
            alt="wow"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            width={500}
            height={500}
            src={urlForImage(single).width(500).height(500).url()}
          />
        </div>
      ))} */}
      <div className=" ">
        <Image
          alt="wow"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          priority
          width={500}
          height={500}
          src={urlForImage(homeSeries.photos[0]).width(500).height(500).url()}
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
          src={urlForImage(homeSeries.photos[1]).width(500).height(500).url()}
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
          src={urlForImage(homeSeries.photos[2]).width(500).height(500).url()}
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
          src={urlForImage(homeSeries.photos[3]).width(500).height(500).url()}
        />
      </div>
    </div>
  );
};

export default HomeGallery;
