<template>
  <div class="divtable">
    <table v-if="show">
      <tbody>
        <tr v-if="resultats == null || resultats == 0">
          <td>Il n'y a pas de résultat correspondant à vos critères.</td>
        </tr>
        <tr v-for="data in resultats" :key="data.idNounou" v-else>
          <td>{{ data.prenom }}</td>
          <td>{{ data.ville }}</td>
          <td>{{ data.email }}</td>

          <td>
            <button v-on:click="learnmoreN(data)" class="btn">
              En savoir plus
            </button>
            <img
              v-on:click="learnmoreN(data)"
              src="../assets/user.png"
              title="Mon profil"
              alt="mon compte"
              width="20px"
              class="profile"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table v-else>
      <tbody>
        <tr class v-if="resultats == 0">
          <td class>Il n'y a pas de résultat correspondant à vos critères.</td>
        </tr>

        <tr id="ctn" v-for="data in resultats" :key="data.idMaitre" v-else>
          <td>{{ data.chat.prenom_chat }}</td>
          <td class="photo"><img :src="data.chat.photo" width="100px" /></td>
          <td class="hidden">{{ data.chat.idChat }}</td>
          <td>{{ data.prenom }}</td>
          <td>{{ data.ville }}</td>
          <td class="email">{{ data.email }}</td>

          <td>
            <button v-on:click="learnmoreM(data)" class="btn">
              En savoir plus
            </button>
            <img
              v-on:click="learnmoreM(data)"
              src="../assets/user.png"
              title="Mon profil"
              alt="mon compte"
              width="20px"
              class="profile"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "myTable",
  props: ["resultats"],

  data() {
    return {
      show: true,
      tokenNounou: {}
    };
  },
  created() {
    // console.log("this.resultats", this.resultats);

    if (this.resultats[0].hasOwnProperty("idNounou")) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  methods: {
    learnmoreN(data) {
      if (this.resultats[0].hasOwnProperty("idNounou")) {
        // on passe le paramètre data dans l'url mais il n'est pas visible dans l'url, c'est propre à vuejs
        this.$router.push({ name: "showNounous", params: { data: data } });
      } else {
        return;
      }
    },
    learnmoreM(data) {
      // console.log(data);
      if (this.resultats[0].hasOwnProperty("idMaitre")) {
        // on passe le paramètre data dans l'url mais il n'est pas visible, c'est propre à vuejs
        this.$router.push({ name: "showMaitres", params: { data: data } });
        localStorage.setItem("idChat", data.chat.idChat);
        this.tokenNounou = VueJwtDecode.decode(localStorage.getItem("token"));
        localStorage.setItem("idNounou", this.tokenNounou.idNounou);
      } else {
        return;
      }
    }
  }
};
</script>
<style scoped>
.divtable {
  width: 100%;
}
table {
  width: 100%;
}
tr {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
}
th {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
td {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  border-radius: 15px;
}
#ctn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.hidden {
  opacity: 0;
  width: 5px;
}
.btn {
  width: 125px;
  height: 30px;
  font-family: "Livvic", sans-serif;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  color: hsl(330, 78%, 23%);
  background-color: whitesmoke;
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
.profile {
  display: none;
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .btn {
    display: none;
  }
  .profile {
    display: block;
  }
  .photo {
    display: none;
  }
  .email {
    display: none;
  }
}
</style>
