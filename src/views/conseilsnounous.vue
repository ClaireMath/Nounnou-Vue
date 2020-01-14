<template>
  <div class="bigctn">
    <div class="ctn">
      <h1>Nos conseils pour les nounous</h1>

      <p>
        Chez Une Nounou pour mon Matou, on le sait bien, c’est le chat qui fait
        la loi. Si vous accueillez un chat chez vous, ça deviendra très vite
        chez lui… Alors afin que la colocation se passe pour le mieux, voici
        quelques conseils avisés pour garder un chat, qui nous ont été inspirés
        par une vétérinaire comportementaliste.
      </p>

      <p>
        Dans un premier temps si vous décidez de garder un chat, il faut bien
        s’assurer que ce dernier se sente à l’aise et s’habitue progressivement
        à son nouvel environnement, en faisant en sorte qu’il ait des effets
        personnels : bac à litière, jouets, nourriture habituelle etc. C’est la
        première étape pour une cohabitation réussie. Sachez qu’au début, rien
        ne sert de forcer le contact, en le prenant dans vos bras ou le
        caressant de force, par exemple… laissez-le venir à vous, il saura très
        vite réclamer votre attention !
      </p>
      <p>
        Pour le reste, voici 6 points importants qu’il vous sera utile de
        connaître pour garder un chat dans les meilleures conditions.
      </p>
      <ol>
        <li>
          <p>
            Le chat est joueur, rien de tel que de le divertir pour le faire
            gagner en assurance et s’épanouir à vos côtés. Dans la mesure du
            possible, demandez au propriétaire d’apporter quelques jouets… mais
            sinon, une boule de papier aluminium ou un coton-tige fera très bien
            l’affaire !
          </p>
        </li>

        <li>
          <p>
            Si vous avez un grand appartement ou une maison, commencez par
            garder le chat dans une seule pièce, avec tout ce dont il a besoin :
            sa gamelle, ses jouets, sa litière. Cela lui permettra de prendre
            ses repères. N’hésitez pas non plus à lui mettre une chaise devant
            la fenêtre, cela lui fera un excellent poste d’observation !
          </p>
          <figure class="picAnimals">
            <img
              src="../assets/chatfenetre.jpg"
              class="chatfenetre"
              alt="chat à la fenêtre"
            />
          </figure>
          <p>
            Notez qu’il faudra changer sa litière dès qu’elle est sale car les
            chats n’aiment pas gratter dans un bac humide.
          </p>
        </li>
        <li>
          <p>
            Si le chat se cache sous les meubles, pas d’inquiétude. Nous nous
            doutons que garder un chat qui refuse le contact peut être un peu
            frustrant, mais cela ne va pas durer. Le chat est sans doute timide
            et un peu peureux. Surtout ne cherchez pas à le déloger de force, au
            risque d’augmenter son anxiété. Dès qu’il sera en confiance dans son
            nouvel environnement, il sortira de sa cachette de lui-même.
          </p>
        </li>
        <li>
          <p>
            Garder un chat demande d’être vigilant. Pensez à bien fermer les
            fenêtres : les chats sont curieux. Il serait dommage de le laisser
            s’aventurer dehors au risque de se perdre (ou de tomber, si vous
            êtes à l’étage).
          </p>
        </li>
        <li>
          <p>
            Dans le cas où vous avez déjà un animal, vous vous doutez que la
            première rencontre sera sûrement houleuse. Pas d’inquiétude, ça ne
            dure jamais bien longtemps. En revanche, si les deux animaux ne
            s’entendent vraiment pas, il faudra envisager de les laisser chacun
            dans une pièce différente.
          </p>
          <figure class="picAnimals">
            <img
              src="../assets/pic.petit_.chat_.14957858.gif"
              class="chienEtChat"
              alt="gif chien joueur avec un chat"
            />
          </figure>
        </li>

        <li>
          <p>
            Enfin, sachez que la seule source d’inquiétude que vous devez avoir,
            c’est si le chat refuse de s’alimenter ou de boire. Dans ce cas là,
            n’attendez pas plus de trois jours avant de consulter un
            vétérinaire, cela pourrait cacher quelque chose de plus grave.
          </p>
        </li>
      </ol>
      <p>
        Voilà, vous savez tout, vous êtes fin prêts pour garder un chat chez
        vous !
      </p>
      <p>Chat-micalement,</p>
      <p>L'équipe d'une Nounou pour mon Matou</p>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "../components/myfooter";

export default {
  name: "conseilsnounous",
  components: {
    myfooter
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.bigctn {
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.ctn {
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: whitesmoke;
  text-align: justify;
}
h1 {
  text-align: center;
  font-family: cursive, "sans serif";
  margin-bottom: 10px;
}
ol {
  font-family: cursive, "sans serif";
  margin-left: 60px;
}

p {
  font-family: cursive, "sans serif";
  margin-bottom: 10px;
}
.picAnimals {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  width: 90%;
}

/* Ordi grd écran */
@media screen and (min-width: 1025px) and (max-width: 1280px) {
  .bigctn {
    background-color: whitesmoke;
  }
  .ctn {
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: whitesmoke;
    text-align: justify;
  }
}

/* Tablette*/
@media screen and (min-width: 481px) and (max-width: 768px) {
  .ctn {
    width: 90%;
  }
}
/* Téléphone */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .ctn {
    width: 100%;
    padding: 10px;
  }
  ol {
    margin-left: 15px;
  }
  .picAnimals {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
  }
  .chatfenetre {
    width: 250px;
  }
  .chienEtChat {
    width: 250px;
  }
}
</style>
