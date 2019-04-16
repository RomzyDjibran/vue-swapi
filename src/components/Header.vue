<template>
    <div class="header">
        <div class="container">
            <nav>
                <router-link to="/" class="header-logo">
                    <span class="header-logo__img">
                        <img src="../assets/img/star-wars-icon.png" alt="" srcset="">
                    </span>
                    <span class="header-logo__text">star wars</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-header'

}
</script>

<style lang="scss">
@import "../main.scss";

.header {
    background: $red;
    padding: 25px 0 20px;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.08);
}
.header-logo {
    display: flex;
    align-items: center;
    margin: 0;
    
    &__img {
        margin-right: 10px;
        margin-top: 6px;
        img { max-width: 30px; }
    }

    &__text {
        text-transform: uppercase;
        color: $white;
        font-weight: $font-med;
        font-size: 25px;
    }
}
</style>
