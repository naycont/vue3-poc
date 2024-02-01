
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { LOCALES_NAMES } from '@/utils/constants'

const { locale, availableLocales } = useI18n({ useScope: 'global' })

const currentLanguage = ref(locale.value)

const languagesSelector = computed(() => {
    const localesArray = availableLocales.map(localeKey => {
        return {
            value: localeKey,
            title: LOCALES_NAMES[localeKey]
        }
    })
    return localesArray
})

const changeLanguage = (languageKey) => {
    locale.value = languageKey
}
</script>

<template>
    <div class="i18n">
        <label class="i18n__language">{{ $t('sideMenu.i18n.language') }}</label>
        <v-select
            class="i18n__languageSelector"
            item-color="red"
            hide-details
            variant="underlined"
            density="compact"
            :items="languagesSelector"
            v-model="currentLanguage"
            @update:modelValue="changeLanguage"
        ></v-select>
    </div>
</template>

<style scoped>
    @import url('i18n.styles.scss');
</style>