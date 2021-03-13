<template>
    <section class="pt-16">
        <v-container>
            <h2 class="text-h3 font-weight-bold mb-2">Our work</h2>
            <p class="mb-8">Imaarat architecture & design studio is not restricted by a set designing style or a box-ticking methodology. Instead, each project that we take up is a result of meticulous and in-depth designing process that involves understanding the needs and aspirations of our clients and providing them with innovative and design-led solutions tailored to them individually.</p>
            <section>
                <gallery-section v-for="(data, i) in getImageDataList()" :key="i" :data="data"/>
            </section>
        </v-container>
    </section>
</template>

<script>
import GallerySection from '../components/GallerySection.vue'
export default {
  components: { GallerySection },
    data () {
        return {
            images: ['ren6-340x240.jpg', '5-768x320.jpg', 'ren4-150x150.jpg', 'ren3.jpg', 'ren5-150x150.jpg', '3-300x125.jpg', 'res5.jpg', 'ren5-340x240.jpg', 'res3.jpg', 'ren2.jpg', 'res6-340x240.jpg', '2-768x320.jpg', 'ren3-150x150.jpg', '2-150x150.jpg', 'res5-340x240.jpg', '1-1024x427.jpg', 'res2-300x225.jpg', '5-1024x427.jpg', '5-300x125.jpg', '4-768x320.jpg', 'ren1-340x240.jpg', '1-300x125.jpg', '3-1024x427.jpg', 'ren2-150x150.jpg', 'ren4-340x240.jpg', '2.jpg', 'res6-150x150.jpg', '3.jpg', 'res1.jpg', 'res3-300x225.jpg', 'res6.jpg', '1-150x150.jpg', 'res4.jpg', 'ren1.jpg', 'ren2-340x240.jpg', 'res2-340x240.jpg', '4.jpg', '2-300x125.jpg', 'ren2-300x225.jpg', 'ren6.jpg', '2-340x240.jpg', 'ren4.jpg', 'res1-340x240.jpg', '5.jpg', '3-340x240.jpg', 'res1-300x225.jpg', 'ren6-150x150.jpg', 'res2-150x150.jpg', '3-150x150.jpg', '5-150x150.jpg', '2-1024x427.jpg', 'res5-300x225.jpg', 'res1-150x150.jpg', 'ren5.jpg', '4-150x150.jpg', 'res5-150x150.jpg', '4-300x125.jpg', 'res3-150x150.jpg', '4-340x240.jpg', 'res4-300x225.jpg', '1-340x240.jpg', 'res6-300x225.jpg', 'res4-340x240.jpg', 'ren1-150x150.jpg', 'res3-340x240.jpg', 'ren3-340x240.jpg', 'ren3-300x225.jpg', 'ren5-300x225.jpg', '1-768x320.jpg', 'res2.jpg', 'ren6-300x225.jpg', '5-340x240.jpg', '4-1024x427.jpg', '3-768x320.jpg', 'ren4-300x225.jpg', 'ren1-300x225.jpg', 'res4-150x150.jpg', '1.jpg']
        }
    },
    methods: {
        getImageDataList () {
            let ret = []
            let currentIndex = 0
            while (currentIndex < this.images.length) {
                // A is 1 2*2 and 2 1*1
                // B is 3 1*1
                // C is 1 3*3
                // D is 1 3*3 and 3 1*1
                const types = ['A', 'B', 'C', 'D']
                const current = types[Math.floor(Math.random() * types.length)]
                let arr = []
                switch (current) {
                    case 'A':
                        arr = getItemsFromArrays(this.images, 3, currentIndex)
                        currentIndex += 3
                        ret.push({arr, current})
                        break
                    case 'B':
                        arr = getItemsFromArrays(this.images, 3, currentIndex)
                        currentIndex += 3
                        ret.push({arr, current})
                        break
                    case 'C':
                        arr = getItemsFromArrays(this.images, 1, currentIndex)
                        currentIndex += 1
                        ret.push({arr, current})
                        break
                    case 'D':
                        arr = getItemsFromArrays(this.images, 4, currentIndex)
                        currentIndex += 4
                        ret.push({arr, current})
                        break
                }
            }
            return ret;
        },
    }
}

const getItemsFromArrays = (arr, count, startIndex) => {
    let ret = []
    for (let i=0; i<count; i++) {
        if (arr.length > startIndex+i) {
            ret.push(arr[startIndex+i])
        }
    }
    return ret
}
</script>