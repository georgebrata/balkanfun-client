<template>
  <section class="page-module">
    <hero-image title="Intrebari frecvente"></hero-image>
    <div class="module-content mt-4 mb-4">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="22" :sm="22" :md="20" :lg="16" :xl="12">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="Cu ce vom merge?" name="1">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fGALEBODYrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </el-collapse-item>
            <el-collapse-item title="Cine sunt fetele?" name="2">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CnvEcnhyiq8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </el-collapse-item>
            <el-collapse-item title="Cum arata o camera?" name="3">
              <div>Hotelurile puse la dispoziție de către noi sunt de două, respective trei stele. Camerele sunt curate, sunt mobilate decent și fiecare dintre ele este dotată cu o bucătărie și o baie proprie. În funcție de preferințele dumenavoastră puteți opta pentru camera cu două, trei sau patru locuri.</div>
              <span>TODO: Lightbox Gallery</span>
            </el-collapse-item>
            <el-collapse-item title="Cum arată un Boat Party cu BalkanFun?" name="4">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bf5BxtmF1wA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </el-collapse-item>
            <el-collapse-item title="Cum arată Pool Party?" name="5">
              <Vuelightbox id="poolParty-lightbox"
                :album_class=" 'poolParty-lightbox' "
                :images="poolPartyImages"
                :image_class=" 'img-responsive img-rounded' "
                :options="options">
              </Vuelightbox>        
            </el-collapse-item>
            <el-collapse-item title="Cum arată un party de nota 10?" name="6">
              <Vuelightbox id="partyTen-lightbox"
                :album_class=" 'my-album-class' "
                :images="partyTen"
                :image_class=" 'img-responsive img-rounded' "
                :options="options">
              </Vuelightbox>  
            </el-collapse-item>
            <el-collapse-item title="Cum arată un beach party?" name="7">
              <Vuelightbox id="beachParty-lightbox"
                :images="beachParty"
                :image_class=" 'img-responsive img-rounded' "
                :options="options">
              </Vuelightbox>  
            </el-collapse-item>
            <el-collapse-item title="Cine sunt fetele?" name="8">
              <div>Grecia cu siguranță nu te va lasa înfometat ! Restaurantele de la tot pasul sunt gata să vă ofere delicatese grecești pe bani puțini. În cazul în care timpul dintre petreceri nu iți permite să te așezi la masa noi îți recomandăm un Gyros la doar 2 euro!</div>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RBfdPKLlMfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </el-collapse-item>
            <el-collapse-item title="Ce faci in timpul zilei?" name="9">
              <div>Cuvintele cheie care definesc BalkanFun sunt “distracția” și “libertatea”. Plajele nisipoase din Kavos, priveliștile pline de soare de pe insula Zakynthos, dar și toate celelalte destinații pline de surprize te vor încânta.</div>
              <div>Tu și prietenii tăi vă veți putea bucura de party-urile organizate pe plajă în timpul zilei, de excursii în largul Mării Ionice, iar seara, cluburile și petrecerile care nu înceteaza până in zorii zilei vă așteaptă.</div>
            </el-collapse-item>
            <el-collapse-item title="Cine merge in excursie?" name="10">
              <div>Balkan Fun este de 10 ani alegerea numărul unu pentru tineri din țări precum Serbia, Macedonia, Bulgaria, Croația sau Bosnia. Așadar, dacă vrei să îți faci prieteni noi și să te distrezi cu mii de alți tineri pe insulă noi suntem alegerea potrivită.</div>
            </el-collapse-item>
            <el-collapse-item title="Ce fel de partyuri sunt? Cat costa?" name="11">
              <div>Îți punem la dispoziție o gamă variată de petreceri care dureaza până în zori. Atât prezența la day party-urile private de pe plajele din Zakynthos, Kavos sau Kefalonia, dar și cele de noapte din cluburile ce dispun de distracție nelimitată este obligatorie!</div>
              <div>De ce?</div>
              <div>Deoarece participarea la acestea îți este asigurată odată cu achiziționarea pachetului oferit de noi.</div>
            </el-collapse-item>
            <el-collapse-item title="Cati bani sa ai la tine?" name="12">
              <div>Nu te îngrijora pentru bugetul de vacanță. 7 zile de party-uri pe insula nu îți vor lua mai mulți bani decât o vacanță medie pe litoralul nostru. Cu siguranță vei economisi mai mulți bani decât un sejur la Mamaia.</div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>

</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider";
import HeroImage from "../partials/HeroImage";
import BalkanfunFooter from "../partials/BalkanfunFooter";
import Vuelightbox from 'vue-simple-lightbox'

import gallery from "../../data/faq-images";


export default {
  name: "FAQPage",
  props: {},
  data() {
    return {
      activeName: "1",
      poolPartyImages: gallery.poolPartyImages,
      partyTen: gallery.party10,
      beachParty: gallery.beachParty,
      options: {
        closeText : 'X'
      }
    };
  },
  components: {
    Divider,
    HeroImage,
    BalkanfunFooter,
    Vuelightbox
  },
};
</script>

<style lang="scss">
.el-collapse-item__header {
  font-weight: 600;
  font-size: 18px;

  &.is-active {
    color: #793489;
  } 
}
</style>
