'use client';
import { useGetProductsQuery } from '@/api/query/useGetProductsQuery';
import ProductCard from './product-card';

export default function ProductListing() {
  const { data: productsData } = useGetProductsQuery();

  return (
    <div className="flex flex-col gap-[20px]">
      {productsData?.data?.map((product) => <ProductCard {...product} />)}
    </div>
  );
}
