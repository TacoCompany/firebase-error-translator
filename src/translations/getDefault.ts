import { DefaultTranslateObject, Lang } from "../types";

/** Default information to messages without translation */
const defaultTranslations:Record<Lang, DefaultTranslateObject> = {
    en: {
        classMessage: 'Unexpected Error.',
        defaultReplaceable: 'Server Error.'
    },
    es:{
        classMessage: 'Error Inesperado.',
        defaultReplaceable: 'Error del Servidor.'
    },
    it: {
        classMessage: 'Error Inaspettato.',
        defaultReplaceable: 'Error del Server.'
    }
}

export default function getDefault(lang:Lang){
    return defaultTranslations[lang]
}
