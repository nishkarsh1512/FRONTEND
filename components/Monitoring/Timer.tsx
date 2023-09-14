// TimerManager.ts
let interval: NodeJS.Timeout | null = null
import axios from "axios"

export const startTimer = (selectedDevice: any, changesHandler: Function) => {
  if (!interval) {
    interval = setInterval(() => {
      // Code to run every second
      const article = { title: selectedDevice?.asset_id }
      axios
        .post("http://localhost:4000/api/threshold/rms", article)
        .then((response) => {
          console.log(response.data)
          if (!open) {
            changesHandler(response.data)
          } else {
            stopTimer()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }, 40000)
  }
}

export const stopTimer = () => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}
