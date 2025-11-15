export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "Ernesto Tages - Ethical Leadership Consultancy";

export const APP_LOGO = "/logo_ENG.jpg";

// This site doesn't use authentication, so getLoginUrl returns a dummy URL
export const getLoginUrl = () => {
  return "#";
};
