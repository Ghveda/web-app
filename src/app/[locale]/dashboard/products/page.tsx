import DashboardContainer from '@/components/common/container';
import AddProduct from './add-product';
import ProductsHeader from './products-header';
import ProductListing from './product-listing';

export default function Products() {
  return (
    <DashboardContainer>
      <AddProduct />
      <ProductsHeader />
      <ProductListing />
    </DashboardContainer>
  );
}
