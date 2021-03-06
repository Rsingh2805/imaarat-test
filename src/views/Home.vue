<template>
    <section>
        <div class="landing d-flex flex-column justify-center align-center">
            <h3 class="text-h3 text-center font-weight-bold">
                Imaarat Architects
            </h3>
            <p class="text-center">Converting your visions into reality...</p>    
            <transition name="pop-up" appear>
                <v-img class="img item-1" src="../assets/sil1.png" />
            </transition>
            <transition name="pop-up" appear>
                <v-img class="img item-2" src="../assets/sil2.png" />
            </transition>
            <transition name="pop-up" appear>
                <v-img class="img item-3" src="../assets/sil3.png" />
            </transition>
            <v-btn fab color="white" class="scroll-down">
                <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
        </div>
        <v-container class="py-12">
            <h4 class="text-h3 font-weight-light text-md-center">Our design methodology</h4>
            <h5 class="text-h5 font-weight-thin text-md-center mb-4">No set design methodology</h5>
            <v-divider />
            <p class="mt-4 text-left">
                Imaarat architecture & design studio is not restricted by a set designing style or a box-ticking methodology. Instead, each project that we take up is a result of meticulous and in-depth designing process that involves understanding the needs and aspirations of our clients and providing them with innovative and design-led solutions tailored to them individually.
            </p>
            <p class="text-right">
                Our Goal is to create work that is honest, solutions that are exploratory, educational and inspirational. Creative that is conceptually interesting and visually stunning. We design with the belief that process and collaboration should be exciting and fun as the end result. The studio believes in constantly exploring the parameters of design and blurring the boundaries between architecture, landscape, interiors and sustainability.
                The quality of our projects is the direct result of experience, personal involvement and commitment to the client’s needs. We believe that unique design solutions lead to projects which successfully meet the challenges of shaping natural and built spaces into places which are sensitive to human needs, accepted by approval agencies and result in sound economic viability for the client.
            </p>
        </v-container>
        <div class="scrolling-text">
            <div class="scrolling grey--text text--darken-2 d-inline-flex flex-row align-center flex-nowrap">
                <span class="mx-2 font-weight-bold text-h2 d-inline">Residential</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-thin text-h1 d-inline">Commercial</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-medium text-h3 d-inline">Healthcare</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-light text-h2 d-inline">Hospitality</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-black text-h3 d-inline">Academic</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-thin text-h1 d-inline">Industrial</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-medium text-h2 d-inline">Modular Kitchen</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-regular text-h3 d-inline">Renovation</span><v-icon class="grey--text">mdi-circle</v-icon>
                <!-- <span class="mx-2 font-weight-black text-h4 d-inline">Interiors</span><v-icon class="grey--text">mdi-circle</v-icon> -->

                <span class="mx-2 font-weight-bold text-h2 d-inline">Residential</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-thin text-h1 d-inline">Commercial</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-medium text-h3 d-inline">Healthcare</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-light text-h2 d-inline">Hospitality</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-black text-h3 d-inline">Academic</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-thin text-h1 d-inline">Industrial</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-medium text-h2 d-inline">Modular Kitchen</span><v-icon class="grey--text">mdi-circle</v-icon>
                <span class="mx-2 font-weight-regular text-h3 d-inline">Renovation</span><v-icon class="grey--text">mdi-circle</v-icon>
                <!-- <span class="mx-2 font-weight-black text-h4 d-inline">Interiors</span><v-icon class="grey--text">mdi-circle</v-icon> -->

            </div>
        </div>
        <v-container class="my-16">
            <client-review />
        </v-container>
    </section>
</template>

<style lang="scss" scoped>
    .landing {
        height: 100vh;
        position: relative;
        & > .main {
            height: 100%;
        }
    }
    .scrolling-text {
        overflow: hidden;
        white-space: nowrap;
    }
    .scrolling {
        width: auto;
        animation: scroll 20s infinite linear;
    }
    @keyframes scroll{
        0%   {transform: translateX(0);}
        100% {transform: translateX(-50%);}
    }
    .img {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .item-1{
        height: 300px;
        opacity: 0.3;
    }
    .item-2{
        height: 200px;
        opacity: 0.7;
    }
    .item-3{
        height: 100px;
    }
    .pop-up-enter-active {
        transition: transform 500ms;
        transform-origin: bottom;
        transform: scaleY(1);
        &.item-1 {
            transition-delay: 0s;
        }
        &.item-2 {
            transition-delay: 300ms;
        }
        &.item-3 {
            transition-delay: 600ms;
        }
    }
    .pop-up-enter {
        transform: scaleY(0);
    }
    .scroll-down {
        animation: bounce-an 1s infinite;
        position: absolute;
        bottom: 20%;
    }
    @keyframes bounce-an {
        0% {
            transform: translateY(5px);
        }
        50% {
            transform: translateY(-5px);
        }
        100% {
            transform: translateY(5px);
        }
    }
</style>

<script>
import ClientReview from '../components/ClientReview'

export default {
    components: {ClientReview, }
}
</script>