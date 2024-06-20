import type { UseFetchOptions } from "nuxt/app";

const fetchInstance = $fetch.create({
  retry: 0,
  headers: {
    "Content-Type": "application/json",
  },
  // @ts-ignore
  onRequest: ({ options }) => {
    // @ts-ignore
    options.headers = {
      ...options.headers,
    };
  },
  // @ts-ignore
  onResponse({ response, options }) {
    // 状态码正常则拆出 data 返回
    if (response._data.status === 0) {
      response._data = {
        ...response._data.data,
      };
    } else {
      response._data = {
        ...response._data,
      };
    }
  },
});

export function useHttp<T>(
  url: string | (() => string),
  options: Omit<UseFetchOptions<T>, "default"> & { default: () => T | Ref<T> }
) {
  return useFetch(url, {
    ...options,
    $fetch: fetchInstance,
  });
}
