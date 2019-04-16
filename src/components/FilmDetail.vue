<template>
    <div class="film-detail">
        <div class="container">
            <div class="film-detail__wrapper"> 
                <h3 class="film-detail__title">{{ film.title }}</h3>    
                <p class="film-detail__director"><span>direct by:</span> {{ film.director }}</p>
                <p class="film-detail__sinopsis">{{ film.opening_crawl }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios' 

export default {
    name: 'film-detail',
    props: ['films'],
    data() {
        return {
            id: this.$route.params.id - 1
        }
    },
    computed: {
        film() {
            return this.films[this.id]
        }
    }

}
</script>

<style lang="scss">

.film-detail {
    padding: 30px 0;
}

</style>
