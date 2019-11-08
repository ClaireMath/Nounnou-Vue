<template>
  <div class="header">
    <div class="banner">
      <div class="burgerAndUser">
        <div class="divSpans">
          <input type="checkbox" name="menuB" id="menuB" />
          <div class="ctnNav">
            <myNav></myNav>
          </div>
          <span class="span1"></span>
          <span class="span2"></span>
          <span class="span3"></span>
        </div>
        <div @click="showprofile" class="profil">
          <img
            src="../assets/user.png"
            title="Mon profil"
            alt="mon compte"
            width="30px"
            class="user"
          />
        </div>
      </div>

      <div @click="sendToHomePage" class="divLogoAndTitle">
        <h1>Une Nounou pour mon Matou</h1>
        <img src="../assets/logosansbords.jpg" alt="logo du site" class="logo" />
      </div>
      <div class="divButtons">
        <button @click="sendform" class="btn btn1">S'inscrire</button>
        <button v-if="login" @click="flogin" class="btn btn2">Se connecter</button>
        <button v-if="logout" @click="flogout" class="btn btn2">Se deconnecter</button>
      </div>
    </div>
    <div class="recherche">
      <div @click="catsittersearch">
        <p class="textrecherche">Chercher un cat-sitter (sans frais)</p>

        <div>
          <img src="../assets/house.png" alt="maison" />
        </div>
        <div class="divloupe">
          <img src="../assets/loupe.png" alt="loupe" width="28" class="loupe" />
        </div>
      </div>
      <div @click="catSearch">
        <p class="textrecherche">Prendre soin d'un chat bénévolement</p>

        <div>
          <img src="../assets/pawprint2.png" alt="trace de patte" class="paw" />
        </div>
        <div class="divloupe">
          <img src="../assets/loupe.png" alt="loupe" width="28" class="loupe" />
        </div>
      </div>
    </div>

    <div>
     
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import Router from "../router";
import myNav from "./myNav";

export default {
  name: "headertemplate",

  components: {
    myNav
  },
  data() {
    return {
      login: null,
      logout: null,
      user: {}
    };
  },
  created: function() {
    if (localStorage.getItem("token")) {
      this.login = false;
    } else {
      this.login = true;
    }

    if (!localStorage.getItem("token")) {
      this.logout = false;
    } else {
      this.logout = true;
    }

    // this.login = localStorage.getItem("token") ?false:true
    // this.logout = !localStorage.getItem("token") ?false:true
  },
  methods: {
    sendform() {
      Router.push({ name: "inscription" });
    },
    sendToHomePage() {
      Router.push({ name: "home" });
    },
    catsittersearch() {
      if (localStorage.getItem("token") == null) {
        Router.push({ name: "login" });
      } else {
        Router.push({ name: "catsittersearch" });
      }
    },
    showprofile() {
      if (!localStorage.getItem("token")) {
        Router.push({ name: "login" });
      } else {
        this.user = VueJwtDecode.decode(localStorage.getItem("token"));
        if (this.user.idNounou) {
          this.$router.push("/profilNou");
        } else {
          Router.push({ name: "profilMaitre" });
        }
      }
    },
    catSearch() {
      if (localStorage.getItem("token") == null) {
        Router.push({ name: "login" });
      } else {
        Router.push({ name: "catSearch" });
      }
    },
    flogin() {
      Router.push({ path: "/login" });
    },
    flogout() {
      Router.push({ path: "/login" });
      localStorage.removeItem("token");
      window.location.reload();
    }

    // sendform() {
    //   Router.push({name: "nav"})
    // }
  }
};
</script>

<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
.header {
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  width: 100%;
  background-color: whitesmoke;
  font-family: cursive, "sans-serif";
  font-weight: bold;
}
.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
}
.burgerAndUser {
  display: flex;
  flex-direction: row;
}
.profil {
  cursor: pointer;
}
.user {
  margin-top: 30px;
}
#menuB {
  position: absolute;
  width: 70px;
  height: 70px;
  margin-left: -10px;
  margin-top: 15px;
  cursor: pointer;
  opacity: 0;
}
.divSpans {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70px;
  height: 70px;
  margin-left: 20px;
  margin-bottom: 17px;
}
.divSpans span {
  width: 30px;
  height: 3px;
  background-color: #680d3b;
  border-radius: 800px;
}
.span1 {
  margin-top: 20px;
}
.span2 {
  margin-top: 8px;
}
.span3 {
  margin-top: 8px;
}

#menuB:checked ~ .span1 {
  background-color: red;
  animation: animationSpan1 ease-in-out 0.5s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  -webkit-animation: animationSpan1 ease-in-out 0.5s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: animationSpan1 ease-in-out 0.5s;
  -moz-animation-iteration-count: 1;
  -moz-transform-origin: 50% 50%;
  -o-animation: animationSpan1 ease-in-out 0.5s;
  -o-animation-iteration-count: 1;
  -o-transform-origin: 50% 50%;
  -ms-animation: animationSpan1 ease-in-out 0.5s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
  -webkit-animation: animationSpan1 ease-in-out 0.5s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
}

@keyframes animationSpan1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(405deg);
    -webkit-transform: rotate(405deg);
    -moz-transform: rotate(405deg);
    -ms-transform: rotate(405deg);
    -o-transform: rotate(405deg);
  }
}

@-moz-keyframes animationSpan1 {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(405deg);
  }
}

@-webkit-keyframes animationSpan1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(405deg);
  }
}

@-o-keyframes animationSpan1 {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(405deg);
  }
}

@-ms-keyframes animationSpan1 {
  0% {
    -ms-transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(405deg);
  }
}
#menuB:checked ~ .span2 {
  display: none;
}
#menuB:checked ~ .span3 {
  background-color: red;
  animation: animationSpan3 ease-in-out 0.5s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; /*when the spec is finished*/
  -webkit-animation: animationSpan3 ease-in-out 0.5s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/
  -moz-animation: animationSpan3 ease-in-out 0.5s;
  -moz-animation-iteration-count: 1;
  -moz-transform-origin: 50% 50%;
  -moz-animation-fill-mode: forwards; /*FF 5+*/
  -o-animation: animationSpan3 ease-in-out 0.5s;
  -o-animation-iteration-count: 1;
  -o-transform-origin: 50% 50%;
  -o-animation-fill-mode: forwards; /*Not implemented yet*/
  -ms-animation: animationSpan3 ease-in-out 0.5s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
  -ms-animation-fill-mode: forwards; /*IE 10+*/
}

@keyframes animationSpan3 {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    transform: translate(0px, -11px) rotate(-405deg);
  }
}

@-moz-keyframes animationSpan3 {
  0% {
    -moz-transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    -moz-transform: translate(0px, -11px) rotate(-405deg);
  }
}

@-webkit-keyframes animationSpan3 {
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(0px, -11px) rotate(-405deg);
  }
}

@-o-keyframes animationSpan3 {
  0% {
    -o-transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    -o-transform: translate(0px, -11px) rotate(-405deg);
  }
}

@-ms-keyframes animationSpan3 {
  0% {
    -ms-transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    -ms-transform: translate(0px, -11px) rotate(-405deg);
  }
}

/* NAV */

.ctnNav {
  display: flex;
  flex-direction: column;
  background-color: #ff2d95;
  /* justify-content: center; */
  /* align-items: center; */
  /* align-content: center; */
  opacity: 0.8;
  width: 40%;
  height: 450px;
  position: absolute;
  font-family: cursive, sans-serif;
  font-weight: bold;
  left: -500px;
  top: 160px;
  border-radius: 20px;
  display: none;
}
/* Apparition de la nav */
#menuB:checked ~ .ctnNav {
  animation: animationNav linear 1s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%; /* point autour duquel l'élément tourne, si jamais rotation
  animation-fill-mode:forwards; /*when the spec is finished*/
  -webkit-animation: animationNav linear 1s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/
  -moz-animation: animationNav linear 1s;
  -moz-animation-iteration-count: 1;
  -moz-transform-origin: 50% 50%;
  -moz-animation-fill-mode: forwards; /*FF 5+*/
  -o-animation: animationNav linear 1s;
  -o-animation-iteration-count: 1;
  -o-transform-origin: 50% 50%;
  -o-animation-fill-mode: forwards; /*Not implemented yet*/
  -ms-animation: animationNav linear 1s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
  -ms-animation-fill-mode: forwards; /*IE 10+*/
}

@keyframes animationNav {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(1000px, 0px);
  }
}

@-moz-keyframes animationNav {
  0% {
    -moz-transform: translate(0px, 0px);
  }
  100% {
    -moz-transform: translate(1000px, 0px);
  }
}

@-webkit-keyframes animationNav {
  0% {
    -webkit-transform: translate(0px, 0px);
  }
  100% {
    -webkit-transform: translate(1000px, 0px);
  }
}

@-o-keyframes animationNav {
  0% {
    -o-transform: translate(0px, 0px);
  }
  100% {
    -o-transform: translate(1000px, 0px);
  }
}

@-ms-keyframes animationNav {
  0% {
    -ms-transform: translate(0px, 0px);
  }
  100% {
    -ms-transform: translate(1000px, 0px);
  }
}

.divLogoAndTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 380px;
  height: 100px;
  text-align: center;
  color: #b61666;
  font-family: "Merienda One", cursive;
  cursor: pointer;
}
.divLogoAndTitle h1 {
  font-size: 22px;
  width: 190px;
}
.logo {
  width: 105px;
  height: 100px;
  margin: 20px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
}
.divButtons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  margin-right: 15px;
}
.btn {
  cursor: pointer;
  width: 150px;
  height: 30px;
  font-family: "Livvic", sans-serif;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  color: hsl(330, 78%, 23%);
  background-color: whitesmoke;
  /* font-family: cursive, "sans-serif"; */
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
}
.btn:hover {
  color: #ffffff;
  background-color: #680d3b;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
}
.btn1 {
  margin-bottom: 4px;
}
.btn2 {
  margin-top: 4px;
}
.recherche {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  z-index: 3;
  /* background-color: #00b300; */
  color: whitesmoke;
}
.recherche > div {
  height: 60px;
  width: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}
.recherche > div:nth-child(1) {
  background-color: #00b300;
  cursor: pointer;
}
.recherche > div:nth-child(1):hover {
  background-color: #00e600;
}
.recherche > div:nth-child(2) {
  background-color: #680d3b;
  cursor: pointer;
}
.recherche > div:nth-child(2):hover {
  /* background-color:  #9f1459; */
  background-color: #b61666;
}
.recherche > div > p {
  text-align: center;
}
/* .noshow {
  display: none; 
} */
.divloupe {
  display: none;
}

/*
.ctnNav a {
  text-decoration: none;
  color: black;
  padding: 10px;
 } */

/* .noDisplay {
left: -500px;
bottom: 120px;
}  */

/* Tablette*/
@media screen and (min-width: 481px) and (max-width: 768px) {
  .logo {
    display: none;
  }
  .divLogoAndTitle h1 {
    font-size: 18px;
  }
  .paw {
    margin-right: 15px;
  }
  .divloupe {
    display: block;
  }
  .textrecherche {
    display: none;
  }
  /* .profil {
    display: block;
  } */
  .btn {
    width: 150px;
    height: 30px;
  }

  .ctnNav {
    left: -940px;
  }
  /* Apparition de la nav */
  #menuB:checked ~ .ctnNav {
    animation: animationNav linear 1s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%; /* point autour duquel l'élément tourne, si jamais rotation
  animation-fill-mode:forwards; /*when the spec is finished*/
    -webkit-animation: animationNav linear 1s;
    -webkit-animation-iteration-count: 1;
    -webkit-transform-origin: 50% 50%;
    -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/
    -moz-animation: animationNav linear 1s;
    -moz-animation-iteration-count: 1;
    -moz-transform-origin: 50% 50%;
    -moz-animation-fill-mode: forwards; /*FF 5+*/
    -o-animation: animationNav linear 1s;
    -o-animation-iteration-count: 1;
    -o-transform-origin: 50% 50%;
    -o-animation-fill-mode: forwards; /*Not implemented yet*/
    -ms-animation: animationNav linear 1s;
    -ms-animation-iteration-count: 1;
    -ms-transform-origin: 50% 50%;
    -ms-animation-fill-mode: forwards; /*IE 10+*/
  }

  @keyframes animationNav {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(200px, 0px);
    }
  }

  @-moz-keyframes animationNav {
    0% {
      -moz-transform: translate(0px, 0px);
    }
    100% {
      -moz-transform: translate(200px, 0px);
    }
  }

  @-webkit-keyframes animationNav {
    0% {
      -webkit-transform: translate(0px, 0px);
    }
    100% {
      -webkit-transform: translate(200px, 0px);
    }
  }

  @-o-keyframes animationNav {
    0% {
      -o-transform: translate(0px, 0px);
    }
    100% {
      -o-transform: translate(200px, 0px);
    }
  }

  @-ms-keyframes animationNav {
    0% {
      -ms-transform: translate(0px, 0px);
    }
    100% {
      -ms-transform: translate(200px, 0px);
    }
  }
}

/* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .logo {
    display: none;
  }
  .divloupe {
    display: block;
  }
  .textrecherche {
    display: none;
  }
  .divLogoAndTitle h1 {
    font-size: 20px;
  }
  .profil {
    display: none;
  }
  .btn {
    display: none;
  }
  /* Apparition de la nav */
  #menuB:checked ~ .ctnNav {
    animation: animationNav linear 1s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%; /* point autour duquel l'élément tourne, si jamais rotation
  animation-fill-mode:forwards; /*when the spec is finished*/
    -webkit-animation: animationNav linear 1s;
    -webkit-animation-iteration-count: 1;
    -webkit-transform-origin: 50% 50%;
    -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/
    -moz-animation: animationNav linear 1s;
    -moz-animation-iteration-count: 1;
    -moz-transform-origin: 50% 50%;
    -moz-animation-fill-mode: forwards; /*FF 5+*/
    -o-animation: animationNav linear 1s;
    -o-animation-iteration-count: 1;
    -o-transform-origin: 50% 50%;
    -o-animation-fill-mode: forwards; /*Not implemented yet*/
    -ms-animation: animationNav linear 1s;
    -ms-animation-iteration-count: 1;
    -ms-transform-origin: 50% 50%;
    -ms-animation-fill-mode: forwards; /*IE 10+*/
  }

  @keyframes animationNav {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(500px, 0px);
    }
  }

  @-moz-keyframes animationNav {
    0% {
      -moz-transform: translate(0px, 0px);
    }
    100% {
      -moz-transform: translate(500px, 0px);
    }
  }

  @-webkit-keyframes animationNav {
    0% {
      -webkit-transform: translate(0px, 0px);
    }
    100% {
      -webkit-transform: translate(500px, 0px);
    }
  }

  @-o-keyframes animationNav {
    0% {
      -o-transform: translate(0px, 0px);
    }
    100% {
      -o-transform: translate(500px, 0px);
    }
  }

  @-ms-keyframes animationNav {
    0% {
      -ms-transform: translate(0px, 0px);
    }
    100% {
      -ms-transform: translate(500px, 0px);
    }
  }
}

.ctnNav {
  /* background-color: #00e600; */
  width: 100%;
  background-color: #ff2d95;
}

/* Extra small devices (phones, 600px and down) */
/* @media only screen and (max-width: 600px) {...} */
</style>