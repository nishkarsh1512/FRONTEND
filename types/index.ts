export interface IRootState {
  devices: IDevice[]
  auth: IAuth
  user: IUserState
}

export interface IDevices {
  devices: IDevice[]
  loaded: boolean
}

export interface IDevice {
  asset_id: string
  exhauster_name: string
  asset_name: string
  asset_location: string
  asset_mac_id: string
}

export interface IAuth {
  user: IUser | null
}

export interface IUserState {
  users: IUser[]
  loaded: boolean
}

export interface IUser {
  _id: string
  name: string
  email: string
  role: string
  phone: string
  profileImage: string
  token: string
}

export interface ITimeWaveFormData {
  asset_id: string
  end_time: string
  start_time: string
  data: {
    X_Axis_Acceleration_Time_Waveform: number[]
    Y_Axis_Acceleration_Time_Waveform: number[]
    Z_Axis_Acceleration_Time_Waveform: number[]
  }
}

export interface GaugeDoc {
  X_Axis_Acceleration_Time_Waveform: number
  Y_Axis_Acceleration_Time_Waveform: number
  Z_Axis_Acceleration_Time_Waveform: number
}

export interface GaugeData {
  avg: GaugeDoc
  max: GaugeDoc
  rms: GaugeDoc
}

export interface IThresholds {
  _id: string
  X_Axis_Acceleration_Time_Waveform: IThreshold
  Y_Axis_Acceleration_Time_Waveform: IThreshold
  Z_Axis_Acceleration_Time_Waveform: IThreshold
  X_Axis_Velocity_Time_Waveform: IThreshold
  Y_Axis_Velocity_Time_Waveform: IThreshold
  Z_Axis_Velocity_Time_Waveform: IThreshold
  X_Axis_Acceleration_FFT: IThreshold
  Y_Axis_Acceleration_FFT: IThreshold
  Z_Axis_Acceleration_FFT: IThreshold
  X_Axis_Velocity_FFT: IThreshold
  Y_Axis_Velocity_FFT: IThreshold
  Z_Axis_Velocity_FFT: IThreshold
}

export interface IThreshold {
  start: number
  normal: number
  caution: number
  warning: number
  end: number
}
