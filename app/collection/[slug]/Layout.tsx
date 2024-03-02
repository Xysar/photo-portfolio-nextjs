"use client";
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
            <h1 className="">{singleSeries.title}</h1>
            <h2 className="">wow</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
