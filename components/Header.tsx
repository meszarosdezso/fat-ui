import { PropsWithChildren } from "react"

interface Props {
  fixed?: boolean
}

export default function Header({ children, fixed }: PropsWithChildren<Props>) {
  return (
    <header
      style={{ position: fixed ? "fixed" : "absolute" }}
      id="Header"
      className="row end py-2 px-2 wide"
    >
      {children}
    </header>
  )
}
