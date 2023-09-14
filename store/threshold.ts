import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { IThresholds } from "../types"

interface ThresholdState {
  thresholds: IThresholds
  setThresholds: (thresholds: IThresholds) => void
  reset: () => void
}

const useThresholdStore = create<ThresholdState>()(
  devtools(
    // persist(
    (set) => ({
      thresholds: {
        X_Axis_Acceleration_FFT: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        X_Axis_Acceleration_Time_Waveform: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        X_Axis_Velocity_FFT: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        X_Axis_Velocity_Time_Waveform: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Y_Axis_Acceleration_FFT: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Y_Axis_Acceleration_Time_Waveform: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Y_Axis_Velocity_FFT: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Y_Axis_Velocity_Time_Waveform: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Z_Axis_Acceleration_FFT: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Z_Axis_Acceleration_Time_Waveform: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Z_Axis_Velocity_FFT: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        Z_Axis_Velocity_Time_Waveform: {
          start: 0,
          normal: 2,
          caution: 4,
          warning: 8,
          end: 10,
        },
        _id: "63d7aca3175537059f6e4ef9",
      },
      setThresholds: (thresholds: IThresholds) => set(() => ({ thresholds })),
      reset: () =>
        set(() => ({
          thresholds: {
            X_Axis_Acceleration_FFT: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            X_Axis_Acceleration_Time_Waveform: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            X_Axis_Velocity_FFT: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            X_Axis_Velocity_Time_Waveform: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Y_Axis_Acceleration_FFT: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Y_Axis_Acceleration_Time_Waveform: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Y_Axis_Velocity_FFT: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Y_Axis_Velocity_Time_Waveform: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Z_Axis_Acceleration_FFT: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Z_Axis_Acceleration_Time_Waveform: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Z_Axis_Velocity_FFT: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            Z_Axis_Velocity_Time_Waveform: {
              start: 0,
              normal: 2,
              caution: 4,
              warning: 8,
              end: 10,
            },
            _id: "63d7aca3175537059f6e4ef9",
          },
        })),
    }),
    {
      name: "threshold-storage",
    }
  )
)

export default useThresholdStore
