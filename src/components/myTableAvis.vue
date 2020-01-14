<template>
  <div>
    <div class="divtable">
      <table>
        <tbody>
          <tr v-if="resultats == null || resultats == 0">
            <td v-if="displayForNounou">
              Il n'y a pas encore d'avis écrit sur vous.
            </td>
            <td v-if="displayForMaitre">
              Il n'y a pas encore d'avis sur cette nounou.
            </td>
          </tr>

          <tr class="titres" v-else>
            <th class="notes">Note</th>
            <th class="commentaires">Commentaire</th>
            <th class="ecritpar">Ecrit par</th>
          </tr>

          <tr v-for="data in resultats" :key="data.idAvis">
            <td class="notes">{{ data.note }}/5</td>
            <td class="commentaires com2">{{ data.commentaire }}</td>
            <td class="ecritpar">
              {{ data.maitre.prenom }} {{ data.maitre.nom }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "myTableAvis",
  props: ["resultats"],

  data() {
    return {
      myToken: null,
      displayForNounou: null,
      displayForMaitre: null
    };
  },
  created() {
    this.myToken = VueJwtDecode.decode(localStorage.getItem("token"));
    // console.log(this.myToken);
    // console.log(this.myToken.idMaitre);
    if (this.myToken.idNounou) {
      this.displayForNounou = true;
      this.displayForMaitre = false;
    } else {
      this.displayForMaitre = true;
      this.displayForNounou = false;
    }
  },
  methods: {}
};
</script>

<style scoped>
.divtable {
  width: 100%;
  margin-top: 25px;
  /* background-color: blue; */
}
table {
  /* background-color: grey; */
  width: 100%;
  border: 2px solid grey;
  border-radius: 25px;
  padding-bottom: 10px;
}
tbody {
  /* background-color: #680d3b; */
  width: 100%;
}
.titres {
  width: 100%;
}
tr {
  /* background-color: orange; */
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 60px; */
}
td {
  /* background-color: red; */
  /* height: 60px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
th {
  /* background-color: yellow; */
  padding-top: 20px;
  height: 70px;
  width: 100%;
  text-align: center;
}
.notes {
  width: 10%;
  text-align: center;
}
.commentaires {
  width: 70%;
}
.com2 {
  text-align: justify;
  padding-right: 10px;
  padding-left: 10px;
}
.ecritpar {
  width: 20%;
  text-align: center;
}
#ctn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn {
  width: 200px;
  height: 50px;
  font-family: "Livvic", sans-serif;
  border-radius: 430px;
  -webkit-border-radius: 430px;
  -moz-border-radius: 430px;
  -ms-border-radius: 430px;
  -o-border-radius: 430px;
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

/* TABLETTE */
/* @media screen and (min-width: 481px) and (max-width: 768px) {

} */

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .commentaires {
    width: 65%;
  }
  .ecritpar {
    width: 25%;
    text-align: center;
  }
}
</style>
