import { RefreshIcon } from '@/components/assets/refresh-icon';

export default function Footer() {
  return (
    <footer className="h-[260px] bg-primary-100 px-[25px]  pt-[60px] lg:px-[60px]">
      <div className="grid grid-cols-1 gap-[20px] text-white lg:grid-cols-3">
        <div className="flex justify-center pb-[30px]">
          <div className="flex h-[60px] w-[270px]  ">
            <img
              className="h-full w-full object-fill"
              src="/images/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="flex items-center  gap-[20px] text-[14px] lg:text-[16px]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>+(995)579186940</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-[20px] ">
          <RefreshIcon width="40px" />
          <RefreshIcon width="40px" />
        </div>
      </div>
    </footer>
  );
}
