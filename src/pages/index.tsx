import Head from "next/head"
import Header from "@kyper/components/Header"
import Sidenav from "@kyper/components/Sidenav"

export default function Home() {
  return (
    <main className="relative">
      <Head>
        <title>Kyper - Home</title>
      </Head>
      <Header />
      <div className="mx-auto w-11/12">
        <Sidenav />
      </div>
    </main>
  )
}
