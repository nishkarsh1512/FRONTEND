import Image from "next/image";
import React from "react";

type Props = {};

const GrseLogo = (props: Props) => {
  return (
    <div className="flex items-center cursor-pointer">
      <img
        src="./grse-logo.png"
        alt="iit logo"
        className="landing-bg w-14 h-14 rounded-full shadow-logCard"
      />
      {/* <p
        className={`font-semibold ml-2 text-2xl text-black`}
      >
        Eye<span className="text-lightBlue2 text">Vib</span>
      </p> */}
      {/* <img
        src="./grse-logo.png"
        alt="iit logo"
        className="p-2.5 w-24 relative bottom-4 right-10"
      /> */}
    </div>
  );
};

export default GrseLogo;
