export default function About() {
  return (
    <section
      className="section-devider bg-primary-100 px-[50px] !pt-[180px] "
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-[5px] lg:pt-[120px]">
          <h1 className="max-w-[600px] text-[40px] font-bold text-white">
            Manage all your product warranties for free
          </h1>
          <h3 className="font-[100] text-white">
            Warranty notifications, extensions, repair services
          </h3>
          <button className="mb-[80px] mt-[80px] max-w-[200px] rounded-[10px] bg-yellow-400 px-[12px] py-[8px] text-[24px] uppercase text-white">
            sign up now
          </button>
        </div>
        <div className=" lg:h-[450px] lg:w-[560px]">
          <img
            src="images/phones.png"
            className="h-full w-full object-fill"
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
}
