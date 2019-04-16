<template>
  <div id="app" class="app">
    <app-header></app-header>
    <router-view :films='sortFilms'></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFilm from './components/Film'
import FilmDetail from './components/FilmDetail'
import axios from 'axios'


export default {
  name: 'app',
  components: {
    AppHeader,
    AppFilm,
    FilmDetail
  },
  data() {
    return {
      films: []
    }
  },
  computed: {
    sortFilms: function() {
      return this.films.sort((a,b) => parseFloat(a.episode_id) - parseFloat(b.episode_id))
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/api/films')
      .then(response => { 
        this.films = response.data.results
      })
      .catch(error => {
        console.log(error)
      })
  }
    
  
}
</script>

<style lang="scss">
@import './main.scss'
</style>
