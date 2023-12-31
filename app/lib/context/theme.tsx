'use client'

import { Dispatch, createContext, useEffect, useReducer } from "react"

type themeState = {
  documentElement: Element | undefined | null;
  mode: string;
}

const initState: themeState = {
  documentElement: null,
  mode: 'dark'
}

type themeAction = {
  type: string;
  payload?: any;
}

const themeReducer = (state: themeState, action: themeAction) => {
  switch (action.type) {
    case 'enable-darkmode': {
      localStorage.setItem('theme', 'dark')
      return {
        ...state,
        mode: 'dark'
      }
    }
    case 'disable-darkmode': {
      localStorage.removeItem('theme')
      return {
        ...state,
        mode: 'light'
      }
    }
    case 'add-document-element':
      return {
        ...state,
        documentElement: action.payload
      }
    default:
      throw Error('Theme Action Type Unknown!')
  }
}

export const ThemeContext = createContext<themeState | null>(null);
export const ThemeDispatchContext = createContext<Dispatch<themeAction> | null>(null);

export function ThemeProvider(props: { children: JSX.Element | JSX.Element[] }) {
  const [theme, dispatch] = useReducer(themeReducer, initState);

  
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}