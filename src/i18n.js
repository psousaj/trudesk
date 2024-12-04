const i18next = require('i18next')

const ptBR = require('./locales/pt-BR/translation.json')
const en = require('./locales/en/translation.json')

i18next.init({
    resources: {
        'pt-BR': {
            translation: ptBR
        },
        en: {
            translation: en
        }
    },
    lng: 'pt-BR',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

module.exports = i18next