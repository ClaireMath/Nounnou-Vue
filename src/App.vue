<template>
  <div id="app">
        
    <headertemplate/>
    <!-- <aside1/> -->
    <!-- <myNav/> -->
    
    
    <router-view/>
  </div>
</template>

<script>
// mynav c'est une variable que je crée, qui est égale au document nav.vue 
//pour ne pas avoir à récrire le chemin à chaque fois
import headertemplate from './components/header.vue'
// import myfooter from './components/myfooter.vue'
// import myNav from './components/myNav'


export default {
      components: {
         headertemplate,
      
    },
    data() {
        return {
    
      }
      },
    methods: {
    }
      
    }

</script>
<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing:  border-box;
  outline: none;
}

</style>
