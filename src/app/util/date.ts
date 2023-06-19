export function yyyyddmm(date: Date) {
  return `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`;
}
