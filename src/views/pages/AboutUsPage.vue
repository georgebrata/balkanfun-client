<template>
  <section class="page-module">
    <hero-image title="Despre noi"></hero-image>
    <div class="module-content mt-4 mb-4">
      <el-row>
        <el-col :span="16" :offset="4" class="text-center">
          <img src="http://balkanfun.ro/wp-content/uploads/bfi_thumb/Asset-55-nptnru5ew5xy28occcm7kqdxvnfvuhutx3b6oqdsrc.png" alt="Balkanfun LOGO" height="auto">
        </el-col>
        <el-col :span="16" :offset="4" class="mt4">
          <h4>
            Ești tânăr și te plictisesc vacanțele cu familia? Vrei să încerci ceva nou, care este la modă și în țările vecine? Ți-ar plăcea să petreci câteva zile de neuitat cu prietenii tăi în străinătate? Dacă toate răspunsurile tale sunt DA, atunci ești în locul potrivit!
          </h4><br>
          <p>
            Organizația noastră are o vechime de peste 10 ani în turismul ce are ca principal scop distracția si petrecerile, iar din 2018 va fi prezentă și în România ! Avem o referință convingătoare în turismul de tineret, zeci de mii de persoane au ales să călătorească cu noi prin intreaga Europă pentru a-și găsi buna dispoziție și relaxarea.
          </p><br>
          <p>
            <b>Balkan Fun Romania</b> este un program care se axează pe tineri și pe distracție. Misiunea noastră principală este să îți oferim o formă de divertisment cât mai complexă într-un preț avantajos în destinații populare, unde clienții noștri pot petrece câteva zile minunate impreună cu prieteni vechi sau noi.
            <h2>Dacă ți-am stârnit interesul, caută-ne la biroul din Cluj-Napoca, sau ne poți contacta telefonic cât și prin e-mail.</h2>
          </p><br>
          <p>
Noi, cei de la BalKan Fun Romania punem suflet in fiecare detaliu pentru a îți oferi o vacanță de neuitat. Suntem și noi tineri și stim că o vacanță cu familia nu este neaparat ceea ce iți dorești, de aceea am pregătit pentru tine excursii perfecte, la un preț perfect, unde găsești distracția perfectă să iți faci prieteni noi și să te distrezi 24 din 24.
          </p><br>
          <p>Misiunea noastră este sa creăm pentru tine o atmosferă de neuitat, gata să te invăluie în magie și frumusețe în fiecare secundă. Pentru că știm foarte bine să facem asta și pentru că experiența ne recomandă , îți garantăm distracția, deoarece am făcut-o deja în mai multe țări înaintea României.
Deoarece ne dorim ca distracția să fie completă și să atingă toate nevoile tale, am pregătit o sumedenie de destinații populare, pachete inedite și concepte spectaculoase.</p><br>
          <p>Pentru că ne dorim ca distracția sa fie completă și să atingă toate nevoile, am pregătit o sumedenie de destinații populare, pachete inedite și concepte spectaculoase.
Bineînțeles că nici muzica nu se face așteptată și pentru a-ți stârni și mai tare interesul pregătim pentru tine DJ consacrați pe o scenă internațională, alături de DJ-ii casei din cluburile sau locurile unde am organizat distracția pentru tine.</p><br>
          <p>Zeci de mii de tineri din zeci de țări au participat deja la distracția organizată de BALKAN FUN și suntem foarte pozitivi în ceea ce te privește pe tine. Lasă-ne sa iți arătăm adevărata distracție, departe de casă !</p><br>
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

export default {
  name: "AboutUsPage",
  props: {},
  data: {},
  components: {
    Divider,
    HeroImage,
    BalkanfunFooter,
  }
};
</script>

<style lang="scss">
p {
  font-size: 18px;
  margin-bottom: 30px;
}
</style>
