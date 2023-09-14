import React, { useState } from "react";
import { Divider } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import { slidelinks, slideItems } from "../../assets/links/index";

type SlideProps = { label: string; detail: string; image: string };

const Slide = ({ label, detail, image }: SlideProps) => (
  <div className="bg-needsBgGray flex flex-col items-center justify-center leading-8 tracking-wider xl:px-20 lg:px-10 px-3 lg:col-span-2 col-span-3 lg:py-0 py-5">
    <h1 className="xl:text-3xl lg:text-2xl text-center text-xl font-semibold">
      {label}
    </h1>
    <p className="my-3 text-center text-gray-400 font-medium">{detail}</p>
    <img src={"images/" + image} alt="metal" className="rounded shadow" />
  </div>
);

const Needs = () => {
  const [slide, setSlide] = useState("metal");
  return (
    <div className="lg:px-4 w-full h-full relative xl:bottom-32 -bottom-10 max-w-1550px mx-auto" id="needs">
      <div className="flex items-center content-center flex-col xl:py-28 lg:py-20 p-10 landing-bg xl:rounded shadow lg:h-96 h-80 overflow-visible">
        <p className="mb-3 md:text-4xl text-3xl text-white lg:font-semibold font-medium text-center relative lg:bottom-7 bottom-0">
          Customised to your Industry Needs
        </p>
      </div>
      <div className="grid grid-cols-3 rounded mt-5 overflow-hidden shadow mx-auto relative bottom-52 md:w-11/12 w-full">
        <div className="bg-black lg:col-span-1 col-span-3 py-12 px-14">
          <p className="text-white xl:text-4xl lg:text-3xl font-semibold leading-8 tracking-wider">
            Industries
          </p>
          <Divider className="my-4" size="xs" />
          <div className="flex flex-col items-start">
            {slidelinks.map((link) => (
              <button
                className={`font-medium xl:text-xl lg:text-lg leading-8 tracking-wider my-1 flex items-center justify-between w-full hover:bg-white hover:bg-opacity-20 p-2 rounded transition-all ${
                  slide === link.value && "bg-nav2Hover"
                }`}
                style={
                  slide === link.value ? { border: "1px solid white" } : {}
                }
                key={link.label}
                onClick={() => {
                  setSlide(link.value);
                }}
              >
                <span className="text-white">{link.label}</span>
                {slide === link.value && (
                  <BsArrowRight color="white" size={25} />
                )}
              </button>
            ))}
          </div>
        </div>
         {/* @ts-ignore */}
        <Slide {...slideItems[slide]} />
      </div>
    </div>
  );
};

export default Needs;
