import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  variant?: 'primary' | 'secondary';
  error?: string;
};
const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, variant, error, ...rest }, ref) => {
    const primaryStyle = ['bg-primary-100 border-white text-white'];
    const secondaryStyle = ['bg-white border-primary-100 text-primary-100'];

    const inputStyle = classNames([
      [...(variant === 'secondary' ? secondaryStyle : [])],
      [...(variant === 'primary' ? primaryStyle : [])],
      className,
      'rounded-[8px] border-[1px] p-[8px] outline-none',
    ]);

    return (
      <div className="flex flex-col">
        <input ref={ref} className={inputStyle} {...rest} />
        {error && <span className="text-[14px] text-red-100">{error}</span>}
      </div>
    );
  },
);

export default Input;
