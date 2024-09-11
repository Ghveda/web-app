'use client';
import { useGetProductsQuery } from '@/api/query/useGetProductsQuery';
import ProductCard from './product-card';
import { useState } from 'react';
import { Pagination } from '@/components/common/pagination';

export default function ProductListing() {
  const [page, setPage] = useState(0);
  const { data: productsData } = useGetProductsQuery({
    page,
  });

  return (
    <div className="flex flex-col gap-[20px]">
      {productsData?.data?.map((product) => <ProductCard {...product} />)}
      <Pagination />
    </div>
  );
}
