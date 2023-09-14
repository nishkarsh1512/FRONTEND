import React from "react"
import { footerLinks } from "../../assets/links/"

const Footer1 = () => {
  return (
    <footer
      className="w-full h-full relative flex flex-col items-center bottom-24 bg-black"
      id="footer"
      style={{ maxHeight: "100px" }}
    >
      <div className="flex items-center gap-3 py-10 bg-black w-full h-full justify-center">
        <span className="sm600:text-3xl text-2xl tracking-wide font_exo2 font-extrabold gradient-text-logo relative bottom-1 text-white">
          Eye<span className="text-lightBlue">Vib</span>
        </span>
      </div>
      {/* <div className="flex sm600:gap-7 gap-5 items-center bg-black w-full h-full justify-center">
        {[
          { label: "Home", link: "navbar", type: "id" },
          { label: "About", link: "earn", type: "id" },
          { label: "Team", link: "team", type: "id" },
          { label: "Contact", link: "contact", type: "id" },
          { label: "More", link: "more", type: "id" },
        ].map((item) =>
          item.type === "link" ? (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white font_sfpro tracking-widest font-bold sm600:text-lg text-xs cursor-pointer transition-all duration-500"
            >
              {item.label}
            </a>
          ) : (
            <button
              className="text-gray-400 hover:text-white font_sfpro tracking-widest font-bold sm600:text-lg text-xs cursor-pointer transition-all duration-500"
              key={item.label}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault()
              }}
            >
              {item.label}
            </button>
          )
        )}
      </div> */}
      <div className="flex sm600:gap-10 gap-6 items-center justify-center w-full bg-black p-10">
        {footerLinks.map((item: any) => (
          <span
            onClick={() => window.open(item.link, "_blank")}
            className="rounded-full p-2.5 sm600:text-xl text-lg border-gray-400 hover:border-white border-2 text-gray-400 hover:text-white sm600:hover:scale-110 transition-all duration-500 cursor-pointer"
            key={item.label}
          >
            <item.Icon />
          </span>
        ))}
      </div>
      <div className="flex gap-2 items-center bg-black sm600:py-10 py-7 w-full h-full relative justify-center">
        <div
          className="w-full bg-white bg-opacity-10 absolute top-0"
          style={{ height: "1px" }}
        />
        <span className="text-gray-400 font_sfpro tracking-widest font-bold sm600:text-lg text-xs">
          {/* @2022 KonnektrHQ | All rights reserved */}
          Copyright <span className="text-lg">©</span> EveVib 2023
        </span>
      </div>
    </footer>
  )
}

export default Footer1
