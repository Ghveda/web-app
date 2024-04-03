import { RefreshIcon } from '@/components/assets/refresh-icon';

export default function Footer() {
  return (
    <footer className="h-[230px] bg-primary-100">
      <div className="flex justify-around gap-[200px] p-[50px] align-middle text-white">
        <div className="h-[60px] w-[270px]">
          <img
            className="h-full w-full object-fill"
            src="images/logo.png"
            alt=""
          />
        </div>
        <div className="flex">
          <ul className="justify-middle flex items-center gap-[20px]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>+(995)579186940</li>
          </ul>
        </div>
        <div className="justify-middle flex items-center gap-[20px]">
          <RefreshIcon width="40px" />
          <RefreshIcon width="40px" />
        </div>
      </div>
    </footer>
  );
}
