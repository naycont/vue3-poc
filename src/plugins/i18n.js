import { createI18n } from 'vue-i18n'
import { DEFAULT_LOCALE } from '@/utils/constants'
import messages from "@intlify/unplugin-vue-i18n/messages"

const i18n = createI18n({
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    globalInjection: true,
    legacy: false,
    allowComposition: true,
    messages
})

export default i18n