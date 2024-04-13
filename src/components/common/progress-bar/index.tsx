import { SfProgressLinear, SfProgressLinearProps } from '@storefront-ui/react';
import classNames from 'classnames';

export default function ProgressBar({
  className,
  ...rest
}: SfProgressLinearProps) {
  return (
    <SfProgressLinear
      className={classNames(
        'w-full overflow-hidden rounded-[12px] bg-slate-300 !text-primary-200',
        className,
      )}
      value={60}
      size="xs"
      {...rest}
    />
  );
}
