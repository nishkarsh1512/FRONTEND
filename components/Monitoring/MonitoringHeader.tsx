import React, { useState } from "react"
import { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Box } from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined"
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined"

const MonitoringHeader = () => {
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [timeDuration, setTimeDuration] = useState("Realtime")

  return (
    <div className="bg-white flex items-center justify-between py-2.5 px-5 mt-5 rounded">
      <h3 className="text-xl text-[#303a4e] font-semibold">Monitoring</h3>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5">
          <span className="font-medium text-[#303a4e]">START</span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Date&Time picker"
              value={startTime}
              inputFormat="DD/MM/YYYY hh:mm A"
              onChange={(value) => {
                //@ts-ignore
                console.log("Start time -> ", new Date(value.$d).toISOString())
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
                    style={{ border: "none", outline: "none", width: "155px" }}
                  />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-medium text-[#303a4e]">END</span>
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
                    style={{ border: "none", outline: "none", width: "155px" }}
                  />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="flex items-center gap border rounded shadow pl-2.5 pr-4 w-40">
          <HistoryToggleOffOutlinedIcon className="text-[#757575]" />
          <Select
            value={timeDuration}
            variant="standard"
            classes={{
              select: "w-20 relative left-2 focus:bg-white",
              icon: "relative right-2",
            }}
            className="py-2  "
            disableUnderline={true}
            onChange={(event) => {
              setTimeDuration(event.target.value)
            }}
           autoWidth={false}
           MenuProps={{
             classes: {
               paper: "w-[187.5px] mt-4",
             }
           }}
          >
            {[
              "Realtime",
              "12 Hours",
              "Today",
              "1 Week",
              "1 Month",
            ].map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
        <button className="shadow border py-2 px-3 rounded-md transition-all duration-300 hover:scale-105 bg-lightBlue text-white bg-opacity-90 hover:bg-opacity-100">
          <RefreshOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default MonitoringHeader
