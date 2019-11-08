<template>
    <div class="slider">
       <!-- <h1>Hello world vslider</h1> -->
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" alt=""/>
            </div>        
        </transition-group>
        <!-- en violet c'est le code pour faire apparaître la fléche sur le rendu -->
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
</template>

<script>
export default {
    name: "vslider",
    props: {
        images: { type: Array, required:true },  
    },
    data() {
        return {
            image: this.images,
            timer: null,
            currentIndex: 0
        };
    },
    mounted: function() {
        this.startSlide();
    },
    methods: {
        startSlide: function() {
            this.timer = setInterval(this.next, 1000);
        },
        next: function() {
            this.currentIndex += 1;
        },
        prev: function() {
            this.currentIndex -= 1;
        }
    },
    computed: {
        currentImg: function() {
            return this.image[Math.abs(this.currentIndex) % this.image.length];
        }
    }  
};
</script>
<style scoped>
 .slider {
        width : 300;
        height : 450;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.9s ease;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width:100%;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        width:100%;
        opacity: 0;
    }

    img {
        height:600px;
        width:100%;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 40%;
        width: auto;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.7s ease;
        border-radius: 0 4px 4px 0;
        text-decoration: none;
        user-select: none;
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.9);
    }

</style>