import Image from 'next/image'
import Link from 'next/link'
import {HiArrowRight, HiPlay} from 'react-icons/hi2';

export default function Home() {
  return (
    <>
      <section className="">
        <div className="pt-20 lg:pt-40 px-5 lg:px-0">
          <div className="flex flex-col text-center ">
            <div
              className="text-4xl lg:text-8xl px-0 lg:px-40 font-bold bg-gradient-to-r from-emerald-700 via-emerald-500 to-violet-700  inline-block text-transparent bg-clip-text">
              <h1 className="pb-0 lg:pb-2 pt-2 ">
                The Platform</h1>
              <h1 className="pb-2 pt-1">
                to Practical Coding</h1>
            </div>
            <div className="px-0 lg:px-20 lg:pt-1">
              <h2 className="text-lg lg:text-2xl font-base text-slate-500">Engaging in interactive projects that bridge the gap between
                theory and real-world application</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-y-4 lg:gap-y-0 gap-x-5 mt-5">
              <Link href="/course">
                <button className="flex flex-row gap-x-2 items-center bg-emerald-500 hover:bg-emerald-400 py-2 px-4 rounded-lg">
                  <p className="text-lg text-slate-800 font-medium">Get started</p>
                  <div className="bg-emerald-800 rounded-full p-1">
                    <HiArrowRight className='text-white w-4 h-4' />
                  </div>
                </button>
              </Link>
              <Link href="/course">
                <button className="flex flex-row gap-x-2 items-center bg-slate-300 dark:bg-slate-500 hover:bg-slate-400 py-2 px-4 rounded-lg">
                  <p className="text-lg text-slate-800 font-medium">Watch intro</p>
                  <div className="bg-slate-800 rounded-full p-1">
                    <HiPlay className='text-white w-4 h-4' />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
