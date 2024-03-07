<script>
import { store } from '/src/store'
export default {
    name: 'CardItem',

    props: {
        filmCard: Object,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getTitle() {
            if (this.filmCard.title) {
                return this.filmCard.title;
            } else {
                return this.filmCard.name;
            }
        },

        getOriginalTitle() {
            if (this.filmCard.original_title) {
                return this.filmCard.original_title;
            } else {
                return this.filmCard.original_name;
            }
        },     
    },
}
</script>

<template>
    <li class="card">
        <div class="poster">
            <img class="poster_img" :src="filmCard.poster_path == null ? '/public/img/posterNotFound.png' : store.imgUrl + filmCard.poster_path " :alt="filmCard.name">
        </div>
    
        <div>{{ getTitle() }}</div>
        <div>{{ getOriginalTitle() }}</div>

        <img class="flags" :src="store.getFlags(filmCard.original_language)" :alt="filmCard.original_language">

        <div class="star_container">


            <!-- WIP -->
            <div v-for="stars in store.vote(filmCard.vote_average)">
                <i class="fa-solid fa-star"></i>
            </div>
            <div v-for="emptyStars in store.voteDifference(filmCard.vote_average)">
                <i class="fa-regular fa-star"></i>
            </div>


        </div>
    </li>
</template>

<style lang="scss">

// stilizzazione cards

.card {
    display: flex;
    flex-flow: column;

    width: calc(100% / 5);

    .flags {
        width: 24px;
        height: 18px;
    }

    .poster_img {
      width: 100%;
      height: 370px;
      object-fit: cover;
      object-position: top;

      border: 3px solid black;
    }

    .star_container {
      display: flex;

      .fa-star {
        color: #f7c209;
      }
    }
}
</style>