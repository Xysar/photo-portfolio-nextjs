"use client";
import React, { useEffect } from "react";

const Layout = ({ currentCollection }: any) => {
  useEffect(() => {
    console.log(currentCollection);
  }, []);

  return <div>Layout</div>;
};

export default Layout;
