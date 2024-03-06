<script>
// import axios
import axios from 'axios';
// store
import { store } from './store';

// components
import SearchBar from './components/SearchBar.vue';
import FilmList from './components/FilmList.vue'

export default {
  components: {
    SearchBar,
    FilmList,
  },

  data() {
    return {
      store,

      // get the key from
      //  https://www.themoviedb.org/settings/api
      apiKey: 'bb6ee0f46884a8553f28248b1f5f541a',
    }
  },
  
  methods: {
    listOfMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${store.searchMovie}`)
      .then((res) => {
        this.store.searchedMovieArray = res.data.results;
      });
    },

    listOfTvSeries() {
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${store.searchMovie}`)
      .then((res) => {
        
        this.store.searchTvSeriesArray = res.data.results;
      });
    },

    
  },

}
</script>


<template>
    <SearchBar @search="listOfMovies(), listOfTvSeries()"></SearchBar>
    <FilmList></FilmList>
</template>

<style lang="scss">

</style>
