import React, { useState } from "react"
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined"
import classnames from "classnames"
import { Divider } from "@mui/material"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"
import { useAppStateContext } from "../../../context/contextProvider"
import IconButton from "@mui/material/IconButton"
import { devices } from "../../../constants/devices"
import useDeviceStore from "../../../store/device"

const OptionsDrawer = () => {
  // @ts-ignore
  const { optionsDrawerActive, setOptionsDrawerActive } = useAppStateContext()

  const [plant, setPlant] = useState("Bokaro Steel Plant")
  const [exhausterName, setExhausterName] = useState("Exhauster 1")
  const [assetName, setAssetName] = useState("Motor")
  const [assetLocation, setAssetLocation] = useState("Drive End")

  const { setSelectedDevice } = useDeviceStore()
  

  const handleAssetIdChange = (
    exhauster_name: string,
    asset_name: string,
    asset_location: string
  ) => {
    console.log("handleAssetIdChange")
    const device = devices.filter(
      (item) =>
        item.exhauster_name === exhauster_name &&
        item.asset_name === asset_name.toUpperCase() &&
        item.asset_location === asset_location.toUpperCase()
    )[0]

    if (device) {
      setSelectedDevice(device)
    } else {
      console.log("Something went wrong setting the asset id !")
    }
  }

  return (
    <div
      className={classnames(
        "flex flex-col gap-5 absolute right-[1.75rem] rounded-lg shadow-SearchInput px-5 pt-3 pb-6 bg-white border transition-all duration-500 z-10",
        { "-bottom-[525px] w-[202px]": !optionsDrawerActive },
        { "bottom-3 w-80": optionsDrawerActive }
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-lg text-[#303a4e] tracking-wider">
          Options
        </span>
        <IconButton
          aria-label="delete"
          className="hover:scale-110 transition-all duration-300"
          onClick={() => {
            setOptionsDrawerActive(!optionsDrawerActive)
          }}
        >
          <DoubleArrowOutlinedIcon
            className={`text-lightBlue text-2xl transition-all duration-600`}
            style={{
              transform: optionsDrawerActive
                ? "rotate(90deg)"
                : "rotateX(180deg) rotate(90deg)",
            }}
          />
        </IconButton>
      </div>
      <Divider className="" />
      <div className="py-2 px-2 border shadow rounded flex items-center gap-2">
        <BusinessOutlinedIcon className="text-[#757575]" />
        <span className="text-[#303a4e] font-medium">Plant</span>
      </div>
      <div className=" px-[24px]">
        <Select
          value={plant}
          variant="standard"
          classes={{
            select: "relative left-2 focus:bg-transparent ",
            icon: "relative",
          }}
          sx={{ color: "#303a4e" }}
          className=" border shadow w-90% ml-auto py-1"
          disableUnderline={true}
          onChange={(event) => {
            setPlant(event.target.value)
          }}
        >
          {["Bokaro Steel Plant"].map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="py-2 px-2 border shadow rounded flex items-center gap-2">
        <FaxOutlinedIcon className="text-[#757575]" />
        <span className="text-[#303a4e] font-medium">Machine</span>
      </div>
      <Select
        value={exhausterName}
        variant="standard"
        classes={{
          select: "relative left-2 focus:bg-transparent",
          icon: "relative",
        }}
        sx={{ color: "#303a4e" }}
        className="py-1 px-2 border shadow w-90% ml-auto"
        disableUnderline={true}
        onChange={(event) => {
          setExhausterName(event.target.value)
          handleAssetIdChange(event.target.value, assetName, assetLocation)
        }}
      >
        {[
          "Exhauster 1",
          "Exhauster 2",
          "Exhauster 3",
          "Exhauster 4",
          "Exhauster 5",
          "Exhauster 6",
        ].map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <div className="py-2 px-2 border shadow rounded flex items-center gap-2">
        <AssessmentOutlinedIcon className="text-[#757575]" />
        <span className="text-[#303a4e] font-medium">Component</span>
      </div>
      <Select
        value={assetName}
        variant="standard"
        classes={{
          select: "relative left-2 focus:bg-transparent",
          icon: "relative",
        }}
        sx={{ color: "#303a4e" }}
        className="py-1 px-2 border shadow w-90% ml-auto"
        disableUnderline={true}
        onChange={(event) => {
          setAssetName(event.target.value)
          handleAssetIdChange(exhausterName, event.target.value, assetLocation)
        }}
      >
        {["Motor", "Fan"].map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <div className="py-2 px-2 border shadow rounded flex items-center gap-2">
        <AssessmentOutlinedIcon className="text-[#757575]" />
        <span className="text-[#303a4e] font-medium">Location</span>
      </div>
      <Select
        value={assetLocation}
        variant="standard"
        classes={{
          select: "relative left-2 focus:bg-transparent",
          icon: "relative",
        }}
        sx={{ color: "#303a4e" }}
        className="py-1 px-2 border shadow w-90% ml-auto"
        disableUnderline={true}
        onChange={(event) => {
          setAssetLocation(event.target.value)
          handleAssetIdChange(exhausterName, assetName, event.target.value)
        }}
      >
        {["Drive End", "Non Drive End"].map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default OptionsDrawer
