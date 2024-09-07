import { AlertIcon } from '@/components/assets/alert-icon';
import { ClickIcon } from '@/components/assets/click-icon';
import { FixIcon } from '@/components/assets/fix-icon';
import { LoopIcon } from '@/components/assets/loop-icon';
import { MonitorIcon } from '@/components/assets/monitor-icon';
import { RefreshIcon } from '@/components/assets/refresh-icon';
import { SecureIcon } from '@/components/assets/secure-icon';
import { TransportIcon } from '@/components/assets/transport-icon';
import Title from '@/components/common/title';

type Params = {
  features: string;
  syncWithPartners: string;
  syncDesc: string;
  hassleFree: string;
  hassleFreeDesc: string;
  expirationReminder: string;
  expirationReminderDesc: string;
  claimSubmission: string;
  claimSubmissionDesc: string;
  deliveryService: string;
  deliveryServiceDesc: string;
  monitoringAndPlanning: string;
  monitoringAndPlanningDesc: string;
  warrantyExtension: string;
  warrantyExtensionDesc: string;
  repairService: string;
  repairServiceDesc: string;
  featuresubtitle: string;
};

export default function Features({
  features,
  syncWithPartners,
  syncDesc,
  hassleFree,
  hassleFreeDesc,
  expirationReminder,
  expirationReminderDesc,
  claimSubmission,
  claimSubmissionDesc,
  deliveryService,
  deliveryServiceDesc,
  monitoringAndPlanning,
  monitoringAndPlanningDesc,
  warrantyExtension,
  warrantyExtensionDesc,
  repairService,
  repairServiceDesc,
  featuresubtitle,
}: Params) {
  const iconWidthVar = 80;
  const serviceCardsArr = [
    {
      id: 1,
      icon: <RefreshIcon width={iconWidthVar} />,
      title: syncWithPartners,
      description: syncDesc,
    },
    {
      id: 2,
      icon: <LoopIcon width={iconWidthVar} />,
      title: hassleFree,
      description: hassleFreeDesc,
    },
    {
      id: 3,
      icon: <AlertIcon width={iconWidthVar} />,
      title: expirationReminder,
      description: expirationReminderDesc,
    },
    {
      id: 4,
      icon: <ClickIcon width={iconWidthVar} />,
      title: claimSubmission,
      description: claimSubmissionDesc,
    },
    {
      id: 5,
      icon: <TransportIcon width={iconWidthVar} />,
      title: deliveryService,
      description: deliveryServiceDesc,
    },
    {
      id: 6,
      icon: <MonitorIcon width={iconWidthVar} />,
      title: monitoringAndPlanning,
      description: monitoringAndPlanningDesc,
    },
    {
      id: 7,
      icon: <SecureIcon width={iconWidthVar} />,
      title: warrantyExtension,
      description: warrantyExtensionDesc,
    },
    {
      id: 8,
      icon: <FixIcon width={iconWidthVar} />,
      title: repairService,
      description: repairServiceDesc,
    },
  ];

  return (
    <section className="section-devider" id="features">
      <div className="my-[30px] lg:my-[60px]">
        <Title text={features} color="#155284" subTitle={featuresubtitle} />
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
                <p className="text-[10px] font-[350] text-primary-100 opacity-60 lg:text-[14px]">
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
