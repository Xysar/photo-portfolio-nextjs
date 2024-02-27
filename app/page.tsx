import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// export const revalidate = 60;
// export const dynamic = "force-dynamic";
import { getClient } from "./sanity/client";
import { urlForImage } from "./sanity/urlForImage";

async function getNavSeries() {}

export default async function Home() {
  const homeSeries = await getClient().fetch(
    `*[_type == "series" && slug.current=="home"][0]`
  );

  return (
    <div className=" ">
      <div className="max-w-[1500px] flex flex-col justify-end m-auto   min-h-screen ">
        <div className="h-32"></div>
        <div className="m-auto px-4 pb-8 flex justify-center items-center">
          <div className="flex gap-2 flex-wrap md:flex-nowrap justify-center">
            {homeSeries.photos?.slice(0, 4).map((single: any, index: any) => (
              <div key={index} className="">
                <Image
                  alt="wow"
                  width={500}
                  height={500}
                  src={urlForImage(single).width(500).height(500).url()}
                />
              </div>
            ))}
          </div>

          <div className=""></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
