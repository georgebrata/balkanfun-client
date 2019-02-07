<template>
  <header class="header mobile-header">
    <div class="pre-header xs-hide sm-hide">
      <div class="max-width-header">
        <div class="street"><i class="el-icon-location mr2"></i>Tipografiei nr.8, Cluj-Napoca</div>
        <div class="number"><i class="el-icon-phone mr2"></i> <a href="tel:+40741653259">0741 653 259 /  Fax:  0264 432 600</a></div>
        <div class="working-time"><i class="el-icon-time mr2"></i>Luni-Vineri 10-18h</div>
      </div>
    </div>
    <h1 class="logo">
      <router-link to="/">
        <img src="../../assets/images/balkanfun-logo-small.png" alt="Balkanfun LOGO">
        <!--<span class="title">{{ $t('projectTitle') }}</span>-->
        <b class="title">BALKAN<span style="color: #793489">FUN</span></b>
      </router-link>
    </h1>

    <!-- mobile menu toggle -->
    <a href="javascript:;" class="menu hidden-sm-and-up" @click="onToggleMenuClick" >
      <span></span>
    </a>

    <el-menu class="el-menu-demo float-right hidden-sm-and-down" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to='/'>Acasa</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><router-link to="/offers">Oferte</router-link></template>
        <el-menu-item index="2.1">
          <router-link to="/offers?filter=offer1">Oferta 1</router-link>
        </el-menu-item>
        <el-menu-item index="2.2">
          <router-link to="/offers?filter=offer2">Oferta 2</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/faq">Intrebari frecvente</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/gallery">Galerie</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/about-us">Despre noi</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/contact">Contact</router-link>
      </el-menu-item>
    </el-menu>



  </header>
</template>

<script>
import Vue from "vue";
import Cookies from "js-cookie";

export default {
  name: "header",

  data() {
    return {
      user: {},
    };
  },

  components: {},

  computed: {
    isMobile() {
      return true;
    },
  },

  methods: {
    handleCommand(item) {
      this[`on${item}Click`]();
    },

    /* ----------------------------On Click Event---------------------------- */
    onToggleMenuClick() {
      this.$triggerSidenav();
    },

    onLogoutClick() {
      this.$apis.user
        .logout()
        .then(result => {
          Cookies.remove("isLogin");

          this.$store.commit("$vuexSetUserInfo", {});
          this.$router.push("/login");
        })
        .catch(err => {
          this.$router.push("/");
          this.$message.error(err.msg);
        });
    },

    onSwitchClick() {
      let targetLang = this.$currentLang === "ro" ? "en" : "ro";
      Cookies.set("lang", targetLang);
      Vue.config.lang = targetLang;
    },
  },
};
</script>

<style type="text/css" lang="scss">
@import "./../../assets/scss/variables.scss";
@import "./../../assets/scss/mixins.scss";
.el-menu-item a {
  color: #909399;
}

.pre-header {
  background: #2C6FA6;
  height: $pre-header-height;
  color: #fff;
  font-size: 14px;
  line-height: $pre-header-height;
  i {
    color: yellow;
  }
}

.max-width-header {
  max-width: 65%;
  text-align: center;
  margin: 0 auto;
  .street {
    float: left;
    text-align: left;
    width: 33.3%;
  }
  .number {
    text-align: center;
    width: 33.3%;
    float: left;
  }
  .working-time {
    text-align: right;
    float: right;
  }
}

#app .header {
  box-sizing: content-box;
  position: fixed;
  z-index: 9;
  height: $header-height;
  width: 100%;
  min-width: 320px;
  background-color: $header-bg;
  border-bottom: solid 1px #e6e6e6;
  @include clearfix();

  a {
    color: white;
    &:hover,
    &:focus {
      text-decoration: none;
      span {
        text-decoration: none;
      }
    }
  }
  .logo {
    float: left;
    padding: 5px 0 8px 35px;

    img {
      display: inline-block;
      vertical-align: middle;
      width: 36px;
      height: auto;
      margin-right: 5px;
    }
  }
  .title {
    display: inline-block;
    vertical-align: middle;
    font-size: $font-large;
    color: Black;
    margin-right: 50px;
  }
  .notification {
    float: right;
    padding: 20px;

    &:hover {
      background-color: $header-bg;
    }
  }
  .operate {
    float: right;
    position: relative;
    margin-right: 15px;
    &:hover {
      .dropmenu {
        display: block;
        width: 100%;
        min-width: 150px !important;
      }
      .account {
        background-color: $header-bg;
      }
    }
    .account {
      height: $header-height;
      @include flex-box-center(row);
      color: #fff;
    }
    .icon-account {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
}

.menu {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 35px 15px 10px;
  width: 60px;
  height: 60px;
}
.menu span:after,
.menu span:before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
}
.menu span:after {
  top: 18px;
}
.menu span {
  position: relative;
  display: block;
}
.menu span,
.menu span:after,
.menu span:before {
  width: 100%;
  height: 3px;
  background-color: black;
  -webkit-transition: all 0.3s;
  backface-visibility: hidden;
}
.menu-expand .menu span {
  background-color: transparent;
}
.menu-expand .menu span:before {
  transform: rotate(45deg) translate(2px, 2px);
}
.menu-expand .menu span:after {
  transform: rotate(-45deg) translate(4px, -5px);
}

.dropmenu {
  .icon {
    vertical-align: middle;
    margin: 0.1rem 0.5rem 0.1rem 0.1rem;
  }
}

@media (max-width: 768px) {
  #app .header {
    .menu {
      display: block;
    }
    .logo {
      text-align: center;
      @include absolute-center;
      float: none;
      padding: 0;
      img {
        margin-right: 5px;
      }
    }
    .operate {
      .account {
        max-width: 80px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
.el-menu-demo {
  border-bottom: 0 !important;
}
.el-menu-item a, .el-submenu__title a {
  color: #909399 !important;
}
</style>
