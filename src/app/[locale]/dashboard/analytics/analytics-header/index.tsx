import { ActivityIcon } from '@/components/assets/activity-icon';
import { DocumentsIcon } from '@/components/assets/documents-icon';
import { InactivityIcon } from '@/components/assets/inactivity-icon';
import { WalletIcon } from '@/components/assets/wallet-icon';
import { formatNumber } from '@/utils/formatData';

type Params = {
  purchaseAmount: string;
  totalWarranties: string;
  activeWarranties: string;
  expiredWarranties: string;
};

export default function AnalyticsHeader({
  purchaseAmount,
  totalWarranties,
  activeWarranties,
  expiredWarranties,
}: Params) {
  const analyticsHeader = [
    {
      id: 1,
      icon: <WalletIcon width={70} height={70} />,
      amount: `${formatNumber(1249.0)}₾`,
      title: purchaseAmount,
    },
    {
      id: 2,
      icon: <DocumentsIcon width={70} height={70} />,
      amount: 1,
      title: totalWarranties,
    },
    {
      id: 3,
      icon: <ActivityIcon width={70} height={70} />,
      amount: 1,
      title: activeWarranties,
    },
    {
      id: 4,
      icon: <InactivityIcon width={70} height={70} />,
      amount: 0,
      title: expiredWarranties,
    },
  ];

  return (
    <section className="grid gap-[10px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
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
