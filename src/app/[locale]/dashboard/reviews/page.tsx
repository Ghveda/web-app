import { useTranslation } from '@/app/i18n';
import SearchIcon from '@/components/assets/search-icon';
import DashboardContainer from '@/components/common/container';
import Input from '@/components/common/input';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Reviews({ params: { locale } }: Params) {
  const { t } = await useTranslation(locale, 'translations');

  return (
    <DashboardContainer>
      <section className="flex justify-center">
        <div className="flex max-w-[1040px] flex-col items-center justify-center">
          <h1 className="text-center text-[35px] font-medium text-primary-100">
            {t('dashboard.reviews.check-it')}
          </h1>
          <p className="mt-[20px] max-w-[820px] text-center text-[19px] font-thin text-primary-100">
            {t('dashboard.reviews.all-reviews')}
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
