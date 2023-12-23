import Image from 'next/image'

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
            <div className="px-0 lg:px-20">
              <h2 className="text-lg lg:text-2xl font-base text-slate-500">Engaging in interactive projects that bridge the gap between
                theory and real-world application</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-y-4 lg:gap-y-0 gap-x-4 mt-4">
              <a href="/course">
                <button className="flex flex-row gap-x-2 items-center bg-emerald-600 hover:bg-emerald-500 py-2 px-4 rounded-lg">
                  <p className="text-lg text-slate-800 font-medium">Get started</p>
                  <div className="bg-emerald-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
                      className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              </a>
              <a href="/course">
                <button className="flex flex-row gap-x-2 items-center bg-slate-600 hover:bg-slate-500 py-2 px-4 rounded-lg">
                  <p className="text-lg text-slate-800 font-medium">Watch intro</p>
                  <div className="bg-slate-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
