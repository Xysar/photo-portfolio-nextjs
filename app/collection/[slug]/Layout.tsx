"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Layout = ({ currentCollection }: any) => {
  useEffect(() => {
    console.log(currentCollection);
  }, []);

  return (
    <div>
      <div className="h-[95px]"></div>
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
