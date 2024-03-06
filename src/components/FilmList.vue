<script>
import {store} from '../store.js';

import FilmCardItem from './items/FilmCardItem.vue';
import TvSeriesItem from './items/TvSeriesItem.vue'

export default {
    name: 'FilmList',

    data() {
        return {
            store,
        }
    },

    components: {
        FilmCardItem,
        TvSeriesItem,
    },
}
</script>
<template>
    <main>
        <div class="container">
            <div class="wrapper">
                <div class="list">


                    <h2>Films</h2>

                    <ul class="film_list">
                        <FilmCardItem 
                        v-for="currentFilm in store.searchedMovieArray" 
                        :filmCard="currentFilm"
                        >

                        </FilmCardItem>
                    </ul>

                    <h2>Tv Series</h2>

                    <ul class="series_list">
                        <TvSeriesItem
                        v-for="currentSeries in store.searchTvSeriesArray"
                        :TvCard="currentSeries"
                        >
                        </TvSeriesItem>
                        
                    </ul>
                    

                        
                
                </div>
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

    .wrapper {
        margin: 40px 0;

        .list {
            h2 {
                color: $primaryColor;
                margin: 20px 0;
                text-transform: uppercase;
            }
        }
        .film_list, .series_list {
            list-style-type: none;
    
            display: flex;
            flex-flow: row wrap;
            gap: $filmListGap;
        }

    }
}

</style>