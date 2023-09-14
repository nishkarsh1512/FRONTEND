import LogoutModal from "../components/Core/Modal/LogoutModal"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Sidebar from "../components/Core/Sidebar/Sidebar"
import useAuthStore from "../store/auth"
import React from "react"
// import useGetThresholds from "../pages/hooks/useGetThresholds"

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { me } = useAuthStore()
  // useGetThresholds(Boolean(me))

  useEffect(() => {
    if (!me) {
      router.push("/")
    }
  }, [me])

  return (
    <div className="h-screen relative overflow-hidden flex flex-row justify-start bg-bodyBgGrey1">
      <Sidebar />
      <div className="w-full overflow-y-scroll ml-20">
        <div className="px-7">{children}</div>
      </div>
      <LogoutModal />
    </div>
  )
}

export default Layout
