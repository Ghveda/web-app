import ProgressBar from '@/components/common/progress-bar';
import { formatNumber } from '@/utils/formatData';

type Props = {
  title: string;
  total: number;
  list: {
    id: number;
    title: string;
    value: number;
  }[];
};

export default function DashboardList({ title, total, list }: Props) {
  return (
    <div className="col-span-2 rounded-[12px] border-[1px] border-black bg-white p-[20px]">
      <h3 className="text-[18px] font-medium">{title}</h3>
      <div className="ga-[10px] flex flex-col">
        {list.map((listItem) => (
          <div
            key={listItem.id}
            className="mt-[24px] flex flex-row items-center justify-between gap-[24px]"
          >
            <span className="w-[180px] shrink-0 text-[14px] font-thin">
              {listItem.title}
            </span>
            <ProgressBar
              size="xs"
              className="h-[8px]"
              value={(listItem.value / total) * 100}
            />
            <span className="w-[100px] text-end text-[14px] font-thin">
              {formatNumber(listItem.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
