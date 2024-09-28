'use client';
import { useDeleteProductMutation } from '@/api/mutation/useDeleteProductMutation';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import Status from '@/components/common/status';
import { IProduct } from '@/types/models';
import classNames from 'classnames';
import { useRouter, useParams } from 'next/navigation';

export default function ProductCard(product: IProduct) {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const { mutate: deleteProduct } = useDeleteProductMutation({});

  const spanStyle =
    'flex items-center justify-center h-[50px] border-l-[1px] line-clamp-2 w-full px-[10px]';

  const sectionLayout =
    'grid grid-cols-5 items-center gap-[20px] lg:grid-cols-7';
  const sectionStyle =
    'cursor-pointer rounded-[12px] border-[1px] border-black bg-white p-[10px] text-center text-[14px] md:text-[16px] ';

  return (
    <section className={classNames(sectionLayout, sectionStyle)}>
      <div
        className={classNames(
          'flex flex-row items-center gap-[8px] border-r-[1px]',
          {
            'col-span-5 justify-center !border-0 lg:col-span-1':
              product.status === 'pending',
          },
        )}
      >
        <Status status={product.status} svgProps={{ width: 25, height: 25 }} />
        <div
          className={classNames(spanStyle, {
            '!w-[100px] !border-0': product.status === 'pending',
          })}
        >
          {product.status}
        </div>
      </div>
      {product.status === 'approved' ? (
        <>
          <div>
            <span>
              {locale === 'ka'
                ? product.category.name
                : product.category.nameEng}
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
        </>
      ) : (
        <>
          <div className="col-span-5 text-primary-100">
            <span>
              {t('dashboard.product.your')}
              <span className="text-primary-200">...</span>
              {t('dashboard.product.warranty-pending')}
            </span>
          </div>
          <div className="col-span-5 lg:col-span-1">
            <Button
              onClick={() => deleteProduct({ productId: product.id })}
              variant="error"
              className="h-[30px] w-full max-w-[200px] py-0 text-[11px]"
            >
              {t('dashboard.product.delete-request')}
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
