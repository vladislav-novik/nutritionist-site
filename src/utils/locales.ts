const regex = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;

export const defaultLang = "ru";
export const langs = ["ru", "en"];

export const locales: Map<string, string[]> = new Map([
  ["ru", ["ru-RU", "ru"]],
  ["en", ["en"]]
]);

type Language = {
  code: string;
  quality: number;
}

function parse(al: string) {
  const strings = (al || "").match(regex);

  if (strings === null)
    return [];

  let result = strings.map((m): Language | undefined => {
    if (!m) {
      return undefined;
    }

    var bits = m.split(';');
    var ietf = bits[0].split('-');

    return {
      code: ietf[0],
      quality: bits[1] ? parseFloat(bits[1].split('=')[1]) : 1.0
    };
  })

  const filteredResult = result.filter(x => !!x) as Language[];
  
  const ordered = filteredResult.sort((a, b) => {
    return b.quality - a.quality;
  }).map(x => x.code);

  return [...new Set(ordered)];
}

export function match(supportedLanguages: string[], acceptLanguage: string, defaultLang: string) {
  if (!supportedLanguages || !supportedLanguages.length || !acceptLanguage) {
    return null;
  }

  let acceptedLanguages = parse(acceptLanguage);

  for (let i = 0; i < acceptedLanguages.length; i++) {
    let acceptLang = acceptedLanguages[i];

    for (let j = 0; j < supportedLanguages.length; j++) {
      let supportedLang = supportedLanguages[j]

      if (acceptLang === supportedLang) {
        return acceptLang;
      }
    }
  }

  return defaultLang;
}


export function getLocale(acceptLanguage: string): string {
  return match(langs, acceptLanguage, defaultLang) || defaultLang;
}

export function getAlternateLangs(lang: string): string[] {
  return langs.filter(l => l !== lang);
}

// export function getAlternateLocales(lang: string): Map<string, string[]> {
//   const result = new Map<string, string[]>();

//   for (const [key, value] of locales) {
//     if (key === lang)
//       continue;

//     result.set(key, value);
//   }

//   return result;
// }