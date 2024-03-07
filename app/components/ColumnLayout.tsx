"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Image from "next/image";
import { getClient } from "../sanity/client";
import { urlForImage } from "../sanity/urlForImage";
const ColumnLayout = ({ series, setOpenGallery, setChosenImage }: any) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  return (
    <div className="columns-1 gap-8 space-y-5 sm:columns-2 md:columns-3">
      {series?.slice(0, 10).map((image: any, index: number) => {
        return (
          <div
            key={index}
            className="relative "
            onClick={() => {
              setOpenGallery((prev: any) => !prev);
              setChosenImage(index);
            }}
          >
            <Image
              width={500}
              height={500 / image.aspectRatio}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
              alt="image from collection"
              className=""
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={urlForImage(image.photo).width(700).url()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColumnLayout;
