import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBR from '../../locales/pt-BR/translation.json';
import EN from '../../locales/en/translation.json';

const resources = {
    'pt-BR': {
        translation: ptBR
    },
    'en': {
        translation: EN
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt-BR',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        supportedLngs: ['en', 'pt-BR'],
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

            // keys or params to lookup language from
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupSessionStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,

            // cache user language on
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

            // optional expiry and domain for set cookie
            cookieMinutes: 10,
            cookieDomain: 'myDomain',

            // optional htmlTag with lang attribute, the default is:
            htmlTag: document.documentElement,

            // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
            cookieOptions: { path: '/', sameSite: 'strict' },

            // optional conversion function used to modify the detected language code
            convertDetectedLanguage: 'Iso15897',
            convertDetectedLanguage: (lng) => lng.replace('-', '_')
        }
    });

export default i18n;