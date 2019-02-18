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
                <el-select v-model="oferta_selectata" clearable placeholder="Selecteaza oferta" class="w-100 mt4" @select="offerSelected = true">
                    <el-option
                        v-for="oferta in oferte" :value="oferta"
                        :key="oferta.nume"
                        :label="oferta.nume">
                    </el-option>
                </el-select>
                <h1 class="mt4 mb2" v-if="offerSelected">
                    Ce fel de camera?
                </h1>
                <el-row class="camere" v-if="oferta_selectata">
                    <div class="locatie" :key="index" v-for="(locatie, index) in oferta_selectata.camere" v-if="index!=='noLocation' ">
                        <table class="table">
                            <thead>
                            <th>Tip camera</th>
                            <th class="align-text-center">Locuri Libere</th>
                            <th class="align-text-center">Pret</th>
                            <th class="align-text-center">Nr. Persoane</th>
                            </thead>
                            <tbody>

                            <tr v-for="camera in locatie" :key="camera.disponibila" v-if="parseInt(camera.disponibile)>0">
                                <td class="align-text-left camera-display" > {{camera.tip_camera}} </td>
                                <td class="align-text-center camera-display" > {{camera.disponibile}}</td>
                                <td class="align-text-center camera-display"> {{camera.pret_euro}} EUR</td>
                                <td class="align-text-center"> <input v-model="camera.persoaneSelectate" @input="addProducts(camera,$event.target.value)"  min="0" :max="camera.disponibile"  style="width: 40px" type="number"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </el-row>

                <h1 class="mt4 mb2" v-if="roomSelected">
                    Cate persoane?
                </h1>
                <el-row :gutter="10" v-for="(locatie, index) in oferta_selectata.camere" :key="index" v-if="peopleCountSelected">
                    <el-col :xs="24" :sm="24" :md="20" :lg="12" :xl="12">
                        <h2>{{locatie.locatie}}</h2>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="20" :lg="12" :xl="12">
                        <el-input-number class="center mb4" v-model="nrPersoane" @change="handleChange" :min="1" :max="10"></el-input-number>
                    </el-col>
                </el-row>
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
import vuejsDatepicker from 'vuejs-datepicker'

import cupoane from "../../data/cupoane.json";
import oferte from "../../data/oferte.json";



export default {
  name: "TestPage",
    components: {
        BalkanfunFooter,
       'datepicker': vuejsDatepicker
    },
    data() {
        return {
        activeStep: 0,
        nextButton: false,
        card_url: '#',
        ofertaWrapper:true,
        transport:false,
        detaliiClientWrapper:false,
        successStageWraaper:false,
        showModal:false,
        loading:false,
        acordContract:false,
        oferte: oferte, //array cu oferte in formatul potrivit
        facturare:{
            denumireFirma:'',
            nume:'',
            prenume:'',
            email:'',
            telefon:'',
            cnp:'',
            adresa:'',
            oras:'',
            judet:''
        },
        oferta_selectata:'',
        oferta_selectata_id:'',
        sumarList:[],
        calatori:[],
        cupon_introdus:"",
        reducere_cupon:0,
        cupon_introdus_valid:false,
        cupoane: cupoane,
        tipPlata:"integral",
        roomSelected: "",
        offerSelected: "",
        peopleCountSelected: ""
    }},
    mounted() {
        //let ofertaSelectata = this.$route.query.oferta || null;
        let ofertaSelectata = null;
        if(ofertaSelectata){
            this.oferta_selectata_id=ofertaSelectata;
            this.oferta_selectata = this.oferte.find(function (val) {
                    return parseInt(val.id)===ofertaSlectata;
            });
        }

    },
    computed:{
        nrPersoane:function () {
            var total=0;
            this.sumarList.forEach(function (value,index) {
                total=total+parseInt(value.persoaneSelectate);
            });
            return total;
        },

        totalFactura: function () {
            var total=0;
            var em=this;
            this.sumarList.forEach(function (value) {
                total=total+(parseInt(value.persoaneSelectate) * parseFloat(value.pret_euro))
            });
            var reducere=this.nrPersoane*em.reducere_cupon;
            if(this.transport){
                total=total+this.nrPersoane * parseFloat(this.oferta_selectata.transport);
            }
            return total-reducere;
        }
    },
    watch:{
        acordContract:function (val) {
       if(val) {
           this.veziContract();
       }},
        oferta_selectata:function (val) {
            this.oferta_selectata_id=val.id;
            this.sumarList=[];
            this.transport=false;
            this.oferte=oferte;
        }
    },
    methods:{
        veziContract:function(){
            $('.su-lightbox').trigger('click');
        },
        setTuristi:function(){
            var em=this;
            this.sumarList.forEach(function (value,index) {

                var newArray=[];
                em.sumarList[index].turisti=[];
                for (var i=1; i<=parseInt(value.persoaneSelectate); i++  ){
                    newArray.push({
                        numeTurist:'',
                        prenumeTurist:'',
                        orasDomiciliu:'',
                        judetDomiciliu:'',
                        cnpTurist:'',
                        serieCiTurist:'',
                        nrCiTurist:'',
                        institutieEliberareCiTurist:'',
                        dataEliberareCiTurist:'',
                        benNumeHotelTurist:'',
                        benTipCameraTurist:'',
                        numeStatiuneTurist:'',
                        titular:i===1 ? true :false
                    });
                }
                em.$set(em.sumarList[index],'turisti' , newArray);
            });
        },
        showPersonalData:function () {
            this.ofertaWrapper=false;
            this.detaliiClientWrapper=true;
            this.setTuristi();
        },
        backToOffer:function () {
            this.ofertaWrapper=true;
            this.detaliiClientWrapper=false;
        },
        addProducts:function (camera,value) {
            this.roomSelected = true;
            if(parseInt(value) > parseInt(camera.disponibile)) {
                camera.persoaneSelectate=camera.disponibile;
            }
           var camera_id= this.sumarList.find(function(element) {
                return element.id === camera.id;
            });
           if(!camera_id){
               this.sumarList.push(camera);
           }
            this.sumarList.filter(function (val) {
               return (val.persoaneSelectate !=='0') &&  val.persoaneSelectate !== ''
            });
        },
        applyCupon:function () {
            var em=this;
            var coupon= this.cupoane.find(function(element) {
                return element.cod === em.cupon_introdus;
            });
            if(!coupon){
                alert('Cuponul nu este valid');
                this.reducere_cupon=0;
                this.cupon_introdus='';
                this.cupon_introdus_valid=false;
            } else {
                this.reducere_cupon=coupon.reducere;
                this.cupon_introdus_valid=true;
            }
        },
        hasSelectedePersons:function(array) {
            var persoaneSelectate =0;
            for (var key in array) {
                persoaneSelectate+=  parseInt(array[key].persoaneSelectate)
            }
            return persoaneSelectate > 0 ;

        },
        hasCamereDisponibile:function(array) {
            var CamereDisponibile = 0;
            for (var key in array) {
                CamereDisponibile+=  parseInt(array[key].disponibile)
            }
            console.log("camere dispo:", CamereDisponibile);
            return CamereDisponibile > 0 ;
        },
        handleChange() {
          this.nextButton = true;
        },
        nextStep() {
            this.activeStep++;
        },
        finishOrder:function () {
            var data=Qs.stringify({
                action: 'procesare_contract',
                cumparaturi: this.sumarList,
                transport: this.transport ? this.oferta_selectata.transport : false,
                facturare: this.facturare,
                valoare: this.totalFactura,
                nrPersoane: this.nrPersoane,
                oferta: this.oferta_selectata.id,
                cupon: this.cupon_introdus,
                reducere_cupon: this.reducere_cupon,
                tipPlata: this.tipPlata
            });
            var em=this;
            this.$validator.validate().then(function (valid) {
               if(valid && !em.loading){
                   em.loading=true;
                   /*
                   DO THE POST REQUEST
                axios.post(ajaxurl , data)
                    .then(function (response) {
                        console.log(response);
                        em.loading=false;
                        if(!response.data.success){
                          em.oferte=response.data.offers;
                            em.oferta_selectata=   em.oferte.find(function (val) {
                                return parseInt(val.id)=== parseInt(em.oferta_selectata_id);
                            });
                            em.sumarList=[];
                            var errorContent= document.createElement("div");
                            response.data.errors.forEach(function (error) {
                                errorContent.appendChild(document.createTextNode(error.message))
                            });
                            swal({
                                title: "Rezervare nereusita!",
                                content: errorContent,
                                icon: "warning",
                                button: "Selecteaza alte camere",
                            })
                                .then(function(value)  {
                                    em.backToOffer();
                        });
                        } else {
                            em.card_url=response.data.factura.factura_raw.url;
                            em.successStage();
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    */
               }
            });
        },
        successStage:function () {
            this.ofertaWrapper=false;
            this.detaliiClientWrapper=false;
            this.successStageWraaper=true;
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
