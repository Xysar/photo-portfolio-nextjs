import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MasonryLayout from "@/app/components/MasonryLayout";
export const revalidate = 60;
import Layout from "./Layout";
export const dynamic = "force-dynamic";

import { getClient } from "@/app/sanity/client";

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentCollection = await getClient().fetch(
    `*[_type == "collection" && slug.current=="${params.slug}"][0]`
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
      <Layout currentCollection={currentCollection} />
    </div>
  );
};

export default Page;
