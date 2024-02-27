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
  const mobileRef: any = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: any) => {
    console.log(e);
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
    <div className="hidden sm:flex">
      <div className="flex fixed justify-center items-center top-10 w-full h-full bg-slate-950 bg-opacity-50 z-20">
        <div className="">
          <div className="hidden sm:flex w-screen justify-evenly items-center gap-10 ">
            {/* <button
              className="w-16 h-16  text-slate-100  "
              onClick={() => decreaseIndex()}
            >
              <p className="text-4xl  font-bold">{"<"}</p>
            </button> */}
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
            {/* <button
              id="right"
              className="w-16 h-16 text-slate-100 "
              onClick={(e) => {
                increaseIndex();
              }}
            >
              <p className="text-4xl font-bold"> {">"}</p>
            </button> */}
          </div>
          {/* <div className="sm:hidden flex ">
            <div className="">
              <Image
                src={series[chosenImage].photo}
                height="700"
                width="700"
                alt="test image"
                className="object-contain "
                onClick={(e) => handleClick(e)}
              />
              <p className="text-lg text-center text-white">
                {series[chosenImage].caption}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  ) : null;
};

export default Gallery;
