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
    <nav id="navBar">
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
@use '../styles/variables' as *;

#navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    position: fixed;

    width: 100%;
    height: 70px;

    background-color: black;

    .logo {
        color: $titleAndBtn;
        font-size: 1.5em;
        text-transform: uppercase;
    }
    .search {
        display: flex;
        align-items: center;
        gap: 10px;

        #searchBar {
            height: 24px;
            padding: 4px;
        }
        .searchBtn {
            padding: 4px 8px;
            background-color: $titleAndBtn;
            border: 1px solid $titleAndBtn;
            border-radius: 6px;
        }
    }


}

</style>