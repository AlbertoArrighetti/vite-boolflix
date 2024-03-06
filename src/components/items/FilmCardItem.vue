<script>
export default {
    name: 'FilmCardItem',

    props: {
        card: Object,
    },
}
</script>

<template>

<!-- stilizzazione cards -->
    <li class="card">
        <div><span>Titolo</span> : {{card.title}}</div>
        <div><span>Titolo Originale</span> : {{card.original_title}}</div>
        <div><span>Lingua Originale</span> : {{card.original_language}}</div>
        <div><span>Voto</span> : {{card.vote_average}}</div>
    </li>

</template>

<style lang="scss">
@use '/src/styles/variables' as *;

.card {
    display: flex;
    flex-flow: column;

    width: calc(100% / 4 - $filmListGap / 4 * 3);

    span {
        color: $primaryColor;
    }
}

</style>