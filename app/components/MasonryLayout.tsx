import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import React from "react";

const MasonryLayout = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
        <img src="" alt="" className="" />
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
