<template>
    <section class="page-module">
    <hero-image title="Contact" imgSrc="http://test.balkanfun.mk/wp-content/uploads/2017/09/kontakt.jpg"></hero-image>
    <div class="module-content mt-4 mb-4">
      <el-row :gutter="20">
        <el-col :sm="24" :lg="12" class="text-center">
          <h1><i class="el-icon-location-outline mr2"></i>Cluj-Napoca</h1><br>
          <hr>
          <h3>Tipografiei nr.8, Etaj:1, Zoor Gallery</h3><br>
          <h3>Tel: +40 0741 653 259</h3><br>
          <h3>Fax : 0264 432 600</h3><br>
          <hr>
          <h4>Program de lucru: Luni-Vineri 10 -18</h4>
          <el-card class="m3 maps w-100">MAPS</el-card>
        </el-col>
        <el-col :sm="24" :lg="12" class="p4">
          <el-form ref="form" :model="form" class="p4">
            <el-form-item class="pr4 pl4">
              <h2 class="mb2">Contacteaza-ne</h2><hr>
            </el-form-item>
            <el-form-item class="pr4 pl4">
              <el-input v-model="form.name" placeholder="Numele tau"></el-input>
            </el-form-item>
            <el-form-item class="pr4 pl4">
              <el-input v-model="form.email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item class="pr4 pl4">
              <el-input v-model="form.phone" placeholder="Telefon"></el-input>
            </el-form-item>
            <el-form-item class="pr4 pl4">
              <el-input type="textarea" placeholder="Mesajul tau ..." v-model="form.message"></el-input>
            </el-form-item>
            <el-form-item class="pr4 pl4" v-if="this.messageSent">
                <el-alert 
                  title="Mesajul dvs. a fost trimis cu success!"
                  type="success"
                  show-icon @close="onCloseAlert">
                </el-alert>
            </el-form-item>
            <el-form-item class="pr4 pl4">
              <el-button type="primary" class="w-100" @click="onSubmit">Trimite</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>
</template>

<script>
import RoutesMapConfig from "@router/routes";
import BalkanfunFooter from "../partials/BalkanfunFooter";
import HeroImage from "../partials/HeroImage";


export default {
  name: "ContactPage",
  components: {BalkanfunFooter, HeroImage},
  props: {},
  data() {
    return {
      messageSent: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
      onSubmit() {
        //do the POST request
        this.messageSent = true;
        console.log('submit!');
      },
      onCloseAlert() {
        //do the POST request
        this.messageSent = false;
        console.log('submit!');
      }
    }
};
</script>

<style lang="scss">
.maps {
  height: 400px;
}
</style>
