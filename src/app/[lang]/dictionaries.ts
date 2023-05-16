import { locales } from '@/helpers/locale.helper';
import 'server-only';

export type ValidLocale = typeof locales[number];

const dictionaries: Record<ValidLocale, any> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
} as const;
 
export const getDictionary = async (locale: ValidLocale) => dictionaries[locale]();