import { showNotification } from "@mantine/notifications"
import {
  CheckCircleOutlineRounded,
  WarningAmberRounded,
  ErrorOutlineRounded,
  SaveRounded,
} from "@mui/icons-material"
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import React, { useState, useEffect } from "react"
import axiosConfig from "../../config/axiosConfig"
import useThresholdStore from "../../store/threshold"
import { IThreshold } from "../../types"
import axios from "axios"

///

import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined"
import classnames from "classnames"
import { Divider } from "@mui/material"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"
import { useAppStateContext } from "../../context/contextProvider"
import IconButton from "@mui/material/IconButton"
import { devices } from "../../constants/devices"
import useDeviceStore from "../../store/device"
////

type Props = { isAcc?: boolean }

const Range = ({ isAcc }: Props) => {
  const [feature, setFeature] = useState(
    `${isAcc ? "Acceleration" : "Velocity"} Time Waveform`
  )
  const [axis, setAxis] = useState<string>("X-Axis")
  const [myObject, setMyObject] = useState<any>({})
  const [myObjectX, setMyObjectX] = useState<any>({})
  const [myObjectY, setMyObjectY] = useState<any>({})
  const [myObjectZ, setMyObjectZ] = useState<any>({})
  const [present, setPresent] = useState<string>(
    "X_Axis_Velocity_Time_Waveform"
  )
  const [current, setCurrent] = useState<any>({
    normal: 5,
    caution: 5,
    warning: 5,
  })

  const { selectedDevice } = useDeviceStore()
  console.log(selectedDevice)
  console.log(selectedDevice)
  console.log(selectedDevice)
  console.log(selectedDevice)

  console.log(selectedDevice)
  const getLabel = ():
    | "X_Axis_Acceleration_FFT"
    | "X_Axis_Acceleration_Time_Waveform"
    | "X_Axis_Velocity_FFT"
    | "X_Axis_Velocity_Time_Waveform"
    | "Y_Axis_Acceleration_FFT"
    | "Y_Axis_Acceleration_Time_Waveform"
    | "Y_Axis_Velocity_FFT"
    | "Y_Axis_Velocity_Time_Waveform"
    | "Z_Axis_Acceleration_FFT"
    | "Z_Axis_Acceleration_Time_Waveform"
    | "Z_Axis_Velocity_FFT"
    | "Z_Axis_Velocity_Time_Waveform" => {
    // @ts-ignore
    return axis.split("-").join("_") + "_" + feature.split(" ").join("_")
  }

  const { thresholds } = useThresholdStore()

  useEffect(() => {
    useDeviceStore.getState().reset()
    console.log("yeaaaaaaaaaaaaaaaaaaaaaaah")
    axios
      .post("http://103.154.184.52:4000/api/threshold")
      .then((response) => {
        // Handle the response
        console.log(response.data)
        console.log(typeof response.data)
        setMyObject(response.data)
        const samp = { ...response.data }
        const sample = { ...samp[selectedDevice?.asset_id] }
        console.log(sample["X_Axis_Velocity_Time_Waveform"])
        setMyObjectX(sample)
        setCurrent(sample["X_Axis_Velocity_Time_Waveform"])

        const sample1 = { ...samp[selectedDevice?.asset_id] }
        console.log(sample1["Y_Axis_Velocity_Time_Waveform"])
        setMyObjectY(sample1)

        const sample2 = { ...samp[selectedDevice?.asset_id] }
        console.log(sample2["Y_Axis_Velocity_Time_Waveform"])
        setMyObjectZ(sample2)
      })
      .catch((error) => {
        // Handle the error
        console.log(error)
      })
  }, [])
  let i = 0
  ++i

  useEffect(() => {
    console.log("i >>>> 2")
    setAxis("X-Axis")
    axios
      .post("http://103.154.184.52:4000/api/threshold")
      .then((response) => {
        // Handle the response
        console.log(response.data)
        console.log(typeof response.data)
        setMyObject(response.data)
        const samp = { ...response.data }
        const sample = { ...samp[selectedDevice?.asset_id] }
        console.log(sample["X_Axis_Velocity_Time_Waveform"])
        setMyObjectX(sample)
        setCurrent(sample["X_Axis_Velocity_Time_Waveform"])

        const sample1 = { ...samp[selectedDevice?.asset_id] }
        console.log(sample1["Y_Axis_Velocity_Time_Waveform"])
        setMyObjectY(sample1)

        const sample2 = { ...samp[selectedDevice?.asset_id] }
        console.log(sample2["Y_Axis_Velocity_Time_Waveform"])
        setMyObjectZ(sample2)
      })
      .catch((error) => {
        // Handle the error
        console.log(error)
      })
  }, [selectedDevice])

  const [value, setValue] = useState<IThreshold>({
    start: 0,
    normal: 1,
    caution: 1,
    warning: 1,
    end: 10,
  })

  const Reveal = () => {
    console.log("reveasl")
    console.log(myObject)

    console.log(myObjectX)

    console.log(myObjectY)
    console.log(myObjectZ)
    console.log(current)
  }

  const { isFetching, refetch: updateThreshold } = useQuery(
    [`${isAcc ? "acc-thresholds" : "vel-thresholds"}`],
    async ({ signal }) => {
      return await axiosConfig({
        method: "put",
        url: "http://103.154.184.52:4000/api/threshold/",
        data: { ...thresholds, [getLabel()]: { ...value } },
        signal,
      }).then((res) => res.data)
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      enabled: false,
      onSuccess: () => {
        showNotification({
          title: "User notification",
          message: "Thresholds updated successfully !",
          autoClose: 2500,
          styles: () => ({
            root: {
              width: "300px",
              padding: "12.5px 5px 20px 22px",
              "&::before": { backgroundColor: "#31E802" },
            },
          }),
        })
      },
      onError: (err) => {
        console.log("Fetching error: ", err)
        showNotification({
          title: "User notification",
          message: "Some error occurred !",
          autoClose: 2500,
          styles: () => ({
            root: {
              width: "300px",
              padding: "12.5px 5px 20px 22px",
              "&::before": { backgroundColor: "#FF0022" },
            },
          }),
        })
      },
    }
  )
  const [optionsDrawerActive, setOptionsDrawerActive] = useState(false)

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
      className="flex flex-col gap-2 bg-white px-10 py-10"
      style={{ height: "100vh", width: "90vw" }}
    >
      {/* ///////////////////////////////////////
     //////////////////////////////////////////// */}
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
            ////////////////////////
            //////////////////////////////
            /////////////////////////////////////
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
            handleAssetIdChange(
              exhausterName,
              event.target.value,
              assetLocation
            )
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
      {/* /////////////////////////////////////////////
     ///////////////////////////////////////////// */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{feature}</h3>
          <span className="font-medium text-sm text-gray-400">
            Threshold range for {feature}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[
            { label: "X-Axis", color: "#1340E8" },
            { label: "Y-Axis", color: "#31E802" },
            { label: "Z-Axis", color: "#FF0022" },
          ].map((item) => (
            <FormControlLabel
              className="flex items-center gap-2"
              key={item.label}
              control={
                <Checkbox
                  sx={{
                    color: item.color,
                    "&.Mui-checked": {
                      color: item.color,
                    },
                  }}
                  checked={axis === item.label}
                  key={item.label}
                  onChange={(e: any) => {
                    if (!e.target.checked) {
                      return
                    } else {
                      setAxis(item.label)
                      if (item.label == "X-Axis") {
                        setCurrent(myObjectX["X_Axis_Velocity_Time_Waveform"])
                        setPresent("X_Axis_Velocity_Time_Waveform")
                      }
                      if (item.label == "Y-Axis") {
                        setCurrent(myObjectY["Y_Axis_Velocity_Time_Waveform"])
                        setPresent("Y_Axis_Velocity_Time_Waveform")
                      }
                      if (item.label == "Z-Axis") {
                        setCurrent(myObjectZ["Z_Axis_Velocity_Time_Waveform"])
                        setPresent("Z_Axis_Velocity_Time_Waveform")
                      }
                    }
                  }}
                />
              }
              label={item.label}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-infoCardDarkGreen">Normal</h3>
        <div className="flex items-center gap-2.5">
          <CheckCircleOutlineRounded className="text-infoCardDarkGreen" />
          <Slider
            sx={{
              color: "#31E802",
            }}
            aria-label="Default"
            valueLabelDisplay="on"
            classes={{ valueLabel: "bg-infoCardDarkGreen" }}
            min={0}
            max={20}
            onChange={(event) => {
              // @ts-ignore
              // setValue({ ...value, normal: event?.target?.value })
              setCurrent((prevState) => ({
                ...prevState,
                normal: (event.target as HTMLInputElement)?.value,
              }))
            }}
            step={0.1}
            value={current.normal}
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-infoCardDarkYellow">Caution</h3>
        <div className="flex items-center gap-2.5">
          <ErrorOutlineRounded className="text-infoCardDarkYellow" />
          <Slider
            sx={{
              color: "rgb(255, 193, 7)",
            }}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="on"
            classes={{ valueLabel: "bg-infoCardDarkYellow" }}
            min={0}
            max={20}
            step={0.1}
            value={current.caution}
            onChange={(event) => {
              // @ts-ignore
              // setValue({ ...value, caution: event?.target?.value })
              setCurrent((prevState) => ({
                ...prevState,
                caution: (event.target as HTMLInputElement)?.value,
              }))
            }}
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-infoCardDarkRed">Warning</h3>
        <div className="flex items-center gap-2.5">
          <WarningAmberRounded className="text-infoCardDarkRed" />
          <Slider
            sx={{
              color: "#FF0022",
            }}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="on"
            classes={{ valueLabel: "bg-infoCardDarkRed" }}
            min={0}
            max={20}
            step={0.1}
            value={current.warning}
            onChange={(event) => {
              // @ts-ignore
              // setValue({ ...value, warning: event?.target?.value })
              setCurrent((prevState) => ({
                ...prevState,
                warning: (event.target as HTMLInputElement)?.value,
              }))
            }}
          />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-base text-gray-600 font-medium">Start value</h3>
          <div className="border rounded shadow overflow-hidden flex items-center relative">
            <input
              placeholder={"0.0"}
              type="number"
              step="0.1"
              className="py-3 px-4 w-full outline-none"
              max={2}
              value={Number(value.start).toString()}
              onChange={(event) => {
                if (
                  Number(event?.target.value) <= 0 &&
                  Number(event?.target.value) <= value.normal - 0.1
                ) {
                  setValue({
                    ...value,
                    start: Number(event?.target?.value),
                  })
                }
              }}
            />
            <span className="absolute right-0 px-3 border-l h-[70%] flex items-center justify-center font-medium text-sm text-gray-400">
              {isAcc ? "m / s ²" : "m / s"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium text-gray-600">End value</h3>
          <div className="border rounded shadow overflow-hidden flex items-center relative">
            <input
              className="py-3 px-4 w-full outline-none"
              placeholder={"0.0"}
              type="number"
              step="0.1"
              value={20}
              onChange={(event) => {
                if (
                  Number(event?.target.value) <= 100 &&
                  Number(event?.target.value) >= value.warning + 0.1
                ) {
                  setValue({
                    ...value,
                    end: Number(event?.target?.value),
                  })
                }
              }}
            />
            <span className="absolute right-0 px-3 border-l h-[70%] flex items-center justify-center font-medium text-sm text-gray-400">
              {isAcc ? "m / s ²" : "m / s"}
            </span>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        className="bg-lightBlue font-semibold hover:bg-lightBlue py-2.5 mt-5 normal-case flex items-center gap-2.5"
        onClick={() => {
          // console.log({ ...thresholds, [getLabel()]: { ...value } })
          // updateThreshold()
          const update = { ...myObject }
          for (let key in update) {
            if (key === selectedDevice?.asset_id) {
              console.log(update[key])
              const updates = { ...update[key] }
              updates[present] = { ...current }
              update[key] = updates
              console.log(update)
              console.log(selectedDevice?.asset_id)
              // Perform operations on the matching key
              // For example, you can access the value using update[key]
              // and update the value accordingly.
              const article = {
                update: update,
              }

              axios
                .post("http://103.154.184.52:4000/api/threshold/save", article)
                .then((response) => {
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)

                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)

                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log("POST request successful:", response.data)
                  console.log(response.data)
                  const temp = { ...update }
                  setMyObject(response.data)
                  const samp = { ...response.data }
                  const sample = { ...samp[selectedDevice?.asset_id] }
                  console.log(sample["X_Axis_Velocity_Time_Waveform"])
                  setMyObjectX(sample)
                  setCurrent(sample["X_Axis_Velocity_Time_Waveform"])

                  const sample1 = { ...samp[selectedDevice?.asset_id] }
                  console.log(sample1["Y_Axis_Velocity_Time_Waveform"])
                  setMyObjectY(sample1)

                  const sample2 = { ...samp[selectedDevice?.asset_id] }
                  console.log(sample2["Y_Axis_Velocity_Time_Waveform"])
                  setMyObjectZ(sample2)
                })
                .catch((error) => {
                  console.error("Error making POST request:", error)
                })
            }
          }
        }}
      >
        {isFetching ? (
          <>Loading</>
        ) : (
          <>
            <SaveRounded />
            Save
          </>
        )}
      </Button>
    </div>
  )
}

export default Range
