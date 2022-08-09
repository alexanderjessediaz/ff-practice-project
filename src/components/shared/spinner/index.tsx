import { SpinnerIcon } from '../icons';

type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className = 'text-app-dark-purple' }: SpinnerProps) => {
  const spinnerClassName = `animate-spin h-5 w-5 ${className}`;
  return <SpinnerIcon className={spinnerClassName} />;
};
