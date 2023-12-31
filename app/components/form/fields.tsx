import { UseFormRegister } from 'react-hook-form';

type TextFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  type: 'email' | 'password' | 'text';
  register: UseFormRegister<any>;
};

export function TextField(props: TextFieldProps) {
  return (
    <div className='mb-5'>
      <label
        htmlFor={props.id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-emerald-300'
      >
        {props.label}
      </label>
      <input
        {...props.register(props.id)}
        type={props.type}
        id={props.id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={props.placeholder}
      />
    </div>
  );
}
