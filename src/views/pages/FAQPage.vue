<template>
  <section class="page-module">
    <hero-image></hero-image>
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="22" :offset="1">
          <h1>Intrebari frecvente</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="1">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="Ce faci in timpul zilei?" name="1">
              <div>Cuvintele cheie care definesc BalkanFun sunt “distracția” și “libertatea”. Plajele nisipoase din Kavos, priveliștile pline de soare de pe insula Zakynthos, dar și toate celelalte destinații pline de surprize te vor încânta.</div>
              <div>Tu și prietenii tăi vă veți putea bucura de party-urile organizate pe plajă în timpul zilei, de excursii în largul Mării Ionice, iar seara, cluburile și petrecerile care nu înceteaza până in zorii zilei vă așteaptă.</div>
            </el-collapse-item>
            <el-collapse-item title="Cine merge in excursie?" name="2">
              <div>Balkan Fun este de 10 ani alegerea numărul unu pentru tineri din țări precum Serbia, Macedonia, Bulgaria, Croația sau Bosnia. Așadar, dacă vrei să îți faci prieteni noi și să te distrezi cu mii de alți tineri pe insulă noi suntem alegerea potrivită.</div>
            </el-collapse-item>
            <el-collapse-item title="Ce fel de partyuri sunt? Cat costa?" name="3">
              <div>Îți punem la dispoziție o gamă variată de petreceri care dureaza până în zori. Atât prezența la day party-urile private de pe plajele din Zakynthos, Kavos sau Kefalonia, dar și cele de noapte din cluburile ce dispun de distracție nelimitată este obligatorie!</div>
              <div>De ce?</div>
              <div>Deoarece participarea la acestea îți este asigurată odată cu achiziționarea pachetului oferit de noi.</div>
            </el-collapse-item>
            <el-collapse-item title="Cati bani sa ai la tine?" name="4">
              <div>Nu te îngrijora pentru bugetul de vacanță. 7 zile de party-uri pe insula nu îți vor lua mai mulți bani decât o vacanță medie pe litoralul nostru. Cu siguranță vei economisi mai mulți bani decât un sejur la Mamaia.</div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </div>
  </section>

</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider"
import HeroImage from "../partials/HeroImage"


export default {
  name: "FAQPage",
  props: {},
  data() {
    return {
      activeName: "1",
    };
  },
  components: {
    Divider,
    HeroImage
  }
};
</script>

<style lang="scss">
</style>
