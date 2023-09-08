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
  const increaseIndex = () => {
    if (chosenImage == series.length - 1) {
      return setChosenImage(0);
    } else return setChosenImage(chosenImage + 1);
  };
  const decreaseIndex = () => {
    if (chosenImage == 0) {
      return setChosenImage(series.length - 1);
    } else return setChosenImage(chosenImage - 1);
  };

  return openGallery ? (
    <div className="fixed flex justify-center items-center top-10 w-full h-full bg-slate-950 bg-opacity-50 z-20">
      {/* <button
        className="w-16 h-16 absolute top-16 right-8"
        onClick={() => isImageOpen.set(false)}
      >
        <p className=" text-4xl  font-bold">X</p>
      </button> */}
      <div className="flex items-center gap-10 max-w-screen" ref={newRef}>
        <button
          className="w-16 h-16 text-slate-100  "
          onClick={() => decreaseIndex()}
        >
          <p className="text-4xl  font-bold">{"<"}</p>
        </button>
        <div className="">
          <Image
            src={series[chosenImage]}
            height="700"
            width="700"
            alt="test image"
            className="h-[700px] w-[700px]  object-contain "
          />
          <p className="text-lg text-center text-white">Caption goes here</p>
        </div>
        <button
          className="w-16 h-16 text-slate-100 "
          onClick={() => increaseIndex()}
        >
          <p className="text-4xl font-bold"> {">"}</p>
        </button>
      </div>
    </div>
  ) : null;
};

export default Gallery;
