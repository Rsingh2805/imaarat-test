<template>
    <div class="d-flex flex-column flex-md-row elevation-4">
        <div>
            <v-btn-toggle background-color="grey darken-2" active-class="white" color="transparent" v-model="curr" class="flex-md-column" borderless>
                <v-btn :key="item.name" v-for="item of reviews" fab large>
                    <v-avatar class="ma-2">
                        <img :src="require(`../assets/${item.img}`)"/>
                    </v-avatar>
                </v-btn>
            </v-btn-toggle>
        </div>
        <v-window v-model="curr" vertical class="flex-grow-1">
            <v-window-item :key="item.name" v-for="item of reviews" class="h-100">
                <v-card color="transparent" flat class="pa-4 h-100">
                    <v-card-text class="text-center">
                        <p class="text-body-1 font-weight-medium">"{{ item.text }}"</p>
                        <p>- {{ item.name }}</p>
                    </v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </div>
</template>

<style lang="scss" scoped>
    .h-100 {
        height: 100%;
    }
    .text-body-1 {
        white-space: pre-wrap;
    }
</style>

<script>
const reviews = [
    {name: 'Arun Kumar', text: 'Great work by Imaarat studio on the field. \nHelped with the project all from the first stage to the last!', img: 'user.jpg'},
    {name: 'Sahi Kumar', text: 'Great work by Imaarat studio on the field. Helped with the project all from the first stage to the last!', img: 'user.jpg'},
    {name: 'Manish Kumar', text: 'Great work by Imaarat studio on the field. Helped with the project all from the first stage to the last!', img: 'user.jpg'}
]
export default {
    data() {
        return {
            reviews: reviews,
            curr: 0,
            handler: null
        }
    },
    methods: {
        intervalFunc: function(){ 
            return setInterval(() => {
                console.log('Hi')
                this.curr = this.curr + 1;
            }, 5000)
        }
    },
    mounted () {
        this.handler = this.intervalFunc()
    },
    watch: {
        curr: function() {
            clearInterval(this.handler);
            this.handler = this.intervalFunc()
        }
    }
}
</script>