import { SVGProps } from 'react';

export const BurgerIcon = ({
  stroke = '#0D3651',
  ...rest
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    stroke={stroke}
    {...rest}
  >
    <path
      d="M1.30005 1.89999H17"
      stroke={stroke}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M1.30005 7.89999H17"
      stroke={stroke}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M1.30005 13.9H17"
      stroke={stroke}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
);
