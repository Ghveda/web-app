import classNames from 'classnames';

type Props = {
  text: string;
  color: string;
  subTitle?: string;
};

export default function Title({ text, color, subTitle }: Props) {
  const lineStyle = ['h-[1px] w-[90px]'];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <div
          className={classNames(lineStyle)}
          style={{ backgroundColor: color }}
        />
        <span style={{ color: color }} className="text-[40px] font-bold">
          {text}
        </span>
        <div
          className={classNames(lineStyle)}
          style={{ backgroundColor: color }}
        />
      </div>
      {subTitle && (
        <span className="text-[14px] font-[100] text-white">{subTitle}</span>
      )}
    </div>
  );
}
