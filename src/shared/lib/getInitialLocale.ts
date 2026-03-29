import {
  LOCALE_STORAGE_KEY,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type AppLocale,
} from '@/app/config/locale'

export function getInitialLocale(): AppLocale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as AppLocale
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored
  }

  const browserLang = navigator.language.split('-')[0] as AppLocale
  if (SUPPORTED_LOCALES.includes(browserLang)) {
    return browserLang
  }

  return DEFAULT_LOCALE
}
