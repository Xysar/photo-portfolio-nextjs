import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { getClient } from "./sanity/client";
import { urlForImage } from "./sanity/urlForImage";

async function getNavSeries() {}

async function getSeries() {
  const client = await getClient();
  const series = await client.fetch(`*[_type == "series"][1]`);
  return series;
}

export default async function Home() {
  const series = await getSeries();
  const commissionedSeries = await getClient().fetch(
    `*[_type == "series" && category=="commission"]{title,slug}`
  );
  const personalSeries = await getClient().fetch(
    `*[_type == "series" && category=="personal"]{title,slug}`
  );
  const folkloricoSeries = await getClient().fetch(
    `*[_type == "series" && category=="folklorico"]{title,slug}`
  );
  return (
    <div className="">
      <Navbar
        personalOptions={personalSeries}
        commissionedOptions={commissionedSeries}
        folkloricoOptions={folkloricoSeries}
      />

      <div className="max-w-[1500px] flex flex-col justify-end m-auto h-screen min-h-[700px]">
        <div className="h-16"></div>
        <div className="m-auto px-4 flex justify-center items-center">
          <div className="flex gap-2">
            {series.photos?.map((single: any, index: any) => (
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
