import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import vi from "./vi.json";

const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

const userLanguage = window.navigator.language;
i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || userLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const Languages = ["en", "vi"] as const;
export type Languages = (typeof Languages)[number];
export default i18next;
