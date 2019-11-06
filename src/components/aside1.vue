<template>
    
     <div class="container">
  <ul class="slides">
    <li id="slide1"><img src="/funnypic/beforeAfterRaclette.JPG" alt="" /></li>
    <li id="slide2"><img src="/funnypic/christmasDec.JPG" alt="" /></li>
    <li id="slide3"><img src="/funnypic/hungryCat.JPG" alt="" /></li>
    <li id="slide4"><img src="/funnypic/feedOnefeedAll.JPG" alt="" /></li>
  </ul>

  <ul class="thumbnails">
    <li>
      <a href="#slide1"><img src="/funnypic/beforeAfterRaclette.JPG" /></a>
    </li>
    <li>
      <a href="#slide2"><img src="/funnypic/christmasDec.JPG" /></a>
    </li>
    <li>
      <a href="#slide3"><img src="/funnypic/hungryCat.JPG" /></a>
    </li>
    <li>
      <a href="#slide4"><img src="/funnypic/feedOnefeedAll.JPG" /></a>
    </li>
   
  </ul>
</div>
    

<!-- /funnypic/beforeAfterRaclette.JPG -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'aside1',

}

</script>

<style scoped>

html {
  box-sizing: border-box;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: left;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  line-height: 0;
} 
  li {
    flex: auto; 
}

  a {
    display: block;
  }
  
  img {
    width: 30vmin;
    height: 20vmin;
    object-fit: cover;
    object-position: top;
  }


.slides {
  overflow: hidden;
  width: 75vmin;
  height: 100vmin;
}
  li {
    width: 75vmin;
    height: 100vmin;
    position: absolute;
    z-index: 1;
  }
  
  img {
    height: 100vmin;
    object-fit: cover;
    object-position: top;
  }

.slides li:target {
  z-index: 3;
  -webkit-animation: slide 1s 1;
}

.slides li:not(:target) {
  -webkit-animation: hidden 1s 1;
}

@keyframes slide {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes hidden {
  0% {
    z-index: 2;
  }
  100% {
    z-index: 2;
  }
}

</style>