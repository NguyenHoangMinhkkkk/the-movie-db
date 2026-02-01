import { TLanguage } from '@types';

function convertLanguageKey(key: string, languageConfig: TLanguage[]): string {
  const language = languageConfig.find(lang => lang.iso_639_1 === key);
  return language ? language.english_name : key;
}

export default convertLanguageKey;
