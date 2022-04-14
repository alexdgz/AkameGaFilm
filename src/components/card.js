Vue.component('card', {
    props: ["anime"],
    template: `

      <div class="col s4 m4 l4">
        <div class="card large blue-grey darken-4 waves-effect waves-block waves-light">
          <div class="card-content white-text center-align">
            <span class="card-title">{{anime.title.romaji}}</span>
            <div class="card-image activator hoverable">
              <img :src="anime.coverImage.large" alt="">
            </div>
          </div>
          <div class="card-reveal blue-grey darken-3">
            <span class="card-title grey-text text-lighten-5">{{anime.title.romaji}}<i class="material-icons right">clear</i></span>
            <span class="card-content grey-text text-lighten-5">
            
              <p> <i class="material-icons left">date_range</i> {{anime.startDate.year}} - {{anime.endDate.year}} <br><br>
              <i class="material-icons left">check</i> Status : {{anime.status}}<br><br>
              <i class="material-icons left">clear_all</i> Number of episode : {{anime.episodes}}<br><br>
              <i class="material-icons left">timelapse</i> Average episode length : {{anime.duration}} min<br><br>
              <i class="material-icons left">live_tv</i> Format : {{anime.format}}<br><br>
              <i class="material-icons left">format_list_numbered</i> Average score : {{anime.averageScore}}/100<br>
              <br>
              </p>
            </span>
            <div class="card-action">
              <a v-on:click="submit" class="waves-effect waves-light btn modal-trigger red darken-4 right" href="#modale">view more</a>
            </div>
            <!-- Modal Trigger -->
            

          
          </div>
        </div>
      </div>

    `,
    methods:{
        submit: function() {
          this.$emit('anime', this.anime) // emit the anime to the parent component
        }
    }   

})