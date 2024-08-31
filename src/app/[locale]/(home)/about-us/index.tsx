import Title from '@/components/common/title';

type Params = {
  aboutUs: string;
  aboutDescOne: string;
  aboutDescTwo: string;
  aboutDescThree: string;
};

export default function AboutUs({
  aboutUs,
  aboutDescOne,
  aboutDescTwo,
  aboutDescThree,
}: Params) {
  return (
    <section className="section-devider" id="about-us">
      <div className="flex flex-col items-center justify-center">
        <Title color="#155284" text={aboutUs} />
        <div className="mt-[30px] flex flex-col-reverse justify-center gap-[50px] lg:flex-row">
          <div className="mt-[30px] h-full max-h-[420px] w-full max-w-[670px] shrink-0">
            <img
              src="https://i.postimg.cc/rwSw-cH9g/warrio.jpg"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex max-w-[650px] flex-col justify-center gap-[30px] font-[200] text-primary-100">
            <p>{aboutDescOne}</p>
            <p>{aboutDescTwo}</p>
            <p>{aboutDescThree}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
