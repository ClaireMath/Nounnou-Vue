<template>
  <div id="app">
        
    <headertemplate/>
 
    
    
    <router-view/>
  </div>
</template>

<script>
// headertemplate c'est une variable que je crée, qui est égale au document header.vue 
//pour ne pas avoir à récrire le chemin à chaque fois
import headertemplate from './components/header.vue'



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
#app {
  background-color: whitesmoke;
}

</style>
