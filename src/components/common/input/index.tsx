import classNames from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  variant?: 'primary' | 'secondary' | 'third';
  error?: string;
};
const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, variant, error, ...rest }, ref) => {
    const primaryStyle = ['bg-primary-100 border-white text-white'];
    const secondaryStyle = ['bg-white border-primary-100 text-primary-100'];
    const thirdStyle = [
      '!border-t-0 !border-l-0 !border-r-0 border-b-[1px] !rounded-none',
    ];

    const inputStyle = classNames([
      'rounded-[8px] border-[1px] p-[8px] outline-none',
      [...(variant === 'secondary' ? secondaryStyle : [])],
      [...(variant === 'primary' ? primaryStyle : [])],
      [...(variant === 'third' ? thirdStyle : [])],
      className,
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
