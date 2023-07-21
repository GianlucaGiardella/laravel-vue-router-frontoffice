<script>
export default {
    props: {
        arrCategory: Array,
    },
    data() {
        return {
            category: "",
            searchString: "",
        }
    },
    methods: {
        searchCocktail() {
            this.$router.push({
                name: "home",
                query: {
                    q: this.searchString,
                    category: this.category
                },
            });
        }
    },
}
</script>

<template>
    <form @submit.prevent="searchCocktail">
        <input type="text" placeholder="GIN TONIC... SPRITZ..." v-model="searchString">
        <select v-model="category">
            <option value="" selected>All Categories</option>
            <option v-for="category in arrCategory" :key="category" :value="category.category">
                {{ category.category }}
            </option>
        </select>
        <button class="mybtn1" @click="$emit('pressBtn', { category: category, searchString: searchString })">
            SEARCH
        </button>
    </form>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

form {
    @include dfc;
    width: 100%;
    background-color: $c-bg;
    padding-top: 1.5rem;
    padding-bottom: 1.4rem;
    gap: 2rem;
    flex-wrap: wrap;
}

.mybtn1 {
    border: none;
    height: 3.5rem;
    width: 12rem;
    padding-inline: 2rem;
    border-radius: 10rem;
    background-color: $c-bg-i;
    font-weight: bolder;
    color: $c-bg-txt;
    transition: all linear .2s;
}

select {
    border: 2px solid $c-bg-txt;
    height: 3.5rem;
    width: 20rem;
    padding-inline: 2rem;
    border-radius: 10px;
    background-color: $c-bg-i;
    font-weight: bolder;
    color: $c-bg-txt;
    transition: all linear .2s;
}

input {
    border: 2px solid $c-bg-txt;
    height: 3.5rem;
    width: 22rem;
    padding-inline: 2rem;
    border-radius: 10rem;
    background-color: $c-bg-i;
    font-weight: bolder;
    transition: all linear .2s;
}

input::placeholder {
    color: $c-bg-txt;
    transition: all linear .2s;
}

input:hover::placeholder {
    transition: all linear .2s;
    color: white;
}

.mybtn1:hover {
    color: white;
    transition: all linear .2s;
}

select:hover {
    transition: all linear .2s;
    color: white;
}
</style>