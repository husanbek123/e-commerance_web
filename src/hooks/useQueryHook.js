import { useQuery, useMutation } from "@tanstack/react-query";
import { instance } from "../utils/posturl";

const useQueryHook = ({ url, options, params }) => {
  return useQuery(
    [url],
    async () => {
      const response = await instance.get(url, { params });
      return response;
    },
    {
      ...options,
    }
  );
};

export default useQueryHook;

export const usePostData = (api) => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await instance.post(api, data);
      return res;
    },
  });
};

export const useGetData = (keys, api, options) => {
  return useQuery({
    queryKey: keys,
    queryFn: async () => {
      const data = await instance.get(api);
      return data.data;
    },
    options,
  });
};
