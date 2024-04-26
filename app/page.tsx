import Image from "next/image";
import Footer from "./components/Footer";
export const revalidate = 60;

import { getClient } from "./sanity/client";
import HomeGallery from "./components/HomeGallery";
import { urlForImage } from "./sanity/urlForImage";

const getHomePageImages = async () => {
  const homePage = await getClient().fetch(`*[_type=="homePage"][0]`);
  const homePageImages = homePage.images;
  return homePageImages;
};

export default async function Home() {
  const homeSeries = await getHomePageImages();

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
