import Link from 'next/link';
import AuthModal from './auth-modal';
import Menu from './menu';

type Params = {
  locale: string;
};

export default function Header({ locale }: Params) {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 h-[110px] w-full  bg-primary-100 px-[50px] py-[30px]">
      <div className="flex flex-row items-center justify-between">
        <Link href={`/${locale}`} className="h-[41px] w-[161px]">
          <img
            className="h-full w-full object-fill"
            src="/assets/images/logo.png"
            alt="Logo"
          />
        </Link>
        <div className="flex flex-row items-center justify-end gap-[120px]">
          <Menu />
          <div className="flex flex-row items-center gap-[20px]">
            <div>
              <Link href={locale === 'en' ? '/ka' : '/en'}>
                <span className="hidden max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-[700] text-white md:inline">
                  {locale?.toLocaleUpperCase()}
                </span>
              </Link>
            </div>
            <AuthModal />
          </div>
        </div>
      </div>
    </header>
  );
}
