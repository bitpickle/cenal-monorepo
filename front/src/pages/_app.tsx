import { useEffect } from "react";

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    {children}
  )
}