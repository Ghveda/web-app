'use client';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import { IProduct } from '@/types/models';
import { getDifferenceInYearsAndMonths } from '@/utils/formatData';
import classNames from 'classnames';
import { useRouter, useParams } from 'next/navigation';

export default function ProductCard(product: IProduct) {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const spanStyle =
    'flex items-center justify-center h-[50px] border-l-[1px] line-clamp-2 w-full px-[10px]';

  const sectionLayout =
    'grid grid-cols-5 items-center gap-[20px] lg:grid-cols-7';
  const sectionStyle =
    'cursor-pointer rounded-[12px] border-[1px] border-black bg-white p-[10px] text-center text-[14px] md:text-[16px] ';

  if (product.status === 'pending') {
    return (
      <section className={sectionStyle}>
        <span>
          {t('dashboard.product.pending-product', { id: product.id })}
        </span>
      </section>
    );
  }

  return (
    <section className={classNames(sectionLayout, sectionStyle)}>
      <div>
        <span>
          {locale === 'ka' ? product.category.name : product.category.nameEng}
        </span>
      </div>
      <div className={spanStyle}>
        <span>
          {locale === 'ka'
            ? product.manufacturer.name
            : product.manufacturer.nameEng}
        </span>
      </div>
      <div className={spanStyle}>
        <span>{product.modelName}</span>
      </div>
      <div className={spanStyle}>
        <span>{product.serialNumber}</span>
      </div>
      <div className={spanStyle}>
        <span>{`${product.price || 0}₾`}</span>
      </div>
      <div className="hidden lg:block">
        <span className="line-clamp-2 h-[50px] border-x-[1px] px-[5px]">
          {getDifferenceInYearsAndMonths(product.dateStart, product.dateEnd)}
        </span>
      </div>
      <Button
        onClick={() =>
          router.push(`/${locale}/dashboard/products/${product.id}`)
        }
        variant="primary"
        className="hidden h-[30px] py-0 text-[14px] lg:block"
      >
        {t('dashboard.product.see-more')}
      </Button>
      <div className="col-span-5 lg:hidden">
        <div>
          <span className="line-clamp-2 h-[50px]">
            {getDifferenceInYearsAndMonths(product.dateStart, product.dateEnd)}
          </span>
        </div>
        <Button
          onClick={() =>
            router.push(`/${locale}/dashboard/products/${product.id}`)
          }
          variant="primary"
          className="h-[30px] w-[200px] py-0 text-[14px]"
        >
          {t('dashboard.product.see-more')}
        </Button>
      </div>
    </section>
  );
}
