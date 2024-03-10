"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "../sanity/urlForImage";
const MasonryLayout = ({
  series,
  openGallery,
  setOpenGallery,
  setChosenImage,
}: any) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 640: 2, 768: 3 }}>
      <Masonry gutter="10px">
        {series?.slice(0, 10).map((image: any, index: number) => (
          <div
            key={index}
            className="relative "
            onClick={() => {
              setOpenGallery((prev: any) => !prev);
              setChosenImage(index);
            }}
          >
            <Image
              width={700}
              height={700 / image.aspectRatio}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="500"
              alt="image from collection"
              className=""
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={urlForImage(image.photo).width(500).fit("fill").url()}
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
