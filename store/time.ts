import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import moment, { Moment } from "moment"

interface TimeState {
  tw_startTime: string
  set_tw_StartTime: (startTime: string) => void
  tw_endTime: string
  set_tw_EndTime: (endTime: string) => void
  ip_Time: string
  set_ip_Time: (startTime: string) => void
  reset: () => void
}

const useTimeStore = create<TimeState>()(
  devtools(
    (set) => ({
      tw_startTime: moment().subtract(1, "days").format(),
      set_tw_StartTime: (tw_startTime: string) => set(() => ({ tw_startTime })),
      tw_endTime: moment().format(),
      set_tw_EndTime: (tw_endTime: string) => set(() => ({ tw_endTime })),
      ip_Time: moment().subtract(1, "days").format(),
      set_ip_Time: (ip_Time: string) => set(() => ({ ip_Time })),

      reset: () =>
        set(() => ({
          tw_startTime: moment().subtract(1, "days").format(),
          tw_endTime: moment().format(),
          ip_startTime: moment().subtract(1, "days").format(),
          ip_endTime: moment().format(),
        })),
    }),
    {
      name: "time-storage",
    }
  )
)

export default useTimeStore
