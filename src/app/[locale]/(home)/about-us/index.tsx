import Title from '@/components/common/title';

export default function AboutUs() {
  return (
    <section className="p-[50px]" id="about-us">
      <div>
        <Title color="#155284" text="About us" />
        <div className="mt-[30px] flex flex-col-reverse justify-center gap-[50px] lg:flex-row">
          <div className="h-full max-h-[420px] w-full max-w-[670px] shrink-0">
            <img
              src="https://st.depositphotos.com/2309453/3448/i/450/depositphotos_34484227-stock-photo-motivated-successful-business-team.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex max-w-[650px] flex-col justify-center gap-[50px] font-[200] text-primary-100">
            <p>
              Warrio is a newly launched Georgian startup designed to help users
              efficiently manage all their possessions.
            </p>
            <p>
              By integrating with both physical and online partner stores,
              Warrio assists both individuals and companies in maximizing the
              benefits from their purchased items.
            </p>
            <p>
              Warrio offers a convenient way to store and monitor warranty
              documents in one place, claim if an item breaks down and access
              delivery services. It also sends notifications about warranty
              expirations and facilitates the purchase of extensions. Even if
              you haven't bought an extension and your item breaks, it's not a
              problem; with just a click, you can access repair services, too
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
