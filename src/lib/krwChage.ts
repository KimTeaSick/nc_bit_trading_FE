export const krwChage = (won: string | number | undefined) => {
  if (Math.abs(Number(won)) <= 1000) {
    won = Number(won).toFixed(2);
  } else {
    won = Number(won).toFixed(0);
  }

  if (Number(won) === 0.0) return 0;

  won = String(won);

  return won.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};
