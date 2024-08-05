import classNames from 'classnames';

export default function ProductsHeader() {
  const headers = [
    'Product',
    'Store',
    'Model',
    'Serial Number',
    'Price',
    'Warranty Period',
  ];

  return (
    <section className="my-[20px] grid grid-cols-5 items-center border-t-[1px] border-gray-200 py-[20px] lg:grid-cols-7">
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
