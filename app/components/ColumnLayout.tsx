"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Image from "next/image";

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
    <div className="columns-3">
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
            width="500"
            height="500"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
            alt="image from collection"
            className="w-full h-full"
            src={image.photo}
          />
        </div>
      ))}
    </div>
  );
};

export default ColumnLayout;
