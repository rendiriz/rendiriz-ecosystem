export function format(first: string | null, middle: string | null, last: string | null): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
