import { type ButtonHTMLAttributes } from "react"
import { cva, cx, type VariantProps } from "class-variance-authority"

export type ButtonVariants = VariantProps<typeof buttonVariants>
export const buttonVariants = cva("text-sm px-3 py-2 rounded tracking-wide", {
  variants: {
    accent: {
      primary: "bg-green-500 text-white"
    },
    outlined: {
      true: "bg-none border"
    }
  },
  defaultVariants: {}
})

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants

export default function Button({ accent, className, ...props }: ButtonProps) {
  return (
    <button className={cx(buttonVariants({ accent, className }))} {...props} />
  )
}
