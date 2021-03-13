<template>
    <div>
        <v-row v-if="isDataType('A')" :class="getRandomDirection()">
            <v-col class="d-flex flex-column justify-between" cols="8">
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[0]}`)" />
            </v-col>
            <v-col class="d-flex flex-column justify-between" cols="4">
                <v-img class="elevation-3 rounded-lg mb-2" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[1]}`)" />
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[2]}`)" />
            </v-col>
        </v-row>
        <v-row v-if="isDataType('B')" :class="getRandomDirection()">
            <v-col class="d-flex flex-column justify-between" cols="4">
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[0]}`)" />
            </v-col>
            <v-col class="d-flex flex-column justify-between" cols="4">
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[1]}`)" />
            </v-col>
            <v-col class="d-flex flex-column justify-between" cols="4">
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[2]}`)" />
            </v-col>
        </v-row>
        <v-row v-if="isDataType('C')" :class="getRandomDirection()">
            <v-col class="d-flex flex-column justify-between" cols="12">
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="2/1" :src="require(`../assets/gallery/${data.arr[0]}`)" />
            </v-col>
        </v-row>
        <v-row v-if="isDataType('D')" :class="getRandomDirection()">
            <v-col class="d-flex flex-column justify-between" cols="9">
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[0]}`)" />
            </v-col>
            <v-col class="d-flex flex-column justify-between" cols="3">
                <v-img class="elevation-3 rounded-lg mb-2" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[1]}`)" />
                <v-img class="elevation-3 rounded-lg mb-2" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[2]}`)" />
                <v-img class="elevation-3 rounded-lg" :aspect-ratio="1/1" :src="require(`../assets/gallery/${data.arr[3]}`)" />
            </v-col>
        </v-row>
    </div>

</template>

<style lang="scss" scoped>
    .border {
        border: 1px solid black;
    }
</style>

<script>
export default {
    props: ['data', ],
    methods : {
        isDataType (type) {
            console.log(this.data.current === type)
            return this.data.current === type
        },
        getRandomDirection () {
            return Math.round(Math.random())?'flex-row':'flex-row-reverse'
        }
    }

}
</script>