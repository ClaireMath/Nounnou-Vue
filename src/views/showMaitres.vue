<template>
  <div>
    <div class="ctn">
      <div class="chat">
        <h2>Le Matou</h2>
        <input
          v-model="chat.prenom_chat"
          type="text"
          placeholder="Prénom"
          required
          readonly
        />
 <div class="divphoto">
              <img
                v-if="chat.photo"
                :src="chat.photo"
                class="uploading-image"
                width="100%"
              />
              <img v-else :src="photo" class="uploading-image" width="100%" />
            </div>
        <div class="input">
          <div class="radio">
            <div class="oui">
              <input
                type="radio"
                v-model="chat.sterilise"
                id="sterilise"
                name="sterilise"
                value="true"
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
              />
              <label for="memePasPeur">non</label>
            </div>
          </div>
        </div>
        <label for="pbsante">Problème de santé particulier :</label>
        <input
          v-model="chat.probleme_de_sante_particulier"
          type="text"
          placeholder="Problème de santé particulier"
          class="inputText"
          style="resize:horizontal; width:90%; height:30px"
          id="pbsante"
          required
          readonly
        />
        <textarea
          v-model="chat.description"
          cols="40"
          rows="12"
          placeholder="Décrivez-vous et votre expérience avec les chats."
          required
          readonly
        >
Décrivez-vous, votre expérience avec les chats ou les animaux en général, pourquoi vous avez envie de vous en occuper.</textarea
        >
      </div>
      <div class="maitre">
        <!-- <div class="catsitter"> -->
        <h1>Son maitre</h1>

        <div class="ctnchamps">
          <div class="sbchamps">
            <input
              v-model="maitre.prenom"
              type="text"
              placeholder="Prénom"
              required
              readonly
            />
            <input
              v-model="maitre.nom"
              type="text"
              placeholder="Prénom"
              required
              readonly
            />

            <div v-show="admin" class="divadmin">
              <div class="champsAdmin">
                <label for="id">ID Maitre :</label>
                <input
                  v-model="maitre.idMaitre"
                  type="number"
                  id="id"
                  required
                  readonly
                />
              </div>

              <div class="champsAdmin">
                <label for="banni">Banni :</label>
                <input v-model="maitre.banni" type="checkbox" id="banni" required />
              </div>

              <div class="champsAdmin">
                <label for="admin">Admin :</label>
                <input v-model="maitre.admin" type="checkbox" id="admin" required />
              </div>
            </div>

            <input
              v-model="maitre.code_postal"
              type="number"
              placeholder="Code postal"
              required
              readonly
            />
            <input
              v-model="maitre.ville"
              type="text"
              placeholder="Ville"
              required
              readonly
            />
            <input
              v-model="maitre.email"
              type="text"
              placeholder="Email"
              required
              readonly
            />
          </div>
        </div>
        <div class="indication"  v-show="user">
          <p>Si vous souhaitez proposer de garder ce chat, vous pouvez contacter directement son propriétaire sur son adresse e-mail.
          </p>
        </div>
        <!-- <input
          v-show="user"
          @click="sendRequestForm"
          type="button"
          class="btn"
          value="Envoyer une demande de garde"
        /> -->
        <div v-show="admin" class="divBtn">
         
            <input
              v-show="ban"
              @click="banUnBanF"
              type="button"
              class="btn"
              value="Bannir cet utilisateur"
            />
            <input
              v-show="unBan"
              @click="banUnBanF"
              type="button"
              class="btn"
              value="Retirer le statut 'banni'"
            />
        
        
            <!-- @click="convertToAdmin" -->
            <input
              v-show="makeAdmin"
              @click="makeUnMakeAdminF"
              type="button"
              class="btn"
              value="Convertir en admin"
            />
            <input
              v-show="unMakeAdmin"
              @click="makeUnMakeAdminF"
              type="button"
              class="btn"
              value="Retirer le statut admin"
            />
          
        </div>
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import myfooter from "../components/myfooter";
import Router from "../router";

export default {
  name: "showMaitres",
  components: {
    myfooter
  },
  data() {
    return {
      maitre: {},
      chat: {},
      token: {},
      user: null,
      admin: null,
      ban: null,
      unBan: null,
      makeAdmin: null,
      unMakeAdmin: null,
      url: "http://localhost:6001/maitre/banUnBanById",
      url2: "http://localhost:6001/maitre/makeUnMakeAdminById"
    };
  },
  // on passe le paramètre data dans l'url mais il n'est pas visible, c'est propre à vuejs
  // au created, on récupère le param data
  created: function() {
    this.maitre = this.$route.params.data;
    this.chat = this.$route.params.data.chat;
    localStorage.setItem("idMaitre", this.maitre.idMaitre);

    // (pour l'apparition des boutons)
    this.token = VueJwtDecode.decode(localStorage.getItem("token"));
    if (this.token.admin == true) {
      this.admin = true;
      this.user = false;
    } else {
      this.admin = false;
      this.user = true;
    }
    if (this.maitre.banni == true) {
      this.ban = false;
      this.unBan = true;
    } else {
      this.ban = true;
      this.unBan = false;
    }
    if (this.maitre.admin == true) {
      this.makeAdmin = false;
      this.unMakeAdmin = true;
    } else {
      this.makeAdmin = true;
      this.unMakeAdmin = false;
    }
  },
  methods: {
    sendRequestForm() {
      this.$router.push({ name: "nounouChercheChat", params: { idChat: this.chat.idChat } });
    },
    banUnBanF() {
      this.axios
        .put(this.url, this.maitre)
        .then(() => {
          // console.log(res.data);

          alert("Statut 'banni' modifié avec succès.");
          Router.push({ name: "admin" });
          localStorage.removeItem("idMaitre")
        })
        .catch(() => {
          alert("Impossible d'effectuer l'action sur le statut 'banni'.");
        });
    },

    makeUnMakeAdminF() {
      this.axios
        .put(this.url2, this.maitre)
        .then(res => {
          // console.log(res.data);
          this.maitre = res.data;

          alert("Statut 'admin' modifié avec succès.");
          Router.push({ name: "admin" });
          localStorage.removeItem("idMaitre")
        })
        .catch(() => {
          alert("Impossible d'effectuer l'action sur le statut 'admin'.");
        });
    },
  },
  beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("token") == null) {
      next("/login");
    // } else if (localStorage.getItem(token.banni = 1)) {
    //   next()
      }
     else {
      next();
    }
   }
};
</script>

<style scoped>
.ctn {
  width: 100%;
  display: flex;
  font-family: cursive, sans-serif;
  font-size: 20px;
  background-color: whitesmoke;
}
form {
  /* padding: 20px; */
  /* width: 100%; */
  font-family: cursive, sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: hotpink; */
}

.ctnchamps {
  /* background-color: lightslategray; */
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sbchamps {
  /* background-color: teal; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.champsAdmin {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.divadmin {
  margin-left: 20px;
}
.maitre {
  /* background-color: #ff2d95; */
  width: 50%;
  margin-top: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.chat {
  /* background-color: yellowgreen; */
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
img {
  border-radius: 15px;
}
label {
  margin-top: 12px;
}
.select {
  width: 100%;
}
#id {
  width: 40%;
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
}
.divBtn {
  width: 100%;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  margin-top: 50px;
  width: 60%;
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
.indication {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border:#680d3b solid 3px;
  border-radius: 25px;
  width: 90%;
  padding: 20px;
}
.indication p {
  /* text-align: justify; */
  margin-top: 0px;
}
/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
}
.ctnchamps {
  display: flex;
  flex-direction: column;
}

textarea {
  width: 90%;
}
.btn {
  font-size: 65%;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .ctn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
  .maitre {
    width: 100%;
  }

  .ctnchamps {
    /* background-color: lightslategray; */
    width: 100%;
  }
  .chat {
    /* background-color: #ff2d95; */
    width: 100%;
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
  input.inputText {
    width: 90%;
    /* height: 35px; */
  }
  .btn {
    width: 100%;
  }
}
</style>
