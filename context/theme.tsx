'use client'

import { Dispatch, createContext, useEffect, useReducer } from "react"

type themeState = {
  mode: string
}

const initState: themeState = {
  mode: 'dark'
}

type themeAction = {
  type: string;
  payload?: any;
}

const themeReducer = (state: themeState, action: themeAction) => {
  switch (action.type) {
    case 'enable-darkmode': {
      return {
        ...state,
        mode: 'dark'
      }
    }
    case 'disable-darkmode': {
      return {
        ...state,
        mode: 'light'
      }
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