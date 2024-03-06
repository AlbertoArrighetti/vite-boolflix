<script>
// import axios
import axios from 'axios';
// store
import { store } from './store.js';

export default {
  components: {

  },

  data() {
    return {
      store,

      apiKey: '',
    }
  },
  
  methods: {
    
  },

  created() {

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=Ritorno al futuro`)
    .then((res) => {
      console.log(res.data.results)
    });
    
  },
}
</script>

<template>

<div>
  <h1>ciao</h1>
</div>

</template>

<style lang="scss">

div {

  h1 {
    color: red;
  }
}
</style>
