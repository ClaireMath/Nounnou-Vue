<template>
  <div>
      <div class="divtable">
    <table>
      <tbody>
        <tr v-if="resultats == null || resultats == 0">
          <td>Vos n'avez pas encore fait garder votre chat.</td>
        </tr>

        <tr class="titres" v-else>
          <th>Début de la garde</th>
          <th>Date de fin</th>
          <th>Nounou</th>
          <th>Prénom du chat</th>
        </tr>

        <tr v-for="data in resultats" :key="data.idGarde">
         
          <td>{{ data.debut }}</td>
          <td>{{ data.fin }} </td>
          <td>{{ data.prenom }}</td>
          <td>{{ data.prenom_chat }}</td>

          <td>
              <button v-on:click="avis(data)" class="btn">
              Emettre un avis sur cette garde
            </button>
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
  name: "myTableGardes",
  props: ["resultats"],

  data() {
    return {
    
    };
  },
  created() {
    
  },
  methods: {
      avis(data) {
      this.$router.push({ name: "newAvis", params: { data: data }});
      }
  }
};
</script>

<style scoped>
.divtable { 
  width: 100%;
  margin-top: 25px;
  background-color: blue;
}
table {
    background-color: grey;
  width: 100%;
}
tbody {
    background-color: #680d3b;
    width: 100%;
}
.titres {
    width: 80%;
}
tr {
  background-color: orange;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
}
td {
    background-color: red;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
th {
    background-color: yellow;
  height: 100px;
  width: 100%;
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

/* TABLETTE */
/* @media screen and (min-width: 481px) and (max-width: 768px) {
}
.titres {
    width: 68%;
} */
</style>
