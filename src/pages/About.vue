<script>

</script>

<template>
    <div class="container-about">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus omnis cupiditate tempore, veniam
            quidem soluta voluptatem odit possimus sapiente animi atque alias numquam? Porro recusandae praesentium eum odio
            blanditiis.</p>
        <h3 class="py-2">La nostra Storia</h3>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit natus perspiciatis quis molestiae
            ex expedita
            soluta quo dolore vitae quidem, sint aliquam minima optio cupiditate aspernatur maxime reiciendis in!
            Error non omnis exercitationem, ea aspernatur dolor, ipsam laudantium veniam in voluptates animi, reprehenderit
            neque? Suscipit, quidem, sequi laborum animi nostrum harum labore nulla iste incidunt provident inventore
            repellendus vero?
            Sequi nulla molestias quaerat voluptatibus officia officiis, perferendis pariatur suscipit iusto reprehenderit
            numquam debitis doloribus unde itaque consequatur eos magni? Laudantium soluta aperiam, labore quia sequi
            deleniti quibusdam officia minus!</p>
        <div class=" cont-card d-flex gap-3 mt-3">
            <div class="card" style="width: 18rem;">
                <img src="../assets/img/Anonymous_emblem.svg.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3>Paolo Falco</h3>
                    <h3>CEO & Founder FRONT-END</h3>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/img/Anonymous_emblem.svg.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3>Cristian Lazzari</h3>
                    <h3>CEO & Collaborator FRONT-END</h3>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/img/Anonymous_emblem.svg.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3>Antonio Nicolaci</h3>
                    <h3>CEO & FOUNDER BACK-END</h3>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/img/Anonymous_emblem.svg.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3>Vincenzo Minardi</h3>
                    <h3>CEO & Collaborator FRONT-END</h3>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/img/Anonymous_emblem.svg.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3>Gianluca Giardella</h3>
                    <h3>CEO & Collaborator FRONT-END</h3>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/img/Anonymous_emblem.svg.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2>Renato Taccogna</h2>
                    <h3>CEO & Collaborator FRONT-END</h3>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.container-about {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: $c-bg;
    color: white;
}


.card {
    background-color: #895128;
    color: white;
}
</style>