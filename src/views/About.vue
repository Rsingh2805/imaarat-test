<template>
    <section class="pt-16">
        <v-container>
            <v-row class="h-100">
                <v-col cols="12" md="6" class="d-flex flex-column justify-center">
                    <parallax speedx="-7.5">
                        <v-img src="../assets/about/1.jpg" height="300" width="300" class="rounded-xl elevation-16 mb-4 img-1"/>
                    </parallax>
                    <parallax speedy="-7.5" v-show="$vuetify.breakpoint.mdAndUp">
                        <v-img src="../assets/about/2.jpg" height="300" width="300" class="rounded-xl elevation-24 img-2"/>
                    </parallax>
                </v-col>
                <v-col cols="12" md="6" class="d-flex flex-column justify-center">
                    <h3 class="text-h2 font-weight-bold mb-8">About us</h3>
                    <p>Our Goal is to create work that is honest, solutions that are exploratory, educational and inspirational. Creative that is conceptually interesting and visually stunning. We design with the belief that process and collaboration should be exciting and fun as the end result. The studio believes in constantly exploring the parameters of design and blurring the boundaries between architecture, landscape, interiors and sustainability.</p>
                    <p>The quality of our projects is the direct result of experience, personal involvement and commitment to the client’s needs. We believe that unique design solutions lead to projects which successfully meet the challenges of shaping natural and built spaces into places which are sensitive to human needs, accepted by approval agencies and result in sound economic viability for the client</p>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-10 h-100">
            <h2 class="text-h2 text-center mb-8">What we Do?</h2>
            <v-row>
                <v-col cols="12" md="4" class="d-flex align-center">
                    <parallax :speedy="$vuetify.breakpoint.mdAndUp?30:false">
                    <v-card class="rounded-xl elevation-8">
                        <v-img src="../assets/about/research.jpeg" />
                        <v-card-title>Research</v-card-title>
                        <v-card-text>
                            Before we do anything we’ll come and meet you. We’ll then ask for a brief (preferably a written brief). At this point we’ll also mention anything we’ve experienced in the past that might make your project even more of a success. Once you’re happy we’ll agree timelines and deliverables, and then get on it.
                        </v-card-text>
                    </v-card>
                    </parallax>
                </v-col>
                <v-col cols="12" md="4" class="d-flex align-center">
                    <parallax :speedy="$vuetify.breakpoint.mdAndUp?-30:false">
                        <v-card class="rounded-xl elevation-8">
                            <v-card-title>Recommend</v-card-title>
                            <v-card-text>
                                The process of researching, questioning and coming in with a fresh perspective has been the key to our creative success over the years. Once we’ve agreed the right strategic route for you, we’ll get to work on the creative direction. This could be delivering a variety of possible ideas, or building up one concrete solution.
                            </v-card-text>
                            <v-img src="../assets/about/recommend.jpg" />
                        </v-card>
                    </parallax>
                </v-col>
                <v-col cols="12" md="4" class="d-flex align-center">
                    <parallax :speedy="$vuetify.breakpoint.mdAndUp?30:false">
                        <v-card class="rounded-xl elevation-8">
                            <v-img src="../assets/about/create.jpeg" />
                            <v-card-title>Create</v-card-title>
                            <v-card-text>
                                We’ll create all assets needed for commencement of works at site. We’ll also hand over the entire master files, artwork and style guides. Then after a set time we’ll look at the execution and the results to see how, together, we can build on the success.
                            </v-card-text>
                        </v-card>
                    </parallax>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="philosophy my-10">
            <parallax speedy="-5">
                <v-card class="d-inline-block rounded-xl elevation-24">
                    <v-card-title class="text-h4 orange darken-4 white--text font-weight-black">
                        <v-icon class="text-h3 mr-4 white--text">mdi-lightbulb-on</v-icon> Our Philosophy
                    </v-card-title>
                    <v-divider />
                    <v-list dense class="yellow lighten-4">
                        <v-list-item>
                            <v-icon class="success--text text-h4 mr-3">mdi-check-circle</v-icon>
                            <v-list-item-content>Right project schedule including planning, execution and min & max time schedules</v-list-item-content>
                        </v-list-item>
                        <v-divider />
                        <v-list-item>
                            <v-icon class="success--text text-h4 mr-3">mdi-check-circle</v-icon>
                            <v-list-item-content>Keep the client informed about the progress at any point of time</v-list-item-content>
                        </v-list-item>
                        <v-divider />
                        <v-list-item>
                            <v-icon class="success--text text-h4 mr-3">mdi-check-circle</v-icon>
                            <v-list-item-content>On time submission</v-list-item-content>
                        </v-list-item>
                        <v-divider />
                        <v-list-item>
                            <v-icon class="success--text text-h4 mr-3">mdi-check-circle</v-icon>
                            <v-list-item-content>Continuous learning and training</v-list-item-content>
                        </v-list-item>
                        <v-divider />
                        <v-list-item>
                            <v-icon class="success--text text-h4 mr-3">mdi-check-circle</v-icon>
                            <v-list-item-content>Accurate Costing</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </parallax>
        </v-container>
    </section>
</template>

<script>
import Parallax from '../components/common/Parallax.vue'

export default {
    components: {Parallax, }
}
</script>

<style lang="scss" scoped>
    .img-1 {
        transform: translate(0, 0);
    }
    .img-2 {
        transform: translate(2rem, -5rem);
    }
    .img-3 {
        transform: translate(-5rem, -10rem);
    }
    .h-100 {
        min-height: 100vh;
    }
</style>