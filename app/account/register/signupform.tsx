'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@/app/components/form/fields';

interface ISignUpFormInput {
  username: string;
  email: string;
  password: string;
}

export default function SignUphtmlForm() {
  return (
    <form className='max-w-md mx-auto'>
      <TextField
        type='email'
        label='Your email'
        id='email'
        placeholder='yourmail@devacademy.com'
        required
      />

      <TextField
        type='password'
        label='Your password'
        id='password'
        placeholder='yourmail@devacademy.com'
        required
      />

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'
      >
        Submit
      </button>
    </form>
  );
}
