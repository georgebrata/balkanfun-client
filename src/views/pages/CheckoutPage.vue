<template>
  <section class="page-module">
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="20" :offset="2" class="mt2 mb2">
            <el-steps :active="activeStep" finish-status="success" simple style="margin-top: 20px">
                <el-step title="Selecteaza oferta"></el-step>
                <el-step title="Sumar calatorie"></el-step>
                <el-step title="Modalitate de plata" ></el-step>
            </el-steps>
            <!--STEP 1-->
            <div class="step1" v-if="activeStep === 0">
                <el-select v-model="oferta" clearable placeholder="Selecteaza oferta" class="w-100 mt4">
                    <el-option
                        v-for="item in offers"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
                    
                <h1 class="mt4 mb2">
                    Ce fel de camera?
                </h1>

                <el-radio-group v-model="camera" class="w-100 text-center">
                    <el-radio-button label="Camera 2 persoane"></el-radio-button>
                    <el-radio-button label="Camera 3 persoane"></el-radio-button>
                    <el-radio-button label="Camera 4 persoane"></el-radio-button>
                </el-radio-group>

                <h1 class="mt4 mb2">
                    Cate persoane?
                </h1>

                <el-input-number class="center mb4" v-model="nrPersoane" @change="handleChange" :min="1" :max="10"></el-input-number>
                <el-button type="primary" class="w-50 center mt4" @click="nextStep" :disabled="!nextButton">Inainte</el-button>
            </div>
            <!--END OF STEP 1-->
            <!--STEP 2-->
            <div class="step2" v-if="activeStep === 1">
                <h1 class="w-100 mt4 mb4">
                    {{oferta || "Oferta selectata anterior"}}
                </h1>
                <h1 class="w-100 mb4">
                    {{camera || "Camera selectata anterior"}}
                </h1>

                <h1 class="w-100 mb4">
                    Pret total<br>
                    <h3>{{nrPersoane}} persoane * $100/persoana =</h3> 
                </h1>

                mai multe eventuale detalii oferta
                    

                <el-row :gutter="10" class="mt4">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12">
                        <el-button type="secondary" class="w-100 center mt2" @click="activeStep--" :disabled="!nextButton">Inapoi</el-button>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12">
                        <el-button type="primary" class="w-100 center mt2" @click="activeStep++" :disabled="!nextButton">Inainte</el-button>
                    </el-col>
                </el-row>
            </div>
            <!--END OF STEP 2-->
            <!--STEP 3-->
            <div class="step2 pt2" v-if="activeStep === 2">
                <el-radio-group v-model="plata" class="w-100 text-center mt4 plata-details">
                    <el-radio label="Plata integrala"></el-radio>
                    <el-radio label="Plata avans"></el-radio>
                </el-radio-group>


                <h1 class="mt4 mb2">
                    Detalii plata
                </h1><div class="mb4 w-100"></div>
                <h1 class="mt4 mb2">
                    Plata
                </h1>

                <el-input placeholder="Valideaza voucher" v-model="voucher" class="mb1">
                    <template slot="prepend">VOUCHER</template>
                    <el-button slot="append" @click="validVoucher = true" icon="el-icon-circle-plus"></el-button>
                </el-input>

                
                <el-alert v-if="this.validVoucher" class="w-100"
                  title="Voucher ok!"
                  type="success"
                  show-icon>
                </el-alert>
                
                <el-row :gutter="10" class="mt4">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12">
                        <el-button type="secondary" class="w-100 center mt4" @click="activeStep--" :disabled="!nextButton">Inapoi</el-button>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12">
                        <el-button type="primary" class="w-100 center mt4" @click="activeStep++" :disabled="!nextButton">Finalizeaza comanda</el-button>
                    </el-col>
                </el-row>

            </div>
            <!--END OF STEP 3-->
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>
</template>

<script>
import RoutesMapConfig from "@router/routes";
import BalkanfunFooter from "../partials/BalkanfunFooter";


export default {
  name: "CheckoutPage",
  props: {},
  data() {
    return {
      offers: [{
          value: 'Option1',
          label: 'Zakynthos | 10 August - 18 August 2019'
        }, {
          value: 'Option2',
          label: 'Kavos | 6 August - 14 August 2019'
        }, {
          value: 'Option3',
          label: 'Zakynthos | 18 August - 26 August 2018'
        }, {
          value: 'Option4',
          label: 'Zakynthos | 13 August - 01 Septembrie 2018'
        }, {
          value: 'Option5',
          label: 'Kavos | 13 August - 21 August 2019'
        }],
        activeStep: 0,
        oferta: '',
        camera: '',
        nrPersoane: '',
        voucher: '',
        plata: '',
        nextButton: false,
        validVoucher: false
      }
  },
  components: {
    BalkanfunFooter
  },
  methods: {
      handleChange() {
          this.nextButton = true;
      },
      nextStep() {
          this.activeStep++;
      }
  }
};
</script>

<style lang="scss" scoped>
.module.content {
    height: 80vh;
    vertical-align: middle;
}
.center  {
display: block;
  margin-left: auto;
  margin-right: auto;
}
.plata-details {
    font-size: 23px;
}
.el-footer {
    margin-top: 300px;
}
</style>
