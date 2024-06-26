import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Suspense } from "react";
import { urlForImage } from "../sanity/urlForImage";
import { Oval } from "react-loader-spinner";
const Gallery = ({
  series,
  chosenImage,
  openGallery,
  setOpenGallery,
}: {
  series: any[];
  chosenImage: number;
  openGallery: boolean;
  setOpenGallery: any;
}) => {
  const newRef: any = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setOpenGallery(false);
      setLoading(true);
    }
  };
  const fetchImageByAspectRatio = () => {
    if (series[chosenImage].aspectRatio > 1) {
      return urlForImage(series[chosenImage].photo)
        .width(1000)
        .dpr(2)
        .fit("fill")
        .url();
    } else {
      return urlForImage(series[chosenImage].photo)
        .height(1000)
        .dpr(2)
        .fit("fillmax")
        .url();
    }
  };

  return openGallery ? (
    <div className="hidden sm:flex">
      <div className="flex fixed justify-center items-center top-12 w-full h-full bg-slate-950 bg-opacity-50 z-20">
        {loading && (
          <div className="absolute">
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#eeeeee"
              secondaryColor="#eeeeee"
            />
          </div>
        )}
        <div className="flex w-screen justify-evenly items-center gap-10 ">
          <div className=" max-w-[80vw]  " ref={newRef}>
            <Image
              src={fetchImageByAspectRatio()}
              height={1000}
              width={1000}
              onLoad={() => {
                setLoading(false);
              }}
              alt="selected image blown up to greater size"
              className="max-h-[75vh] w-auto object-contain"
            />
            <p className="text-lg text-center text-white">
              {series[chosenImage].caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Gallery;
