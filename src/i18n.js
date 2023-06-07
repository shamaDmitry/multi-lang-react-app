import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { CURRENT_LANG, CURRENT_LANG_KEY } from "./helpers/constants";

const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "https://multi-lang-react-app.vercel.app";

const lang = localStorage.getItem(CURRENT_LANG_KEY);

i18n
  .use(i18nBackend)
  .use(initReactI18next).init({
    lng: lang ? lang : CURRENT_LANG,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
  });

export default i18n;