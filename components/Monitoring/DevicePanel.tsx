import MoreVertIcon from "@mui/icons-material/MoreVert"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import useDeviceStore from "../../store/device"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Button, Tooltip } from "@mui/material"
import { showNotification } from "@mantine/notifications"
import { useEffect, useState } from "react"
import axios from "axios"
import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress"
import LinearProgress from "@mui/material/LinearProgress"
import SendIcon from "@mui/icons-material/Send"
import Stack from "@mui/material/Stack"
let interval: NodeJS.Timeout | undefined
import { useContext } from "react"
import { AppContext } from "./AppContext"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
///////////////////////////////////
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
///////////////////////////////////////
interface dataFormProps {
  createCard: (part: any[]) => void
}
const val = false

const DevicePanel = ({ createCard = (part: any[]) => {} }: dataFormProps) => {
  const { selectedDevice } = useDeviceStore()
  const [part, setPart] = useState([])
  const { myBoolean, setMyBoolean } = useContext(AppContext)

  ////////////////////////////// EXTRAS STARTED
  const [open, setOpen] = React.useState(false)
  const [opens, setOpens] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [loading, setLoading] = React.useState(true)
  ////////////////////////////////
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)
  const [string, setString] = React.useState(
    "6d7f45c0-3039-11ed-81ef-d732cfd46ac3"
  )
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

  React.useEffect(() => {
    /////////////////////
    ////////////////////////check
    useDeviceStore.getState().reset()
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])
  //////////////////////////////EXTRAS ENDED
  const changeHandler = () => {
    createCard(part)
    setOpen(false)
  }

  const changesHandler = (check: any[]) => {
    createCard(check)
  }

  //////////////////////////////////

  ////////////////
  useEffect(() => {
    setString(selectedDevice.asset_id)
  })

  useEffect(() => {
    setOpen(true)
    setLoading(true)
    setString(selectedDevice.asset_id)
    console.log("device changed ")
    console.log("device changed ")

    console.log("device changed ")

    console.log("device changed ")

    console.log("device changed ")

    console.log("device changed ")
    console.log("and id is ")
    console.log(selectedDevice.asset_id)

    console.log("device changed ")

    console.log("device changed ")

    console.log("device changed ")

    console.log("device changed ")

    console.log("device changed ")

    const article = { title: selectedDevice?.asset_id }
    axios
      .post("http://103.154.184.52:4000/api/threshold/rms", article)
      .then((response) => {
        setPart(response.data)
        setLoading(false)
      })
  }, [selectedDevice])

  ///////////////////////////////////ADDED CODE IS HERE

  // useEffect(() => {
  //   //////////////////////////////////////////
  //   const startTimer = () => {
  //     console.log("timer is running abhi bhi")
  //     if (myBoolean) {
  //       console.log(myBoolean)
  //       return () => {
  //         clearInterval(interval)
  //       }
  //     }
  //     interval = setInterval(() => {
  //       if (myBoolean) {
  //         return () => {
  //           clearInterval(interval)
  //         }
  //       }
  //       // Code to run every second
  //       const article = { title: selectedDevice?.asset_id }
  //       axios
  //         .post("http://localhost:4000/api/threshold/rms", article)
  //         .then((response) => {
  //           console.log("i want to chevk thjis response")
  //           console.log("i want to chevk this response")
  //           console.log("i want to chevk this response")
  //           console.log(response.data[0].asset_id)
  //           console.log(selectedDevice.asset_id)
  //           console.log(string)
  //           console.log("i want to chevk this response")
  //           console.log("i want to chevk thiconsole.logs response")
  //           console.log("i want to chevk this response")
  //           console.log("i want to chevk this response")

  //           /////////////////////////////////////////////////
  //           setOpens(false)
  //           if (myBoolean) {
  //             return () => {
  //               clearInterval(interval)
  //             }
  //           }
  //           if (!open && !myBoolean) {
  //             if (
  //               response.data[0].asset_id === selectedDevice.asset_id &&
  //               string === response.data[0].asset_id
  //             ) {
  //               console.log("here is the checking response")
  //               console.log("here is the checking response")
  //               console.log("here is the checking response")
  //               console.log(response.data[0].asset_id)
  //               console.log(selectedDevice.asset_id)
  //               console.log(string)
  //               console.log("here is the checking response")
  //               console.log("here is the checking response")
  //               changesHandler(response.data)
  //             } else {
  //               console.log("this doesnt belong to your object")
  //             }
  //           } else {
  //             return () => {
  //               clearInterval(interval)
  //             }
  //           }
  //           setOpens(true)
  //         })
  //     }, 40000)
  //   }

  //   const delayStart = () => {
  //     setTimeout(startTimer, 9000)
  //   }

  //   if (selectedDevice) {
  //     delayStart()
  //   }

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [selectedDevice, myBoolean])

  useEffect(() => {
    // Your initial code here

    // Define a function that contains the code you want to run every 30 seconds
    const fetchData = () => {
      if (myBoolean) {
        console.log(myBoolean)
        return () => {
          clearInterval(interval)
        }
      }
      const article = { title: selectedDevice?.asset_id }
      axios
        .post("http://103.154.184.52:4000/api/threshold/rms", article)
        .then((response) => {
          changesHandler(response.data)
          console.log("changes done")
        })
    }

    // Run the fetchData function immediately, and then every 30 seconds
    fetchData()
    const intervalId = setInterval(fetchData, 30000) // 30 seconds in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [selectedDevice, myBoolean])

  return (
    <div className="bg-white rounded-lg py-3 px-4 overflow-hidden h-[35%]">
      {/* HEADER  */}
      <div className="flex justify-between items-center mb-2 pl-3">
        <p className="font-semibold text-lg">Device Details</p>
        <span className="py-1.5 px-2 transition-all cursor-pointer hover:bg-gray-200 rounded-full">
          <MoreVertIcon className="text-lg" />
        </span>
      </div>
      <div className="flex flex-col justify-between h-80 px-3">
        <div>
          <p className="font-semibold">Asset ID</p>
          <p className={`text-lightBlue2 flex justify-between items-center`}>
            {selectedDevice?.asset_id.slice(0, 29)}...
            <CopyToClipboard
              text={selectedDevice?.asset_id}
              onCopy={() => {
                showNotification({
                  title: "User notification",
                  message: "Copied to clipboard !",
                  autoClose: 2500,
                  styles: () => ({
                    root: {
                      width: "300px",
                      padding: "12.5px 5px 20px 22px",
                      "&::before": { backgroundColor: "#1340E8" },
                    },
                  }),
                })
              }}
            >
              <Tooltip
                title="Copy"
                arrow
                classes={{
                  tooltip: "bg-gray-200 text-black",
                  arrow: "text-gray-200",
                }}
              >
                <Button className="min-w-fit">
                  <ContentCopyIcon className="text-lg cursor-pointer" />
                </Button>
              </Tooltip>
            </CopyToClipboard>
          </p>
        </div>
        <div>
          <p className="font-semibold">Asset Mac ID</p>
          <p className="text-infoCardDarkGreen flex justify-between items-center">
            {selectedDevice?.asset_mac_id}
            <CopyToClipboard
              text={selectedDevice?.asset_mac_id}
              onCopy={() => {
                showNotification({
                  title: "User notification",
                  message: "Copied to clipboard !",
                  autoClose: 2500,
                  styles: () => ({
                    root: {
                      width: "300px",
                      padding: "12.5px 5px 20px 22px",
                      "&::before": { backgroundColor: "#1340E8" },
                    },
                  }),
                })
              }}
            >
              <Tooltip
                title="Copy"
                arrow
                classes={{
                  tooltip: "bg-gray-200 text-black",
                  arrow: "text-gray-200",
                }}
              >
                <Button className="min-w-fit">
                  <ContentCopyIcon className="text-lg cursor-pointer" />
                </Button>
              </Tooltip>
            </CopyToClipboard>
          </p>
        </div>
        <div>
          <p className="font-semibold">Exhauster Name</p>
          <p className="text-gray-400">{selectedDevice?.exhauster_name}</p>
        </div>
        <div>
          <p className="font-semibold">Asset Name</p>
          <p className="text-gray-400">{selectedDevice?.asset_name}</p>
        </div>
        <div>
          <p className="font-semibold">Asset Location</p>
          <p className="text-gray-400">{selectedDevice?.asset_location}</p>
        </div>
      </div>
      <div></div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          {loading && (
            <LinearProgress
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
            />
          )}
          <Stack direction="row" spacing={2}>
            {!loading && (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={changeHandler}
              >
                Show Data
              </Button>
            )}
          </Stack>
        </Box>
      </Modal>
      <Snackbar open={opens} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Data updated
        </Alert>
      </Snackbar>
    </div>
  )
}

export default DevicePanel

export const stopTimer = () => {
  clearInterval(interval)
}
