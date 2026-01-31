export type ApiDataResponse<T, E> = {
  ok: boolean;
  data: T;
  errorData?: E;
  message?: string;
  status?: number | string;
  statusCode?: number | string;
  code?: number | string;
};
