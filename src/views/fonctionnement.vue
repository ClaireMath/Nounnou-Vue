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
      /* justify-content: center; */
      background-color: whitesmoke;
      text-align: justify;
      height: 400px;
  }
  h1 {
    text-align: center;
    font-family: cursive, 'sans serif';
    margin-top: 30px;
    margin-bottom: 30px;
  }
  p {
    font-family: cursive, 'sans serif';
    margin-bottom: 20px;
  }
  /* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
.bigctn {
  height: 600px;
}
h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

</style>