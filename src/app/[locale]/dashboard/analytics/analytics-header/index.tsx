import { ActivityIcon } from '@/components/assets/activity-icon';
import { DocumentsIcon } from '@/components/assets/documents-icon';
import { InactivityIcon } from '@/components/assets/inactivity-icon';
import { WalletIcon } from '@/components/assets/wallet-icon';
import { formatNumber } from '@/utils/formatData';

export default function AnalyticsHeader() {
  const analyticsHeader = [
    {
      id: 1,
      icon: <WalletIcon width={70} height={70} />,
      amount: `${formatNumber(1249.0)}₾`,
      title: 'Purchase amount',
    },
    {
      id: 2,
      icon: <DocumentsIcon width={70} height={70} />,
      amount: 1,
      title: 'Total warranties',
    },
    {
      id: 3,
      icon: <ActivityIcon width={70} height={70} />,
      amount: 1,
      title: 'Active Warranties',
    },
    {
      id: 4,
      icon: <InactivityIcon width={70} height={70} />,
      amount: 0,
      title: 'Expired Warranties',
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-[10px]">
      {analyticsHeader.map((analyticsItem) => (
        <div
          key={analyticsItem.id}
          className="flex flex-row gap-[24px] rounded-[12px] border-[1px] border-black p-[12px]"
        >
          <div className="h-[70px] w-[70px]">{analyticsItem.icon}</div>
          <div className="flex flex-col">
            <span className="text-[24px] font-medium">
              {analyticsItem.amount}
            </span>
            <span className="font-thin">{analyticsItem.title}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
