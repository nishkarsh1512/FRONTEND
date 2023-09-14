import { IoIosArrowDown } from "react-icons/io"
import { VscBellDot } from "react-icons/vsc"
import classNames from "classnames"
import { Button, Menu, MenuItem, Divider } from "@mui/material"
import SyncAltIcon from "@mui/icons-material/SyncAlt"
import LogoutIcon from "@mui/icons-material/Logout"
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined"
import { useState } from "react"
import { NavButton } from "./NavButton"
import { useAppStateContext } from "../../context/contextProvider"
import useAuthStore from "../../store/auth"

const AdministrationHeader = () => {
  const { me } = useAuthStore()

  // @ts-ignore
  const { setLogoutModalActive } = useAppStateContext()

  const getMenuItemClasses = (type: string) =>
    classNames({
      "hover:bg-lightBlue hover:bg-opacity-10 hover:text-lightBlue mx-2 px-[10px] rounded":
        type === "link",
      "hover:bg-red-600 hover:bg-opacity-10 hover:text-red-600 px-[10px] mx-2 rounded":
        type === "danger",
    })

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex items-center mt-2.5">
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center">
            <span className="font-bold text-2xl leading-10 mr-2">
             Welcome, {me?.name.split(" ")[0]}
            </span>
            <img src="/images/popper.png" alt="Popper" width={25} height={25} />
          </div>
          <p className="text-gray-400 font-medium text-sm ml-1">
            {"Here's what's happening in your EyeVib account today."}
          </p>
        </div>
        <div className="flex items-center">
          <NavButton
            title="Notifications"
            customFunc={() => {
              // setActiveMenu(() => handleClick("notification"));
            }}
            color={"blue"}
            icon={<VscBellDot size={25} color="#015FF3" />}
          />

          <Button
            className="flex items-center rounded hover:bg-opacity-10 p-2 cursor-pointer w-full transition-all"
            id="profile-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src={
                me
                  ? me?.profileImage
                  : "https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png"
              }
              style={{ borderRadius: "50%" }}
              alt="profile picture"
              className="w-[40px] h-[40px] object-cover"
            />
            <div className="ml-2 normal-case">
              <span className="text-gray-400 text-14 font-medium">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                {me && me?.name.split(" ")[0]}
              </span>
            </div>
            <IoIosArrowDown
              size={15}
              className="text-gray-400 font-bold text-14 ml-2"
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            classes={{ paper: "w-[210px] px-0 my-0 rounded shadow" }}
          >
            <div
              className="flex items-center mt-2 px-5 rounded hover:bg-white hover:bg-opacity-20 py-2 cursor-pointer w-full transition-all justify-between"
              id="sidebar-profile"
            >
              <div>
                <p className="text-black font-semibold">{me?.name}</p>
                <p className="text-gray-400 font-medium text-sm">
                  {me?.role}
                </p>
              </div>
              <img
                src={
                  me
                    ? me?.profileImage
                    : "https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png"
                }
                style={{ borderRadius: "50%" }}
                className="w-[40px] h-[40px] object-cover"
                alt="profile picture"
              />
            </div>
            <MenuItem
              onClick={handleClose}
              className={getMenuItemClasses("link")}
            >
              <div className="flex items-center gap-2">
                <ManageAccountsOutlinedIcon className="text-[22px]" />
                <span className="text-sm">User Settings</span>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                setLogoutModalActive(true)
                handleClose()
              }}
              className={getMenuItemClasses("link")}
            >
              <div className="flex items-center gap-2">
                <LogoutIcon className="text-[22px]" />
                <span className="text-sm">Logout</span>
              </div>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className={getMenuItemClasses("link")}
            >
              <div className="flex items-center gap-2">
                <SyncAltIcon className="text-[22px]" />
                <span className="text-sm">Switch Accounts</span>
              </div>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className={getMenuItemClasses("danger")}
            >
              <div className="flex items-center gap-2">
                <SyncAltIcon className="text-[22px] text-red-600" />
                <span className="text-sm text-red-600">Delete My Account</span>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default AdministrationHeader
