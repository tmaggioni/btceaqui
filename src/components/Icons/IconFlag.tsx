import { SVGProps } from "react";

export function IconFlag({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M11 20h-2v-20h2v20zm10.221-16.467c-2.488 0-2.544-2.533-5.432-2.533-1.056 0-2.057.393-2.789.84v10.16c.723-.688 1.887-1.289 2.799-1.289 2.727 0 3.11 2.41 5.541 2.41 1.571 0 2.66-1.189 2.66-1.189v-9.65s-1.2 1.251-2.779 1.251zm-1.221 13.467h-7v2h5.84l1.714 3h-17.108l1.714-3h1.84v-2h-3l-4 7h24l-4-7z" />
    </svg>
  );
}