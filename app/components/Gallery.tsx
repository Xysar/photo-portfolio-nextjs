import React, { useEffect, useRef } from "react";
import Image from "next/image";
const Gallery = ({
  series,
  chosenImage,
  openGallery,
  setOpenGallery,
  setChosenImage,
}: {
  series: any[];
  chosenImage: number;
  openGallery: boolean;
  setOpenGallery: any;
  setChosenImage: any;
}) => {
  const newRef: any = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setOpenGallery(false);
    }
  };

  return openGallery ? (
    <div className="hidden sm:flex">
      <div className="flex fixed justify-center items-center top-10 w-full h-full bg-slate-950 bg-opacity-50 z-20">
        <div className="">
          <div className="hidden sm:flex w-screen justify-evenly items-center gap-10 ">
            <div className=" w-[800px]  " ref={newRef}>
              <Image
                src={series[chosenImage].photo}
                height="1000"
                width="1000"
                alt="test image"
                className="  max-h-screen object-contain "
              />
              <p className="text-lg text-center text-white">
                {series[chosenImage].caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Gallery;
