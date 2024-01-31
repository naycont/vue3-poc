import { createI18n } from 'vue-i18n'
import constants from '@/utils/constants'
import messages from "@intlify/unplugin-vue-i18n/messages"

const i18n = createI18n({
    locale: constants.DEFAULT_LOCALE,
    fallbackLocale: constants.DEFAULT_LOCALE,
    globalInjection: true,
    legacy: false,
    messages
})

export default i18n