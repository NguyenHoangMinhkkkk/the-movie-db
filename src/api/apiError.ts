import { ApiResponse } from 'apisauce';

export default function getError(
  requestResponse: ApiResponse<any>,
  defaultMessage = 'Unknown Error',
): { status: string; message: string } {
  const status = requestResponse?.data?.status || '';
  const message = defaultMessage || '';
  return { status, message };
}
