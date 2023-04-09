import Header from "@kyper/components/Header"
import Head from "next/head"

export default function Home() {
  return (
    <main>
      <Head>
        <title>Kyper - Home</title>
      </Head>
      <Header />
      <div className="relative mx-auto w-9/12">
        <h2>Tasks</h2>
      </div>
    </main>
  )
}
