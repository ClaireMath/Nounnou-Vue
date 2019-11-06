<template>
  <div class="sorties">
    <img src="../assets/blackCat-eyes-yellow.jpg" alt="white cat" width=100% class="chatnoir">
    <div>
   <h1>Nos sorties à venir :</h1>
   <br>
   <div class="cine">
    <h2>Cinéma Gaumont Pathé Opéra, Paris</h2>
    <p>Comme des Bêtes, film d'animation</p>
    <p>Le samedi 25 janvier 2020 à 15h50</p>
    <p>Comme à notre habitude, nous nous retrouverons également après le film pour boire un chocolat ensemble afin de faire connaissance.</p>
   </div>
   <br>
   <div>
     <h2>Restaurant, Le Grenier de Notre-Dame</h2>
     <p>Venez tester avec nous ce restaurant végétarien</p>
     <p>Le samedi 1er février 2020 à 20h00</p>
     <p>18 rue de la Bucherie, 75005 Paris</p>
   </div>
   </div>
   
   <myNav></myNav>
   <br>
   <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
import myfooter from '../components/myfooter'
import myNav from '../components/myNav'

export default {
  name: 'sorties',
  components: {
    myfooter,
    myNav
    // HelloWorld
  },
  data() {
      return {
       
      }
    },
    methods: {
        
        }
}
</script>

<style scoped>
  .sorties {
    color: white;
    position: absolute;
    
  }
  .chatnoir {
    position: absolute;
  }
  .cine { 
    color: whitesmoke;
    z-index: 10;
  }
</style>