import React, { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import classNames from "classnames"
import Link from "next/link"
import { menuItems } from "../../../assets/links"
import { useAppStateContext } from "../../../context/contextProvider"
import { Divider } from "@mui/material"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import { NoSsr } from "@mui/base"
import useAuthStore from "../../../store/auth"
import { useContext } from "react"
import { AppContext } from "../../../components/Monitoring/AppContext"

export const Sidebar = () => {
  const router = useRouter()
  const [collapseIconActive, setCollapseIconActive] = useState(false)
  const { me } = useAuthStore()

  // @ts-ignore
  const [sidebarToggleCollapse, setSidebarToggleCollapse] = useState(true)
  const { myBoolean, setMyBoolean } = useContext(AppContext)
  const activeMenu: any = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  )

  const wrapperClasses = classNames(
    "h-screen pt-1 bg-sidebarDark1 max-h-screen flex justify-between flex-col transition-all duration-500 absolute z-20",
    {
      "w-[270px]": !sidebarToggleCollapse,
      "w-[83.75px]": sidebarToggleCollapse,
      absolute: false,
    }
  )

  const getNavItemClasses = (menu: {
    id: number
    label: string
    link: string
  }) => {
    return classNames(
      "flex items-center cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-500 rounded my-0.5 relative",
      {
        "bg-lightBlue bg-opacity-80 hover:bg-lightBlue hover:bg-opacity-80":
          activeMenu.id === menu.id,
        "hover:bg-lightBlue hover:bg-opacity-25": activeMenu.id !== menu.id,
      }
    )
  }

  const collapseIconClasses = classNames(
    "bg-black bg-opacity-20 absolute w-11 h-11 -right-5 top-[63.5px] rounded-full hover:scale-105 transition-all duration-300",
    {
      "rotate-180": sidebarToggleCollapse,
      "opacity-100": collapseIconActive,
      "opacity-0": !collapseIconActive,
    }
  )

  const getNavItemLinkClasses = (menu: {
    id: number
    label: string
    link: string
  }) =>
    classNames(
      "flex py-4 px-3 items-center h-full transition-all duration-500 text-white gap-3",
      {
        "w-60": !sidebarToggleCollapse,
        "w-12": sidebarToggleCollapse,
        "text-white text-opacity-40 hover:text-white hover:text-opacity-100":
          menu.link !== router.pathname,
      }
    )

  const getNavItemIndicatorCLasses = (menu: {
    id: number
    label: string
    link: string
  }) =>
    classNames(
      "absolute h-full bg-white bg-opacity-80 transition-all duration-500 w-1",
      {
        "opacity-100": menu.link === router.pathname && !sidebarToggleCollapse,
        "opacity-0": menu.link !== router.pathname || sidebarToggleCollapse,
      }
    )

  const impFunc = () => {
    console.log("clickkkkkkked")
    console.log("clickkkkkkkkkkked")
    console.log(myBoolean)
    setMyBoolean(true)
  }

  return (
    <div
      className={wrapperClasses}
      id="sidebar"
      onMouseEnter={() => setCollapseIconActive(true)}
      onMouseLeave={() => setCollapseIconActive(false)}
    >
      <div className="flex flex-col gap-6">
        <div
          className="flex items-center justify-between relative px-4"
          id="sidebar-header"
        >
          <div
            className={classNames(
              "flex items-center pl-1 gap-1.5 rounded-md py-2 pr-1 transition-all duration-500 overflow-hidden",
              {
                "w-[180px]": sidebarToggleCollapse,
                "w-52": !sidebarToggleCollapse,
              }
            )}
          >
            <img
              src="images/eyevib.png"
              alt="iit logo"
              className="h-10 object-contain rounded-full shadow-logCard ml-3"
            />
            <span
              className={classNames(
                "mt-2 ml-2 font-bold text-white pr-3 relative bottom-1.5 sm600:text-3xl text-2xl tracking-wide "
              )}
            >
              <span>Eye</span>
              <span className="text-lightBlue">Vib</span>
            </span>
          </div>

          <button
            className={collapseIconClasses}
            onClick={() => {
              setSidebarToggleCollapse(!sidebarToggleCollapse)
            }}
          >
            <KeyboardDoubleArrowLeftIcon className="text-white m-auto" />
          </button>
        </div>
        <Divider className="bg-white bg-opacity-50 w-[100%]" />
        <div className="flex flex-col items-start px-4">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            return (
              <div
                key={menu.id}
                className={getNavItemClasses(menu)}
                onClick={impFunc}
              >
                <div className={classNames(getNavItemIndicatorCLasses(menu))} />
                <Link href={menu.link}>
                  <div className={getNavItemLinkClasses(menu)}>
                    <Icon
                      size={25}
                      className="transition-all duration-500"
                      style={{ minWidth: "25px" }}
                    />

                    <span
                      className={`text-md font-medium transition-all duration-500 font_inter`}
                    >
                      {menu.label}
                    </span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <div
          className={classNames(
            "bg-white bg-opacity-10 hover:bg-lightBlue hover:bg-opacity-20 px-4 cursor-pointer transition-all duration-500"
          )}
          id="sidebar-profile"
        >
          <div
            className={classNames(
              "flex items-center mt-3 rounded gap-3 h-20 overflow-hidden"
            )}
          >
            {me?.profileImage !== "" && (
              <NoSsr>
                <img
                  src={me?.profileImage}
                  alt="Profile Image"
                  className="w-11 h-11 rounded-full object-cover inline-block"
                  style={{ width: "44px", minWidth: "44px", height: "44px" }}
                />
              </NoSsr>
            )}

            <div
              className={`h-12 overflow-hidden`}
              style={{ minWidth: "150px" }}
            >
              <NoSsr>
                <p className="text-white font-semibold">{me?.name}</p>
              </NoSsr>
              <NoSsr>
                <p className="text-white text-opacity-50">
                  {me?.email?.slice(0, 17)}...
                </p>
              </NoSsr>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
