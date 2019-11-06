<template>
  <div>
   <h1>Fonctionnement du service</h1>
   <div bigctn>
     <p>Un Nounou pour mon Matou est un service collaboratif de garde de chat mettant en relation des particuliers, sur internet.</p>
     <p>Les propriétaires de chats, qui souhaitent les faire garder pendant les vacances peuvent trouver des particuliers (les Nounous) qui aiment la compagnie des chats et ont envie d’en garder sur des périodes courtes, de manière bénévole.</p>
     <p>Chaque garde est entièrement gratuite. Le propriétaire fournit la nourriture et la litière à l’hôte. L’hôte ne paie rien.

     </p>
   </div>
   <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
// import headertemplate from '../components/header.vue'
import myfooter from '../components/myfooter'

export default {
  name: 'fonctionnement',
  components: {
    myfooter,
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
  .bigctn {
      display: flex;
      flex-direction: row;
  }
</style>