'use client'

import useTheme from "@/hooks/useTheme"
import { useState } from "react";

export function ThemeToggle() {
  const { isLightMode, isDarkMode, enableDarkMode, disableDarkMode } = useTheme();

  const onClickHandler = () => {
    if(isDarkMode()) {
      disableDarkMode();
    } else if(isLightMode()) {
      enableDarkMode();
    }
  }

  return (
      <label  className="relative w-10 h-5 bg-slate-400 rounded-full my-auto">
        <input onClick={onClickHandler} type="checkbox" id="check" className="sr-only"/>
        <span className={`absolute h-full w-3/6 rounded-full dark:bg-slate-600  `}></span>
      </label>
    )
}