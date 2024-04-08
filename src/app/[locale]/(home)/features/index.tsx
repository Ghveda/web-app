import { AlertIcon } from '@/components/assets/alert-icon';
import { ClickIcon } from '@/components/assets/click-icon';
import { FixIcon } from '@/components/assets/fix-icon';
import { LoopIcon } from '@/components/assets/loop-icon';
import { MonitorIcon } from '@/components/assets/monitor-icon';
import { RefreshIcon } from '@/components/assets/refresh-icon';
import { SecureIcon } from '@/components/assets/secure-icon';
import { TransportIcon } from '@/components/assets/transport-icon';
import Title from '@/components/common/title';

export default function Features() {
  const iconWidthVar = 80;
  const serviceCardsArr = [
    {
      id: 1,
      icon: <RefreshIcon width={iconWidthVar} />,
      title: 'Sync With 1000+ Partners',
      description: `Seamlessly connect and sync your warranty information from over 1000 partners such as:Stores, Manufactures, Service providers, Delivery companies.`,
    },
    {
      id: 2,
      icon: <LoopIcon width={iconWidthVar} />,
      title: 'Hassle-Free Warranty Management',
      description: `Never lose track of your warranties again with our ntuitive
                  and easy-to-use platform.`,
    },
    {
      id: 3,
      icon: <AlertIcon width={iconWidthVar} />,
      title: 'Expiration Reminder Notifications',
      description: `      Receive timely notifications to ensure you stay informed about
                  upcoming warranty expirations.`,
    },
    {
      id: 4,
      icon: <ClickIcon width={iconWidthVar} />,
      title: 'One-Click Warranty Claim Submission',
      description: `You can claim the issue with just a click and request warranty
                  service through the platform..`,
    },
    {
      id: 5,
      icon: <TransportIcon width={iconWidthVar} />,
      title: 'Integrated Delivery Service',
      description: ` lake avantage or our Integrated delivery service for
                  convenient shipping and handling of warrianty items.`,
    },
    {
      id: 6,
      icon: <MonitorIcon width={iconWidthVar} />,
      title: 'Monitoring and Planning After Claim Process',
      description: `After your item is being taken, by Courier, you can track at
                  what stage the repair service is, when it will be done and
                  plan the delivery through the platform.`,
    },
    {
      id: 7,
      icon: <SecureIcon width={iconWidthVar} />,
      title: 'Warranty Extension Purchases',
      description: `Extend your warranty coverage effortlessly by purchasing
                  warranty extensions through our platform from the
                  manufacturer.`,
    },
    {
      id: 8,
      icon: <FixIcon width={iconWidthVar} />,
      title: 'Repair service',
      description: `If you hadn't bought extended warranty and your product have
                  been broken down you can choose and get service from our
                  trusted repair service providers.`,
    },
  ];

  return (
    <section className="section-devider" id="features">
      <div className="my-[30px] lg:my-[60px]">
        <Title
          text="Features"
          color="#155284"
          subTitle="What makes Warrio the best warranty product management app"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {serviceCardsArr.map((serviceCard) => (
          <div
            key={serviceCard.id}
            className="features-holder m-[10px] flex flex-row "
          >
            <div className="item-left flex">
              <div className="shrink-0">{serviceCard.icon}</div>
              <div className="features-text mx-[10px] flex flex-col gap-[10px]">
                <h4 className="text-[14px] font-medium text-primary-100 lg:text-[22px] ">
                  {serviceCard.title}
                </h4>
                <p className="text-[10px] font-[350] text-primary-100 opacity-30 lg:text-[14px]">
                  {serviceCard.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
