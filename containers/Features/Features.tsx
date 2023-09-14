import React from "react";
import { BiChip } from "react-icons/bi";
import { RiListSettingsLine, RiLogoutCircleLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";

type FeatureItemProps = { Icon: any; label: string; detail: string };

const FeatureItem = ({ Icon, label, detail }: FeatureItemProps) => (
  <div className="flex flex-col gap-6 items-center sm:lg:hover:bg-lightBlue2 sm:lg:hover:bg-opacity-20 px-3 lg1100:py-12 py-7 cursor-pointer lg:rounded-lg shadow-xl border relative bottom-0 sm:hover:bottom-5 transition-all duration-300">
    <span className="bg-lightBlue2 bg-opacity-20 p-3 rounded-full">
      <Icon color="#015FF3" size={40} />
    </span>
    <h1 className="xl:text-2xl text-lg font-bold">{label}</h1>
    <p className="xl:text-xl text-base lg1100:leading-8 leading-7 tracking-wider text-center text-gray-400 font-medium px-5">
      {detail}
    </p>
  </div>
);

const Features = () => {
  return (
    <div className="lg:px-4 w-full h-full relative xl:bottom-44" id="features">
      <div className="flex items-center flex-col xl:py-28 md1000:py-20 py-10 landing-bg xl:rounded shadow mb-16">
        <p className="mb-3 md:text-4xl text-3xl text-white font-semibold">
          Solution Overview
        </p>
        <p className="xl:w-1k-px xl:text-xl md:text-lg font-medium px-3 xl:px-0 md1000:leading-8 tracking-wider text-white text-center">
          Nanoprecise solutions strive to create 360 degree integrated systems
          that can predict the remaining useful life of any asset & empower
          users with right data across several industries. We implement cutting
          edge technology to bring to our clients accurate prognostic and
          diagnostic solutions that can predict the remaining useful life of any
          asset with up to 99% accuracy.
        </p>
      </div>
      <div className="flex flex-col md:gap-16 gap-10 items-center my-5">
        <p className="xl:text-4xl text-3xl font-medium text-center">
          Beyond Predictive Maintenance, Its Peace of Mind
        </p>
        <div className="grid lg1100:grid-cols-3 2xl:gap-10 gap-10 w-full lg:mt-5 2xl:px-20 px-5 lg1100:max-w-1550px max-w-md">
          <FeatureItem
            Icon={BiChip}
            label="Plug & Play Deployment"
            detail="Easy to install with a completely wireless deployment and a DIY app for configuration"
          />
          <FeatureItem
            Icon={RiListSettingsLine}
            label="Optimized Costs & Resources"
            detail="Spend your time actually doing maintenance while still increasing your visibility of potential issues"
          />
          <FeatureItem
            Icon={GoSettings}
            label="Plug & Play Deployment"
            detail="Easy to install with a completely wireless deployment and a DIY app for configuration"
          />
          <FeatureItem
            Icon={FaReact}
            label="End to End - Automated Solution"
            detail="Automation that goes beyond simple data collection for automated analysis that can also connect with other parts"
          />
          <FeatureItem
            Icon={AiOutlineCloudServer}
            label="Access Data Anytime, Anywhere"
            detail="Empowering Operators with User Friendly Data with Dedicated mobile applications & webportal"
          />
          <FeatureItem
            Icon={RiLogoutCircleLine}
            label="Scalable Across Platforms"
            detail="Be it rotating equipment or Transformers we have got it all covered with seamless networking"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
