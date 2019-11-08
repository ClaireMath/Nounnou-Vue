<template>
  <div>
    <form @submit.prevent="updateProfileMaitre">
      <div class="bigBox">
        <!-- ------------------------------- Mon profil Maitre ------------------------------------------------- -->
        <div class="smallBoxNou">
          <h1>Mon profil Maitre</h1>

          <p>Merci de bien vouloir remplir votre profil sans quoi il n'apparaitra pas aux utilisateurs</p>
          <div class="ctnchamps">
            <div class="sbchamps">
              <input v-model="maitre.nom" type="text" placeholder="Nom" required />

              <input v-model="maitre.prenom" type="text" placeholder="Prénom" required />

              <input v-model="maitre.adresse" type="text" placeholder="Adresse" required />

              <input v-model="maitre.code_postal" type="number" placeholder="Code postal" required />
            </div>

            <div class="sbchamps2">
              <input v-model="maitre.ville" type="text" placeholder="Ville" required />

              <input v-model="maitre.telephone" type="tel" placeholder="Téléphone" required />
            </div>
          </div>

          <p>J'ai :</p>
          <select v-model="maitre.nombre_de_chats" required>
            <!-- <option disabled value="">Nombre de chats que je peux garder en même temps</option> -->
            <option value="1">un chat</option>
            <option value="2">deux chats</option>
            <option value="3">trois chats</option>
            <option value="4">quatre chats</option>
          </select>

          <p>Je cherche une nounou pour la semaine ou le mois qui vient :</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="maitre.statut_disponible"
                name="dispo"
                id="dispo"
                value="true"
              />
              <label for="dispo">oui</label>
            </div>
            <div class="non">
              <input
                type="radio"
                v-model="maitre.statut_disponible"
                name="dispo"
                id="pasdispo"
                value="false"
              />
              <label for="pasdispo">non</label>
            </div>
          </div>
        </div>

        <!-- -------------------------------FIN DE : Mon profil Maitre ------------------------------------------------- -->

        <!-- -------------------------------------- Mon chat ------------------------------------------------- -->

        <div class="chat">
          <h2>Mon (Mes) chat(s)</h2>
          <select @change="selectCat">
            <!-- <option disabled value="">Nombre de chats que je peux garder en même temps</option> -->
            <option
              v-for="chat in chats"
              :value="chat.idChat"
              :key="chat.idChat"
            >{{chat.prenom_chat}}</option>
          </select>
          <!-- :src = je binde la photo que je récupère à l'image, pour qu'elle apparaisse directement-->
          <div class="divphoto">
          <img v-if="chat.photo" :src="chat.photo" class="uploading-image" width="100%"/>
          <img v-else :src="photo" class="uploading-image" width="100%"/>
          </div>
          <input
            type="file"
            accept="image/jpeg"
            @change="uploadImage"
          />
          <input
            v-model="chat.prenom_chat"
            type="text"
            class="inputText"
            style="resize:horizontal; width:200px; height:30px"
            placeholder="Prénom de mon chat"
            required
          />
          <!-- <label for="avatar">Photo de mon chat:</label> -->

          <!-- <input class="inputphoto" type="file" v-on:change="handleFileUpload()" accept="image/png, image/jpeg" /> -->

          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="chat.sterilise"
                id="sterilise"
                name="sterilise"
                value="true"
              />
              <label for="sterilise">est stérilisé</label>
            </div>
            <div class="non">
              <input
                type="radio"
                v-model="chat.sterilise"
                id="nsterilise"
                name="sterilise"
                value="false"
              />
              <label for="nsterilise">n'est pas stérilisé</label>
            </div>
          </div>

          <p>s'entend bien avec les autres chats :</p>
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="chat.tolere_les_chats"
                name="tolereleschats"
                id="tolereleschats"
                value="true"
              />
              <label for="tolereleschats">oui</label>
            </div>

            <div class="non">
              <input
                type="radio"
                v-model="chat.tolere_les_chats"
                name="tolereleschats"
                id="netolerePASleschats"
                value="false"
              />
              <label for="netolerePASleschats">non</label>
            </div>
          </div>

          <p>s'entend bien avec les autres animaux :</p>

          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="chat.tolere_les_animaux"
                name="tolerelesanimaux"
                id="tolerelesanimaux"
                value="true"
              />
              <label for="tolerelesanimaux">oui</label>
            </div>

            <div class="non">
              <input
                type="radio"
                v-model="chat.tolere_les_animaux"
                name="tolerelesanimaux"
                id="netolerePASlesanimaux"
                value="false"
              />
              <label for="netolerePASlesanimaux">non</label>
            </div>
          </div>

          <p>a peur des enfants :</p>

          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="chat.a_peur_des_enfants"
                name="apeurdesenfants"
                id="apeurdesenfants"
                value="true"
              />
              <label for="apeurdesenfants">oui</label>
            </div>

            <div class="non">
              <input
                type="radio"
                v-model="chat.a_peur_des_enfants"
                name="apeurdesenfants"
                id="memePasPeur"
                value="false"
              />
              <label for="memePasPeur">non</label>
            </div>
          </div>

          <input
            v-model="chat.probleme_de_sante_particulier"
            type="text"
            placeholder="Problème de santé particulier"
            class="inputText"
            style="resize:horizontal; width:60%; height:30px"
            required
          />

          <textarea
            v-model="chat.description"
            cols="60"
            rows="12"
            placeholder="Décrivez votre boule de poils."
          ></textarea>
          <input @click="deleteCat" type="button" class="btn" value="Supprimer mon chat" />
        </div>
      </div>
      <input type="submit" class="btn" value="Mettre mon compte à jour" />
    </form>
    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
// import headertemplate from '../components/header.vue'
import VueJwtDecode from "vue-jwt-decode";
import myfooter from "../components/myfooter";
// import formChat from "../components/formChat";

export default {
  name: "profilMaitre",
  components: {
    myfooter
    // formChat,
    // HelloWorld
  },
  data() {
    return {
      maitre: {},
      chats: {},
      chat: {},
      photo:null
    };
  },
  created: function() {
    
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    } else {
      this.maitre = VueJwtDecode.decode(localStorage.getItem("token"));
    }

    this.displayCats();
  },

  methods: {
    displayCats() {
      
      this.axios
        .get(
          `http://localhost:6001/chat/AllChatsByMaitre/${this.maitre.idMaitre}`
        )
        .then(res => {
          console.log(res);
          this.chats = res.data;
        })
        .catch(err => {
          // console.log(err);
        });
    },

    selectCat(event) {
      console.log(JSON.parse(event.target.value));
      this.chat = event.target.value;
      console.log(this.chat);
      this.axios
        .get(`http://localhost:6001/chat/getOneById/${this.chat}`)
        .then(res => {
          console.log(res);
          this.chat = res.data;
        })
        .catch(err => {
          // console.log(err);
        });
    },
  deleteCat() {
     this.axios.delete(
        `http://localhost:6001/chat/delete/${this.chat.idChat}`, this.chat
      )
        .then(res => {
          console.log(res);
         
          alert("Votre chat a été supprimé.");
        })
        .catch(err => {
          // console.log(err);
        });
  },
    updateProfileMaitre() {
      this.axios.post(
        "http://localhost:6001/maitre/updateByEmail",
        this.maitre
      );
      this.chat.id_maitre = this.maitre.idMaitre;
      console.log(this.chat)
      this.axios
        .post("http://localhost:6001/chat/newCat", this.chat)
        .then(res => {
          // console.log(res);
          this.$router.push("/");
          alert("Votre profil a été mis à jour avec succès.");
        })
        .catch(err => {
          // console.log(err);
        });
    },
    uploadImage(e){
      // on affecte à la variable image, le fichier en position 
                const image = e.target.files[0];
      // on créé une nouvelle instance de FileReader (qui est un constructeur) pour lire le fichier et le convertir
                const reader = new FileReader();
      // on convertit l'image en url via la méthode readAsDataURL
                reader.readAsDataURL(image);
      // au chargement de la variable reader, on lui affecte l'evenement de l'input
                reader.onload = e =>{
      // on affecte à la variable photo le résultat de la cible de l'evenement, donc le fichier uploadé
                    this.photo = e.target.result;
                    this.chat.photo = this.photo;
                };
  }
}
};
</script>

<style scoped>
.bigctn {
  /* padding: 20px; */
  background-color: whitesmoke;
}
form {
 
  font-family: cursive, sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
  
}

.bigBox {
  background-color: brown;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.smallBoxNou {
  background-color: greenyellow;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
.chat {
  background-color: #ff2d95;
  width: 50%;
  
  padding-top: 20px;
  padding-left: 40px;
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
  text-align: justify;
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
  padding: 10px;
  width: 90%;
}
.inputphoto {
  width: 50%;
  height: 30px;
}
.divphoto {
  width: 40%;
  height: auto;
  display: flex;
}

.btn {
  width: 50%;
  height: 40px;
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
  padding: 0px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
.btn2 {
  padding: 0px;
}
input {
  border-radius: 10px;
  height: 30px;
  margin: 10px;
  padding: 10px;
}
.radio {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
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
.btn2 {
  width: 40%;
}
/* .chat {
  height: 1000px;
} */

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
  .chat {
    background-color: #ff2d95;
    width: 100%;
    height: 1050px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-around;
  }
  h1 {
    font-size: 30px;
  }
  p {
    text-align: justify;
  }
  .inputText {
    text-transform: uppercase;
  }
  .btn {
    width: 90%;
  }
  /* .chat {
  width: 50%;
} */
}
</style>