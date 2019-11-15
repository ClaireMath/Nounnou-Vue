<template>
  <div>
    <div class="bigCtn">
      <div class="photoEtText">
        <img src="/chat-bagage.jpg" alt="chaton dans un transat" width="400" class="chatvalise"/>
        <div class="text">
          <h1>La to-do liste du propriétaire</h1>
          <p>Voici donc une petite TO DO liste pour vous aider à bien penser à tout avant de pouvoir vous la couler douce, en sirotant un cocktail au bord de la piscine.</p>
          <p class="liste">La semaine avant le départ :</p>
          <ol>
            <li>J’ai bien contacté la Nounou pour nous mettre d’accord sur les détails de la garde (heure et adresse où je dépose le chat).</li>
            <li>J’ai acheté suffisamment de nourriture pour couvrir la durée de la garde.</li>
            <li>J’ai un stock de litière suffisant à fournir à la Nounou.</li>
          </ol>
          <p class="liste">Dans la valise du chat, je pense à mettre :</p>
          <ul>
            <li>Des jouets et/ou un coussin (pour que le chat se sente comme chez lui !)</li>
            <li>Le bac à litière (et la litière)</li>
            <li>La gamelle (et la nourriture)</li>
            <li>Un griffoir</li>
            <li>Le carnet de santé du chat</li>
            <li>Un numéro de contact d’urgence</li>
            <li>
              Et surtout :
              Je n’oublie pas le chat ! 🙂
            </li>
          </ul>
          <p>Vous êtes fin prêt à déposer votre matou, qui lui aussi aura le droit à des vacances de rêve chez sa Nounou. Pensez à bien donner toutes les instructions nécessaires à la Nounou pour que la garde se passe au mieux.</p>
        </div>
      </div>
      <img src="/Chat-2Btransat.jpg" alt="chaton dans un transat" width="700" class="chattransat"/>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
// import headertemplate from '../components/header.vue'
import myfooter from "../components/myfooter";
export default {
  name: "todoliste",
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
.bigCtn {
  background-color: whitesmoke;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.photoEtText {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.chatvalise {
  width: 45%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  
  width: 45%;
  font-family: cursive, "sans serif";
  text-align: justify;
}
.liste {
margin-top: 20px;
font-weight: bold;
}
ol, ul {
  margin-left: 20px;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
  }
  .chattransat {
    margin-top: 30px;
  }
  /* Tablette*/
@media screen and (min-width: 481px) and (max-width: 768px) {
.bigCtn {
  background-color: whitesmoke;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.photoEtText {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.chatvalise {
  width: 35%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 95%;
  font-family: cursive, "sans serif";
  text-align: justify;
}
}
  /* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
.bigCtn {
  background-color: whitesmoke;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.photoEtText {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.chatvalise {
  width: 70%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 95%;
  font-family: cursive, "sans serif";
  text-align: justify;
}
}
</style>