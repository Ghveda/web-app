import DashboardContainer from '@/components/common/container';

export default function Claimed() {
  return (
    <DashboardContainer>
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-[30px] font-medium text-primary-100">
            You haven't claimed any products yet
          </h1>
          <p className="mt-[20px] max-w-[600px] text-center text-[16px] font-thin text-primary-100">
            If a product covered by our warranty has issues, don't hesitate to
            Submit a claim. We're here to help!
          </p>
        </div>
      </section>
    </DashboardContainer>
  );
}
