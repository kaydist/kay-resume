import React from "react";

function Layout({ children }) {
  return <div className="px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[120px]">{children}</div>;
}

export default Layout;
