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
            <div>{{ TvCard.name }}</div>
            <div>{{ TvCard.original_name }}</div>

            <img class="flags" :src="store.getFlags(TvCard.original_language)" :alt="TvCard.original_language">

            <div>{{ TvCard.vote_average }}</div>
        </li>

</template>