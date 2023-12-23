'use client'

import Link from "next/link";
import Divider from "./divider";
import { ThemeToggle } from "./themeToggle";
import { usePathname } from "next/navigation";

function MobileNavigation() {
  return (
    <></>
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
              <h1 className="text-white">Dev Academy</h1>
            </div>
          </Link>
          <div className="flex flex-row">
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