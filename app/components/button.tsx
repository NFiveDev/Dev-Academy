type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonProps = {
  children: JSX.Element;
  variant: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const GetBtnSizeClass = () => {};

const GetBtnColorScheme = (variant: ButtonVariant) => {
  if (variant === 'outline') return '';
  return '';
};

export function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    type = 'button',
  } = props;
  return (
    <button
      onClick={onClick}
      type={props.type}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'
    >
      Submit
    </button>
  );
}
