<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            isHover: true,
            iconButton: "",
        }
    },
    methods: {
        randomIcon() {
            const icon = ["wine-bottle", "wine-glass", "whiskey-glass", "martini-glass-empty", "martini-glass-citrus", "martini-glass", "champagne-glasses", "beer-mug-empty"]
            let rndIcon = Math.floor(Math.random() * 8);
            this.iconButton = icon[rndIcon];
        }
    },
    created() {
        this.randomIcon()
    },
}

</script>

<template>
    <div>
        <div>
            <div class="big_container">
                <div class="jumbo">
                    <button class="mybtn" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions">
                        <template v-if="isHover">
                            <fa :icon="iconButton" shake size="2xl" style="color: #fff" id="buttonDrink"
                                @mouseover="isHover = false" @mouseout="isHover = true" />
                        </template>
                        <template v-else>
                            <fa :icon="iconButton" size="2xl" style="color: #fff" id="buttonDrink"
                                @mouseover="isHover = false" @mouseout="isHover = true" />
                        </template>
                    </button>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                            <i class="px-1 bi bi-house-door-fill"></i>Home
                        </router-link>
                    </li>
                    <li class="px-4" style="font-weight: 700;">
                        <router-link :to="{ name: 'about-us' }" class="nav-link active" aria-current="page">
                            <i class="px-1 bi bi-book"></i>About Us
                        </router-link>
                    </li>
                    <li class="px-4" style="font-weight: 700;">
                        <router-link :to="{ name: 'contacts' }" class="nav-link active" aria-current="page">
                            <i class="px-1 bi bi-telephone"></i>Contacs
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.mybtn {
    width: 40px;
    aspect-ratio: 1;
    background-color: rgba($color: #000000, $alpha: 0);
    border: none;
    opacity: 100%;
}

.mybtn:hover {
    opacity: 80%;

}

.big_container {
    @include dfc;
    background-color: $c-bg;
    padding-top: 1.5rem;
    padding-bottom: 1.4rem;
    max-width: 100%;

    .jumbo {
        display: flex;
        margin: 2rem;
        padding: 1.7rem;
        justify-content: flex-end;
        align-items: flex-start;
        background-image: url('../assets/img/jumbo.png');
        background-size: cover;
        width: 1200px;

        aspect-ratio: 1.66;

    }

}

.image-button {
    height: 50px;
    border-radius: 1rem;

}

.offcanvas {
    background-color: $c-bg;
    padding: 2.5rem;
    max-width: 370px;
    width: 40%;

}

ul {
    @include dfj;
    flex-direction: column;
    gap: 1.2rem;

    li {
        font-size: 1.9rem;
        color: $c-bg-txt;
        transition: all linear .1s;
    }

    li:hover {
        font-size: 2rem;
        color: white;
        transition: all linear .1s;
    }
}
</style>