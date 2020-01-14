// Vue et Router sont deux dépendances du package-lock.json
// Le nom de la variable importée est le mot qui se trouve plus bas dans "component"

import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Notfound from "./views/notfound.vue";
import Inscription from "./views/inscription.vue";
import Fonctionnement from "./views/fonctionnement.vue";
import Reglement from "./views/reglement.vue";
import Todoliste from "./views/todolist.vue";
import Conseilsnounous from "./views/conseilsnounous.vue";
import Sorties from "./views/sorties.vue";
import Catsittersearch from "./views/catsittersearch.vue";
import CatSearch from "./views/catSearch.vue";
import ProfilNou from "./views/profilNou.vue";
import ProfilMaitre from "./views/profilMaitre.vue";
import Login from "./views/login.vue";
import ShowNounous from "./views/showNounous.vue";
import ShowMaitres from "./views/showMaitres.vue";
import Admin from "./views/admin.vue";
import MaitreChercheNounou from "./views/maitreChercheNounou.vue";
import NounouChercheChat from "./views/nounouChercheChat.vue";
import ConfirmationGardeN from "./views/confirmationGardeN.vue";
import NewAvis from "./views/newAvis.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/notfound"
    },
    {
      // juste le slash ça permet de dire que ce sera cette vue qui sera envoyée par défaut
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fonctionnement",
      name: "fonctionnement",
      component: Fonctionnement
    },
    {
      path: "/reglement",
      name: "reglement",
      component: Reglement
    },
    {
      path: "/todoliste",
      name: "todoliste",
      component: Todoliste
    },
    {
      path: "/conseilsnounous",
      name: "conseilsnounous",
      component: Conseilsnounous
    },
    {
      path: "/sorties",
      name: "sorties",
      component: Sorties
    },
    {
      path: "/catsittersearch",
      name: "catsittersearch",
      component: Catsittersearch
    },
    {
      path: "/profilNou",
      name: "profilNou",
      component: ProfilNou
    },
    {
      path: "/profilMaitre",
      name: "profilMaitre",
      component: ProfilMaitre
    },
    {
      path: "/catSearch",
      name: "catSearch",
      component: CatSearch
    },
    {
      path: "/inscription",
      name: "inscription",
      component: Inscription
    },
    {
      path: "/notfound",
      name: "notfound",
      component: Notfound
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/showNounous",
      name: "showNounous",
      component: ShowNounous
    },
    {
      path: "/showMaitres",
      name: "showMaitres",
      component: ShowMaitres
    },
    {
      path: "/maitreChercheNounou",
      name: "maitreChercheNounou",
      component: MaitreChercheNounou
    },
    {
      path: "/nounouChercheChat",
      name: "nounouChercheChat",
      component: NounouChercheChat
    },
    {
      path: "/confirmationGardeN",
      name: "confirmationGardeN",
      component: ConfirmationGardeN
    },
    {
      path: "/newAvis",
      name: "newAvis",
      component: NewAvis
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')}
  ]
});
