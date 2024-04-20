import SearchIcon from '@/components/assets/search-icon';
import DashboardContainer from '@/components/common/container';
import Input from '@/components/common/input';

export default function Reviews() {
  return (
    <DashboardContainer>
      <section className="flex justify-center">
        <div className="flex max-w-[1040px] flex-col items-center justify-center">
          <h1 className="text-center text-[35px] font-medium text-primary-100">
            If you are going to buy any product, check it’s here before!
          </h1>
          <p className="mt-[20px] max-w-[820px] text-center text-[19px] font-thin text-primary-100">
            We have gathered all the reviews, including ratings and comments
            from actual users for each product or brand. Now, it's your turn to
            review and make the best purchase.
          </p>
          <div className="relative mt-[20px] w-full">
            <SearchIcon
              className="absolute left-[10px] top-[50%] translate-y-[-50%] border-r-[1px] border-black pr-[10px]"
              width={30}
              height={24}
            />
            <Input className="w-full !rounded-[16px] border-black pl-[50px]" />
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}
