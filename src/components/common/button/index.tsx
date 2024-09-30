import { SfLoaderCircular } from '@storefront-ui/react';
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: 'primary' | 'secondary' | 'error';
  loading?: boolean;
};

export default function Button({
  className,
  variant,
  children,
  loading,
  ...rest
}: Props) {
  const primaryStyle = ['bg-primary-100 border-white text-white'];
  const secondaryStyle = ['bg-white border-primary-100 text-primary-100'];
  const errorStyle = ['bg-red-500 text-white'];

  const buttonStyle = classNames([
    [...(variant === 'secondary' ? secondaryStyle : [])],
    [...(variant === 'primary' ? primaryStyle : [])],
    [...(variant === 'error' ? errorStyle : [])],
    className,
    'rounded-[8px] border-[1px] p-[8px] outline-none disabled:opacity-75 disabled:cursor-not-allowed relative',
  ]);

  const spinnerStyle = [
    variant === 'secondary' ? '!text-primary-100' : '!text-white',
  ];

  return (
    <button className={buttonStyle} {...rest}>
      {children}
      {loading && (
        <SfLoaderCircular
          size="sm"
          className={classNames(
            spinnerStyle,
            'absolute right-[5px]  ring-primary-100/30',
          )}
        />
      )}
    </button>
  );
}
