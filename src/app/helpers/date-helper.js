import { format } from "date-fns";
import US from "date-fns/locale/en-US";

export const formattedDate = date => {
  return format(new Date(date), "MMMM',' dd', ' yyyy", { locale: US });
};
