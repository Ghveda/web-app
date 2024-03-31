'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

type Props = {
  text: string;
  elementId: string;
};

export default function MenuItem({ text, elementId }: Props) {
  const pathname = usePathname();

  const scrollToElement = () => {
    const targetRef = document.getElementById(elementId);
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <li
      onClick={scrollToElement}
      className={classNames(
        { '!border-white': pathname === elementId },
        'cursor-pointer border-b-[1px] border-transparent text-white',
      )}
    >
      {text}
    </li>
  );
}
