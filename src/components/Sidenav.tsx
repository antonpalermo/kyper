import { Bars3BottomLeftIcon, PlusIcon } from "@heroicons/react/24/outline"
import { api } from "@kyper/utils/api"
import { useSession } from "next-auth/react"
import Link from "next/link"

export function SidenavToggle() {
  return (
    <div className="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6 md:px-8 lg:hidden">
      <div className="flex items-center py-4">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600"
          data-hs-overlay="#application-sidebar-dark"
          aria-controls="application-sidebar-dark"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export function LoadingState() {
  return (
    <ul className="animate-pulse space-y-3">
      <li className="h-5 w-full rounded-md bg-gray-200 py-2 dark:bg-gray-700"></li>
      <li className="h-5 w-full rounded-md bg-gray-200 py-2 dark:bg-gray-700"></li>
      <li className="h-5 w-full rounded-md bg-gray-200 py-2 dark:bg-gray-700"></li>
      <li className="h-5 w-full rounded-md bg-gray-200 py-2 dark:bg-gray-700"></li>
    </ul>
  )
}

export default function Sidenav() {
  const { status } = useSession()
  const { data, isLoading } = api.notes.getAll.useQuery(undefined, {
    staleTime: 5 * 60 * 1000,
    enabled: status !== "unauthenticated"
  })

  return (
    <div
      id="application-sidebar-dark"
      className="hs-overlay hs-overlay-open:translate-x-0 scrollbar-y fixed bottom-0 left-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-r pb-10 pt-7 transition-all duration-300 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
    >
      <div className="mb-5 px-6">
        <a
          className="flex-none text-xl font-semibold"
          href="#"
          aria-label="Brand"
        >
          Kyper
        </a>
      </div>
      <nav
        className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
        data-hs-accordion-always-open
      >
        <div className="mb-5 inline-flex w-full items-center justify-between">
          <h1 className="text-sm font-semibold text-slate-500">Notes</h1>
          <button
            className="rounded bg-indigo-500 p-1 text-white"
            data-hs-overlay="#hs-vertically-centered-modal"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        {isLoading ? (
          <LoadingState />
        ) : (
          <ul className="space-y-1.5">
            {data?.map(note => (
              <Link
                key={note.id}
                className="block rounded-md bg-gray-100 px-2.5 py-2 text-sm font-medium"
                href="/"
              >
                {note.subject}
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </div>
  )
}
