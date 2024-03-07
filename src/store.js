import { reactive } from 'vue'

export const store = reactive({
    searchMovie: '',
    searchedMovieArray: [],
    searchTvSeriesArray: [],

    // funzione per filtrare le bandiere
    getFlags(lg) {
        let flagUrl;
      
        // qui visualizzo tutte le casistiche in cui non trova la mia immagine
        switch (lg) {
        // es: se lg è en diventa flagUrl
            case 'en':
                flagUrl = 'https://flagcdn.com/us.svg';
            break;
            case 'ja':
                flagUrl = 'https://flagcdn.com/jp.svg';
            break;
            case 'zh':
                flagUrl = 'https://flagcdn.com/cn.svg';
            break;
            case 'cs':
                flagUrl = 'https://flagcdn.com/cz.svg';
            break;
            case 'ko':
                flagUrl = 'https://flagcdn.com/kr.svg';
            break;
            case 'hi':
                flagUrl = 'https://flagcdn.com/in.svg';
            break;
        
          default:
            flagUrl = `https://flagcdn.com/${lg}.svg`;
        }
      
        return flagUrl;
      },


      
    // visualizzazione poster
    imgUrl:'https://image.tmdb.org/t/p/w342/',



    // voto da 1 a 5 in stelle 
    vote(value) {
        return Math.round(value / 2);
    },

    // differenza
    voteDifference(value) {
        let res = Math.round(value / 2);

        return (5 - res)
    },
});