import React from "react";
import { Divider } from "@mantine/core";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

// import "./Footer.scss";
// import { EyeVibLogo } from "../../Components/Logos/EyevibLogo";

type FooterBlockProps = {header: string, footerLinks: any}

const FooterBlock = ({ header, footerLinks }: FooterBlockProps) => (
  <div className="relative top-2 flex flex-col text-gray-400 font-medium lg:col-span-1 md:col-span-2 col-span-4 md:items-start items-center">
    <h1 className="text-footerLink text-2xl font-bold leading-8 tracking-wide">
      {header}
    </h1>
    <div className="flex flex-col md:mt-7 mt-3">
      {footerLinks.map((item : any, index : string) => (
        <div key={index}>
          {item.Icon ? (
            <div className="flex items-center">
              <span className="p-1.5 bg-white rounded-full shadow">
                <item.Icon color="black" />
              </span>
              <a href={item.link} className="my-2 ml-2">
                {item.label}
              </a>
            </div>
          ) : (
            <a href={item.link} className="my-1.5">
              {item.label}
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

const footerLinks = {
  about: [
    { link: "/solutions", label: "Solutions", Icon: null },
    { link: "/resources", label: "Resources", Icon: null },
    { link: "/careers", label: "Careers", icon: null },
  ],
  quickMenu: [
    { link: "/games", label: "Games", Icon: null },
    { link: "/company", label: "Company", Icon: null },
    { link: "/partners", label: "Partner", Icon: null },
  ],
  contact: [
    { link: "/phone", label: "Asia: +91 75681 21121", Icon: BiPhoneCall },
    {
      link: "/phone",
      label: "North America: +1 780-680-2693",
      Icon: BiPhoneCall,
    },
    {
      link: "/mail",
      label: "solutions@nanoprecisesc.com",
      Icon: HiOutlineMail,
    },
  ],
};

const Footer = () => {
  return (
    <footer
      className="lg:px-4 w-full h-full relative flex flex-col items-center bottom-24"
      id="footer"
      style={{maxHeight: "100px"}}
    >
      <div
        className="hidden grid-cols-2 md2:h-64 md:py-16 py-10 md2:py-0 lg:px-24 md2:px-10 landing-bg rounded shadow justify-between absolute -top-36"
        style={{ width: "90%" }}
      >
        <div className="flex md2:flex-col md:flex-row flex-col md:items-start items-center justify-center md2:col-span-1 col-span-2 mx-auto">
          <p className="mb-3 lg4:text-4xl md2:text-3xl text-xl text-white font-semibold mr-2">
            See our solution live.
          </p>
          <p className="mb-3 lg4:text-4xl md2:text-3xl text-xl text-white font-semibold">
            Book a 30 minutes demo now.
          </p>
        </div>
        <div className="flex items-center justify-center md2:col-span-1 col-span-2">
          <button className="py-3 px-4 bg-black rounded text-white font-semibold shadow">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
      <div className="bg-black rounded py-20 pb-8 md:px-16 px-5">
        <div className="grid grid-cols-4 xl:gap-5 lg:gap-0 md:gap-20 gap-10">
          <div className="lg:pr-6 lg:col-span-1 md:col-span-2 col-span-4">
            <div className="w-full">
              {/* <EyeVibLogo mode="dark" /> */}
            </div>
            <p className="text-gray-400 font-medium mt-4 leading-8 tracking-wider">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <FooterBlock header="About" footerLinks={footerLinks.about} />
          <FooterBlock
            header="Quick Menu"
            footerLinks={footerLinks.quickMenu}
          />
          <FooterBlock header="Contact" footerLinks={footerLinks.contact} />
        </div>
        <Divider className="mt-5" />
        <p className="text-gray-400 font-medium sm2:text-lg pt-4 text-center">
          © EyeVib 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
