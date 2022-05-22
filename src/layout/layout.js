import React, { useEffect, useLayoutEffect } from "react";
import { Cursor } from "../animations/cusor";
import { preloader } from "../animations/preloader";
import Preloader from "../sections/preloader";

function Layout({ children }) {
  useEffect(()=>{
    Cursor();
  }, [])
  useLayoutEffect(() => {
    preloader()
  }, []);
  return (
    <>
      <Preloader />
      <div className="normal-cursor top-0 left-0"/>
      <div className="px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:pl-[120px] xl:pr-[250px]">
        {children}
      </div>
    </>
  );
}

export default Layout;
