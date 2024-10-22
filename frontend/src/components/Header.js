import React from "react";
import Banner from "../images/final banner.jpg";

const Header = () => {
  return (
    <div className="mt-[97px] md:h-[160px] lg:h-[215px] xl:h-[245px] z-0 relative ">
      <img src={Banner} alt="Banner" className="rounded-lg" />
    </div>
  );
};

export default Header;
