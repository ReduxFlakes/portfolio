import { DateTime } from "luxon";

export default {
  formatPostDate: (date) => {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  },
  dateToISO: (date) => {
    return new Date(date).toISOString();
  },
};
