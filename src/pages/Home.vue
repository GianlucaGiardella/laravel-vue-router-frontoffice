<script>
import DrinkFilter from "../components/DrinkFilter.vue";
import DrinkCard from "../components/DrinkCard.vue";
import AppPagination from "../components/AppPagination.vue";
import axios from "axios";
import { store } from "../store";

export default {
    components: {
        DrinkFilter,
        DrinkCard,
        AppPagination,
    },
    data() {
        return {
            store,
            arrCocktails: [],
            arrCategory: [],
            searchString: "",
            category: "",
        };
    },
    methods: {
        getCocktails() {
            axios
                .get(this.store.baseUrl + "api/cocktails", {
                    params: {
                        page: this.store.page,
                        q: this.searchString,
                        category: this.category,
                    }
                })
                .then(response => {
                    this.arrCocktails = response.data.data;
                    this.store.maxPages = response.data.total;
                });
        },
        getCategory() {
            axios
                .get(this.store.baseUrl + "api/category")
                .then(response => {
                    this.arrCategory = response.data;
                });
        },
        startSearch({ category, searchString }) {
            this.category = category;
            this.searchString = searchString;
            this.store.page = 1;
            this.getCocktails();
        },
    },
    created() {
        this.getCocktails();
        this.getCategory();
    },
    watch: {
        "store.page"() {
            this.getCocktails();
        }
    }
};
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <DrinkFilter class="filter" :arrCategory="arrCategory" @pressBtn="startSearch($event)" />

        <AppPagination />

        <div class="big_container_cards">
            <div class="container_card d-flex justify-content-center">
                <DrinkCard v-for="cocktail in arrCocktails" :key="cocktail.id" :objCocktail="cocktail" />
            </div>
        </div>

        <AppPagination />
    </div>
</template>

<style lang="scss" scoped>
.container_filter {
    max-width: 1200px;
}

.filter {
    width: 100%;
}

.big_container_cards {
    max-width: 1200px;
    margin-top: 3rem;
    padding-bottom: 2rem;
}

.container_card {
    display: flex;
    flex-wrap: wrap;
}
</style>
