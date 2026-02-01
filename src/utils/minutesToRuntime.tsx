export default function minutesToRuntime(minutes?: number | null): string {
  if (!minutes || minutes <= 0) return '';

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;

  return `${h}h ${m}m`;
}
