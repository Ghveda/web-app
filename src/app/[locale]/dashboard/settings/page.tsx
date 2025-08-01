'use client';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import DashboardContainer from '@/components/common/container';
import Input from '@/components/common/input';
import { useAppContext } from '@/providers/context-provider';
import { useForm } from 'react-hook-form';

type Params = {
  params: {
    locale: string;
  };
};

type SettingsForm = {
  firstname: string;
  lastname: string;
  identificationNumber: string;
  email: string;
  phone: string;
  oldPassword: string;
  password: string;
};

export default function Settings({ params: { locale } }: Params) {
  const { t } = useTranslation(locale, 'translations');

  const { userData } = useAppContext();
  const { register } = useForm<SettingsForm>({
    defaultValues: {
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      email: userData?.email,
      identificationNumber: userData?.identificationNumber,
      phone: userData?.phone,
    },
  });

  return (
    <DashboardContainer>
      <section className="flex justify-center rounded-[12px] bg-[#FFF]">
        <form className="flex max-w-[735px] flex-1 flex-col gap-[30px] px-[16px] pb-[46px] pt-[28px]">
          <label className="text-[16px] text-black">
            {t('dashboard.settings.firstname')}
            <Input variant="third" type="text" {...register('firstname')} />
          </label>
          <label className="text-[16px] text-black">
            {t('dashboard.settings.lastname')}
            <Input variant="third" type="text" {...register('lastname')} />
          </label>
          <label className="text-[16px] text-black">
            {t('dashboard.settings.id-number')}
            <Input
              variant="third"
              type="text"
              {...register('identificationNumber')}
            />
          </label>
          <label className="text-[16px] text-black">
            {t('dashboard.settings.email')}
            <Input variant="third" type="email" {...register('email')} />
          </label>
          <label className="text-[16px] text-black">
            {t('dashboard.settings.mobile-number')}
            <Input variant="third" type="text" {...register('phone')} />
          </label>
          <label className="text-[16px] text-black">
            {t('dashboard.settings.old-password')}
            <Input
              variant="third"
              type="password"
              {...register('oldPassword')}
            />
          </label>
          <label className="text-[16px] text-black">
            {t('dashboard.settings.new-password')}
            <Input variant="third" type="password" {...register('password')} />
          </label>
          <div className="flex flex-1 justify-center gap-[30px]">
            <Button variant="secondary" className="w-full max-w-[250px]">
              {t('dashboard.settings.cancel')}
            </Button>
            <Button disabled variant="primary" className="w-full max-w-[250px]">
              {t('dashboard.settings.update')}
            </Button>
          </div>
        </form>
      </section>
    </DashboardContainer>
  );
}
