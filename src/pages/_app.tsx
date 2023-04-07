import { type AppType } from "next/app"
import { type Session } from "next-auth"

import { Toaster } from "react-hot-toast"
import { SessionProvider } from "next-auth/react"

import { api } from "@kyper/utils/api"

import "@kyper/styles/globals.css"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
