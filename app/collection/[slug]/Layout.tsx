"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "@/app/sanity/urlForImage";

const Layout = ({ currentCollection }: any) => {
  useEffect(() => {
    console.log(currentCollection);
  }, []);

  return (
    <div>
      <div className="h-[95px]"></div>
      <Image
        src={currentCollection.thumbnail}
        alt="series thumnail image"
        width={300}
        height={200}
      />
      <p className="">{currentCollection.title}</p>
      <div className="bg-red">
        {currentCollection.series.map((singleSeries: any, index: any) => (
          <div className="" key={index}>
            <Image src={singleSeries.thumbnail} alt="series thumnail" />
            <h2 className="">wow</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
