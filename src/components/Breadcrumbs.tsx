import Link from "next/link";
import { Fragment } from "react";

interface link {
  label: string;
  path: string;
}

interface Props {
  labels: link[];
}
export const Breadcrumbs = ({ labels }: Props) => {
  return (
    <div className="container flex gap-2 mt-5">
      <Link href="/" className="text-base lg:text-sm">
        Home
      </Link>
      {">"}
      {labels.map((item) => (
        <Fragment key={item.label}>
          {item.path !== "" ? (
            <>
              <Link
                key={item.label}
                href={item.path}
                className="text-base lg:text-sm"
              >
                {item.label}
              </Link>
              {">"}
            </>
          ) : (
            <span className="text-base text-primary lg:text-sm">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
