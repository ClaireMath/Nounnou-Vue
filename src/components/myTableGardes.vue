<template>
  <div>
      <div class="divtable">
    <table>
      <tbody>
        <tr v-if="resultats == null || resultats == 0">
          <td>Vos n'avez pas encore fait garder votre chat.</td>
        </tr>

        <tr class="titres" v-else>
          <th class="debut">Début de la garde</th>
          <th class="fin">Date de fin</th>
          <th class="nounou">Nounou</th>
          <th class="prenomChat">Prénom du chat</th>
        </tr>

        <tr v-for="data in resultats" :key="data.idGarde">
         
          <td class="Rdebut">{{ data.debut }}</td>
          <td class="Rfin">{{ data.fin }} </td>
          <td class="Rnounou">{{ data.prenom }}</td>
          <td class="RprenomChat">{{ data.prenom_chat }}</td>

          <td class="iconCom">
              <button v-on:click="avis(data)" class="btn">
              Ecrire un avis
            </button>
            <img v-on:click="avis(data)" src="../assets/ecrireUnCom.png" alt="écrire un commentaire" width="28" class="com" />
          </td>
        </tr>
      </tbody>
    </table>
   
    </div>
  </div>
</template>

<script>

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
  /* background-color: blue; */
}
table {
  /* background-color: grey; */
  width: 100%;
}
tbody {
    /* background-color: #680d3b; */
    width: 100%;
}
.titres {
    width: 80%;
}
tr {
  /* background-color: orange; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
}
td {
  /* background-color: red; */
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
th {
  /* background-color: yellow; */
  height: 100px;
  width: 100%;
}
#ctn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn {
  width: 130px;
  height: 35px;
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
.com {
  display: none;
}

/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {

.btn {
  width: 90px;
  height: 49px;
} 
.titres {
    width: 90%;
}
.debut {
width: 25%;
}
.fin {
  width: 25%;
}
.nounou {
  width: 25%;
}
.prenomChat {
  width: 25%;
}
.Rdebut {
width: 22.5%;
font-size: 12px;
}
.Rfin {
  width: 22.5%;
  font-size: 12px;
}
.Rnounou {
  width: 22.5%;
}
.RprenomChat {
  width: 22.5%;
}
.iconCom {
  width: 10%;
}
tr { 
  font-size: 15px;
  height: 60px;
}
td {
 height: 60px; 
}
.com {
  display: block;
}
.btn {
  display: none;
}
}
</style>
