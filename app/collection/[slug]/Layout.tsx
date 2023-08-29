"use client";
import React, { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MasonryLayout from "@/app/components/MasonryLayout";
import Gallery from "@/app/components/Gallery";
import { urlForImage } from "@/app/sanity/urlForImage";
import { getClient } from "@/app/sanity/client";

const Layout = ({
  currentSeries,
  personalOptions,
  commissionedOptions,
  folkloricoOptions,
}: {
  currentSeries: any;
  personalOptions: string[];
  commissionedOptions: string[];
  folkloricoOptions: string[];
}) => {
  const [chosenImage, setChosenImage] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);

  const seriesPics = currentSeries.photos?.map((image: any) => {
    return urlForImage(image).url();
  });

  return (
    <div>
      <div className="h-[120px]"></div>
      <Gallery
        series={seriesPics}
        chosenImage={chosenImage}
        setChosenImage={setChosenImage}
        openGallery={openGallery}
        setOpenGallery={setOpenGallery}
      />
      <section className="m-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row px-4 justify-center gap-20 mb-20">
          <h3 className="w-[100px] flex-1 basis-2/3 leading-[75px] md:leading-[150px] text-[75px] md:text-[150px] font-bold">
            {currentSeries?.title}
          </h3>
          <p className=" flex-1 basis-1/3 text-lg leading-10">
            {currentSeries?.description}
          </p>
        </div>

        <div className="max-w-[1400px] px-4 pb-8">
          <MasonryLayout
            series={seriesPics}
            openGallery={openGallery}
            setOpenGallery={setOpenGallery}
            setChosenImage={setChosenImage}
          />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
