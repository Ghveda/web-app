'use client';
import Button from '@/components/common/button';
import { useRouter, useParams } from 'next/navigation';

export default function ProductCard() {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const spanStyle =
    'flex items-center justify-center h-[50px] border-l-[1px] line-clamp-2 w-full px-[10px]';
  return (
    <section className="grid cursor-pointer grid-cols-5 items-center gap-[20px] rounded-[12px] border-[1px] border-black bg-white p-[10px] text-center text-[14px] md:text-[16px] lg:grid-cols-7">
      <div>
        <span>Washing Machine</span>
      </div>
      <div className={spanStyle}>
        <span>Alta</span>
      </div>
      <div className={spanStyle}>
        <span>Midea MF100W60</span>
      </div>
      <div className={spanStyle}>
        <span>A11056-75</span>
      </div>
      <div className={spanStyle}>
        <span>1249,00 ₾</span>
      </div>
      <div className="hidden lg:block">
        <span className="line-clamp-2 h-[50px] border-x-[1px] px-[5px]">
          3 Years & 11 Months Left
        </span>
      </div>
      <Button
        onClick={() => router.push(`/${locale}/dashboard/products/1`)}
        variant="primary"
        className="hidden h-[30px] py-0 text-[14px] lg:block"
      >
        See More
      </Button>
      <div className="col-span-5 lg:hidden">
        <div>
          <span className="line-clamp-2 h-[50px]">
            3 Years & 11 Months Left
          </span>
        </div>
        <Button
          onClick={() => router.push(`/${locale}/dashboard/products/1`)}
          variant="primary"
          className="h-[30px] w-[200px] py-0 text-[14px]"
        >
          See More
        </Button>
      </div>
    </section>
  );
}
