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
        <div>{{filmCard.title}}</div>
        <div>{{filmCard.original_title}}</div>

        <img class="flags" :src="store.getFlags(filmCard.original_language)" :alt="filmCard.original_language">

        <div>{{filmCard.vote_average}}</div>
    </li>

</template>
