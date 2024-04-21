import FbIcon from '@/components/assets/fb-icon';
import LinkedinIcon from '@/components/assets/linkedin-icon';

export default function Footer() {
  return (
    <footer className="flex bg-primary-100 px-[25px]  md:h-[180px] md:px-[60px]">
      <div className="flex flex-1 flex-col items-center justify-between gap-[30px] py-[30px] text-white md:flex-row md:py-0">
        <div className="flex justify-center">
          <div className="flex h-[41px] w-[161px]">
            <img
              className="h-full w-full object-fill"
              src="/images/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col items-center gap-[10px] text-[14px]  lg:flex-row lg:gap-[20px] lg:text-[16px]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>+(995)579186940</li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center gap-[20px] md:flex-col lg:flex-row ">
          <FbIcon width="40px" />
          <LinkedinIcon width="40px" />
        </div>
      </div>
    </footer>
  );
}
