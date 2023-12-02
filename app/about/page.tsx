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
        <div className="h-[95px]"></div>
        <div className=" my-24 mx-auto flex justify-center  bg-red-300 ">
          <div className="w-1/2">
            <img
              src="#"
              alt="profile picture"
              className="h-[600px] w-[600px] ml-auto bg-gray-200 "
            />
          </div>
          <div className="w-1/2 pl-24">
            <h1 className="  text-[125px] tracking-wider font-medium mt-8 mb-12 whitespace-nowrap -ml-[250px]">
              ABOUT ME
            </h1>
            <p className="  text-base mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              ullamcorper risus. Donec gravida magna quis lorem convallis, nec
              condimentum purus pellentesque. Etiam tempor sapien mauris, sit
              amet congue ante pulvinar nec. Nulla fermentum facilisis ipsum.
              Integer ac dui tristique, placerat orci sed, commodo nulla. Donec
              fermentum, magna quis tristique rutrum, velit neque tincidunt
              ligula, non luctus urna nunc in ipsum. Duis molestie justo lacus,
              vitae mollis ipsum luctus eget. Integer id commodo tortor, eget
              sollicitudin arcu. Morbi suscipit euismod lectus, ornare faucibus
              nulla. Pellentesque egestas erat vitae ante mattis sodales. Ut dui
              ligula, egestas eget ante quis, vestibulum interdum nulla. Aliquam
              ultrices sagittis condimentum. Nullam sodales justo et nisi
              lacinia porttitor. Pellentesque blandit, turpis quis feugiat
              aliquam, nulla lorem viverra magna, non congue dui eros id leo.
              Phasellus non tincidunt dui, a egestas risus. Nulla tortor nisi,
              malesuada non urna nec, eleifend lacinia augue. <br /> <br />
              Vivamus convallis venenatis enim volutpat suscipit. Nulla cursus,
              mauris ut viverra accumsan, nisl est ullamcorper lectus, quis
              volutpat mauris turpis in neque. In leo urna, laoreet non lectus
              sed, blandit consequat orci. Fusce lobortis placerat felis sed
              facilisis. Nam cursus, lorem sed molestie viverra, turpis orci
              maximus tellus, in efficitur dolor odio ut eros. Etiam ac dictum
              dui. Sed imperdiet ipsum eu semper suscipit.
            </p>
            <div className="w-[80px] h-[18px] bg-black float-right mx-12 "></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
