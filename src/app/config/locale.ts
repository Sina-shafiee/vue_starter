export const LOCALE_STORAGE_KEY = 'app-locale'

export const SUPPORTED_LOCALES = ['en', 'prs'] as const

export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

export const RTL_LOCALES: string[] = ['prs', 'fa', 'fa-AF', 'ar']

export const DEFAULT_LOCALE: AppLocale = 'prs'
