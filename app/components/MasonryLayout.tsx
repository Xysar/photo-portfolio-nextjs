"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Image from "next/image";

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
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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
              width="500"
              height="500"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
              alt="image from collection"
              className=""
              src={image.photo}
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
