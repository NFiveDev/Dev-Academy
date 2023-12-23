import Link from "next/link";
import Divider from "./divider";
import { ThemeToggle } from "./themeToggle";

function MobileNavigation() {
  return (
    <></>
  )
}

function DesktopNavigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-2">
        <li>
          <Link href={'/course'}><span className='text-emerald-500 font-bold'>Courses</span></Link>
        </li>
        <li>
          <Link href={'/resources'}><span className="text-emerald-500 font-bold">Resources</span></Link>
        </li>
        <li>
          <Link href={'/about'}><span className="text-emerald-500 font-bold">About</span></Link>
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
          <div>
            <h1 className="text-white">Dev Academy</h1>
          </div>
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