'use client'

import useTheme from "@/hooks/useTheme"
import { HiSun, HiMoon } from 'react-icons/hi2';

export function ThemeToggle() {
  const { isLightMode, isDarkMode, enableDarkMode, disableDarkMode } = useTheme();

  const onClickHandler = () => {
    if (isDarkMode()) {
      disableDarkMode();
    } else if (isLightMode()) {
      enableDarkMode();
    }
  }

  return (
    <button onClick={onClickHandler} className='mx-2 lg:mx-0 transition-all ease-in-out duration-300 dark:bg-gray-700 bg-gray-200 hover:bg-gray-400 cursor-pointer rounded-full h-fit p-1'>
      {isLightMode() && <HiSun className='text-yellow-400' />}
      {isDarkMode() && <HiMoon className='text-blue-600' />}
    </button>
    // <label  className="relative w-10 h-5 bg-slate-400 rounded-full my-auto">
    //   <input onClick={onClickHandler} type="checkbox" id="check" className="sr-only"/>
    //   <span className={`absolute h-full w-3/6 rounded-full dark:bg-slate-600  `}></span>
    // </label>
  )
}