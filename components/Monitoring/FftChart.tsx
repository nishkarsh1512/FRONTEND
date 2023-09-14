import React, { useState, useEffect } from "react"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import HighChartsExporting from "highcharts/modules/exporting"
import HighChartsData from "highcharts/modules/data"
import HighChartsIndicators from "highcharts/indicators/indicators"
import HighChartsPivotPoints from "highcharts/indicators/pivot-points"
import HighChartsMacD from "highcharts/indicators/macd"
import HighChartsMaP from "highcharts/modules/map"
import HighChartsAccessibility from "highcharts/modules/accessibility"
import { fftDataOptions } from "../../utility/analytics"
import Button from "@mui/material/Button"
import Select from "@mui/material/Select"
import { showNotification } from "@mantine/notifications"
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Tooltip,
  Box,
  Switch,
} from "@mui/material"
import moment from "moment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined"
import useDeviceStore from "../../store/device"
import ArticleIcon from "@mui/icons-material/Article"
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined"
import axios from "axios"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import LinearProgress from "@mui/material/LinearProgress"
import Modal from "@mui/material/Modal"

if (typeof Highcharts === "object") {
  HighChartsExporting(Highcharts)
  HighChartsIndicators(Highcharts)
  HighChartsPivotPoints(Highcharts)
  HighChartsMacD(Highcharts)
  HighChartsMaP(Highcharts)
  HighChartsData(Highcharts)
  HighChartsAccessibility(Highcharts)
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const FftChart: React.FC<{ data: any[] }> = (props) => {
  let h1 = { ...props.data[0].name[0] }
  const [useFirstOptions, setUseFirstOptions] = useState(true)
  const [X_acc, setX_acc] = useState<number[]>([])
  const [Y_acc, setY_acc] = useState<number[]>([])
  const [Z_acc, setZ_acc] = useState<number[]>([])
  const [fill_X_acc, setX_fill_acc] = useState<number[]>([])
  const [fill_Y_acc, setY_fill_acc] = useState<number[]>([])
  const [fill_Z_acc, setZ_fill_acc] = useState<number[]>([])
  const [fill_X_vel, setX_fill_vel] = useState<number[]>([])
  const [fill_Y_vel, setY_fill_vel] = useState<number[]>([])
  const [fill_Z_vel, setZ_fill_vel] = useState<number[]>([])
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const [temp, setTemp] = useState<number[]>([])
  const [temp1, setTemp1] = useState<number[]>([])
  const [temp2, setTemp2] = useState<number[]>([])
  console.log("guys")
  console.log("guys")
  console.log("guys")
  console.log("guys")
  console.log(h1)
  console.log("guys")
  console.log("guys")
  console.log("guys")
  console.log("guys")
  const { myBoolean, setMyBoolean } = useContext(AppContext)
  const [axis, setAxis] = useState<string[]>(["X-Axis"])
  const [feature, setFeature] = useState("Acceleration")
  const [updatedArray, setUpdatedArray] = useState<string[]>(["12", "34"])
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [timeDuration, setTimeDuration] = useState("Realtime")
  const [isRealtime, setIsRealtime] = useState(false)
  const [index, setIndex] = useState<number>(0)
  const { selectedDevice } = useDeviceStore()
  const [open, setOpen] = React.useState(false)
  const [opens, setOpens] = React.useState(false)
  const [filter, setFilter] = React.useState(false)
  const [fillArray, setFillArray] = useState<any[]>([])
  const [visit, setVisit] = React.useState(false)

  ///////////////////////////////////////////////

  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const progressRef = React.useRef(() => {})
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  ////////////////////////////////////////////////

  useEffect(() => {
    if (!myBoolean) {
      setUpdatedArray(h1["start_times"])
      setIsRealtime(true)
    }
  }, [props.data, filter])

  const stateChanger = () => {
    console.log("state change")
    setUseFirstOptions(true)
    setFeature("Acceleration")
    setVisit(false)
    setAxis(["X-Axis"])
  }

  const toggleBoolean = () => {
    setMyBoolean(true)
    console.log("myvariuable")
  }

  const hi = () => {
    console.log("damn")
    console.log("damn")

    console.log("damn")

    console.log("damn")

    console.log(temp)
    console.log(feature)
    console.log("damn")

    console.log("damn")

    console.log("damn")
  }

  /////////////////////////////////////////////
  const options = (
    x_axis: boolean,
    y_axis: boolean,
    z_axis: boolean,
    y_label: string,
    titles: string
  ): Highcharts.Options => ({
    title: {
      text: `<div class="font-semibold relative right-10 capitalize">${titles}</div>`,
      align: "left",
      margin: 160,
    },
    credits: {
      enabled: false,
    },
    // credits: {
    //   enabled: false,
    // },
    xAxis: {
      categories: useFirstOptions ? updatedArray : [],
      tickInterval: 1,
      labels: {
        enabled: true,
      },
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              setVisit(true)
              if (filter) {
                setIndex(this.x)
                const data1 = [
                  ...fillArray[this.x].data["X-Axis Acceleration FFT"],
                ]
                const dataString1 = data1.join("") // Join array elements into a single string
                const parsedData1 = JSON.parse(dataString1)
                const FFT_acc_x = parsedData1[0] // Access the inner array

                const data2 = [
                  ...fillArray[this.x].data["Y-Axis Acceleration FFT"],
                ]
                const dataString2 = data2.join("") // Join array elements into a single string
                const parsedData2 = JSON.parse(dataString2)
                const FFT_acc_y = parsedData2[0] // Access the inner array

                const data3 = [
                  ...fillArray[this.x].data["Z-Axis Acceleration FFT"],
                ]
                const dataString3 = data3.join("") // Join array elements into a single string
                const parsedData3 = JSON.parse(dataString3)
                const FFT_acc_z = parsedData3[0] // Access the inner array

                const data4 = [...fillArray[this.x].data["X-Axis Velocity FFT"]]
                const dataString4 = data4.join("") // Join array elements into a single string
                const parsedData4 = JSON.parse(dataString4)
                const FFT_vel_x = parsedData4[0] // Access the inner array

                const data5 = [...fillArray[this.x].data["Y-Axis Velocity FFT"]]
                const dataString5 = data5.join("") // Join array elements into a single string
                const parsedData5 = JSON.parse(dataString5)
                const FFT_vel_y = parsedData5[0] // Access the inner array

                const data6 = [...fillArray[this.x].data["Z-Axis Velocity FFT"]]
                const dataString6 = data6.join("") // Join array elements into a single string
                const parsedData6 = JSON.parse(dataString6)
                const FFT_vel_z = parsedData6[0] // Access the inner array

                setX_fill_acc(FFT_acc_x)
                setY_fill_acc(FFT_acc_y)
                setZ_fill_acc(FFT_acc_z)
                setX_fill_vel(FFT_vel_x)
                setY_fill_vel(FFT_vel_y)
                setZ_fill_vel(FFT_vel_z)
                setTemp(FFT_acc_x)
                setTemp1(FFT_acc_y)
                setTemp2(FFT_acc_z)
                setUseFirstOptions(false)

                console.log("button clicked")
                console.log("button clicked")
                console.log("button clicked")
                console.log("button clicked")
                console.log(FFT_acc_x)

                console.log("button clicked")
                console.log("button clicked")
                console.log("button clicked")

                console.log("button clicked")
                /////////////////////////////////////166
              } else {
                setIndex(this.x)
                const myArray1 = JSON.parse(
                  h1.results[this.x].data["X-Axis Acceleration FFT"]
                )
                setX_acc(myArray1[0])
                const myArray2 = JSON.parse(
                  h1.results[this.x].data["Y-Axis Acceleration FFT"]
                )
                setY_acc(myArray2[0])
                const myArray3 = JSON.parse(
                  h1.results[this.x].data["Z-Axis Acceleration FFT"]
                )
                setZ_acc(myArray3[0])
                setUseFirstOptions(false)
              }
            },
          },
        },
      },
    },

    yAxis: {
      labels: {
        enabled: false, // Hide the y-axis labels
      },
    },
    // Array.from({ length: 10 }, () => 30)
    series: [
      {
        name: "X AXIS",
        data:
          filter && visit
            ? temp
            : filter
            ? Array.from({ length: updatedArray.length }, () => 30)
            : useFirstOptions
            ? [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
            : X_acc,
        type: useFirstOptions ? "scatter" : "spline",
        color: "#1340E8",
        tooltip: {
          valueDecimals: 2,
        },
        visible: x_axis,
        marker: {
          symbol: useFirstOptions
            ? `url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/2048px-Circle-icons-document.svg.png)`
            : "circle", // Replace `path_to_your_image` with the URL of your custom image
          height: useFirstOptions ? 20 : 0.5,
          width: useFirstOptions ? 20 : 0.5,
        },
      },
      {
        name: "Y AXIS",
        data:
          filter && visit
            ? temp1
            : filter && !useFirstOptions
            ? fill_Y_acc
            : useFirstOptions
            ? [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
            : Y_acc, //////////////////////////////checkpoint/////////////,
        type: "spline",
        color: "#31E802",
        tooltip: {
          valueDecimals: 2,
        },
        visible: y_axis,
      },
      {
        name: "Z AXIS",
        data:
          filter && visit
            ? temp2
            : filter && !useFirstOptions
            ? fill_Z_acc
            : useFirstOptions
            ? [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
            : Z_acc, //////////////////////////////checkpoint/////////////,
        type: "spline",
        color: "#FF0022",
        tooltip: {
          valueDecimals: 2,
        },
        visible: z_axis,
      },
    ],
  })
  /////////////////////////////////////////////
  return (
    <div className="bg-white rounded-lg p-3 pt-3 overflow-hidden max-h-[700px]">
      {/* Feature & Interval Dropdowns  */}
      <div className="flex flex-col gap-3 mt-16">
        <div className="flex items-center gap-5 pl-2 z-10">
          <div className="flex items-center gap-2.5">
            <p className="font-semibold text-gray-400">START</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Date&Time picker"
                value={startTime}
                inputFormat="DD/MM/YYYY hh:mm A"
                onChange={(value) => {
                  console.log(
                    "Start time -> ",
                    //@ts-ignore
                    new Date(value.$d).toISOString()
                  )
                  // @ts-ignore
                  setStartTime(value?.$d)
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    className="shadow py-3 px-4 border rounded"
                  >
                    <input
                      ref={inputRef}
                      {...inputProps}
                      style={{
                        border: "none",
                        outline: "none",
                        width: "155px",
                      }}
                    />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex items-center gap-2.5">
            <p className="font-semibold text-gray-400">END</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Date&Time picker"
                value={endTime}
                inputFormat="DD/MM/YYYY hh:mm A"
                onChange={(value) => {
                  // @ts-ignore
                  console.log("End time -> ", new Date(value.$d).toISOString())
                  // @ts-ignore
                  setEndTime(value?.$d)
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    className="shadow py-3 px-4 border rounded"
                  >
                    <input
                      ref={inputRef}
                      {...inputProps}
                      style={{
                        border: "none",
                        outline: "none",
                        width: "155px",
                      }}
                    />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </div>
          {/* ///////////////////////////// */}
          <Tooltip
            title="Refetch"
            arrow
            classes={{
              tooltip: "bg-gray-200 text-black",
              arrow: "text-gray-200",
            }}
          >
            <Button
              className="shadow border py-[10.25px] min-w-fit px-3 rounded-md transition-all duration-300 bg-lightBlue hover:bg-lightBlue text-white bg-opacity-90 hover:bg-opacity-100"
              onClick={() => {
                toggleBoolean()
                setFilter(true)
                if (moment(startTime).isBefore(endTime)) {
                  if (moment(endTime).diff(startTime, "days") <= 7) {
                    ///////code goes here
                    toggleBoolean()
                    setIsRealtime(false)
                    setOpens(true)
                    // setOpens(true)
                    setTimeout(() => {
                      const article = {
                        title: h1.asset_id,
                        startDate: startTime,
                        endDate: endTime,
                      }

                      axios
                        .post(
                          "http://103.154.184.52:4000/api/threshold/filterfft",
                          article
                        )
                        .then((response) => {
                          toggleBoolean()
                          setIsRealtime(false)
                          console.log("check new data")
                          console.log(response.data)
                          console.log("check new data")
                          setFillArray(response.data[0].results)
                          setUpdatedArray(response.data[0].start_times)

                          /////////////////////////////////
                          /////////////////////////////////////
                          /////////////////////////////////
                          /////////////////////////////////////

                          setIsRealtime(false)
                          setOpen(true)
                          setOpens(false)
                        })
                        .catch((error) => {
                          console.error(
                            "Error occurred during the request:",
                            error
                          )
                        })
                    }, 30000) // 30 seconds delay
                    ////code goes here
                  } else {
                    showNotification({
                      title: "User notification",
                      message: "Max time range is 7 days !",
                      autoClose: 2500,
                      styles: () => ({
                        root: {
                          width: "300px",
                          padding: "12.5px 5px 20px 22px",
                          "&::before": { backgroundColor: "rgb(255, 193, 7)" },
                        },
                      }),
                    })
                  }
                } else {
                  showNotification({
                    title: "User notification",
                    message: "Start_ts can't be greater than end_ts !",
                    autoClose: 2500,
                    styles: () => ({
                      root: {
                        width: "300px",
                        padding: "12.5px 5px 20px 22px",
                        "&::before": { backgroundColor: "rgb(255, 193, 7)" },
                      },
                    }),
                  })
                }
              }}
            >
              <RefreshOutlinedIcon />
            </Button>
          </Tooltip>
          {/* //////////////////////// */}

          <FormControlLabel
            className="relative right-1"
            classes={{
              label: `font-semibold ${
                isRealtime ? "text-gray-500" : "text-gray-400 transition-all"
              }`,
            }}
            control={
              <Switch
                checked={isRealtime}
                onChange={(e) => setIsRealtime(e.target.checked)}
                classes={{ track: "bg-infoCardDarkGreen" }}
                size="medium"
              />
            }
            label="Realtime"
          />
          {!useFirstOptions && (
            <Button variant="outlined" onClick={stateChanger}>
              Back
            </Button>
          )}
        </div>

        <div className="flex items-center z-10">
          {/* FEATURE SECTION  */}
          <div className="items-center mr-2 px-2 hidden sm:flex">
            {!useFirstOptions && (
              <p className="mr-2 font-semibold text-gray-400">FEATURE</p>
            )}
            {!useFirstOptions && (
              <Select
                value={feature}
                variant="standard"
                classes={{
                  select: "relative left-2 focus:bg-transparent ",
                  icon: "relative",
                }}
                sx={{ color: "#303a4e" }}
                className=" border w-40 ml-auto py-1.5 px-4 shadow rounded"
                disableUnderline={true}
                onChange={(event) => {
                  setFeature(event.target.value)
                  if (event.target.value == "Acceleration") {
                    const data4 = [
                      ...fillArray[index].data["X-Axis Acceleration FFT"],
                    ]
                    const dataString4 = data4.join("") // Join array elements into a single string
                    const parsedData4 = JSON.parse(dataString4)
                    const FFT_acc_x = parsedData4[0] // Access the inner array

                    const data5 = [
                      ...fillArray[index].data["Y-Axis Acceleration FFT"],
                    ]
                    const dataString5 = data5.join("") // Join array elements into a single string
                    const parsedData5 = JSON.parse(dataString5)
                    const FFT_acc_y = parsedData5[0] // Access the inner array

                    const data6 = [
                      ...fillArray[index].data["X-Axis Acceleration FFT"],
                    ]
                    const dataString6 = data6.join("") // Join array elements into a single string
                    const parsedData6 = JSON.parse(dataString6)
                    const FFT_acc_z = parsedData6[0] // Access the inner array
                    setTemp(FFT_acc_x)
                    setTemp1(FFT_acc_y)
                    setTemp2(FFT_acc_z)
                  }
                }}
              >
                {["Acceleration", "Velocity"].map((item) => (
                  <MenuItem
                    value={item}
                    key={item}
                    onClick={() => {
                      if (item === "Velocity") {
                        // Call your function here
                        if (filter) {
                          console.log("velocity clicked")
                          console.log("velocity clicked")

                          console.log(feature)
                          setIsEnabled(true)
                          setTemp(fill_X_vel)
                          setTemp1(fill_Y_vel)
                          setTemp2(fill_Z_vel)

                          console.log("velocity clicked")
                          console.log("velocity clicked")
                          // const fil = { ...fillArray[0] }
                        } else {
                          const myArray = JSON.parse(
                            h1.results[index].data["X-Axis Velocity FFT"]
                          )
                          setX_acc(myArray[0])

                          const myArray1 = JSON.parse(
                            h1.results[index].data["Y-Axis Velocity FFT"]
                          )
                          setY_acc(myArray1[0])

                          const myArray2 = JSON.parse(
                            h1.results[index].data["Z-Axis Velocity FFT"]
                          )
                          setZ_acc(myArray2[0])
                        }
                      }
                      if (item === "Acceleration") {
                        // Call your function here
                        if (filter) {
                          console.log("acc clicked")
                          console.log("acc clicked")
                          console.log(feature)

                          const data4 = [
                            ...fillArray[index].data["X-Axis Acceleration FFT"],
                          ]
                          const dataString4 = data4.join("") // Join array elements into a single string
                          const parsedData4 = JSON.parse(dataString4)
                          const FFT_acc_x = parsedData4[0] // Access the inner array

                          const data5 = [
                            ...fillArray[index].data["Y-Axis Acceleration FFT"],
                          ]
                          const dataString5 = data5.join("") // Join array elements into a single string
                          const parsedData5 = JSON.parse(dataString5)
                          const FFT_acc_y = parsedData5[0] // Access the inner array

                          const data6 = [
                            ...fillArray[index].data["X-Axis Acceleration FFT"],
                          ]
                          const dataString6 = data6.join("") // Join array elements into a single string
                          const parsedData6 = JSON.parse(dataString6)
                          const FFT_acc_z = parsedData6[0] // Access the inner array
                          setTemp(FFT_acc_x)
                          setTemp1(FFT_acc_y)
                          setTemp2(FFT_acc_z)

                          console.log("accl clicked")
                          console.log("acc clicked")
                          ////////////////////////////
                          setIsEnabled(false)

                          ///////////////////////////
                        } else {
                          const myArray = JSON.parse(
                            h1.results[index].data["X-Axis Acceleration FFT"]
                          )
                          setX_acc(myArray[0])

                          const myArray1 = JSON.parse(
                            h1.results[index].data["Y-Axis Acceleration FFT"]
                          )
                          setY_acc(myArray1[0])

                          const myArray2 = JSON.parse(
                            h1.results[index].data["Z-Axis Acceleration FFT"]
                          )
                          setZ_acc(myArray2[0])
                        }
                      }
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            )}
          </div>
          {/* AXIS SECTION  */}
          <div className="flex items-center gap-4px-2 ">
            <p className="mr-2 font-semibold text-gray-400">AXIS</p>
            {!useFirstOptions && (
              <div className="flex items-center gap-2">
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
                        checked={axis.includes(item.label)}
                        key={item.label}
                        onChange={(e: any) => {
                          if (!e.target.checked) {
                            return
                          } else {
                            setAxis([item.label])
                          }
                        }}
                      />
                    }
                    label={item.label}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* SPLINE CHART  */}
      <div className="relative bottom-40">
        <HighchartsReact
          containerProps={{ style: { height: "42.5rem" } }}
          highcharts={Highcharts}
          options={options(
            axis.includes("X-Axis"),
            axis.includes("Y-Axis"),
            axis.includes("Z-Axis"),
            `Amplitude ${
              feature === "Acceleration Time Waveform" ? "( m/s² )" : "m/s"
            }`,
            `FFT Data (${selectedDevice.exhauster_name.toLowerCase()}, ${selectedDevice.asset_name.toLowerCase()}, ${
              selectedDevice.asset_location.split(" ")[0][0]
            }${selectedDevice.asset_location.split(" ")[1][0]}${
              selectedDevice.asset_location.split(" ").length === 3
                ? selectedDevice.asset_location.split(" ")[2][0]
                : ""
            })`
          )}
        />
      </div>
      <Modal
        open={opens}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <LinearProgress
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default FftChart
