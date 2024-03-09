import React from "react";
import Navbar from "@/app/components/Navbar";

export const revalidate = 60;

import { getClient } from "@/app/sanity/client";
import Layout from "./Layout";

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentSeries = await getClient().fetch(
    `*[_type == "series" && slug.current=="${params.slug}"][0]`
  );

  return (
    <div>
      <Layout currentSeries={currentSeries} />
    </div>
  );
};

export default Page;
