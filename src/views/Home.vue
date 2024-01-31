<template>
    <div class="home">
        <v-card width="100%" min-height="400" class="home__Card">
            <div class="home__Card--text">
                <label class="text-h2">{{ this.$t('home.title') }}</label>
                <br>
                <p class="text-body">{{ this.$t("home.text") }}</p>
            </div>
        </v-card>
    </div>
</template>

<style lang="scss">
    .home {
        min-height: 100%;
        &__Card {
            display: flex;
            justify-content: center;
            align-items: center;
            &--text {
                display: flex;
                flex-direction: column;
                text-align: center;
            }
        }
    }
</style>