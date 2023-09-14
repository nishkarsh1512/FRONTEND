import React, { useState, useEffect } from "react"
import Highcharts from "highcharts"
import HighChartsExporting from "highcharts/modules/exporting"
import HighChartsData from "highcharts/modules/data"
import HighChartsIndicators from "highcharts/indicators/indicators"
import HighChartsPivotPoints from "highcharts/indicators/pivot-points"
import HighChartsMacD from "highcharts/indicators/macd"
import HighChartsMap from "highcharts/modules/map"
import HighChartsAccessibility from "highcharts/modules/accessibility"
import Select from "@mui/material/Select"
import {
  Box,
  MenuItem,
  Button,
  Tooltip,
  ToggleButton,
  Switch,
} from "@mui/material"
import Gauge from "./Gauge"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { showNotification } from "@mantine/notifications"
import HighchartsReact from "highcharts-react-official"
import HighChartsMaP from "highcharts/modules/map"
import { trendHistoryOptions } from "../../utility/analytics"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined"
import { FormControlLabel, Skeleton } from "@mui/material"
import { Checkbox } from "@mui/material"
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined"
import { QueryClient, useQuery } from "@tanstack/react-query"
import axiosConfig from "../../config/axiosConfig"
import useDataStore from "../../store/data"
import useDeviceStore from "../../store/device"
import useTimeStore from "../../store/time"
import moment from "moment"
import useThresholdStore from "../../store/threshold"

if (typeof Highcharts === "object") {
  HighChartsExporting(Highcharts)
  HighChartsIndicators(Highcharts)
  HighChartsPivotPoints(Highcharts)
  HighChartsMacD(Highcharts)
  HighChartsMap(Highcharts)
  HighChartsData(Highcharts)
  HighChartsAccessibility(Highcharts)
}

const InstantaneousParameters: React.FC<{ data: any[] }> = (props) => {
  let h1 = { ...props.data[0].name[0] }
  const [axis, setAxis] = useState("X Axis")
  const [feature, setFeature] = useState("Acceleration FFT")
  const [isRealtime, setIsRealtime] = useState(false)

  const queryClient = new QueryClient()

  const { ip_Time: startTime, set_ip_Time: setStartTime } = useTimeStore()

  const { selectedDevice } = useDeviceStore()

  const { gaugeData, setGaugeData } = useDataStore()

  const { thresholds } = useThresholdStore()
  const [recentTime, setRecentTime] = useState<string[]>([])

  const { isFetching, refetch: loadData } = useQuery(
    ["gaugeData"],
    async ({ signal }) => {
      console.log({
        start_time: startTime,
        end_time: moment(startTime).add(1, "hours").format(),
        asset_id: selectedDevice?.asset_id,
      })
      return await axiosConfig({
        method: "put",
        url: "",
        data: {
          start_time: startTime,
          end_time: moment(startTime).add(1, "hours").format(),
          asset_id: selectedDevice?.asset_id,
        },
        signal,
      }).then((res) => res.data)
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      enabled: false,
      onSuccess: (data) => {
        console.log({ gaugeData: data })
        setGaugeData(data)
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

  const [myArray, setMyArray] = useState<number[]>([0.2, 0.5])
  const [myArray2, setMyArray2] = useState<number[]>([0.2, 0.5])
  const [myArray3, setMyArray3] = useState<number[]>([0.2, 0.5])

  const [myArray5, setMyArray5] = useState<number[]>([0.2, 0.5])
  const [myArray6, setMyArray6] = useState<number[]>([0.2, 0.5])
  const [myArray7, setMyArray7] = useState<number[]>([0.2, 0.5])

  useEffect(() => {
    console.log("rerunning the use Effect")
    if (props.data[0].name[0]) {
      setIsRealtime(true)
      const stringArray: string[] = [...h1["x_rms_acl"]]
      const stringArray2: string[] = [...h1["y_rms_acl"]]
      const stringArray3: string[] = [...h1["z_rms_acl"]]
      const floatArray: number[] = stringArray.map((str) => parseFloat(str))
      const floatArray2: number[] = stringArray2.map((str) => parseFloat(str))
      const floatArray3: number[] = stringArray3.map((str) => parseFloat(str))
      const stringArray4: string[] = [...h1["timeup"]]

      const stringArray5: string[] = [...h1["x_rms_vel"]]
      const stringArray6: string[] = [...h1["y_rms_vel"]]
      const stringArray7: string[] = [...h1["z_rms_vel"]]
      const floatArray5: number[] = stringArray5.map((str) => parseFloat(str))
      const floatArray6: number[] = stringArray6.map((str) => parseFloat(str))
      const floatArray7: number[] = stringArray7.map((str) => parseFloat(str))

      console.log(floatArray)
      setMyArray(floatArray)
      setMyArray2(floatArray2)
      setMyArray3(floatArray3)
      setMyArray5(floatArray5)
      setMyArray6(floatArray6)
      setMyArray7(floatArray7)
      setRecentTime(stringArray4)
    }
  }, [props.data])

  return (
    <div className="bg-white rounded-lg p-3 pt-0 overflow-hidden col-span-3 capitalize relative">
      <p className="text-xs text-gray-500 mt-2">
        {recentTime && `Data received at: ${recentTime[299]}`}
      </p>
      {isFetching && (
        <>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="100%"
            className="absolute z-20 top-0 right-0 left-0 bottom-0"
          />

          <Button
            className="py-2 px-4 rounded absolute w-fit z-30 h-fit m-auto top-0 right-0 left-0 bottom-0 text-white font-semibold shadow hover:scale-95 hover:bg-lightBlue bg-lightBlue transition-all normal-case duration-300"
            onClick={() => {
              queryClient.cancelQueries(["gaugeData"])
            }}
          >
            Stop Loading
          </Button>
        </>
      )}
      <p className="text-xl font-semibold ml-2 my-5">
        {`Instantaneous Parameters (${selectedDevice.exhauster_name.toLowerCase()}, ${selectedDevice.asset_name.toLowerCase()}, ${
          selectedDevice.asset_location.split(" ")[0][0]
        }${selectedDevice.asset_location.split(" ")[1][0]}${
          selectedDevice.asset_location.split(" ").length === 3
            ? selectedDevice.asset_location.split(" ")[2][0]
            : ""
        })`}
      </p>
      <div className="flex mt-6">
        <div className="flex items-center gap-5 pl-2 z-10">
          <div className="flex items-center gap-2.5"></div>
        </div>
      </div>
      {thresholds && (
        <>
          <h2 className="text-xl font-semibold mx-auto w-fit mt-5 uppercase">
            Rms Value
          </h2>
          <div className="grid grid-cols-3">
            <Gauge
              name={"X Axis Acceleration"}
              gaugeData={myArray[299]}
              bands={[0, 0.5, 7.1, 11, 20]}
              label="X Axis Acceleration"
              unit="( m/s² )"
            />

            <Gauge
              name={"Y Axis Acceleration"}
              gaugeData={myArray2[299]}
              bands={[0, 0.5, 7.1, 11, 20]}
              label="Y Axis Acceleration"
              unit="( m/s² )"
            />
            <Gauge
              name={"Z Axis Acceleration"}
              gaugeData={myArray3[299]}
              bands={[0, 0.5, 7.1, 11, 20]}
              label="Z Axis Acceleration"
              unit="( m/s² )"
            />
          </div>
          <div className="grid grid-cols-3">
            <Gauge
              name={"X Axis Velocity"}
              gaugeData={myArray5[299]}
              bands={[0, 0.5, 7.1, 11, 20]}
              label="X Axis Velocity"
              unit="( m/s )"
            />
            <Gauge
              name={"Y Axis Velocity"}
              gaugeData={myArray6[299]}
              bands={[0, 0.5, 7.1, 11, 20]}
              label="Y Axis Velocity"
              unit="( m/s )"
            />
            <Gauge
              name={"Z Axis Velocity"}
              gaugeData={myArray7[299]}
              bands={[0, 0.5, 7.1, 11, 20]}
              label="Z Axis Velocity"
              unit="( m/s )"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default InstantaneousParameters
