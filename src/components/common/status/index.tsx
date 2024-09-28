import { ActiveStatusIcon } from '@/components/assets/active-status-icon';
import { ExpiredStatusIcon } from '@/components/assets/expired-status-icon';
import { PendingStatusIcon } from '@/components/assets/pending-status-icon';
import { StatusType } from '@/types/models';
import { SVGProps } from 'react';

export default function Status({
  status,
  svgProps,
}: {
  status: StatusType;
  svgProps?: SVGProps<SVGSVGElement>;
}) {
  let icon;

  switch (status) {
    case 'approved':
      icon = <ActiveStatusIcon {...svgProps} />;
      break;
    case 'pending':
      icon = <PendingStatusIcon {...svgProps} />;
      break;
    default:
      icon = <ExpiredStatusIcon {...svgProps} />;
      break;
  }
  return <div>{icon}</div>;
}
