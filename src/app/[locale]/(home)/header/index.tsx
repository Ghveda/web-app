import MenuItem from './menu-item';

export default function Header() {
  return (
    <header className="bg-primary-100 fixed left-0 right-0 top-0 h-[130px] w-full px-[50px] pt-[30px]">
      <div className="flex flex-row items-center justify-between">
        <div className="h-[60px] w-[270px]">
          <img
            className="h-full w-full object-fill"
            src="images/logo.png"
            alt=""
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-[120px]">
          <div>
            <ul className="flex flex-row gap-[50px] align-top">
              <MenuItem text="About" elementId="about" />
              <MenuItem text="Features" elementId="features" />
              <MenuItem text="Partners" elementId="partners" />
              <MenuItem text="Contact" elementId="about-us" />
            </ul>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <div>
              <span className="max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-[700] text-white">
                EN
              </span>
            </div>
            <div>
              <span className="max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-white">
                Sign in | up
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
