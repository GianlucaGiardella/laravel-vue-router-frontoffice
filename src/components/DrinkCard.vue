<script>
export default {
    props: {
        objCocktail: Object,
    },
};
</script>

<template>
    <div type="button" data-bs-toggle="modal" :data-bs-target="'#' + objCocktail.id"
        class="card_drink d-flex flex-column justify-content-center my-3 mx-3" style="width: 350px; height: 540px">
        <h1 class="text-center pt-3 pb-2">{{ objCocktail.nameDrink }}</h1>
        <img :src="objCocktail.imgURL" alt="objCocktail.nameDrink" class="img_drink mx-4" />
        <h4 class="text-center pt-2">Category:</h4>
        <h5 class="text-center">"{{ objCocktail.category }}"</h5>
    </div>

    <!-- <button  class="btn btn-primary" >
        Launch demo modal
    </button> -->

    <div class="modal fade" :id="objCocktail.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel" style="color: white;">{{ objCocktail.nameDrink }}
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h1 class="text-center pt-3 pb-2" style="color:white;"></h1>
                    <div class="d-flex justify-content-center m-3">
                        <img :src="objCocktail.imgURL" alt="objCocktail.nameDrink" class="img_drink img-fluid mx-4" />
                    </div>
                    <ul class="px-4 py-4 m-0">
                        <li>
                            <h3>Category: <span>{{ objCocktail.category }}</span></h3>
                        </li>
                        <li>
                            <h3>Type: <span>{{ objCocktail.alcoholic }}</span></h3>
                        </li>
                        <li>
                            <h3>Glass: <span>{{ objCocktail.glass }}</span></h3>
                        </li>
                    </ul>
                    <h2 class="px-4">Ingredienti: </h2>
                    <ul class="px-5" style="list-style: circle; color:white">
                        <li class="px-2">
                            <h4><span>{{ objCocktail.ingredient_1 }}</span></h4>
                        </li>
                        <li class="px-2">
                            <h4><span>{{ objCocktail.ingredient_2 }}</span></h4>
                        </li>
                        <li class="px-2">
                            <h4><span>{{ objCocktail.ingredient_3 }}</span></h4>
                        </li>
                        <li class="px-2">
                            <h4><span>{{ objCocktail.ingredient_4 }}</span></h4>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_drink {
    background-color: #895128;
    color: white;
}

.card_drink:hover {
    transition-duration: 0.5s;
    scale: 1.1;
}

.img_drink {
    border-radius: 100%;
    border: 4px solid white;
}

.modal-header {
    background-color: #895128;
}


.modal-body {
    background-color: #2F1B2C;
}

h3 {
    color: #895128;
}

h2 {
    color: #895128;
}

span {
    color: white;
}
</style>
