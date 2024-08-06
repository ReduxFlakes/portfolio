import CleanCSS from "clean-css";
import { DateTime } from "luxon";

export default {
  formatPostDate: (date) => {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  },
  formatDate: (date) => {
    return DateTime.fromJSDate(date)
      .setLocale("pt")
      .toLocaleString(DateTime.DATE_SHORT);
  },
  dateToISO: (date) => {
    return new Date(date).toISOString();
  },
  min: (...numbers) => {
    return Math.min.apply(null, numbers);
  },
  cssmin: (code) => {
    return new CleanCSS({}).minify(code).styles;
  },
};
