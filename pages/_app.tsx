import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import { AppContextProvider } from "../context/contextProvider"
import { NotificationsProvider } from "@mantine/notifications"
import { useRouter } from "next/router"

import "../styles/globals.scss"
import { useEffect, useState } from "react"
import { LinearProgress } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isScreenLoading, setIsScreenLoading] = useState(false)
  const client = new QueryClient()

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsScreenLoading(true))
    router.events.on("routeChangeComplete", () => setIsScreenLoading(false))

    return () => {
      router.events.on("routeChangeStart", () => setIsScreenLoading(true))
      router.events.on("routeChangeComplete", () => setIsScreenLoading(false))
    }
  }, [])

  return (
    <AppContextProvider>
      {/* <MantineProvider> */}
      <NotificationsProvider>
        {isScreenLoading && (
          <LinearProgress
            className="absolute top-0 w-[100vw] z-50"
            style={{ zIndex: "120" }}
            classes={{ bar: "bg-lightBlue" }}
          />
        )}
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </NotificationsProvider>
      {/* </MantineProvider> */}
    </AppContextProvider>
  )
}

export default MyApp
