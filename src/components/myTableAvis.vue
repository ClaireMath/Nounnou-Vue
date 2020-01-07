<template>
  <div class="divtable">
    <table v-if="show">
      <tbody>
        <tr class v-if="resultats == null || resultats == 0 ">
          <td>Vous n'avez pas encore d'avis</td>
        </tr>
<thead>
    <tr>
    <th>Note</th>
    <th>Commentaire</th>
       
        <th>Ecrit par</th>
        </tr>
</thead>
        <tr v-for="data in resultats" :key="data.idAvis">
         <!-- <td v-for="item in data" :key="item">{{item}}</td> -->
         <td>{{data.note}}</td> 

          <td>{{data.commentaire}}</td>
          <td>{{data.prenom}} {{data.nom}}</td>
          
 

          <td>
            <button v-on:click="avis(data)" class="btn">Emettre un avis sur cette garde</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <table v-else>
      <tbody>
        <tr class v-if="resultats == 0 ">
          <td class>Il n'y a pas de résultat correspondant à vos critères.</td>
        </tr>

        <tr id="ctn" v-for="data in resultats" :key="data.idMaitre" v-else>
        
          <td>{{data.chat.prenom_chat}}</td>
          <td><img :src="data.chat.photo" width="100px"></td>
          <td>{{data.chat.idChat}}</td>
          <td>{{data.prenom}}</td>
          <td>{{data.ville}}</td>
          <td>{{data.email}}</td>
          <td>{{data.description}}</td>

          <td>
            <button v-on:click="learnmoreM(data)" class="btn">En savoir plus</button>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "myTableGardes",
  props: ["resultats"],

  data() {
    return {
      show: true,
    
    };
  },
  created() {
      
    // console.log("this.resultats", this.resultats);
  
    // if (this.resultats[0].hasOwnProperty("idNounou")) {
    //   this.show = true;
    // } else {
    //   this.show = false;
    //  }
  },
  methods: {
    avis(data) {
    this.$router.push({ name: "newAvis", params: {data: data}});
//   this.$router.push({ name: "newAvis", params: {data: data , nounou: nounou,  garde: garde}});
     
    },
  }
};
</script>

<style scoped>
/* .divtable {
  width: 100%;
} */
table {
  width: 100%;
}

tr {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
}
td {
  height: 100px;
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
}
th {
  height: 100px;
  width: 100%;
  /* display: flex; 
  justify-content: center;
  align-items: center; */
}
#ctn {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
</style>