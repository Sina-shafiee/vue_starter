import { createI18n } from 'vue-i18n'
import { getInitialLocale } from '@/shared/lib/getInitialLocale'
import { DEFAULT_LOCALE } from '@/app/config/locale'

import en from '@/i18n/en.json'
import prs from '@/i18n/prs.json'

export type MessageSchema = typeof en

declare module 'vue-i18n' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends MessageSchema {}
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en,
    prs,
  },
})
