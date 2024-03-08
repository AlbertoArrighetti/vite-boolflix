<script>
import {store} from '../store.js';

export default {
    name: 'SearchBar',

    data() {
        return {
            store,

            links: [
                'Home',
                'Serie TV',
                'Film',
                'Nuovi e popolari',
                'La mia lista',
                'Sfoglia per lingua'
            ],
        }
    },
}
</script>

<template>
    <nav id="navBar">
        <div class="links_wrapper">
            <div class="logo">
                <img src="/public/img/logo.png" alt="Logo">
            </div>

            <ul>
                <li class="ellipsis"><i class="fa-solid fa-ellipsis-vertical"></i></li>
                <li v-for="currentLink in links"> {{ currentLink }} </li>
            </ul>
        </div>


        <div class="search">
            <input v-model="store.searchMovie" type="search" name="searchBar" id="searchBar" placeholder="Cerca">

            <button @click="$emit('search')" class="searchBtn">Search</button>
        </div>
    </nav>
</template>

<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/query' as *;

#navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 5;

    width: 100%;
    height: $searchBarHeight;
    
    padding: 20px 30px;
    background-color: black;

    .links_wrapper {
        display: flex;
        align-items: center;

        ul {
            display: flex;
            align-items: center;
            gap: 16px;
            list-style-type: none;

            .ellipsis {
                display: none;
                font-size: 1.3em;
            }
  
            li {
                opacity: 0.6;
                cursor: pointer;
                font-size: 12px;
                &:hover {
                    opacity: 1;
                    color: $primaryColor;
                }
            }
        }
    }

    .logo {
        color: $primaryColor;
        font-size: 1.5em;
        text-transform: uppercase;
        padding: 10px 20px 0 0;

        img {
            object-fit: contain;
            width: 100%;
        }
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
            background-color: $primaryColor;
            border: 1px solid $primaryColor;
            border-radius: 6px;
        }
    }
    @include navbarMediaQ;
}


</style>