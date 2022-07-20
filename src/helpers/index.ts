export const getDecimals = (n: number): number =>
  Number(String(n).split('.')[1] ?? 0);
