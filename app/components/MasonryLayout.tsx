"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import React from "react";
import Image from "next/image";

const MasonryLayout = ({
  series,
  openGallery,
  setOpenGallery,
  setChosenImage,
}: any) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {series?.map((image: any, index: number) => (
          <div
            key={index}
            className=""
            onClick={() => {
              setOpenGallery((prev: any) => !prev);
              setChosenImage(index);
            }}
          >
            <Image
              width={300}
              height={300}
              alt="image from collection"
              className="w-full"
              src={image}
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
