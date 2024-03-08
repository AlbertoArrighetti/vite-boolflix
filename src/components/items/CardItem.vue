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

            <div class="cardDescription">
                <div class="title">{{ getTitle() }}</div>
                <div class="original_title">{{ getOriginalTitle() }}</div>
        
                <div>
                    <img class="flags" :src="store.getFlags(filmCard.original_language)" :alt="filmCard.original_language">
                </div>
        
                <div class="star_container">
        
                    <!-- WIP -->
                    <div v-for="stars in store.vote(filmCard.vote_average)">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-for="emptyStars in store.voteDifference(filmCard.vote_average)">
                        <i class="fa-regular fa-star"></i>
                    </div>

                </div>

            <div class="desc">{{ filmCard.overview == "" ? 'No description found' : filmCard.overview }}</div>


            </div>



        </div>
    </li>
</template>

<style lang="scss">

@use '/src/styles/variables' as *;

@use '/src/styles/query.scss' as *;

// stilizzazione cards
.card {
    display: flex;
    flex-flow: column;
    width: calc(100% / 5);

    .poster {
        position: relative;
        border: 1px solid rgb(225, 225, 225);
        background-color: black;
        overflow-y: auto;

        .poster_img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            object-position: top;
            display: block;

            transition: 0.5s ease;
        }
        &:hover .poster_img {
               opacity: 0;
        }
        &:hover .cardDescription {
            display: block;
            width: 100%;
        }
    }

    .cardDescription {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        display: none;
        .title {
            font-weight: bold;
            padding: 10px 10px 0;
        }
        .original_title {
            margin-bottom: 6px;
            color: $primaryColor;
            font-weight: bold;
            font-size: 0.7em;
        }
        .flags {
            width: 24px;
            height: 18px;
        }
        .star_container {
          display: flex;
          justify-content: center;
    
          .fa-star {
            color: #f7c209;
          }
        }
        .desc {
            font-size: 10px;
            padding: 0 10px 10px;
        }
    }
    .cardDescription > *{
        text-align: center;
    }

}
@include cardMediaQ;
</style>