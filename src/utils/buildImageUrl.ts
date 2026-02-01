/**
 * Build the full TMDB image URL.
 *
 * @param {string} baseUrl -  (ex: https://image.tmdb.org/t/p/)
 * @param {string} size - (ex: "w500", "w45",. .., "original")
 * @param {string} filePath - file_path (ex: "/abc123.jpg")
 * @returns {string} - URL
 */

export default function buildImageUrl(
  baseUrl: string,
  size: string,
  filePath: string,
) {
  if (!baseUrl || !size || !filePath) {
    return '';
  }

  return `${baseUrl}/${size}/${filePath}`
    .replace(/\/\/+/g, '/')
    .replace(':/', '://');
}
