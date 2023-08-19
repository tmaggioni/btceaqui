export function formatDateToPtBR(dateString: string): string {
  if (!dateString) return "";
  const parts = dateString.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
