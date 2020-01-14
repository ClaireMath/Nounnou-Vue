<template>
  <div class="myFooter">
    <div class="box1">
      <div class="ubox1">
        <h4>Nounou et Propriétaire</h4>

        <router-link to="/fonctionnement"
          >Fonctionnement du service</router-link
        >
        <router-link to="/reglement">Les règles d'or</router-link>
        <router-link to="/sorties">Nos prochaines sorties</router-link>
      </div>
      <div class="ubox1">
        <h4>Conseils</h4>

        <router-link to="/todoliste"
          >La to-do liste du propriétaire</router-link
        >
        <router-link to="/conseilsnounous"
          >Conseils pour nos Nounous</router-link
        >
      </div>
      <div class="ubox2">
        <h4>Contactez-nous</h4>

        <p>
          <a href="mailto:claira.m@live.fr">claira.m@live.fr</a>
        </p>
        <div class="divtel">
          <p class="texttel">Tél : 01 41 78 83 49</p>
        </div>
        <div class="subbox">
          <a href="https://fr-fr.facebook.com">
            <img src="../assets/fb.png" alt="logo facebook" class="logo" />
          </a>
          <a href="https://www.instagram.com">
            <img src="../assets/insta.png" alt="logo instagram" class="logo" />
          </a>
          <a href="https://www.pinterest.com">
            <img
              src="../assets/pinterest.png"
              alt="logo pinterest"
              class="logo"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="box2">
      <p class="ml">CGU - Mentions légales</p>
      <p class="ml">
        Une Nounou pour mon Matou
        <img src="../assets/copyright.png" width="15px" height="15px" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "myfooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myFooter {
  top: 750px;
  width: 100%;
  height: 220px;
  font-family: cursive, "sans-serif";
  color: whitesmoke;
  background-color: #680d3b;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.box1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 17px;
}
.box2 {
  font-size: 12px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ubox1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.ubox2 {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.texttel:hover {
  text-decoration: none;
}
.logo {
  width: 25px;
  height: 25px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 5px;
}
.logo:hover {
  filter: drop-shadow(0 0 0.75rem white);
}
a {
  text-decoration: none;
  color: whitesmoke;
  display: block;
}
h4 {
  color: whitesmoke;
}
p:nth-child(odd):hover {
  filter: drop-shadow(0px 0px 4px #00b300);
}
p:nth-child(even):hover {
  filter: drop-shadow(0px 0px 4px #b61666);
}
a:nth-child(odd):hover {
  filter: drop-shadow(0px 0px 4px #00b300);
}
a:nth-child(even):hover {
  filter: drop-shadow(0px 0px 4px #b61666);
}

.subbox {
  display: flex;
  flex-direction: row;
}

/* TABLETTE */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .myFooter {
    height: 270px;
  }
  .box1 {
    flex-wrap: wrap;
  }
  .ubox2 {
    display: none;
  }
  .divtel {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .ubox1 {
    display: none;
  }
  .subbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .texttel {
    text-decoration: none;
  }
}
</style>
