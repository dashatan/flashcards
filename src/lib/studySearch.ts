export function shortPartLabel(part: string): string {
  const match = part.match(/Part \d+/);
  return match?.[0] ?? part;
}
