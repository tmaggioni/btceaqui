import { SVGProps } from "react";

export function IconHotel({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M12 24c-4.14-4.983-9-10.033-9-15 0-4.967 4.033-9 9-9s9 4.033 9 9-4.735 9.986-9 15zm0-7c-4.419 0-8-3.582-8-8s3.581-8 8-8c4.419 0 8 3.582 8 8s-3.581 8-8 8zm5-4v-4h-9v-4h-1v8h1v-1h8v1h1zm-6.5-8c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6.5 3c0-1.657-1.343-3-3-3h-1v3h4z" />
    </svg>
  );
}
