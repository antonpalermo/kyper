import { api } from "@kyper/utils/api"
import { useSession } from "next-auth/react"

import Link from "next/link"

function LoadingState() {
  return (
    <div className="space-y-3">
      <div className="block h-12 w-full rounded bg-gray-300 text-white" />
      <div className="block h-12 w-full rounded bg-gray-300 text-white" />
      <div className="block h-12 w-full rounded bg-gray-300 text-white" />
    </div>
  )
}

export default function Sidenav() {
  const { status } = useSession()
  const { data: tasks, isLoading } = api.task.getAll.useQuery(undefined, {
    staleTime: 1 * 60 * 1000,
    enabled: status !== "authenticated"
  })

  return (
    <div className="fixed w-60">
      <div className="mb-3">
        <h3 className="font-medium text-slate-500">Notes</h3>
      </div>
      {isLoading ? (
        <LoadingState />
      ) : (
        tasks?.map(task => (
          <Link
            key={task.id}
            href={"/"}
            className="block w-full rounded bg-blue-200 px-4 py-3"
          >
            {task.subject}
          </Link>
        ))
      )}
    </div>
  )
}
