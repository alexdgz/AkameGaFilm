Vue.component('app', {
    template: `<div  id="app"> 
                    <search  @search-done="searchCompleted($event)"> </search>
                    <div class="row">
                        <card v-for="anime in animes"  v-bind:key="anime.id":anime=anime v-on:anime="setCurrentAnime($event)"> </card>
                        <modale v-bind:anime="currentAnime"></modale>
                    </div>
               </div>`,
    data : function () {
        return {
            animes: [], // liste des animes
            currentAnime: null // anime courant
    }},
    methods: {
        searchCompleted : function(data) {
           if (data != undefined) {
               this.animes = data; // set the data
           }
        },

        setCurrentAnime: function(anime) {
            if (anime != undefined) {
                this.currentAnime = anime; // set the current anime
            }

        }
    }

})