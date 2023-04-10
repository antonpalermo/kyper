import Avatar from "@kyper/components/Avatar"

export default function Header() {
  return (
      <header className="bg-slate-50 sticky top-0">
        <div className="mx-auto w-11/12 py-5">
          <div className="inline-flex w-full items-center justify-end px-3">
            <Avatar />
          </div>
        </div>
      </header>
  )
}
