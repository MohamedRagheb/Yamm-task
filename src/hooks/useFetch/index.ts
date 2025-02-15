"use client";

// React-Query
import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

// Hooks
import useApi from "@/hooks/useApi";

interface Props<T> {
  reqName?: string;
  query?: Record<string, any>;
  queryKey: QueryKey;
  queryFn?: QueryFunction<T>;
  options?: Omit<
    UseQueryOptions<any, unknown, any, QueryKey>,
    "queryKey" | "queryFn"
  >;
}

export default function useFetch<T>({
  queryKey,
  queryFn,
  options,
  reqName,
  query,
}: Props<T>) {
  const { api } = useApi();
  const commonFetchFunction = async () => {
    const res = await api({
      url: reqName!,
      ...(query && { params: query }),
      method: "GET",
    });
    console.log(res);
  };

  const res = useQuery<T, unknown, T>({
    queryKey: [...queryKey, query?.toString()],
    queryFn: (queryFn ?? commonFetchFunction) as any,
    refetchOnWindowFocus: false,
    ...options,
  });

  return { ...res };
}
