import { useMutation } from "@tanstack/react-query";
import { instance } from "../components/utils/posturl";

// methods: "post" , "get" , "put" , "patch" , "delete"
// return {  mutate, data, status, isLoading, isError, error, refetch, isFetching,}

const useMutationHook = ({ method = "get", url, options, onSelect }) => {
  return useMutation(
    async (data) => {
      const response = await instance({ method, url, data: data });
      return onSelect ? onSelect(response) : response;
    },
    {
      ...options,
    }
  );
};

export default useMutationHook;
