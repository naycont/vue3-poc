<script setup>
import { RouterView } from 'vue-router'
import SideMenu from './components/sideMenu/SideMenu.vue'
import NavBar from './components/navBar/NavBar.vue'
</script>

<template>
   <div class="main-app">
      <div class="main-app__Header">
         <NavBar/>
      </div>
      <div class="main-app__Body">
         <SideMenu class="main-app__Body--SideMenu"/>
         <main class="main-app__Body--MainView">
            <RouterView/>
         </main>
      </div>
   </div>
</template>


<style scoped lang="scss">
   .main-app {
      height: 100%;
      display: flex;
      flex-direction: column;
      &__Body {
         height: 100%;
         display: flex;
         &--MainView {
            width: 100%;
            padding: var(--global-padding);
         }
      }
   }
</style>
