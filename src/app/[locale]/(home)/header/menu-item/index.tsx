'use client';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  text: string;
  path: string;
};

export default function MenuItem({ text, path }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li
      onClick={() => router.push(path)}
      className={classNames(
        { '!border-white': pathname === path },
        'cursor-pointer border-b-[1px] border-transparent text-white',
      )}
    >
      {text}
    </li>
  );
}
