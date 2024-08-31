import Title from '@/components/common/title';
import PartnersInfomation from './partners-infomation';
import ContactUS from './partners-infomation/contact-us';

const partnersInfomationArr = [
  {
    id: 1,
    amount: 100,
    title: 'home.retailers',
    border: true,
  },
  {
    id: 2,
    amount: 50,
    title: 'home.manufacturers',
    border: true,
  },
  {
    id: 3,
    amount: 50,
    title: 'home.service-providers',
    border: true,
  },
  {
    id: 4,
    amount: 5,
    title: 'home.delivery-servces',
    border: false,
  },
];

type Params = {
  partners: string;
  partnersSubTitle: string;
  becomeThem: string;
  ourPartnersBenefit: string;
  enhanancedCustomer: string;
  marketingAnalytics: string;
  crossSelling: string;
  remarketing: string;
};

export default function Partners({
  partners,
  partnersSubTitle,
  becomeThem,
  ourPartnersBenefit,
  enhanancedCustomer,
  marketingAnalytics,
  crossSelling,
  remarketing,
}: Params) {
  return (
    <section
      className="section-devider bg-primary-100 px-[50px] py-[50px]"
      id="partners"
    >
      <div className="w-full">
        <div>
          <Title text={partners} color="white" subTitle={partnersSubTitle} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          {partnersInfomationArr.map((partnersItem) => (
            <PartnersInfomation {...partnersItem} key={partnersItem.id} />
          ))}
        </div>
        <div className="mt-[50px] flex flex-col items-center justify-center gap-[50px] lg:flex-row">
          <div>
            <h1 className="mb-[20px] text-[30px] font-bold text-white lg:text-[40px]">
              {becomeThem}
            </h1>
            <span className="text-[18px] font-[200] text-white lg:text-[20px]">
              {ourPartnersBenefit}
            </span>
            <ul className="mt-[20px] list-disc pl-[20px] font-[200] text-white">
              <li>{enhanancedCustomer}</li>
              <li>{marketingAnalytics}</li>
              <li>{crossSelling}</li>
              <li>{remarketing}</li>
            </ul>
          </div>
          <ContactUS />
        </div>
      </div>
    </section>
  );
}
