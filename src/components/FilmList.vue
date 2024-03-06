<script>
import {store} from '../store.js';

export default {
    name: 'FilmList',

    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <main>
        <div class="container">
            <div class="filmWrapper">
                <ul v-for="currentFilm in store.searchedMovieArray">
                    <li>{{ currentFilm.title }}</li>
                    <li>{{ currentFilm.original_title }}</li>
                    <li>{{ currentFilm.original_language }}</li>
                    <li>{{ currentFilm.vote_average }}</li>
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
}

</style>