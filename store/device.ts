import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { IDevice } from "../types"

interface DeviceState {
  selectedDevice: IDevice
  setSelectedDevice: (device: IDevice) => void
  reset: () => void
}

const useDeviceStore = create<DeviceState>()(
  devtools(
    // persist(
      (set) => ({
        selectedDevice: {
          asset_id: "6d7f45c0-3039-11ed-81ef-d732cfd46ac3",
          exhauster_name: "Exhauster 1",
          asset_name: "MOTOR",
          asset_location: "DRIVE END",
          asset_mac_id: "040D844CE549",
        },
        setSelectedDevice: (device: IDevice) =>
          set(() => ({ selectedDevice: device })),
        reset: () =>
          set(() => ({
            selectedDevice: {
              asset_id: "6d7f45c0-3039-11ed-81ef-d732cfd46ac3",
              exhauster_name: "Exhauster 1",
              asset_name: "MOTOR",
              asset_location: "DRIVE END",
              asset_mac_id: "040D844CE549",
            },
          })),
      }),
      {
        name: "device-storage",
      }
    // )
  )
)

export default useDeviceStore
