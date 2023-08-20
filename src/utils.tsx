import { JSXMapSerializer } from "@prismicio/react";

export function formatDateToPtBR(dateString: string): string {
  if (!dateString) return "";
  const parts = dateString.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return (
      <a
        href={node.data.url}
        target="_blank"
        className="underline font-medium text-primary"
      >
        {children}
      </a>
    );
  },

  list: ({ children }) => {
    return <ul className="list-disc mb-2 text-base pl-[32px]">{children}</ul>;
  },
  heading4: ({ children }) => {
    return <h4 className="mt-10 mb-1">{children}</h4>;
  },
};
