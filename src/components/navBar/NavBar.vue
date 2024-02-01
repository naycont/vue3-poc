<template>
    <div class="navbar">
        <div class="navbar__logo">
            {{$t('header.logo')}}
        </div>
        <div class="navbar__menu">
            <v-btn 
                variant="text" 
                icon="menu"
            ></v-btn>
        </div>
    </div>
</template>

<style scoped>
    @import url('navbar.styles.scss');
</style>