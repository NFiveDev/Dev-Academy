import { HiRocketLaunch } from 'react-icons/hi2';

export default async function Register() {
  return (
    <div className='relative m-auto py-36'>
      <div className='bg-slate-700 py-8 px-10 rounded-lg max-w-screen-sm min-w-96 border-emerald-600 border-2'>
        <div className='flex w-fit mx-auto p-4 rounded-full border-emerald-600 border-2'>
          <HiRocketLaunch className='text-slate-400 w-14 h-14' />
        </div>

        <div className='text-center py-2'>
          <h3 className='text-emerald-400 font-bold text-2xl'>
            Join the empire!
          </h3>
        </div>

        <form action='' className='flex flex-col'>
          <label
            htmlFor='username'
            className='mt-2 mb-1 font-bold text-emerald-500 block text-lg'
          >
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='w-full bg-slate-900 shadow-lg rounded-md py-1'
          />

          <label
            htmlFor='username'
            className='mt-2 mb-1 font-bold text-emerald-500 block text-lg'
          >
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='w-full bg-slate-900 shadow-lg rounded-md py-1'
          />

          <label
            htmlFor='username'
            className='mt-2 mb-1 font-bold text-emerald-500 block text-lg'
          >
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='w-full bg-slate-900 shadow-lg rounded-md py-1'
          />

          <button
            type='submit'
            className='bg-pink-600 hover:bg-pink-800 text-white font-medium text-lg rounded-md py-1 w-32 mt-6'
          >
            Register!
          </button>
        </form>
      </div>
    </div>
  );
}
