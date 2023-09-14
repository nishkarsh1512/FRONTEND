import { ITimeWaveFormData } from "../types"

export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1)
}

export const regexForm = {
  firstname: /^[A-Za-z]{4,35}$/,
  lastname: /^[A-Za-z]{4,35}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  mailAddress: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
}

export const getAppendedTimeWaveFormArray = (
  timeWaveFormData: ITimeWaveFormData[],
  property: ("X_Axis_Acceleration_Time_Waveform" | "Y_Axis_Acceleration_Time_Waveform" | "Z_Axis_Acceleration_Time_Waveform")
): number[] => {
  let appendedArray: number[] = []

  timeWaveFormData.forEach((item) => {
    appendedArray.push(...item?.data[property])
  })

  return appendedArray
}
