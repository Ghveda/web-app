import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: 'primary' | 'secondary';
};

export default function Button({
  className,
  variant,
  children,
  ...rest
}: Props) {
  const primaryStyle = ['bg-primary-100 border-white text-white'];
  const secondaryStyle = ['bg-white border-primary-100 text-primary-100'];

  const buttonStyle = classNames([
    [...(variant === 'secondary' ? secondaryStyle : [])],
    [...(variant === 'primary' ? primaryStyle : [])],

    className,
    'rounded-[8px] border-[1px] p-[8px] outline-none disabled:opacity-75 disabled:cursor-not-allowed',
  ]);
  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
}
