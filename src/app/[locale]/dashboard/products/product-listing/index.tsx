'use client';
import { useGetProductsQuery } from '@/api/query/useGetProductsQuery';
import ProductCard from './product-card';
import { useState } from 'react';
import { Pagination } from '@/components/common/pagination';
import Spinner from '@/components/common/spinner';

export default function ProductListing() {
  const [page, setPage] = useState(0);
  const { isLoading, data: productsData } = useGetProductsQuery({
    page,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-[20px]">
      {productsData?.data?.map((product) => <ProductCard {...product} />)}
      {!!productsData?.data?.length && productsData?.lastPage !== 1 && (
        <Pagination
          setCurrentPage={(e) => setPage(e)}
          currentPage={page}
          maxPages={productsData?.lastPage || 0}
          pageSize={10}
          totalItems={productsData?.total || 0}
        />
      )}
    </div>
  );
}
