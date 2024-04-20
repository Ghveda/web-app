import { SfLoaderCircular } from '@storefront-ui/react';
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: 'primary' | 'secondary';
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

  const buttonStyle = classNames([
    [...(variant === 'secondary' ? secondaryStyle : [])],
    [...(variant === 'primary' ? primaryStyle : [])],
    className,
    'rounded-[8px] border-[1px] p-[8px] outline-none disabled:opacity-75 disabled:cursor-not-allowed relative',
  ]);

  const spinnerStyle = [
    variant === 'primary' ? '!text-white' : '!text-primary-100',
  ];

  return (
    <button className={buttonStyle} {...rest}>
      {children}
      {loading && (
        <SfLoaderCircular
          size="sm"
          className={classNames(
            spinnerStyle,
            'absolute right-[20px]  ring-primary-100/30',
          )}
        />
      )}
    </button>
  );
}
