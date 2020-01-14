<template>
  <div>
   <div class="bigctn">
   <h1>Fonctionnement du service</h1>
     <p>Un Nounou pour mon Matou est un service collaboratif de garde de chat mettant en relation des particuliers, sur internet.</p>
     <p>Les propriétaires de chats, qui souhaitent les faire garder pendant les vacances peuvent trouver des particuliers (les Nounous) qui aiment la compagnie des chats et ont envie d’en garder sur des périodes courtes, de manière bénévole.</p>
     <p>Chaque garde est entièrement gratuite. Le propriétaire fournit la nourriture et la litière à l’hôte. L’hôte ne paie rien.

     </p>
   </div>
   <myfooter></myfooter>
  </div>
</template>

<script>

import myfooter from '../components/myfooter'

export default {
  name: 'fonctionnement',
  components: {
    myfooter,
    
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
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: whitesmoke;
      height:  50vh;
      text-align: justify;
  }
  h1 {
    text-align: center;
    font-family: cursive, 'sans serif';
    margin-bottom: 10px;
  }
  p {
    font-family: cursive, 'sans serif';
    margin-bottom: 10px;
  }
  /* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
.bigctn {
      height:  80vh;
  }}
</style>