import { ThemeContext, ThemeDispatchContext } from "@/context/theme";
import { useContext, useEffect, useState } from "react";

export default function useTheme() {
  const [domElement, setDomElement] = useState<Element | null>(null);
  const themeState = useContext(ThemeContext);
  const themeDispatch = useContext(ThemeDispatchContext);

  if (themeDispatch === null || themeState === null) throw Error('Use theme hook inside providers');

  const isCurrentModeDark = () => themeState.mode === 'dark';
  const isCurrentModeLight = () => themeState.mode === 'light';

  useEffect(() => {
    const dom = document.querySelector('#dev-academy-dom');
    setDomElement(dom)
  }, []);

  useEffect(() => {
    if(isCurrentModeDark()) {
      domElement?.classList.add('dark')
    }
    
    if(isCurrentModeLight()) {
      domElement?.classList.remove('dark')
    }
  }, [themeState.mode])

  const enableDarkMode = () => {
    themeDispatch({type: 'enable-darkmode'});
  }

  const disableDarkMode = () => {
    themeDispatch({type: 'disable-darkmode'});
  }

  

  return {
    isLightMode: isCurrentModeLight,
    isDarkMode: isCurrentModeDark,
    enableDarkMode: enableDarkMode,
    disableDarkMode: disableDarkMode,
  }
}