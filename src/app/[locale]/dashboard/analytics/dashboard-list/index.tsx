import ProgressBar from '@/components/common/progress-bar';
import { formatNumber } from '@/utils/formatData';

type Props = {
  title: string;
  total: number;
  list: {
    storeName: string;
    itemCount: number;
  }[];
};

export default function DashboardList({ title, total, list }: Props) {
  return (
    <div className="col-span-2 rounded-[12px] border-[1px] border-black bg-white p-[20px]">
      <h3 className="text-[18px] font-medium">{title}</h3>
      <div className="ga-[10px] flex flex-col">
        {list.map((listItem) => (
          <div
            key={listItem.storeName + new Date()}
            className="mt-[24px] flex flex-row items-center justify-between gap-[24px]"
          >
            <span className="w-[70px] shrink-0 text-[14px] font-thin md:w-[180px]">
              {listItem.storeName}
            </span>
            <ProgressBar
              size="xs"
              className="h-[8px]"
              value={(listItem.itemCount / total) * 100}
            />
            <span className="w-[100px] text-end text-[14px] font-thin">
              {formatNumber(listItem.itemCount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
