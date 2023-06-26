export const krwChage = (won: string | number | undefined) => {
  won = String(won);
  if (won[0] === "0") return won;
  return won.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};
