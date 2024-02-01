<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '@/utils/constants'

const { t, locale } = useI18n()

const menuItems = ref([
    {
        id: 'home',
        title: 'Home',
        icon: 'home'
    },
    {
        id: 'users',
        title: 'Users',
        icon: 'group'
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'settings',
        childs: [
            {
                id: 'collaborators',
                title: 'Collaborators',
                icon: 'person'
            },
            {
                id: 'extern',
                title: 'Extern',
                icon: 'group_add'
            }
        ],
    },
])

const currentLanguage = ref(locale.value)

const languagesSelector = computed(() => {
    const localesArray = [];
    SUPPORTED_LOCALES.forEach(localeKey => {
        const localeTitle = `sideMenu.footer.languages.${localeKey}`
        localesArray.push({
            value: localeKey,
            title: t(localeTitle)
        })
    })
    return localesArray
})

const changeLanguage = (languageKey) => {
    console.log('changeLanguage')
    console.log(languageKey)
}

</script>

<template>
    <div class="side-menu">
        <v-list bg-color="primary" class="side-menu__list">
            <template v-for="menuItem in menuItems" :key="menuItem.id">
                <v-list-item
                    v-if="!menuItem.childs"
                    :prepend-icon="menuItem.icon"
                    :title="menuItem.title"
                ></v-list-item>

                <v-list-group :value="menuItem.id" v-else>
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            :title="menuItem.title"
                            :prepend-icon="menuItem.icon"
                        ></v-list-item>
                    </template>
                    
                    <v-list-item
                        v-for="subItem in menuItem.childs"
                        :key="subItem.id"
                        :prepend-icon="subItem.icon"
                        :title="subItem.title"
                    ></v-list-item>
                 
                </v-list-group>
            </template>
        </v-list>
        <div class="side-menu__footer">
            <div class="side-menu__footer--language">
                <label class="side-menu__footer--languageLabel">{{ $t('sideMenu.footer.language') }}</label>
                <v-select
                    class="side-menu__footer--languageSelector"
                    item-color="red"
                    hide-details
                    variant="underlined"
                    density="compact"
                    :items="languagesSelector"
                    v-model="currentLanguage"
                    @update:modelValue="changeLanguage"
                ></v-select>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url('sideMenu.styles.scss');
</style>