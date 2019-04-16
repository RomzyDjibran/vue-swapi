<template>
    <section class="content">
        <div class="container">
            <h3 class="content__title">a movie list from star wars</h3>
            <p class="content__divider"><img src="../assets/img/text-divider.png" alt="star wars"></p>

            <div class="content__item">
                <div class="card" v-for="film in films" :key="film.episode_id">
                    <div class="card__container">
                        <p class="card__number">{{ film.episode_id }}</p>
                        <figure class="card__logo">
                            <img src="../assets/img/star-wars-icon-text.png" alt="death vader star wars">
                        </figure>
                        <p class="card__episode">episode</p>
                        <div class="card__detail">
                            <router-link class="btn" :to="`/episode/${film.episode_id}`">view details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'app-content',
    props: ['films']
    
}
</script>

<style lang="scss">
@import "../main.scss";

.content {
    padding: 50px 0;

    &__title {
        @include text-center;
        text-transform: uppercase;
        font-weight: $font-med;
        color: $dark;
        font-size: 26px;
        margin-bottom: 15px;
    }
    &__divider {
        @include text-center;
        margin-bottom: 50px;
    }
    &__item {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
    }
    .card {
        
        width: calc(25% - 30px);
        padding: 0 15px;
        margin-bottom: 30px;

        &__container {
            background-image: linear-gradient(to bottom,#984e4e,#ff4444);
            padding: 15px;    
            border-radius: 5px;
            position: relative;
            overflow: hidden;
            transition: all 0.5s;
            cursor: pointer;
            &:hover {
                .card__detail {
                    transform: translatey(0);
                }
            }
        }
        &__number {
            text-align: right;
            font-size: 36px;
            font-weight: $font-med;
            line-height: 30px;
            color: rgba(255,255,255,.6);
            margin: 0;
        }
        &__logo {
            margin: 25px 40px;
            img { width: 100%; }
        }
        &__episode {
            text-align: center;
            color: rgba(255,255,255,.6);
            font-size: 30px;
            margin: 0;
        }
        &__detail {
            position: absolute;
            top: 7px;
            right: 7px;
            bottom: 7px;
            left: 7px;
            background: rgba(0,0,0,0.7);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(225px);
            transition: all 0.5s;
        }
        .btn {
            display: inline-block;
            color: $white;
            text-transform: uppercase;
            border: 1px solid $red;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 14px;
            transition: all 0.5s;
            cursor: pointer;
            &:hover {
                background: $red;
            }
        }
    }
}

@media (max-width: 480px){

.content {
    padding: 30px 0;
    &__title { font-size: 20px; }
    &__divider { margin-bottom: 30px; }

    .card {
        width: calc(50% - 30px);

        &__logo { margin: 18px; }
        .btn {
            padding: 5px 10px;
            font-size: 12px;
        }
    }
}

}
</style>
