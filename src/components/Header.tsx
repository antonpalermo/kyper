import Avatar from "@kyper/components/Avatar"

export default function Header() {
  return (
    <header className="sticky top-0 bg-slate-50">
      <div className="mx-auto w-11/12 py-5">
        <div className="inline-flex w-full items-center justify-between px-3">
          <h1 className="rounded bg-gray-950 px-3 py-2 font-medium text-white">
            _Kyper
          </h1>
          <Avatar />
        </div>
      </div>
    </header>
  )
}
