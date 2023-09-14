import { useEffect, useState } from "react"
import { Modal, TextInput } from "@mantine/core"
import { useAppStateContext } from "../../../context/contextProvider"
import { BsFillPersonFill, BsShieldLockFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri"
import Link from "next/link"
import { useRouter } from "next/router"
import { CircularProgress, Checkbox, FormControlLabel } from "@mui/material"
import { showNotification } from "@mantine/notifications"
import { useQuery } from "@tanstack/react-query"
import axiosConfig from "../../../config/axiosConfig"
import useAuthStore from "../../../store/auth"

type Props = {}

const LoginModal = (props: Props) => {
  const router = useRouter()

  const { me, setMe } = useAuthStore()

  //@ts-ignore
  const { loginModalActive, setLoginModalActive } = useAppStateContext()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [passVisibility, setPassVisibility] = useState(false)

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { isFetching, refetch: loginUser } = useQuery(
    ["login"],
    async () =>
      axiosConfig
        .post(`http://103.154.184.52:4000/api/users/login`, formData)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      enabled: false,
      onSuccess: (data) => {
        setMe(data)
        setLoginModalActive(false)
      },
      onError: (error) => {
        console.error("Login Error", error)

        showNotification({
          title: "User notification",
          message: "Incorrect Credentials !",
          autoClose: false,
          styles: () => ({
            root: {
              width: "300px",
              padding: "12.5px 5px 20px 22px",
              "&::before": { backgroundColor: "#FF0022" },
            },
          }),
        })
      },
    }
  )

  useEffect(() => {
    if (me) {
      setLoginModalActive(false)

      router.push("/monitoring", undefined, { shallow: true })

      showNotification({
        title: "User notification",
        message: "You're logged in !",
        autoClose: 5000,
        styles: () => ({
          root: {
            width: "300px",
            padding: "12.5px 5px 20px 22px",
            "&::before": { backgroundColor: "#1340E8" },
          },
        }),
      })
    }
  }, [me])

  return (
    <Modal
      opened={loginModalActive}
      onClose={() => setLoginModalActive(false)}
      classNames={{ modal: "h-25-rem", close: "z-10" }}
    >
      <div className="w-full flex flex-col items-center justify-center relative bottom-24">
        <span className="p-4 bg-themeBlue1 rounded-full landing-bg">
          <BsFillPersonFill size={42.5} color="white" />
        </span>
        <h1 className="font-bold text-2xl tracking-wide">Member Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            loginUser()
          }}
          className="w-full sm:px-8"
        >
          <TextInput
            placeholder="E-Mail"
            name="email"
            type="email"
            value={formData.email}
            icon={<GrMail size={20} className="text-lightBlue2" />}
            className="my-8 rounded-full shadow-inputTheme overflow-hidden py-1.5 px-2"
            classNames={{ input: "border-none" }}
            onChange={onFormChange}
            autoComplete="email"
          />
          <TextInput
            placeholder="Password"
            name="password"
            type={passVisibility ? "text" : "password"}
            value={formData.password}
            icon={<BsShieldLockFill size={20} className="text-lightBlue2" />}
            className="mt-8 mb-3 rounded-full shadow-inputTheme overflow-hidden py-1.5 px-2"
            rightSection={
              passVisibility ? (
                <RiEyeFill
                  size={20}
                  className="z-10 cursor-pointer text-lightBlue2"
                  onClick={() => {
                    setPassVisibility(!passVisibility)
                  }}
                />
              ) : (
                <RiEyeCloseLine
                  size={20}
                  className="z-10 cursor-pointer text-lightBlue2"
                  onClick={() => {
                    setPassVisibility(!passVisibility)
                  }}
                />
              )
            }
            classNames={{ input: "border-none" }}
            onChange={onFormChange}
            autoComplete="current-password"
          />
          <div className="px-3 mb-7 flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
              classes={{
                label: "cursor-pointer text-sm",
                root: "checked:bg-lightBlue2 cursor-pointer",
              }}
            />
            <Link href="#">
              <span className="text-sm text-lightBlue2 hover:underline">
                Forgot password?
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="landing-bg p-3 font-semibold text-white shadow-inputTheme rounded-full text-sm w-[220px] h-[45px] transition-all hover:scale-95 hover:shadow-logCard"
              type="submit"
            >
              {isFetching ? (
                <CircularProgress
                  classes={{ circle: "text-white" }}
                  size={20}
                  thickness={5}
                />
              ) : (
                " LOGIN IN"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default LoginModal
