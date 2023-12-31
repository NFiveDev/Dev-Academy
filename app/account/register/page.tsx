import { HiRocketLaunch } from 'react-icons/hi2';
import SignUpForm from './signupform';

export default function Register() {
  return (
    <div className='relative m-auto py-36'>
      <div className='bg-slate-700 py-4 lg:py-8 px-4 lg:px-10 min-w-60 rounded-lg max-w-screen-md border-emerald-600 border-2'>
        <div className='flex w-fit mx-auto p-4 rounded-full border-emerald-600 border-2'>
          <HiRocketLaunch className='text-slate-300 w-14 h-14' />
        </div>

        <div className='text-center py-2'>
          <h3 className='text-slate-400 font-bold text-2xl'>
            Join the empire!
          </h3>
        </div>

        <div className='py-4'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
