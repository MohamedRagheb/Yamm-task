export interface IApiReturn<T> {
  data: T | null;
}

export type THttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IApiProps {
  url: string;
  method: THttpMethod;
  body?: Record<string, unknown>;
  params?: Record<string, string>;
  headers?: Record<string, string>;
  noLoading?: boolean;
}

export interface IApiHookReturn {
  loading: boolean;
  api: <T>(apiProps: IApiProps) => Promise<IApiReturn<T>>;
}
