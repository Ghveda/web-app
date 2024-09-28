import DashboardContainer from '@/components/common/container';
import AddProduct from './add-product';
import ProductsHeader from './products-header';
import ProductListing from './product-listing';
import { useTranslation } from '@/app/i18n';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Products({ params: { locale } }: Params) {
  const { t } = await useTranslation(locale, 'translations');

  return (
    <DashboardContainer>
      <AddProduct />
      <ProductsHeader
        product={t('dashboard.product.product')}
        store={t('dashboard.product.store')}
        model={t('dashboard.product.model')}
        serialNumber={t('dashboard.product.serial-number')}
        price={t('dashboard.product.price')}
        warrantyStatus={t('dashboard.product.warranty-status')}
      />
      <ProductListing />
    </DashboardContainer>
  );
}
