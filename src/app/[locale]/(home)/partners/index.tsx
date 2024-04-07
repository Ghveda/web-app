import Title from '@/components/common/title';
import PartnersInfomation from './partners-infomation';
import ContactUS from './partners-infomation/contact-us';

const partnersInfomationArr = [
  {
    id: 1,
    amount: 100,
    title: 'Retailers',
    border: true,
  },
  {
    id: 2,
    amount: 50,
    title: 'Manufacturers',
    border: true,
  },
  {
    id: 1,
    amount: 50,
    title: 'Service providers',
    border: true,
  },
  {
    id: 1,
    amount: 5,
    title: 'Delivery Servces',
    border: false,
  },
];

export default function Partners() {
  return (
    <section className="bg-primary-100 px-[50px] py-[50px]" id="partners">
      <div className="w-full">
        <div>
          <Title
            text="Partners"
            color="white"
            subTitle="Our partners are main contributors in tne value varrio creates"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          {partnersInfomationArr.map((partnersItem) => (
            <PartnersInfomation {...partnersItem} key={partnersItem.id} />
          ))}
        </div>
        <div className="mt-[50px] flex flex-row justify-center gap-[50px]">
          <div>
            <h1 className="mb-[20px] text-[40px] font-bold text-white">
              Become one of them!
            </h1>
            <span className="font-[200] text-white">
              Our partners benefit from a range of advantages and features,
              including:
            </span>
            <ul className="mt-[20px] list-disc pl-[20px] font-[200] text-white">
              <li>Enhananced customer experiences</li>
              <li>Marketing analytics of your customers</li>
              <li>Cross-selling campaigns</li>
              <li>Remarketing campaigns</li>
            </ul>
          </div>
          <ContactUS />
        </div>
      </div>
    </section>
  );
}
