import React, {useEffect} from "react";
import { Cursor } from "../animations/cusor";

function Layout({ children }) {
  useEffect(() => {
    Cursor();
  }, []);
  return (
    <>
      <div className="normal-cursor z-20">View</div>
      <div className="px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:pl-[120px] xl:pr-[250px]">
        {children}
      </div>
      ;
    </>
  );
}

export default Layout;
