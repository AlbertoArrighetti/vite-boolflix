<script>
import {store} from '../store.js';

import CardItem from './items/CardItem.vue';

export default {
    name: 'FilmList',

    data() {
        return {
            store,
        }
    },

    components: {
        CardItem,
    },

    methods: {
        
    },
}
</script>
<template>
    <main>
        <div class="container">
            <div class="wrapper">
                <div class="list">

                    <h2 :class="store.searchedMovieArray == 0 ? '' : 'noShow' ">Cerca un Film o una Serie</h2>
                    
                    <h2 class="post-search-txt" :class="store.searchedMovieArray == 0 ? 'noShow' : '' ">Films</h2>

                    <ul class="film_list">
                        <CardItem 
                        v-for="currentFilm in store.searchedMovieArray" 
                        :filmCard="currentFilm"
                        >
                        </CardItem>
                    </ul>

                    <h2 class="post-search-txt" :class="store.searchedMovieArray == 0 ? 'noShow' : '' ">Tv Series</h2>

                    <ul class="series_list">
                        <CardItem 
                        v-for="currentSeries in store.searchTvSeriesArray" 
                        :filmCard="currentSeries"
                        >
                        </CardItem>
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
                text-align: center;
            }
            .post-search-txt {
                color: $primaryColor;
                margin: 20px 0;
                text-transform: uppercase;
                text-align: start;
            }
            
        }
        .film_list, .series_list {
            list-style-type: none;
    
            display: flex;
            flex-flow: row wrap;
        }

    }
}

</style>