<template>
  <div class="ctn">
    <div class="demandeGarde">
      <form>
        <h1>Merci de bien vouloir remplir le formulaire de garde</h1>
        <label for="dateD">Date de début de garde :</label>
        <input v-model="garder.debut" type="date" id="dateD" required/>

        <label for="dateF">Date de fin de garde :</label>
        <input v-model="garder.fin" type="date" id="dateF" required/>
  	    <textarea v-model="garder.message" placeholder="Veuillez taper le message pour votre destinataire ici." rows="15" cols="60">

        </textarea>
        <input
          @click="sendRequestForm"
          type="button"
          class="btn"
          value="Envoyer une demande de garde"
          
        />
      </form>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import myfooter from "../components/myfooter";
import Router from "../router";
export default {
  name: "nounouChercheChat",
  components: {
    myfooter
  },
  data() {
    return {
        garder: {},
        idChat: localStorage.getItem('idChat'),
        idNounou: localStorage.getItem('idNounou'), 
        // url2: "http://localhost:6001/chat/AllChatsByMaitre/",
        url: "http://localhost:6001/garde/newResquestForACat"
    };
  },
 created: function() {
    // var token = VueJwtDecode.decode(localStorage.getItem('token'))
    // var idToken = token.idMaitre
    // console.log(idToken);
  //  this.garder.id_nounou = this.$route.params.idNounou;
    // console.log(this.garder.id_nounou);
    // this.recupIdChat(idToken)
  },

  methods: {
          //     recupIdChat(idToken) {
          //     this.axios
          //     .get(this.url2 + idToken)
          //     .then((res) => {
          //   console.log(res.data)
          //   this.resultatchats = res.data;
          //   console.log(this.resultatchats);

          //  // .map (boucler et retourne le resultat en tableau)
          //   this.idChats = this.resultatchats.map(chat => {
          //       return chat.idChat
          //   })
          //   this.garder.id_chat = this.idChats
          //   console.log(this.idChats);
          // })
          // .catch(err => {
          //   // console.log(err)
          // })
          //   },
            sendRequestForm() {
              this.garder.id_chat = this.idChat
              this.garder.id_nounou = this.idNounou
              this.axios
              .post(this.url, this.garder)
              .then(res => {
               console.log(res.data)
               alert("Votre demande vient d'être envoyée.")
               this.$router.push("/catSearch");
              })
              .catch(err => {
                console.log(err);
              });
                
            },
  },
     beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("token") == null) {
      next("/login");
    } else {
      next();
    }
   }
};
</script>
<style scoped>
.ctn {
  color: black;
  font-family: "Merienda one", cursive, sans-serif;
}
.demandeGarde {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}
textarea {
  border-radius: 25px;
  padding: 10px;
  margin-top: 10px;
}
.btn {
  margin-top: 40px;
  width: 80%;
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
/* .ctnCompo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
} */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #680d3b;
  border-radius: 25px;
  -webkit-box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
}
h1 {
  font-size: 20px;
  margin-bottom: 20px;
}
label {
  margin: 5px;
}
input {
  border-radius: 15px;
  padding: 5px;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .demandeGarde {
  padding: 20px;
  }
  h1 {
    text-align: center;
  }
  .ctn {
    width: 100%;
  }
  form {
    width: 100%;
  }
  textarea {
  width: 90%;
  border-radius: 25px;
  padding: 10px;
  margin-top: 10px;
}
  .btn {
    width: 90%;
  }
}
</style>