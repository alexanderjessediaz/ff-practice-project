import React from 'react';

type IconProps = {
  className: string;
  title?: string;
  onClick?: () => void;
};

export const SpinnerIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      x-description='Heroicon name: Spinner'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  );
};

export const CloseIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='31'
      stroke='currentColor'
      height='31'
      viewBox='0 0 31 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.5 29C22.9558 29 29 22.9558 29 15.5C29 8.04416 22.9558 2 15.5 2C8.04416 2 2 8.04416 2 15.5C2 22.9558 8.04416 29 15.5 29Z'
        stroke='black'
        strokeWidth='2.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.55 11.45L11.45 19.55'
        stroke='black'
        strokeWidth='2.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.45 11.45L19.55 19.55'
        stroke='black'
        strokeWidth='2.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CaretDownIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      x-description='Heroicon name: chevron-down'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
    >
      <path
        fillRule='evenodd'
        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export const MenuIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      ></path>
    </svg>
  );
};

export const PlusIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 2V22'
        stroke='black'
        strokeWidth='2.85714'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 12H22'
        stroke='black'
        strokeWidth='2.85714'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const PencilIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 1.82843C16.2626 1.56578 16.5744 1.35744 16.9176 1.2153C17.2608 1.07316 17.6286 1 18 1C18.3714 1 18.7392 1.07316 19.0824 1.2153C19.4256 1.35744 19.7374 1.56578 20 1.82843C20.2626 2.09107 20.471 2.40287 20.6131 2.74603C20.7553 3.0892 20.8284 3.45699 20.8284 3.82843C20.8284 4.19986 20.7553 4.56766 20.6131 4.91082C20.471 5.25398 20.2626 5.56578 20 5.82843L6.5 19.3284L1 20.8284L2.5 15.3284L16 1.82843Z'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const AddImageIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='currentColor'
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' />
    </svg>
  );
};

export const UploadIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 6L10 1L5 6'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 1V13'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
