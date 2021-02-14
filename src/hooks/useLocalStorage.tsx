import { get, set } from "local-storage";

const useLocalStorage = () => {
  const getItem = (item: string) => {
    return get<string>(item);
  };

  const setItem = (item: string, value: any) => {
    return set<string>(item, value);
  };

  return { getItem, setItem };
};

export default useLocalStorage;
