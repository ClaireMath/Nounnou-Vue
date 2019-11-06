<template>
  <div class="monchat">
      <h1>Mon Cat</h1>
    <br />
    <form @submit.prevent="updateChat">
      <div class="bigBox">
        <div class="smallBoxNou">
          <div class="ctnchamps">
            <div class="sbchamps">
              <input v-model="maitre.nom" type="text" placeholder="Nom" required />
              <br />
              <br />
              <input v-model="maitre.prenom" type="text" placeholder="Prénom" required />
              <br />
              <br />
              <input v-model="maitre.adresse" type="text" placeholder="Adresse" required />
              <br />
              <br />
              <input v-model="maitre.code_postal" type="number" placeholder="Code postal" required />
              <br />
              <br />
            </div>

            <div class="sbchamps2">
              <input v-model="maitre.ville" type="text" placeholder="Ville" required />             
              <br />
              <br />
              <input v-model="maitre.telephone" type="tel" placeholder="Téléphone" required />
            </div>
          </div>

          <br />
          <br />
          <p>J'ai :</p>
          <select v-model="maitre.nombre_de_chats" required>
            <!-- <option disabled value="">Nombre de chats que je peux garder en même temps</option> -->
            <option value="1">un chat</option>
            <option value="2">deux chats</option>
            <option value="3">trois chats</option>
            <option value="4">quatre chats</option>
          </select>
          <br />
          <br />
          <p>Je suis disponible immédiatement :</p>
          <input
            type="radio"
            v-model="maitre.statut_disponible"
            name="dispo"
            id="dispo"
            value="true"
          />
          <label for="dispo">oui</label>
          <input
            type="radio"
            v-model="maitre.statut_disponible"
            name="dispo"
            id="pasdispo"
            value="false"
          />
          <label for="pasdispo">non</label>
          <br />
          <br />
          <input type="submit" class="btn" value="Ajouter mon chat" />
        </div>
      </div>
    </form>
      <myfooter></myfooter>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
// import headertemplate from '../components/header.vue'
import myfooter from '../components/myfooter'

export default {
  name: 'formChat',
  components: {
    myfooter,
    // HelloWorld
  },
  data() {
      return {
       
       chat: {}
      }
    },
    methods: {
addCat() {
        this.axios
        .post("http://localhost:6001/chat/create", this.chat)
        // .post("http://localhost:6001/chat/create", this.chat)
        .then(res => {
          // console.log(res);
          this.$router.push("/");
          alert("Chat ajouté!");
        })
        .catch(err => {
          // console.log(err);
        });
    }
}
};
</script>

<style scoped>
   .bigctn {
  /* padding: 20px; */
  background-color: whitesmoke;
  font-family: cursive, sans-serif;
}
form {
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
  /* 
         align-content: center;
         justify-items: center; */
}

.bigBox {
  background-color: brown;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.smallBoxNou {
  background-color: greenyellow;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ctnchamps {
  background-color: lightslategray;
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.sbchamps {
  background-color: teal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sbchamps2 {
  background-color: turquoise;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logement {
  background-color: #ff2d95;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
}
label {
  margin-top: 12px;
}
.select {
  width: 100%;
}
h2 {
  margin: 20px;
}
p {
  margin-top: 20px;
}
select {
  margin: 10px;
  border-radius: 25px;
  width: 60%;
  height: 25px;
}
textarea {
  border-radius: 25px;
}
.btn {
  width: 200px;
  height: 50px;
  font-family: "Livvic", sans-serif;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  color: hsl(330, 78%, 23%);
  background-color: whitesmoke;
  /* font-family: cursive, "sans-serif"; */
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
input {
  border-radius: 10px;
  height: 30px;
  margin: 10px;
}
.radio {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* padding: 10px; */
}
.oui {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.non {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
}
.ctnchamps {
  display: flex;
  flex-direction: column;
  height: 380px;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  form {
    background-color: hotpink;
    padding: 0px;
  }
  .bigBox {
    width: 100%;
    background-color: brown;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .smallBoxNou {
    background-color: goldenrod;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .ctnchamps {
    background-color: lightslategray;
    width: 100%;
    height: 400px;
  }
  p {
    text-align: justify;
  }
  /* .logement {
  width: 50%;
} */
}
</style>