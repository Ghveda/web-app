import { SfLoaderCircular } from '@storefront-ui/react';

export default function Spinner() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <SfLoaderCircular
        size="3xl"
        className="!text-primary-100 ring-primary-100/30"
      />
    </div>
  );
}
