import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar personalOptions={[]} commissionedOptions={[]} />

      <div className="max-w-[1500px] flex flex-col justify-end m-auto h-screen min-h-[700px]">
        <div className="h-16"></div>
        <div className="m-auto px-4 flex justify-center items-center">
          {<div className="flex gap-2"></div>}
          <div className=""></div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
