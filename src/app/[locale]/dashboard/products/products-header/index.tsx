import classNames from 'classnames';

type Params = {
  product: string;
  store: string;
  model: string;
  serialNumber: string;
  price: string;
  warrantyStatus: string;
};

export default function ProductsHeader({
  product,
  store,
  model,
  serialNumber,
  price,
  warrantyStatus,
}: Params) {
  const headers = [warrantyStatus, product, store, model, serialNumber, price];

  return (
    <section className="my-[20px] hidden grid-cols-5 items-center border-t-[1px] border-gray-200 py-[20px] md:grid lg:grid-cols-7">
      {headers.map((headerItem, index) => (
        <span
          className={classNames('text-center text-[17px] font-thin', {
            'hidden lg:block': index === headers.length - 1,
          })}
          key={headerItem}
        >
          {headerItem}
        </span>
      ))}
    </section>
  );
}
