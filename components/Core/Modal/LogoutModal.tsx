import { Button, Divider, IconButton, Modal } from "@mui/material"
import { useAppStateContext } from "../../../context/contextProvider"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { useRouter } from "next/router"
import useAuthStore from "../../../store/auth"
import useUserStore from "../../../store/user"

const LogoutModal = () => {
  // @ts-ignore
  const { logoutModalActive, setLogoutModalActive } = useAppStateContext()
  const { reset: resetMe } = useAuthStore()
  const { reset: resetUsers } = useUserStore()

  const router = useRouter()

  const onLogout = () => {
    resetMe()
    resetUsers()
    router.push("/")
    setLogoutModalActive(false)
  }

  return (
    <Modal
      open={logoutModalActive}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center justify-center"
    >
      <div className="bg-white w-[500px] m-auto rounded">
        <div className="p-[1rem] flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <ErrorOutlineOutlinedIcon
              className="text-lightBlue"
              fontSize="large"
            />
            <span className="font-semibold">Confirm Logout</span>
          </div>
          <IconButton
            aria-label="delete"
            size="medium"
            className="p-0"
            onClick={() => setLogoutModalActive(false)}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </IconButton>
        </div>
        <Divider />
        <div className="py-[1rem] px-[1.5rem] flex items-center w-full">
          Are you sure you want to Logout ?
        </div>
        <Divider />
        <div className="py-[1rem] px-[1.5rem] flex items-center gap-2 justify-end w-full">
          <Button
            variant="contained"
            className="bg-lightBlue hover:bg-lightBlue px-7"
            onClick={onLogout}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            className="text-lightBlue border-gray-300 hover:border-gray-300 px-7"
            onClick={() => setLogoutModalActive(false)}
          >
            No
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default LogoutModal
