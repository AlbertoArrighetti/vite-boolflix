<script>
// import axios
import axios from 'axios';
// store
import { store } from './store.js';

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
      apiKey: '',
    }
  },
  
  methods: {
    listOfMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${store.searchMovie}`)
    .then((res) => {
      this.store.searchedMovieArray = res.data.results;
    });
    }
  },

  created() {
    
    
    
  },
}
</script>


<template>
    <SearchBar @search="listOfMovies()"></SearchBar>
    <FilmList></FilmList>
</template>

<style lang="scss">

</style>
