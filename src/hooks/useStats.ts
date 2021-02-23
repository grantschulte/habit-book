import { getStats } from "api";
import { RootState } from "app/rootReducer";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "modules/common/Date";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const useStats = () => {
  const token = useSelector((state: RootState) => state.app.token);
  const date = dayjs();
  const end = date.format(REQUEST_DATE_FORMAT);
  const begin = date.subtract(7, "day").format(REQUEST_DATE_FORMAT);

  return useQuery(
    ["reportCard", begin, end, token],
    () => {
      return getStats({ begin, end }, token);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
};

export default useStats;
