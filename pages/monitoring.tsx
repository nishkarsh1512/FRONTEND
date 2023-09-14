import { NoSsr } from "@mui/material"
import Head from "next/head"
import OptionsDrawer from "../components/Core/DrawerButton/OptionsDrawer"
import DevicePanel from "../components/Monitoring/DevicePanel"
import FftChart from "../components/Monitoring/FftChart"
import InstantaneousParameters from "../components/Monitoring/InstantaneousParameters"
import MaintenanceIndex from "../components/Monitoring/MaintenanceIndex"
import TrendHistory from "../components/Monitoring/TimeWaveformChart"
import DashboardLayout from "../layout/dashboard"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import useDeviceStore from "../store/device"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Button, Tooltip } from "@mui/material"
import { showNotification } from "@mantine/notifications"
import { useEffect, useState } from "react"
import { AppProvider } from "../components/Monitoring/AppContext"
import axios from "axios"

const test = []

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const Monitoring = () => {
  const [sample, setSample] = useState<{ name: any[] }>({
    name: [],
  })
  const generateCard = (part: any[]) => {
    console.log("card generated")
    console.log(part)
    setSample({ name: part })
    console.log("generate card")
  }

  ///////////////////////////////////////////////////////TIMER FUNCTION TEST
  ///////////////////////////////////////////////////
  /////////////////////////////////////////////////
  ////////////////////////////////////////////////

  /////////////////////////////////////////////////
  //////////////////////////////////////////////////
  ///////////////////////////////////////////
  const [myBoolean, setMyBoolean] = useState(false)
  ////////////////////////////////////
  console.log(sample)
  return (
    <DashboardLayout>
      <AppProvider value={{ myBoolean, setMyBoolean }}>
        <Head>
          <title>EyeVib</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="grid grid-cols-4 gap-4 py-5">
          <div className="flex-col flex col-span-3 gap-4 ">
            <TrendHistory data={[sample]} />
            <FftChart data={[sample]} />
          </div>
          <div className="flex flex-col gap-4 justify-between max-h-[1230px]">
            <MaintenanceIndex data={[sample]} />
            <NoSsr>
              <DevicePanel createCard={generateCard} />
            </NoSsr>
          </div>
          <div className="col-span-4">
            <InstantaneousParameters data={[sample]} />
          </div>
        </div>
        <OptionsDrawer />
      </AppProvider>
    </DashboardLayout>
  )
}

export default Monitoring
