'use client';
import Button from '@/components/common/button';
import DashboardContainer from '@/components/common/container';
import AddReview from './add-review';
import classNames from 'classnames';
import { useGetProductQuery } from '@/api/query/useGetProductQuery';
import { useTranslation } from '@/app/i18n/client';
import { useParams, useRouter } from 'next/navigation';
import {
  getDifferenceInYearsAndMonths,
  getPercentagePassed,
} from '@/utils/formatData';
import ProgressBar from '@/components/common/progress-bar';
import Spinner from '@/components/common/spinner';
import { useDeleteProductMutation } from '@/api/mutation/useDeleteProductMutation';
import FileImageIcon from '@/components/assets/file-image-icon';

export default function ProuctPage() {
  const router = useRouter();
  const { locale, id } = useParams<{ locale: string; id: string }>();
  const { t } = useTranslation(locale, 'translations');

  const { isLoading, data: productData } = useGetProductQuery(Number(id));
  const { mutate: deleteMutation } = useDeleteProductMutation({
    onSuccess: () => {
      router.push(`/${locale}/dashboard/products`);
    },
  });

  const handleDelete = () => {
    deleteMutation({
      productId: +id,
    });
  };

  const spanStyle =
    'flex items-center justify-center h-[50px] border-l-[1px] w-[100px] flex-1 px-[10px] line-clamp-2 text-[14px]';

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <DashboardContainer>
      <section>
        <div>
          <h1 className="mb-[20px] text-[20px] md:text-[25px]">
            {productData?.warranty?.modelName}
          </h1>
          <div className="flex flex-col gap-[20px] rounded-[12px] border-[1px] border-black bg-white p-[20px]">
            <div className="grid grid-cols-7 items-center justify-between gap-[10px] lg:grid-cols-9">
              <div className={classNames(spanStyle, '!border-l-0 text-center')}>
                <span>
                  {locale === 'ka'
                    ? productData?.warranty?.category?.name
                    : productData?.warranty?.category?.nameEng}
                </span>
              </div>
              <div className={spanStyle}>
                <span>
                  {locale === 'ka'
                    ? productData?.warranty?.store?.name
                    : productData?.warranty?.store?.nameEng}
                </span>
              </div>
              <div className={spanStyle}>
                <span>{productData?.warranty?.modelName}</span>
              </div>
              <div className={spanStyle}>
                <span>{productData?.warranty?.serialNumber}</span>
              </div>
              <div className={spanStyle}>
                <span>{`${productData?.warranty?.price}₾`}</span>
              </div>
              <div className={spanStyle}>
                <span>1</span>
              </div>
              <div className={spanStyle}>
                <span>
                  <a
                    href={`https://warrio.ge/files/${productData?.warranty?.files[0]?.address}`}
                    download={`${productData?.warranty.id}`}
                    target="_blank"
                  >
                    <FileImageIcon />
                  </a>
                </span>
              </div>
              <div className="col-span-7 flex shrink-0 flex-col gap-[10px] lg:col-span-2">
                <Button
                  variant="secondary"
                  className="h-[30px] text-nowrap py-[3px]"
                  onClick={handleDelete}
                >
                  {t('dashboard.product.delete-product')}
                </Button>
                <Button
                  disabled
                  variant="primary"
                  className="h-[30px] bg-primary-200 py-[3px]"
                >
                  {t('dashboard.product.edit-info')}
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-[20px] border-t-[1px] pt-[20px]">
              <span className="shrink-0">
                {t('dashboard.product.warranty-period-dot')}
              </span>
              <div className="w-full">
                <ProgressBar
                  size="xs"
                  className="h-[8px]"
                  value={Number(
                    getPercentagePassed(
                      productData?.warranty?.dateStart!,
                      productData?.warranty?.dateEnd!,
                    ),
                  )}
                />
              </div>
              <span className="shrink-0">
                {getDifferenceInYearsAndMonths(
                  new Date().toString(),
                  productData?.warranty?.dateEnd!,
                )}
              </span>
            </div>
            <div className="flex flex-col justify-between border-t-[1px] pt-[20px]">
              <AddReview />
            </div>
            <div className="flex justify-center">
              <Button
                variant="primary"
                className="w-full bg-primary-200 md:w-[200px]"
                disabled
              >
                {t('dashboard.product.submit-claim')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}
