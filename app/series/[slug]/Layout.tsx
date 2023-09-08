"use client";
import React, { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MasonryLayout from "@/app/components/MasonryLayout";
import Gallery from "@/app/components/Gallery";
import { urlForImage } from "@/app/sanity/urlForImage";
import { getClient } from "@/app/sanity/client";
import Image from "next/image";

const Layout = ({ currentSeries }: { currentSeries: any }) => {
  const [chosenImage, setChosenImage] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);

  useEffect(() => {
    console.log(currentSeries);
  }, []);
  const seriesPics = currentSeries?.photos?.map((image: any) => {
    return urlForImage(image).width(700).url();
  });

  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div>
      <div className="h-[95px]"></div>
      <Gallery
        series={seriesPics}
        chosenImage={chosenImage}
        setChosenImage={setChosenImage}
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />
      <section className="max-w-[1400px] m-auto">
        <div className=" mb-10 relative   ">
          <div className=" relative flex flex-col sm:flex-row  gap-20 px-8 py-8  z-10 ">
            <div className="flex-1 ">
              <h3 className=" leading-[75px]  sm:leading-[80px] text-3xl sm:text-6xl font-bold mb-8">
                {currentSeries?.title}
              </h3>
              <p className="  text-md leading-8 mb-8">
                {currentSeries?.description}
              </p>
            </div>
            <div className="flex-1">
              <div>
                {currentSeries?.credits?.map((credit: any, index: number) => {
                  return (
                    <p key={index} className="text-lg leading-8 mb-4">
                      <span className="font-bold ">
                        {credit.name} <br />
                      </span>
                      {credit.people.map((person: any, key: number) => {
                        if (key + 1 === credit.people.length) {
                          return <span key={key}>{person}</span>;
                        } else {
                          return <span key={key}>{person}, </span>;
                        }
                      })}
                      {currentSeries.credits.length !== index + 1 && <br />}
                    </p>
                  );
                })}
              </div>
              <p className="text-lg leading-6 mb-4">
                <span className="font-bold">
                  Date <br />
                </span>
                {convertDate(currentSeries?.date)}
              </p>
              <p className="leading-6 text-lg">
                <span className="font-bold">
                  Camera <br />
                </span>{" "}
                {currentSeries?.camera}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="m-auto max-w-[1400px]">
        <div className="max-w-[1400px] px-4 pb-8">
          <MasonryLayout
            series={seriesPics}
            setChosenImage={setChosenImage}
            setOpenGallery={setOpenGallery}
          />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
