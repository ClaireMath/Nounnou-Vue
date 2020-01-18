<template>
  <div>
    <div class="bigctn">
      <h1>Les règles d'or</h1>
      <div class="nounou">
        <h2>En tant que Nounou, pendant une garde de chat, je m'engage :</h2>
        <ol>
          <li>À passer un minimum d’une heure par jour avec le chat qui m’est confié</li>
          <li>À donner à manger au chat au moins une fois par jour</li>
          <li>À ne maltraiter le chat sous aucun prétexte</li>
          <li>À ne pas laisser le chat en extérieur ou près d’une fenêtre ouverte, sans surveillance</li>
          <li>À nettoyer la litière du chat dès que nécessaire</li>
          <li>À prévenir le propriétaire immédiatement en cas de problème</li>
          <li>À respecter la durée de la garde</li>
          <li>À mettre en pratique les conseils (les découvrir) pour garder un chat</li>
        </ol>
        <div class="proprio">
          <ol>
            <h2>En tant que propriétaire, pendant une garde de chat, je m'engage :</h2>
            <li>À contacter l’hôte sous 48h une fois la garde acceptée</li>
            <li>À déposer mon chat chez l’hôte à la date et à l’heure prévues en amont</li>
            <li>À fournir la nourriture nécessaire pour couvrir la durée de la garde</li>
            <li>À fournir la litière nécessaire pour couvrir la durée de la garde, ainsi qu’un bac adapté</li>
            <li>À s’assurer que le chat confié n’est pas porteur de puces</li>
            <li>À rembourser tout frais vétérinaire qui pourrait être engendré durant la garde</li>
            <li>À fournir un numéro de contact d’urgence à l’hôte</li>
            <li>À prévenir Une Nounou pour mon Matou immédiatement en cas de problème</li>
          </ol>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
import myfooter from "../components/myfooter";

export default {
  name: "reglement",
  components: {
    myfooter
    // HelloWorld
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.bigctn {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  background-color: whitesmoke;
}
.nounou, .proprio {
  margin-top: 40px;
}
h1 {
  text-align: center;
  font-family: cursive, "sans serif";
}
h2 {
  font-family: cursive, "sans serif";
  margin-bottom: 20px;
}
p,
li {
  font-family: cursive, "sans serif";
  margin-bottom: 10px;
}
</style>