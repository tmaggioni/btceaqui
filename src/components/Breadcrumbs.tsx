import Link from "next/link";

interface Props {
  label: string;
}
export const Breadcrumbs = ({ label }: Props) => {
  return (
    <div className="container flex gap-2 mt-5">
      <Link href="/" className="text-base">
        Home
      </Link>
      {">"}
      <span className="text-base text-primary">{label}</span>
    </div>
  );
};
