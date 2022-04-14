Vue.component('modale', {
    props: ["anime"],
    template: `
            <div id="modale" class="modal blue-grey darken-3 grey-text text-lighten-5">
                <div class="modal-content">
                    <div v-if="anime !== null">
                        <div class="col s6 m6 l6">

                            <h4>{{anime.title.romaji}}</h4>
                            <div id="reldate">
                                <h5> <i class="material-icons left">date_range</i> Release date : {{anime.startDate.day}}-{{anime.startDate.month}}-{{anime.startDate.year}}</h5> 
                                

                                
                            </div>
                            <h5><i class="material-icons left">videocam</i>Studios</h5>
                            
                            <ul class="collection blue-grey darken-3" id="studio">
                                <div class="scrolldiv blue-grey darken-3">
                                    <div v-for="studio in anime.studios.nodes">
                                        <li class="collection-item blue-grey darken-3">
                                            {{studio.name}}
                                        </li>
                                    </div>
                                </div>
                            </ul>
                            

                            
                            <h5><i class="material-icons left">description</i> Genres</h5>
                            <div v-for="genre in anime.genres" class="chip">
                                {{genre}}
                            </div>
                        </div> 
                        <div class="col s6 m6 l6 centerimg">
                            <img :src="anime.coverImage.large" alt="">
                        </div>
                        <div class="col s12 m12 l12">
                        <h5><i class="material-icons left">bookmark_border</i> Synopsis</h5> 
                            <div v-html="anime.description"></div>
                            <div class="modal-footer blue-grey darken-3">
                            <a href="#!" class="modal-close waves-effect waves-green btn red darken-4 grey-text text-lighten-5">close</a>
                        </div>      
                        </div>
                    </div>
                </div>
            </div>

    `,
    mounted: function() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems); // Initialize the modals
        })
    }
    

})