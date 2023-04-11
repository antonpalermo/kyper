import { api } from "@kyper/utils/api"
import { useSession } from "next-auth/react"

import Link from "next/link"
import { PlusIcon } from "@heroicons/react/24/outline"

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
      <div className="mb-3 inline-flex w-full items-center justify-between">
        <h3 className="font-medium text-slate-500">My Notes</h3>
        <button className="rounded bg-blue-500 p-2 text-white">
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-3">
          {tasks?.map(task => (
            <Link
              key={task.id}
              href={"/"}
              className="block w-full rounded bg-gray-200 px-4 py-3 text-sm font-medium tracking-wide"
            >
              {task.subject}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
