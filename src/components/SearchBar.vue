<script>
import {store} from '../store.js';

export default {
    name: 'SearchBar',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <nav>
        <div class="logo">
            boolflix
        </div>

        <div class="search">
            <input v-model="store.searchMovie" type="search" name="searchBar" id="searchBar" placeholder="Cerca">

            <button @click="$emit('search')" class="searchBtn">Search</button>
        </div>
    </nav>
</template>

<style lang="scss">

</style>