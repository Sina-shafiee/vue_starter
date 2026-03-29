import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { RTL_LOCALES, LOCALE_STORAGE_KEY, type AppLocale } from '@/app/config/locale'

export type Direction = 'ltr' | 'rtl'

export function useAppLocale() {
  const { locale, t } = useI18n()

  const direction = computed<Direction>(() => (RTL_LOCALES.includes(locale.value) ? 'rtl' : 'ltr'))

  const setLocale = (newLocale: AppLocale) => {
    locale.value = newLocale
  }

  watch(
    locale,
    (newLocale) => {
      const dir = RTL_LOCALES.includes(newLocale) ? 'rtl' : 'ltr'

      document.documentElement.dir = dir
      document.documentElement.lang = newLocale

      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    },
    { immediate: true },
  )

  return {
    locale,
    direction,
    setLocale,
    t,
  }
}
