import { ThemeContext, ThemeDispatchContext } from "@/context/theme";
import { useContext } from "react";

export default function useTheme() {

  const themeState = useContext(ThemeContext);
  const themeDispatch = useContext(ThemeDispatchContext);

  if(themeDispatch === null || themeState === null) throw Error('Use theme hook inside providers');

  

}