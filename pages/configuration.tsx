import { MenuItem, Select } from "@mui/material"
import { useState } from "react"
import Range from "../components/Configuration/Range"
import DashboardLayout from "../layout/dashboard"

const Administration = () => {
  return (
    <DashboardLayout>
      <div className="mt-5 rounded grid grid-cols-2 gap-5">
        <Range isAcc={false} />
      </div>
    </DashboardLayout>
  )
}

export default Administration
