export default function About() {
  return (
    <section
      className="mt-[130px]  bg-primary-100 px-[50px] pb-[70px] pt-[130px]"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col pt-[120px]">
          <h1 className="max-w-[600px] text-[40px] font-bold text-white">
            Manage all your product warranties for free
          </h1>
          <span className="font-[100] text-white">
            Warranty notifications, extensions, repair services
          </span>
          <button className="mt-[60px] max-w-[200px] rounded-[12px] bg-yellow-400 px-[12px] py-[8px] text-[24px] text-white">
            sign up now
          </button>
        </div>
        <div className=" lg:h-[550px] lg:w-[660px]">
          <img
            src="images/phones.png"
            className="h-full w-full object-fill"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
