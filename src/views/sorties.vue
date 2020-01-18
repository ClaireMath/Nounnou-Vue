<template>
  <div class="ctn">
    <div class="sorties">
      <img src="../assets/blackCat-eyes-yellow.jpg" alt="black cat" class="chatnoir" />
      <div class="text">
        <h1>Nos sorties à venir :</h1>

        <div class="cineEtresto">
          <h4>Cinéma Gaumont Pathé Opéra, Paris</h4>
          <p>Comme des Bêtes, film d'animation</p>
          <p>Le samedi 25 janvier 2020 à 15h50</p>
          <p>Comme à notre habitude, nous nous retrouverons également après le film pour boire un chocolat ensemble afin de faire connaissance.</p>
        </div>

        <div class="cineEtresto">
          <h4>Restaurant, Le Grenier de Notre-Dame</h4>
          <p>Venez tester avec nous ce restaurant végétarien</p>
          <p>Le samedi 1er février 2020 à 20h00</p>
          <p>18 rue de la Bucherie, 75005 Paris</p>
        </div>
      </div>
    </div>

    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import myfooter from "../components/myfooter";


export default {
  name: "sorties",
  components: {
    myfooter,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.sorties {
  padding : 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.text {
  width: 95%;
  padding: 20px;
  font-family: "merienda one", cursive, sans-serif;
}
.cineEtresto {
  padding : 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 20px;
}
h4 {
  margin-top: 20px;
}
h1,
h4 {
  text-align: center;
}
p {
  text-align: justify;
}
img {
  width: 95%;
}
/* Tablette*/
@media screen and (min-width: 481px) and (max-width: 768px) {
.chatnoir {
  width: 50%;
}
}

/* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
.sorties {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}
h1 {
  font-size: 30px;
}
img {
  width: 100%;
}
.text {
 
  width: 100%;
}
}
</style>