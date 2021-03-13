<template>
    <v-expand-transition>
        <div ref="appear" v-show="show">
            <slot/>
        </div>
    </v-expand-transition>
</template>

<style scoped>
    section {
        /* background-position: center center;
        background-size: cover;
        background-color: #f2f2f2;
        background-attachment: fixed; */
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
</style>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.scrollHandler(this.$refs.appear))
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.scrollHandler(this.$refs.appear))
    },
    methods: {
        scrollHandler: function(obj) {
            return () => {
                if (this.inView(obj)) {
                    console.log('In')
                    this.show = true;
                } else {
                    console.log('Out')
                    this.show = false
                }
            }
        },
        inView: function(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
            );
        }
    }
}
</script>