import Image from "next/image";
import Footer from "./components/Footer";
export const revalidate = 360;

import { getClient } from "./sanity/client";
import HomeGallery from "./components/HomeGallery";
import { urlForImage } from "./sanity/urlForImage";

export default async function Home() {
  const homeSeries = await getClient().fetch(
    `*[_type == "series" && slug.current=="home"][0]`
  );

  return (
    <div className=" ">
      <div className="max-w-[1500px] flex flex-col  m-auto   min-h-screen ">
        <div className="h-32"></div>
        <div className="m-auto px-4 pb-8 flex justify-center items-center">
          <HomeGallery homeSeries={homeSeries} />
          <div className=""></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
