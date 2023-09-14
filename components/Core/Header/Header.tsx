import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

const Header = () => {
  return (
    <div className="ml-auto w-fit py-3 flex items-center gap-2.5">
      <button className="rounded-full shadow border p-2">
        <NotificationsNoneOutlinedIcon className="text-[#757575] text-2xl" />
      </button>
      <button className="rounded-full shadow border p-2">
        <SettingsOutlinedIcon className="text-[#757575] text-2xl" />
      </button>
      <button className="rounded-full shadow border p-2">
        <PersonOutlineOutlinedIcon className="text-[#757575] text-2xl" />
      </button>
      <button className="rounded-full shadow border p-2">
        <MenuOpenOutlinedIcon className="text-[#757575] text-2xl" />
      </button>
    </div>
  );
};

export default Header;
