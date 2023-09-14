import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { IUser } from "../types"

interface UsersState {
  users: IUser[]
  setUsers: (users: IUser[]) => void
  reset: () => void
}

const useUserStore = create<UsersState>()(
  devtools(
    (set) => ({
      users: [],
      setUsers: (users: IUser[]) => set(() => ({ users })),
      reset: () => set(() => ({ users: [] })),
    }),
    {
      name: "user-storage",
    }
  )
)


export default useUserStore
