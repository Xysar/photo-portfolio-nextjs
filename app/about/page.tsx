import React from "react";

import Image from "next/image";
import { urlForImage } from "../sanity/urlForImage";
import { PortableText } from "@portabletext/react";
export const revalidate = 60;
import { getClient } from "@/app/sanity/client";
import Footer from "../components/Footer";

const getAboutInfo = async () => {
  const aboutInfo = await getClient().fetch(`*[_type=="siteSettings"][0]`);
  return aboutInfo;
};

const page = async () => {
  const aboutInfo = await getAboutInfo();

  return (
    <section className="max-w-[1400px] m-auto">
      <div className="h-[95px] "></div>
      <div className="max-w-[1200px] my-24  mx-auto flex-col lg:flex-row flex  justify-center   ">
        <div className="   md:w-1/2 m-auto flex-shrink-0 ">
          <Image
            width={500}
            height={700}
            priority
            sizes="50vw (max-width:768px),100vw"
            src={urlForImage(aboutInfo.profilePicture).fit("crop").url()}
            alt="profile picture"
            className=" h-[750px] w-[550px] ml-auto  bg-gray-200 "
          />
        </div>
        <div className="  ">
          <h1 className="  text-[125px]  text-zinc-400 tracking-wider font-medium mt-8 mb-12 whitespace-nowrap lg:-ml-[175px]">
            {aboutInfo.header}
          </h1>
          <div className="px-24">
            <PortableText value={aboutInfo.description} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
