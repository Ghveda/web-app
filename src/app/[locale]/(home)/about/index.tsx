import SignUp from './sign-up';

type Params = {
  manageProducts: string;
  warrantyNotifications: string;
  signUpNow: string;
};

export default function About({
  manageProducts,
  warrantyNotifications,
  signUpNow,
}: Params) {
  return (
    <section
      className="section-devider bg-primary-100 px-[50px] !pt-[180px] "
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-[5px] lg:pt-[120px]">
          <h1 className="max-w-[600px] text-[40px] font-bold text-white">
            {manageProducts}
          </h1>
          <h3 className="font-[100] text-white">{warrantyNotifications}</h3>
          <SignUp signUpNow={signUpNow} />
        </div>
        <div className="m-auto max-h-[400px] max-w-[500px]">
          <img
            src="https://i.postimg.cc/Wbm4cK88/photo1.png"
            className="h-full w-full object-fill"
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
}
