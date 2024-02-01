<script setup>
import { ref } from 'vue'
import i18n from '@/components/i18n/i18n.vue'

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
            <i18n/>
        </div>
    </div>
</template>

<style scoped>
    @import url('sideMenu.styles.scss');
</style>