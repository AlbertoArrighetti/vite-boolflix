<script>
import {store} from '../store.js';

import FilmCardItem from './items/FilmCardItem.vue';

export default {
    name: 'FilmList',

    data() {
        return {
            store,
        }
    },

    components: {
        FilmCardItem,
    },
}
</script>
<template>
    <main>
        <div class="container">
            <div class="filmWrapper">
                <ul class="filmList">

                        <FilmCardItem 
                            v-for="currentFilm in store.searchedMovieArray" 
                            :card="currentFilm"
                        >
                        </FilmCardItem>
                
                </ul>
            </div>
        </div>
    </main>
</template>
<style lang="scss">

@use '../styles/variables' as *;

main {
    // avendo impostato la search bar in position:fixed,
    // questo è il valore dell'altezza che vari in base all'altezza della nav
    padding-top: $searchBarHeight;

    .filmWrapper {
        margin-top: 40px;


        .filmList {
            list-style-type: none;
    
            display: flex;
            flex-flow: row wrap;
            gap: $filmListGap;
        }
    }
}

</style>