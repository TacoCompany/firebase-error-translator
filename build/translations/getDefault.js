"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Default information to messages without translation */
const defaultTranslations = {
    en: {
        classMessage: 'Unexpected Error.',
        defaultReplaceable: 'Server Error.'
    },
    es: {
        classMessage: 'Error Inesperado.',
        defaultReplaceable: 'Error del Servidor.'
    },
    it: {
        classMessage: 'Error Inaspettato.',
        defaultReplaceable: 'Error del Server.'
    }
};
function getDefault(lang) {
    return defaultTranslations[lang];
}
exports.default = getDefault;
