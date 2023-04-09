import Image from "next/image"
import { useSession } from "next-auth/react"

export default function Avatar() {
  const { data, status } = useSession()

  if (status !== 'authenticated') {
    return <div className="h-10 w-10 rounded-full bg-gray-300" />
  }

  return (
    <Image
      className="rounded-full"
      src={data?.user.image || ""}
      alt="user avatar"
      width={40}
      height={40}
    />
  )
}
