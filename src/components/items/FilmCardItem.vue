<script>
import { store } from '/src/store'
export default {
    name: 'FilmCardItem',

    props: {
        filmCard: Object,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <li class="card">
        <div class="poster">
            <img class="poster_img" :src="filmCard.poster_path == null ? '/public/img/posterNotFound.png' : store.imgUrl + filmCard.poster_path " :alt="filmCard.name">
        </div>
    
        <div>{{filmCard.title}}</div>
        <div>{{filmCard.original_title}}</div>

        <img class="flags" :src="store.getFlags(filmCard.original_language)" :alt="filmCard.original_language">

        <div class="star_container">
            <div v-for="stars in store.vote(filmCard.vote_average)">
                <i class="fa-solid fa-star"></i>
            </div>
            <div v-for="emptyStars in store.voteDifference(filmCard.vote_average)">
                <i class="fa-regular fa-star"></i>
            </div>
        </div>
    </li>
</template>
