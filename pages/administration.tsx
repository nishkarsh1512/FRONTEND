import { Button, Stack, Tooltip } from "@mui/material"
import axiosConfig from "../config/axiosConfig"
import DashboardLayout from "../layout/dashboard"
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined"
import AddIcon from "@mui/icons-material/Add"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import PersonIcon from "@mui/icons-material/Person"
import dynamic from "next/dynamic"
import { useQuery } from "@tanstack/react-query"
import useUserStore from "../store/user"
const AdministrationHeader = dynamic(
  () => import("../components/Administration/AdministrationHeader"),
  {
    ssr: false,
  }
)

const columns: GridColDef[] = [
  {
    field: "user",
    headerName: "NAME",

    flex: 1,
    sortable: false,
    align: "left",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <div className="image flex gap-2 items-center ml-5">
          <img
            src={cellValues.formattedValue?.profileImage}
            className="rounded-full w-[50px] h-[50px] object-cover"
            alt="user profile image"
          />
          <p className="font-semibold text-black">
            {cellValues.formattedValue?.name}
          </p>
        </div>
      )
    },
  },
  {
    field: "email",
    headerName: "EMAIL",

    flex: 1,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <a
          className="font-semibold text-lightBlue hover:underline transition-all"
          href={"mailto:" + cellValues.formattedValue}
          target="_blank"
          rel="noreferrer"
        >
          {cellValues.formattedValue}
        </a>
      )
    },
  },
  {
    field: "phone",
    headerName: "PHONE",
    type: "string",

    flex: 1,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <p className="font-semibold text-black">{cellValues.formattedValue}</p>
      )
    },
  },
  {
    field: "role",
    headerName: "ROLE",
    type: "string",

    flex: 1,
    sortable: false,
    align: "center",
    headerAlign: "center",

    renderCell: (cellValues) => {
      return (
        <div
          className={`flex items-center gap-1 ${
            cellValues.formattedValue === "Admin"
              ? "text-infoCardDarkGreen"
              : "text-lightBlue"
          }`}
        >
          {cellValues.formattedValue === "Admin" ? (
            <AdminPanelSettingsIcon />
          ) : (
            <PersonIcon />
          )}
          <p className="font-semibold">{cellValues.formattedValue}</p>
        </div>
      )
    },
  },
  {
    field: "id",
    headerName: "ID",
    type: "string",

    flex: 1,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <p className="font-semibold text-black">{cellValues.formattedValue}</p>
      )
    },
  },
]

const Administration = () => {
  const { users, setUsers } = useUserStore()

  const { data, isLoading, error } = useQuery(
    ["users"],
    async () => {
      return axiosConfig
        .get(`http://103.154.184.52:4000/api/users/all`)
        .then((res) => res.data)
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onSuccess: (data) => {
        setUsers(data)
      },
    }
  )

  return (
    <DashboardLayout>
      <AdministrationHeader />
      <div className="mt-5 px-2 bg-white rounded">
        <div className="flex items-center px-5 py-4 justify-between">
          <div className="flex items-center">
            <h1 className="font-bold leading-10" style={{ fontSize: "27.5px" }}>
              Users
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip
              title="Import Data"
              arrow
              placement="top"
              // gutter={50}
            >
              <Button
                variant="contained"
                startIcon={<UploadOutlinedIcon />}
                className="normal-case bg-lightBlue hover:bg-lightBlue text-white py-1.5"
              >
                Import Data
              </Button>
            </Tooltip>
            <Tooltip
              title="New Register"
              arrow
              placement="top"
              // gutter={50}
            >
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                className="normal-case bg-lightBlue hover:bg-lightBlue text-white py-1.5"
              >
                Create New
              </Button>
            </Tooltip>
          </div>
        </div>
        <hr className="mx-5 bg-white" />
        <DataGrid
          classes={{
            root: "mx-5",
            sortIcon: "hidden",
            columnHeaderTitle:
              "text-textGray1 leading-[1.6] tracking-[.9px] font-extrabold text-[10px]",
            cellContent:
              "h-[100px] min-h-[100px] max-h-[100px] text-white leading-[1.3] tracking-[.9px] font-semibold text-[12px",
            iconSeparator: "stroke-gray-300 w-[20px]",
            row: "flex items-center",
            menuIconButton: "visible ml-[-6px] w-fit",
          }}
          style={{ height: "calc(100vh - 200px)" }}
          rows={users.map((item, index) => ({
            id: item._id,
            user: {
              name: item.name,
              profileImage: item.profileImage,
            },
            email: item.email,
            phone: item.phone ? item.phone : "null",
            role: item.role,
          }))}
          columns={columns}
          disableSelectionOnClick
          pageSize={10}
          rowsPerPageOptions={[10]}
          components={{
            NoRowsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                No Users
              </Stack>
            ),
          }}
        />
      </div>
    </DashboardLayout>
  )
}

export default Administration
