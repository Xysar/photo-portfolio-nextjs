import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MasonryLayout from "@/app/components/MasonryLayout";

import { urlForImage } from "@/app/sanity/urlForImage";
import { getClient } from "@/app/sanity/client";
import Layout from "./Layout";

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentSeries = await getClient().fetch(
    `*[_type == "series" && slug.current=="${params.slug}"][0]`
  );
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
      <Layout
        currentSeries={currentSeries}
        personalOptions={personalSeries}
        commissionedOptions={commissionedSeries}
        folkloricoOptions={folkloricoSeries}
      />
    </div>
  );
};

export default Page;
