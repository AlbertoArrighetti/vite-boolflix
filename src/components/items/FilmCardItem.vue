<script>

export default {
    name: 'FilmCardItem',

    props: {
        card: Object,
    },

    methods: {
        getFlags(lg) {
            if (lg == 'en') {
                return `https://flagcdn.com/us.svg`
            }else if (lg == 'ja'){
                return `https://flagcdn.com/jp.svg`
            }
            return `https://flagcdn.com/${lg}.svg`
        }
    }

}
</script>

<template>

<!-- stilizzazione cards -->
    <li class="card">
        <div>{{card.title}}</div>
        <div>{{card.original_title}}</div>



        <img :src="getFlags(card.original_language)" :alt="card.original_language">



        <div>{{card.vote_average}}</div>
    </li>

</template>

<style lang="scss">
@use '/src/styles/variables' as *;

.card {
    display: flex;
    flex-flow: column;

    width: calc(100% / 5 - $filmListGap / 5 * 4);

    img {
        width: 24px;
        height: 18px;
    }
}

</style>