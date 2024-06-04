"use client";
import React, { useEffect, useState } from "react";

import Footer from "@/app/components/Footer";
import MasonryLayout from "@/app/components/MasonryLayout";
import Gallery from "@/app/components/Gallery";
import { urlForImage } from "@/app/sanity/urlForImage";
import AOS from "aos";
import Image from "next/image";

const Layout = ({ currentSeries }: { currentSeries: any }) => {
  const [chosenImage, setChosenImage] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const seriesPics = currentSeries?.photos
    ?.filter((image: any) => image.asset)
    .map((image: any) => {
      let id = image.asset._ref;
      const dimensions = id.split("-")[2];

      const [width, height] = dimensions
        .split("x")
        .map((num: string) => parseInt(num, 10));
      const aspectRatio = width / height;

      return {
        photo: image,
        aspectRatio: aspectRatio,
        caption: image.caption,
      };
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
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />
      <section className="">
        <div className=" mb-10 relative  ">
          <div className="w-screen relative sm:absolute top-0 aspect-video max-h-screen">
            <Image
              src="/tamarindo-hero.jpg"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              fill={true}
              priority
              alt="background image"
              className="z-0 object-cover"
            />
          </div>{" "}
          <div
            className=" relative flex flex-col sm:items-center sm:w-[50%] px-8 py-8  z-10 lg:min-h-screen"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <div className="">
              <h3 className=" leading-[75px]  sm:leading-[80px] text-3xl sm:text-6xl font-bold mb-8">
                {currentSeries?.title}
              </h3>
              {currentSeries?.description && (
                <p className="  text-md leading-8 mb-8">
                  {currentSeries?.description}
                </p>
              )}
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
              {currentSeries.camera && (
                <p className="leading-6 text-lg mb-4">
                  <span className="font-bold">
                    Camera <br />
                  </span>{" "}
                  {currentSeries?.camera}{" "}
                </p>
              )}
              {currentSeries.date && (
                <p className="text-lg leading-6 font-bold">
                  {convertDate(currentSeries?.date)}
                </p>
              )}
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
