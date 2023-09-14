import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { IUser } from "../types"

interface AuthState {
  me: IUser | null
  setMe: (me: IUser) => void
  reset: () => void
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        me: null,
        setMe: (me: IUser) => set(() => ({ me })),
        reset: () => set(() => ({ me: null })),
      }),
      {
        name: "auth-storage",
      }
    )
  )
)


export default useAuthStore
