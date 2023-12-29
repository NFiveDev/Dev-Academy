'use client'

import Link from "next/link";
import Divider from "./divider";
import { ThemeToggle } from "./themeToggle";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiXMark } from 'react-icons/hi2';

function MobileNavigation() {

  const [open, setOpen] = useState(false);

  const drawerMargin = open ? 'mr-0' : '-mr-[250px]';

  return (
    <>
      <button onClick={() => setOpen(true)} className="static lg:hidden mx-2">
        <HiBars3 className='text-slate-800 dark:text-slate-300 w-8 h-8' />
      </button>

      <div className="transition-all ease-in-out duration-500">
        <div className={`absolute block lg:hidden bg-slate-800 w-[250px] top-0 right-0 bottom-0 ${drawerMargin}`}>
          <div className="py-2">
            <button className="" onClick={() => setOpen(false)}>
              <HiXMark className="text-emerald-400 w-10 h-10" />
            </button>
          </div>
          <ul className="">
            <li className="border-t border-slate-500 text-center py-1">
              <Link href={'/course'}><span className='text-emerald-500 font-semibold text-xl'>Courses</span></Link>
            </li>
            <li className="border-t border-slate-500 text-center py-1">
              <Link href={'/resources'}><span className='text-emerald-500 font-semibold text-xl'>Resources</span></Link>
            </li>
            <li className="border-t border-slate-500 text-center py-1 border-b">
              <Link href={'/about'}><span className='text-emerald-500 font-semibold text-xl'>About</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

function DesktopNavigation() {
  const currentPath = usePathname();
  const isLinkActive = (key: string) => {

    return key === currentPath;
  }

  const tailLinkClass = 'text-emerald-500 font-semibold';
  const tailCurrentLinkClass = 'text-slate-500 font-semibold';

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-2">
        <li>
          <Link href={'/course'}><span className={isLinkActive('/course') ? tailCurrentLinkClass : tailLinkClass}>Courses</span></Link>
        </li>
        <li>
          <Link href={'/resources'}><span className={isLinkActive('/resources') ? tailCurrentLinkClass : tailLinkClass}>Resources</span></Link>
        </li>
        <li>
          <Link href={'/about'}><span className={isLinkActive('/about') ? tailCurrentLinkClass : tailLinkClass}>About</span></Link>
        </li>
      </ul>
    </nav>
  )
}

function NavBar() {
  return (
    <header className="border-slate-600 border-b">
      <div className="max-w-screen-2xl mx-auto py-4">
        <div className="flex flex-row justify-between">
          <Link href={'/'}>
            <div>
              <h1 className="text-slate-500 dark:text-white">Dev Academy</h1>
            </div>
          </Link>
          <div className="flex flex-row items-center">
            <ThemeToggle />
            <Divider />
            <DesktopNavigation />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;