import anilistApi from "../queryAnime.js";

Vue.component('search', {
    template: `<form  @submit.prevent="handleSubmit" class="center-align">


                    <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Name" name="name" id='name' required v-model="animeTitle" />
                    <label for="name" class="form__label">SEARCH AN ANIME</label>
                    </div>
                    </br>

                    <input type="submit" value="SEARCH" class="btn red darken-4"/>
            </form>`,
    data : function() {
        return {
            animeTitle: ""
        }},
    methods : {
        handleSubmit : function() {
            anilistApi.bySearch(this.animeTitle).then(data =>  this.$emit('search-done', data.data.Page.media)); // emit the data to the parent component
        }
    },

})