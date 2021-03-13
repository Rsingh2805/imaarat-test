<template>
    <section ref="parallax">
        <slot />
    </section>
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
    props: ['speedx', 'speedy'],
    mounted () {
        window.addEventListener('scroll', this.scrollHandler(this.$refs.parallax))
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.scrollHandler(this.$refs.parallax))
    },
    methods: {
        scrollHandler: function(obj) {
            return () => {
                const rect = obj.getBoundingClientRect()
                // how much of the element is on screen
                if (this.speedx && this.inView(obj)) {
                    const xPos = rect.top / this.speedx
                    obj.style.left = `${xPos}px`
                }
                if (this.speedy && this.inView(obj)) {
                    const yPos = rect.top / this.speedy
                    obj.style.top = `${yPos}px`
                }
                
            }
        },
        inView: function(el) {
            const rect = el.getBoundingClientRect()
            console.log(rect)
            return (
                (rect.bottom >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
                (rect.top >=0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            )
        }
    }
}
</script>