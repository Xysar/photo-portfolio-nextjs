import React from "react";

export const revalidate = 360;
import Layout from "./Layout";
export const dynamic = "force-dynamic";

import { getClient } from "@/app/sanity/client";

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentCollection = await getClient().fetch(
    `*[_type == "collection" && slug.current=="${params.slug}"][0]`
  );

  return (
    <div>
      <Layout currentCollection={currentCollection} />
    </div>
  );
};

export default Page;
