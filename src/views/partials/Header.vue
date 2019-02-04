<template>
  <header class="header mobile-header">
    <h1 class="logo">
      <router-link to="/">
        <img src="../../assets/images/balkanfun-logo-small.png" alt="Balkanfun LOGO">
        <span class="title">{{ $t('projectTitle') }}</span>
      </router-link>
    </h1>

    <a href="javascript:;" class="menu" @click="onToggleMenuClick" >
      <span></span>
    </a>

    <a href="javascript:;" class="search" @click="onToggleMenuClick" >
      <span></span>
    </a>

<!--
    <el-dropdown @command="handleCommand" class="operate" trigger="click" style="color: red;">
      <a href="javascript:;" class="account">
        <icon name="menu"></icon>
        <span>{{ user.username || $t('username')}}</span>
        <span class="caret"></span>
      </a>
      <el-dropdown-menu slot="dropdown" class="dropmenu">
        <el-dropdown-item  command="Switch">
          <icon name="switch"></icon>{{ $t('switchLang') }}
        </el-dropdown-item>
        <el-dropdown-item divided command="Logout">
          <icon name="logout"></icon>{{ $t('signOut') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    -->
  </header>
</template>

<script>
import Vue from "vue";
import Cookies from "js-cookie";

export default {
  name: "header",

  data() {
    return {
      user: {}
    };
  },

  components: {},

  computed: {
    isMobile() {
      return true;
    }
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
    }
  }
};
</script>

<style type="text/css" lang="scss">
@import "./../../assets/scss/variables.scss";
@import "./../../assets/scss/mixins.scss";

#app .header {
  position: fixed;
  z-index: 9;
  height: $header-height;
  width: 100%;
  min-width: 320px;
  background-color: $header-bg;
  @include clearfix();

  a {
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
    padding: 10px 0 8px 35px;

    img {
      display: inline-block;
      vertical-align: middle;
      width: 36px;
      height: auto;
      margin-right: 10px;
    }
  }
  .title {
    display: inline-block;
    vertical-align: middle;
    font-size: $font-large;
    color: Black;
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
  padding: 20px 15px 10px;
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
</style>
