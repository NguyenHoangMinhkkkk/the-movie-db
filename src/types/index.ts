export type DataResponse<T, X = any> = {
  ok: boolean;
  data: T;
  errorData?: X;
  message?: string;
  status?: number | string;
  statusCode?: number | string;
  code?: number | string;
};
