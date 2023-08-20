import Link from "next/link";

interface Props {
  link: string;
  label: string;
  className?: string;
  size?: "small" | "medium" | "big";
  target?: "_blank";
}
export const Button = ({ link, label, className, size, target }: Props) => {
  let css = "p-3";
  if (size === "small") {
    css = "p-1 text-sm";
  }
  if (size === "medium") {
    css = "p-2 text-base";
  }
  if (size === "big") {
    css = "p-3 text-lg";
  }

  return (
    <Link
      href={link}
      target={target}
      className={`bg-primary ${className} ${css} text- text-black text-2xl  rounded-lg font-bold shadow-lg hover:text-white transition-all`}
    >
      {label}
    </Link>
  );
};
