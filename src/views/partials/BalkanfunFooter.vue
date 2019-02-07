<template>
    <el-footer height="400">
      <el-row :gutter="20" :offset="2" class="w-100">
        <el-col :sm="24" :md="12" :lg="8">
          <img class="footer-logo mt4" src="/static/img/brand/balkan-fun-logo-alb-text.png" alt="Balkanfun LOGO">
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="text-center mt2">
            <h1 class="el-icon-info mb3"></h1><br>
            <a class="subtitle" href="http://balkanfun.ro/wp-content/uploads/2019/02/contract-turisti-varianta-website-converted.pdf"><p>Contract cu turistul</p></a>
            <a class="subtitle" href="http://balkanfun.ro/wp-content/uploads/2018/12/polita-asigurare.pdf"><p>Politica de insolvabilitate</p></a>
            <a class="subtitle" href="http://balkanfun.ro/wp-content/uploads/2018/05/Xerox-Scan_08052018111305.pdf"><p>Licenta de turism</p></a>
          </div>
          <div class="text-center mt1">
            <h2 class="mb1 text-white mb1 mt2">PARTENERI</h2>
            <el-row :gutter="24">
              <el-col :sm="12">
                <img height="50" src="/static/img/brand/omnipass-logo.png" alt="Omnipass Logo">
              </el-col>
              <el-col :sm="12">
                <img height="50" src="/static/img/brand/mb-logo.png" alt="Mircea Bravo Logo">
              </el-col>
            </el-row>
          </div>

        </el-col>
        <el-col :sm="24" :md="12" :lg="8" class="text-center">
          <el-row :gutter="24" class="mt2 w-100">
            <el-col :sm="8">
              <h1 class="el-icon-info mb3">fb</h1>
            </el-col>
            <el-col :sm="8">
              <h1 class="el-icon-info mb3">ig</h1><br>
            </el-col>
            <el-col :sm="8">
              <h1 class="el-icon-info mb3">yt</h1><br>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="mt2 w-100">
            <el-col :sm="24">
              <h2 class="el-icon-location mb2"><a href="tel:">Tipografiei, nr 9, Cluj-Napoca</a></h2>
            </el-col>
            <el-col :sm="20" :offset="2">
              <h2 class="el-icon-phone mb2"><a href="tel:">0741 653 259</a></h2>
            </el-col>
            <el-col :sm="20" :offset="2">
              <h2 class="el-icon-printer mb2"><a href="tel:">0264 432 600</a></h2>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-footer>
</template>

<script>
import Vue from "vue";
import Cookies from "js-cookie";

export default {
  name: "BalkanfunFooter",
  components: {},
  props: {},
};
</script>

<style type="text/scss" lang="scss">
footer {
  position: fixed;
  bottom: 0;
  height: auto;
  min-height: 300px;
  width: 100%;
  background: url("http://balkanfun.ro/wp-content/uploads/2017/09/footer-top-bg.jpg")
    no-repeat top center #2c6fa6;
  /* Position and center the image to scale nicely on all screens */
  .el-row {
    max-width: 100%;
    display: inline-block;
  }
  a, h2, .el-icon-info:before, .el-icon-phone:before, .el-icon-location:before, .el-icon-printer:before {
    color: white;
  }
}

.footer-logo {
  width: 80%;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>

