import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  variant: 'primary' | 'secondary';
};
const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, variant, ...rest }, ref) => {
    const primaryStyle = ['bg-primary-100 border-white text-white'];
    const secondaryStyle = ['bg-white border-primary-100 text-primary-100'];

    const inputStyle = classNames([
      [...(variant === 'secondary' ? secondaryStyle : primaryStyle)],
      className,
      'rounded-[8px] border-[1px] p-[8px] outline-none',
    ]);

    return <input ref={ref} className={inputStyle} {...rest} />;
  },
);

export default Input;
