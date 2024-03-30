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
        { 'border-r-[1px] border-white': border },
        'flex flex-col items-center px-[50px] py-[40px]',
      )}
    >
      <span className="text-[40px] font-bold text-white">{`${amount}+`}</span>
      <span className="text-[40px] font-[100] text-white">{title}</span>
    </div>
  );
}
