export default function Divider({ horizontal = false, padding = 0 }: { horizontal?: boolean, padding?: 0 | 2 | 4 }) {

  const tailDividerElementCalc = () => {
    switch (padding) {
      case 0:
        return horizontal === true ? 'w-full ' : <hr className='border-slate-500 border-r h-full mx-2' />
      case 2:
        return horizontal === true ? '' : <hr className='border-slate-500 border-r h-full my-2' />
      case 4:
        return horizontal === true ? '' : <hr className='border-slate-500 border-r h-full my-4' />
    }
  }

  let resultEle = tailDividerElementCalc();

  return resultEle;
}