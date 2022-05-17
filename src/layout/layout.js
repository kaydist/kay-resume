import React, {useEffect} from "react";
import { Cursor } from "../animations/cusor";

function Layout({ children }) {
  useEffect(() => {
    Cursor();
  }, []);
  return (
    <>
      <div className="normal-cursor">View</div>
      <div className="px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[120px]">
        {children}
      </div>
      ;
    </>
  );
}

export default Layout;
