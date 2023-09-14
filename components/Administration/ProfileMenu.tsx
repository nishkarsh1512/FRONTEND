import { Divider, Menu } from "@mantine/core"
import classNames from "classnames"
import Image from "next/image"
import React from "react"
import { AiOutlineFlag } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import { HiOutlineUserGroup } from "react-icons/hi"
import { MdOutlineEventNote } from "react-icons/md"
import {
  ArrowsLeftRight,
  MessageCircle,
  Settings,
  Trash,
} from "tabler-icons-react"

type Props = { controlComponent: JSX.Element }

const ProfileMenu = ({ controlComponent }: Props) => {
  const getMenuItemClasses = (type: string) =>
    classNames({
      "hover:bg-themeBlue1 hover:bg-opacity-10 hover:text-themeBlue1":
        type === "link",
      "hover:bg-red-600 hover:bg-opacity-10 hover:text-red-600":
        type === "danger",
    })
  return (
    <Menu>
      <div
        className="flex items-center mt-3 px-5 rounded hover:bg-white hover:bg-opacity-20 py-2 cursor-pointer w-full transition-all justify-between"
        id="sidebar-profile"
      >
        <div>
          <p className="text-black font-semibold">Kunal Mondal</p>
          <p className="text-gray-400 font-medium text-sm">Software Engineer</p>
        </div>
        <Image
          src="/avatar.jpg"
          style={{ borderRadius: "50%" }}
          width={45}
          height={45}
          alt="profile picture"
        />
      </div>
      <div className="px-1">
        {/* <Menu.Label>2002kunalmondal13@gmail.com</Menu.Label> */}
        <Menu.Item
          icon={<Settings size={20} />}
          className={getMenuItemClasses("link")}
        >
          User Settings
        </Menu.Item>
        <Menu.Item
          icon={<MessageCircle size={20} />}
          className={getMenuItemClasses("link")}
        >
          Messages
        </Menu.Item>
        <Divider />
        <Menu.Item
          icon={<AiOutlineFlag size={20} />}
          className={getMenuItemClasses("link")}
        >
          Pages
        </Menu.Item>
        <Menu.Item
          icon={<HiOutlineUserGroup size={20} />}
          className={getMenuItemClasses("link")}
        >
          Groups
        </Menu.Item>
        <Menu.Item
          icon={<MdOutlineEventNote size={20} />}
          className={getMenuItemClasses("link")}
        >
          Events
        </Menu.Item>
        <Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          icon={<FiLogOut size={20} />}
          className={getMenuItemClasses("danger")}
        >
          Logout
        </Menu.Item>
        <Menu.Item
          icon={<ArrowsLeftRight size={20} />}
          className={getMenuItemClasses("link")}
        >
          Switch Accounts
        </Menu.Item>
        <Menu.Item
          color="red"
          icon={<Trash size={20} />}
          className={getMenuItemClasses("danger")}
        >
          Delete my account
        </Menu.Item>
      </div>
    </Menu>
  )
}

export default ProfileMenu
