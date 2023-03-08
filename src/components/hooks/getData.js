import { useQuery } from "@tanstack/react-query";
import { instance } from "../../utils/axios";

export const useDataFetch = (keys, url, options) => {
  return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
    ...options,
  });
};
