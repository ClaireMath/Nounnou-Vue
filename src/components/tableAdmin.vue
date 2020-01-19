<template>
  <div class="divtable">
    <table v-if="show">
      <tbody>
        <tr class v-if="resultats == null || resultats == 0">
          <td>Il n'y a pas de résultat correspondant à vos critères.</td>
        </tr>

 <tr class="titres" v-else>
          <th class="tel id">ID</th>
          <th class="tdCase">Prénom</th>
          <th class="tdCase">Nom</th>
          <th class="tdCase">Ville</th>
          <th class="tel tdCase">E-mail</th>
          <th class="tel adminBanni">Admin</th>
          <th class="tel adminBanni">Banni</th>
         <th>
            <button class="btn tel">
              En savoir plus
            </button>
          </th>
          <th class="tdMore">
            <img 
              
              src="../assets/more.png"
              title="En savoir plus"
              alt="En savoir plus"
              width="20px"
              class="more"
            />
          </th>
          
            
          
        </tr>

        <tr v-for="data in resultats" :key="data.idNounou" >
          <td class="tel id">{{ data.idNounou }}</td>
          <td class="tdCase">{{ data.prenom }}</td>
          <td class="tdCase">{{ data.nom }}</td>
          <td class="tdCase">{{ data.ville }}</td>
          <td class="tel tdCase">{{ data.email }}</td>
          <td class="tel adminBanni">{{ data.admin }}</td>
          <td class="tel adminBanni">{{ data.banni }}</td>

          <td>
            <button class="btn tel">
              En savoir plus
            </button>
          </td>
          <td class="tdMore">
            <img 
              v-on:click="learnmoreN(data)" 
              src="../assets/more.png"
              title="En savoir plus"
              alt="En savoir plus"
              width="20px"
              class="more"
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
 
  <tr class="titres" v-else>
          <th class="tel id">ID</th>
          <th class="tdCase">Prénom</th>
          <th class="tdCase">Nom</th>
          <th class="tdCase">Ville</th>
          <th class="tel tdCase">E-mail</th>
          <th class="tel adminBanni">Admin</th>
          <th class="tel adminBanni">Banni</th>
         <th>
            <button class="btn tel">
              En savoir plus
            </button>
          </th>
          <th class="tdMore">
            <img 
              
              src="../assets/more.png"
              title="En savoir plus"
              alt="En savoir plus"
              width="20px"
              class="more"
            />
          </th>
          
            
          
        </tr>


        <tr v-for="data in resultats" :key="data.idMaitre" id="ctn">
          <td class="tel id">{{ data.idMaitre }}</td>
          <td class="tdCase">{{ data.prenom }}</td>
          <td class="tdCase">{{ data.nom }}</td>
          <td class="tdCase">{{ data.ville }}</td>
          <td class="tel tdCase">{{ data.email }}</td>
          <td class="tel adminBanni">{{ data.admin }}</td>
          <td class="tel adminBanni">{{ data.banni }}</td>
          <td>
            <button v-on:click="learnmoreM(data)" class="btn tel">
              En savoir plus
            </button>
          </td>
          <td class="tdMore">
            <img 
              v-on:click="learnmoreM(data)" 
              src="../assets/more.png"
              title="En savoir plus"
              alt="En savoir plus"
              width="20px"
              class="more"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableAdmin",
  props: ["resultats"],

  data() {
    return {
      show: true
    };
  },
  created() {
    // console.log("this.resultats de la table Admin", JSON.stringify(this.resultats));

    if (this.resultats[0].hasOwnProperty("idNounou")) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  methods: {
    learnmoreN(data) {
      if (this.resultats[0].hasOwnProperty("idNounou")) {
        // on passe le paramètre data dans l'url mais il n'est pas visible, c'est propre à vuejs
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
  margin-top: 40px;
  margin-bottom: 40px;
}
tr {
  display: flex;
  justify-content: center;
}
td, th {
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
  padding: 0px;
  border-bottom: 20px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
.id {
  width: 5%;
}
.tdCase {
   width: 15%;
 }
 .adminBanni {
   width: 10%
 }
.more {
  display: none;
}

/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
.adminBanni {
  display: none;
   /* width: 0% */
 }
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
 .tdPrenom {
   width: 30%;
 }
 .more {
  display: block;
}
.tdMore {
  width: 10%;
}
.tdCase {
  width: 30%;
}
 .tel {
   display: none;
 } 
}
</style>
