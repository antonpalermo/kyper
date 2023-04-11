import { type ReactNode, createContext, useState, useContext } from "react"

type ModalContextProp = {
  isOpen: boolean
  toggle: () => void
}

const ModalContext = createContext<ModalContextProp | undefined>(undefined)

export function useModal() {
  const context = useContext(ModalContext)
  if (typeof context === "undefined") {
    throw new Error("ModalContext is undefined")
  }
  return context
}

export interface ModalProviderProps {
  children: ReactNode
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggle() {
    setIsOpen(prev => !prev)
  }

  return (
    <ModalContext.Provider value={{ toggle, isOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
