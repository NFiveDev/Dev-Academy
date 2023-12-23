import { ThemeContext, ThemeDispatchContext } from "@/context/theme";
import { useContext, useEffect, useState } from "react";

export default function useTheme() {
  const [domElement, setDomElement] = useState<Element | null>(null);
  const themeState = useContext(ThemeContext);
  const themeDispatch = useContext(ThemeDispatchContext);

  if (themeDispatch === null || themeState === null) throw Error('Use theme hook inside providers');

  const isCurrentModeDark = () => themeState.mode === 'dark';

  const toggleColorMode = () => {
    if (isCurrentModeDark()) {
      themeDispatch({ type: 'disable-darkmode' })
    } else {
      themeDispatch({ type: 'enable-darkmode' })
    }
  }

  useEffect(() => {
    const dom = document.querySelector('#dev-academy-dom');
    setDomElement(dom)
  }, []);

  useEffect(() => {
    console.log('RAN')
    if(isCurrentModeDark()) {
      domElement?.classList.add(themeState.mode);
    } else {
      domElement?.classList.remove('dark')
    }
    
  }, [themeState.mode])

  return {
    toggleColorMode: toggleColorMode
  }
}