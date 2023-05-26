// import 'server-only';
import { langs } from '@/utils/locales';

export type ValidLocale = typeof langs[number];

const dictionaries: Record<ValidLocale, Function> = {
    ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: ValidLocale) => {
    if (locale && locale in dictionaries) {
        return await dictionaries[locale]()
    }

    return await dictionaries['ru']()
};
