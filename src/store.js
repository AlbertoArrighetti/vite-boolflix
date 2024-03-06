import { reactive } from 'vue'

export const store = reactive({
    searchMovie: '',
    searchedMovieArray: [],
    searchTvSeriesArray: [],

    // funzione per filtrare le bandiere
    getFlags(lg) {
        try {
            if (lg == 'en') {
                return 'https://flagcdn.com/us.svg';
            } else if (lg == 'ja') {
                return 'https://flagcdn.com/jp.svg';
            }
            return `https://flagcdn.com/${lg}.svg`;
        } catch (err) {
            return '/public/img/src_notfound.png';
        }
    }
});