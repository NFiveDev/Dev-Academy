import { ThemeProvider } from "./theme";

export default function Providers({children} : {children: JSX.Element | JSX.Element[]}) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}