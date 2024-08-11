import Button from '@/components/common/button';
import DashboardContainer from '@/components/common/container';
import AddReview from './add-review';

export default function ProuctPage() {
  const spanStyle =
    'flex items-center justify-center h-[50px] border-l-[1px] w-[100px]';
  return (
    <DashboardContainer>
      <section>
        <div>
          <h1 className="text-[20px] md:text-[25px]">
            Products / Midea MF100W60
          </h1>
          <div className="flex flex-col gap-[20px] rounded-[12px] border-[1px] border-black bg-white p-[20px]">
            <div className="flex items-center justify-between">
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
              <div className={spanStyle}>
                <span>1</span>
              </div>
              <div className={spanStyle}>
                <span>Pro-Img</span>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Button variant="secondary" className="h-[30px] py-[3px]">
                  Delete the product
                </Button>
                <Button
                  variant="primary"
                  className="h-[30px] bg-primary-200 py-[3px]"
                >
                  Edit The Info
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-between border-t-[1px] pt-[20px]">
              <span>Warranty Period:</span>
              <div>Period Block</div>
              <span>3 Years & 11 Months Lef</span>
            </div>
            <div className="flex flex-col justify-between border-t-[1px] pt-[20px]">
              <AddReview />
            </div>
            <div className="flex justify-center">
              <Button variant="primary" className="w-[200px] bg-primary-200">
                Submit a claim
              </Button>
            </div>
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}
