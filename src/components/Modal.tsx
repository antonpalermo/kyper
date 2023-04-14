import { XMarkIcon } from "@heroicons/react/24/outline"

export default function Modal() {
  return (
    <div
      id="hs-vertically-centered-modal"
      className="hs-overlay fixed left-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
          <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white">
              Create new
            </h3>
            <button
              type="button"
              className="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-vertically-centered-modal"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="overflow-y-auto p-4">
            <p className="text-gray-800 dark:text-gray-400">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
          <div className="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-gray-700">
            <button
              type="button"
              className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-vertically-centered-modal"
            >
              Close
            </button>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Save changes
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
