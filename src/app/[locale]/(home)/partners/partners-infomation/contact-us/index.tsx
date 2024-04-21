import Button from '@/components/common/button';
import Input from '@/components/common/input';

export default function ContactUS() {
  return (
    <form action="" className="flex w-full max-w-[550px] flex-col gap-[16px]">
      <Input variant="primary" placeholder="Company name" type="text" />
      <Input variant="primary" placeholder="E-mail" type="email" />
      <Input variant="primary" placeholder="Phone number" type="text" />
      <Button variant="secondary">Contact Us</Button>
    </form>
  );
}
