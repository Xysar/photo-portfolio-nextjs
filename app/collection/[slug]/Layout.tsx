"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { urlForImage } from "@/app/sanity/urlForImage";
import Link from "next/link";

const Layout = ({ currentCollection }: any) => {
  return (
    <section className=" ">
      <div className="h-[95px]"></div>
      <p className="  text-center m-8 text-3xl font-bold">
        {currentCollection.title}
      </p>
      <div className="flex flex-wrap justify-center m-auto gap-3 max-w-[80%] md:max-w-[1500px]">
        {currentCollection.series.map(
          (series: any, index: number) =>
            series.thumbnail && (
              <Link
                href={`/series/${series.slug.current}`}
                replace
                key={index}
                className="  "
              >
                <div className="">
                  <Image
                    className="w-[300px] h-[200px] hover:shadow-lg shadow ease-in-out duration-200"
                    src={urlForImage(series.thumbnail)
                      .width(450)
                      .height(300)
                      .url()}
                    alt="series thumnail image"
                    width={300}
                    height={200}
                  />
                  <h2 className=" text-center font-semibold">{series.title}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </section>
  );
};

export default Layout;
