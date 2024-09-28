import { SVGProps } from 'react';

export const ExpiredStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 23.6 23.6"
    enable-background="new 0 0 23.6 23.6"
    {...props}
  >
    <path
      fill="#BFBFBF"
      d="M11.8,0C5.3,0,0,5.3,0,11.8s5.3,11.8,11.8,11.8s11.8-5.3,11.8-11.8S18.3,0,11.8,0z M18.3,15.8l-2.5,2.5l-4-4
    l-4,4l-2.5-2.5l4-4l-4-4l2.5-2.5l4,4l4-4l2.5,2.5l-4,4L18.3,15.8z"
    />
  </svg>
);
