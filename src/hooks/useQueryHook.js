import { useQuery } from "@tanstack/react-query";
import { instance } from "../utils/posturl";


const useQueryHook = ({url, options, params, onSelect}) => {
  return useQuery(
    [url],
    async () => {
      const response = await instance.get(url, { params });
      return onSelect ? onSelect(response) : response;
    },
    {
      ...options,
    }
  );
};

export default useQueryHook;
