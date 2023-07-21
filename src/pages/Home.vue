<script>
import DrinkFilter from "../components/DrinkFilter.vue";
import DrinkCard from "../components/DrinkCard.vue";
import AppPagination from "../components/AppPagination.vue";
import axios from "axios";


export default {
    components: {
        DrinkFilter,
        DrinkCard,
        AppPagination,
    },
    data() {
        return {
            arrCocktails: [],
            arrCategory: [],
            searchString: "",
            category: "",
            page: 1,
            totalPages: 0,
        };
    },
    methods: {
        getCocktails() {
            axios.get("http://localhost:8000/api/cocktails", {
                params: {
                    page: this.page,
                    q: this.searchString,
                    category: this.category,
                }
            }).then(response => {
                this.arrCocktails = response.data.data;
                this.totalPages = response.data.total;
            });
        },
        getCategory() {
            axios.get("http://localhost:8000/api/category").then(response => {
                this.arrCategory = response.data;
            });
        },
        startSearch({ category, searchString }) {
            this.category = category;
            this.searchString = searchString;
            this.page = 1;
            this.getCocktails();
        },
        changeCurrentPage(currentPage) {
            this.page = currentPage;
            this.getCocktails();
        }
    },
    created() {
        this.getCocktails();
        this.getCategory();
    },
};
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <DrinkFilter class="filter" :arrCategory="arrCategory" @pressBtn="startSearch($event)" />

        <div class="big_container_cards">
            <div class="container_card d-flex justify-content-center">
                <DrinkCard v-for="cocktail in arrCocktails" :key="cocktail.id" :objCocktail="cocktail" />
            </div>
        </div>

        <AppPagination :MaxPages="totalPages" @sendCurrentPage="changeCurrentPage($event)" />
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
