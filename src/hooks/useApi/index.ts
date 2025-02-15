// Hooks
import { useState } from "react";

// Config
import axiosInstance from "@/configs/axios";

// types
import type { IApiHookReturn, IApiProps, IApiReturn } from "./types";

/*
    @Note => there's not error handling cus we are use json server not actual Api
*/

const useApi = (): IApiHookReturn => {
  const [loading, setLoading] = useState(false);

  const api = async <T>({
    url,
    method,
    body,
    params,
    headers,
    noLoading,
  }: IApiProps): Promise<IApiReturn<T>> => {
    try {
      if (!noLoading) setLoading(true);

      const res: any = await axiosInstance({
        url,
        method,
        params,
        headers,
        data: body,
      });
      return { data: res.data };
    } catch {
      return { data: null };
    } finally {
      if (!noLoading) setLoading(false);
    }
  };

  return {
    api,
    loading,
  };
};

export default useApi;
