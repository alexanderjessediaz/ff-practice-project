import { Spinner } from '../spinner/';

export const PageLoader = () => {
  return (
    <div className='w-screen h-screen flex justify-center align-middle'>
      <div className='m-auto'>
        <Spinner />
      </div>
    </div>
  );
};
