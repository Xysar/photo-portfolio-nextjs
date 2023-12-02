import React from "react";
import Navbar from "@/app/components/Navbar";

import { getClient } from "@/app/sanity/client";
const page = async () => {
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
    <div>
      <Navbar
        personalOptions={personalSeries}
        commissionedOptions={commissionedSeries}
        folkloricoOptions={folkloricoSeries}
      />
      <section className="max-w-[1400px] m-auto">
        <div className="h-[95px] "></div>
        <div className="max-w-[1200px] my-24  mx-auto flex-col lg:flex-row flex  justify-center   ">
          <div className="   md:w-1/2 m-auto flex-shrink-0 ">
            <img
              src="#"
              alt="profile picture"
              className=" h-[750px] w-[550px] ml-auto  bg-gray-200 "
            />
          </div>
          <div className="  ">
            <h1 className="  text-[125px] tracking-wider font-medium mt-8 mb-12 whitespace-nowrap lg:-ml-[175px]">
              ABOUT ME
            </h1>
            <div className="px-24">
              <p className="  text-base mb-12 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et ullamcorper risus. Donec gravida magna quis lorem convallis,
                nec condimentum purus pellentesque. Etiam tempor sapien mauris,
                sit amet congue ante pulvinar nec. Nulla fermentum facilisis
                ipsum.
                <br /> <br />
                Vivamus convallis venenatis enim volutpat suscipit. Nulla
                cursus, mauris ut viverra accumsan, nisl est ullamcorper lectus,
                quis volutpat mauris turpis in neque. In leo urna, laoreet non
                lectus sed, blandit consequat orci. Fusce lobortis placerat
                felis sed facilisis.
              </p>
              <div className="w-[80px] h-[18px] bg-black float-right  "></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
