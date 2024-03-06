<script>
export default {
    name: 'FilmCardItem',

    props: {
        card: Object,
    },
}
</script>

<template>

    <li class="card">
        <div class="title">{{card.title}}</div>
        <div class="original_title">{{card.original_title}}</div>
        <div class="original_language">{{card.original_language}}</div>
        <div class="vote">{{card.vote_average}}</div>
    </li>

</template>

<style lang="scss">

</style>