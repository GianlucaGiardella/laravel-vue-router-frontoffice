<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppFooter,
        AppHeader,
    }
};
</script>

<template>
    <div class="cont d-flex flex-column justify-contents-center">
        <header>
            <AppHeader />
        </header>

        <div class="container_main">
            <router-view></router-view>
        </div>
        <AppFooter />
    </div>
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons';

.container_main {
    background-color: $c-bg;
}
</style>
