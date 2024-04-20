import AuthModal from './auth-modal';
import MenuItem from './menu-item';

export default function Header() {
  return (
    <header className="section-devider fixed left-0 right-0 top-0 h-[130px] w-full bg-primary-100  !pt-[30px]">
      <div className="flex flex-row items-center justify-between">
        <div className="h-[50px] w-[200px]  lg:h-[60px] lg:w-[270px]">
          <img
            className="h-full w-full object-fill"
            src="images/logo.png"
            alt="Logo"
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-[120px]">
          <div className="hidden lg:block">
            <ul className="flex flex-row gap-[50px] align-top">
              <MenuItem text="About" elementId="about" />
              <MenuItem text="Features" elementId="features" />
              <MenuItem text="Partners" elementId="partners" />
              <MenuItem text="Contact" elementId="about-us" />
            </ul>
          </div>
          <div className=" hidden flex-row items-center gap-[20px] lg:flex">
            <div>
              <span className="max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-[700] text-white">
                EN
              </span>
            </div>
            <AuthModal />
          </div>
        </div>
      </div>
    </header>
  );
}
