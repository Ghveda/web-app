import classNames from 'classnames';

type Props = {
  amount: number;
  title: string;
  border: boolean;
};

export default function PartnersInfomation({ amount, title, border }: Props) {
  return (
    <div
      className={classNames(
        {
          'border-b-[1px] border-white lg:border-b-0 lg:border-r-[1px]': border,
        },
        'flex shrink-0 flex-col items-center px-[50px] py-[40px]',
      )}
    >
      <span className="text-[30px] font-bold text-white">{`${amount}+`}</span>
      <span className="text-center text-[30px] font-[100] text-white lg:whitespace-nowrap">
        {title}
      </span>
    </div>
  );
}
