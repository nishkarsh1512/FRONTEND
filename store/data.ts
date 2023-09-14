import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { GaugeData } from "../types"

interface DataState {
  timeWaveForm: any[]
  setTimeWaveForm: (timeWaveForm: any[]) => void
  gaugeData: GaugeData
  setGaugeData: (gaugeData: GaugeData) => void
  reset: () => void
}

const useDataStore = create<DataState>()(
  devtools(
    (set) => ({
      timeWaveForm: [],
      setTimeWaveForm: (timeWaveForm: any[]) => set(() => ({ timeWaveForm })),
      gaugeData: {
        avg: {
          X_Axis_Acceleration_Time_Waveform: 0,
          Y_Axis_Acceleration_Time_Waveform: 0,
          Z_Axis_Acceleration_Time_Waveform: 0,
        },
        max: {
          X_Axis_Acceleration_Time_Waveform: 0,
          Y_Axis_Acceleration_Time_Waveform: 0,
          Z_Axis_Acceleration_Time_Waveform: 0,
        },
        rms: {
          X_Axis_Acceleration_Time_Waveform: 0,
          Y_Axis_Acceleration_Time_Waveform: 0,
          Z_Axis_Acceleration_Time_Waveform: 0,
        },
      },
      setGaugeData: (gaugeData: GaugeData) => set(() => ({ gaugeData })),
      reset: () =>
        set(() => ({
          timeWaveForm: [],
          fft: [],
          gaugeData: {
            avg: {
              X_Axis_Acceleration_Time_Waveform: 0,
              Y_Axis_Acceleration_Time_Waveform: 0,
              Z_Axis_Acceleration_Time_Waveform: 0,
            },
            max: {
              X_Axis_Acceleration_Time_Waveform: 0,
              Y_Axis_Acceleration_Time_Waveform: 0,
              Z_Axis_Acceleration_Time_Waveform: 0,
            },
            rms: {
              X_Axis_Acceleration_Time_Waveform: 0,
              Y_Axis_Acceleration_Time_Waveform: 0,
              Z_Axis_Acceleration_Time_Waveform: 0,
            },
          },
        })),
    }),
    {
      name: "data-storage",
    }
  )
)

export default useDataStore
