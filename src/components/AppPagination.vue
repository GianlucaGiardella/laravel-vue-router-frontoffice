<script>
export default {
    data() {
        return {
            currentPage: 1,
        };
    },
    props: {
        MaxPages: Number,
    },
    methods: {
        sendCurrentPage() {
            this.$emit('sendCurrentPage', this.currentPage);
        },
        toPrevPage() {
            if (this.currentPage !== 1) {
                this.currentPage--;
            }
        },
        toNextPage() {
            if (this.currentPage !== this.MaxPages) {
                this.currentPage++;
            };
        },
    },
    watch: {
        currentPage() {
            this.sendCurrentPage();
        },
    }
}
</script>

<template>
    <div class="pagination">
        <vue-awesome-paginate :total-items="MaxPages" :items-per-page="6" :max-pages-shown="5" v-model="currentPage">
            <template @click="toPrevPage">
                <span> Previous </span>
            </template>
            <template @click="toNextPage">>
                <span> Next </span>
            </template>
        </vue-awesome-paginate>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/general.scss' as *;

.pagination {
    @include dfc;
    max-width: 1200px;
}

.pagination .pagination-container {
    display: flex;
    column-gap: 10px;
    margin-bottom: 3rem;
}

.pagination .paginate-buttons {
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-color: #895128;
    border: none;
    color: white;
    border-radius: 2px;
}

.pagination .back-button,
.pagination .next-button {
    width: 30px;
    height: 30px;
}

.pagination .paginate-buttons:hover,
.pagination .active-page:hover {
    background-color: #F58F42;
}

.pagination .active-page {
    background-color: #f58128;
}

.pagination .back-button:active,
.pagination .next-button:active {
    background-color: #dd9e39;
}
</style>