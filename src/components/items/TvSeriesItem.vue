<script>
import { store } from '/src/store'
export default {
    name: 'TvSeriesItem',

    props: {
        TvCard: Object,
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
                <img class="poster_img" :src="TvCard.poster_path == null ? '/public/img/posterNotFound.png' : store.imgUrl + TvCard.poster_path " :alt="TvCard.name">
            </div>


            <div>{{ TvCard.name }}</div>
            <div>{{ TvCard.original_name }}</div>

            <img class="flags" :src="store.getFlags(TvCard.original_language)" :alt="TvCard.original_language">

            <div class="star_container">
                <div v-for=" stars in store.vote(TvCard.vote_average)">               
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </li>

</template>