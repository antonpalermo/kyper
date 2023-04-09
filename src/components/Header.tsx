import Avatar from "@kyper/components/Avatar"
import Button from "@kyper/components/Button"

export default function Header() {
  return (
    <header>
      <div className="mx-auto w-9/12 py-5">
        <div className="inline-flex w-full items-center justify-end px-3">
          <div className="inline-flex items-center space-x-3">
            <Button accent="primary">Create</Button>
            <Avatar />
          </div>
        </div>
      </div>
    </header>
  )
}
