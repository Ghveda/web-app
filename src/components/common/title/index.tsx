import classNames from 'classnames';

type Props = {
  text: string;
  color: string;
  subTitle?: string;
};

export default function Title({ text, color, subTitle }: Props) {
  const lineStyle = ['h-[1px] lg:w-[90px] w-[30px]'];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <div
          className={classNames(lineStyle)}
          style={{ backgroundColor: color }}
        />
        <span
          style={{ color: color }}
          className="whitespace-nowrap text-[40px] font-bold"
        >
          {text}
        </span>
        <div
          className={classNames(lineStyle)}
          style={{ backgroundColor: color }}
        />
      </div>
      {subTitle && (
        <span
          style={{
            color: color,
          }}
          className="my-[20px] text-[12px] font-[100] text-white lg:text-[16px]"
        >
          {subTitle}
        </span>
      )}
    </div>
  );
}
