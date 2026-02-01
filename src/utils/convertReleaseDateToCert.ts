import { TReleaseDate } from '@types';

function convertReleaseDateToCert(
  region: string,
  releaseDates: TReleaseDate[],
): string | null {
  const regionReleaseDate = releaseDates.find(rd => rd.iso_3166_1 === region);
  if (!regionReleaseDate) return null;

  // Find the first non-empty certification
  for (const releaseDateInfo of regionReleaseDate.release_dates) {
    if (
      releaseDateInfo.certification &&
      releaseDateInfo.certification.trim() !== ''
    ) {
      return releaseDateInfo.certification;
    }
  }

  return null;
}

export default convertReleaseDateToCert;
