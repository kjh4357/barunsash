<template>
  <section>
    <fixed-header v-if="!menuShow" :threshold="threshold">
      <div class="navbar">
        <div class="menu-wrapper">
          <router-link class="logo" to="/">
            <v-img :src="require('../assets/logo.svg')" />
          </router-link>
          <div class="nav-link d-none d-md-flex">
            <router-link class="menu-item" to="/sash">바른샤시</router-link>
            <router-link class="menu-item" to="/history"
              >바른히스토리</router-link
            >
            <router-link class="menu-item" to="/line-up"
              >바른라인업</router-link
            >
            <router-link class="menu-item" to="/green-remodeling"
              >그린리모델링</router-link
            >
            <router-link class="menu-item" to="/service-center"
              >고객지원</router-link
            >
          </div>
          <div class="spacer" />
          <button
            class="menu-item-catalog d-md-block d-none"
            @click="showCatalogMenu"
          >
            E-카다로그
          </button>
          <div class="d-flex d-md-none menu" @click="showMenu">
            <v-img :src="require('../assets/menu.svg')" class="menu-icon" />
          </div>
        </div>
        <div v-if="catalogMenuShow" class="submenu-catalog d-md-block d-none">
          <router-link class="link" to="/catalog-agency">
            <v-img
              :src="require('../assets/btn-catalog-b2b.png')"
              class="submenu-catalog-item submenu-catalog-item1 d-inline-block"
            />
          </router-link>

          <router-link class="link" to="/catalog-client">
            <v-img
              :src="require('../assets/btn-catalog-b2c.png')"
              class="submenu-catalog-item d-inline-block"
            />
          </router-link>
        </div>
      </div>
    </fixed-header>
    <BarunMenu v-if="menuShow" />
  </section>
</template>

<script>
import FixedHeader from "vue-fixed-header";
import BarunMenu from "@/components/BarunMenu";

export default {
  name: "BarunHeader",

  components: { BarunMenu, FixedHeader },

  data: () => ({
    menuShow: false,
    catalogMenuShow: false,
    threshold: 50,
  }),

  methods: {
    showMenu() {
      this.menuShow = !this.menuShow;
    },

    showCatalogMenu() {
      this.catalogMenuShow = !this.catalogMenuShow;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.menu-wrapper {
  position: fixed;
  width: 100vw;
  z-index: 99999;
  left: 0;
  top: 0;
  padding: 25px;
  display: flex;
}

.nav-link {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.navbar.vue-fixed-header--isFixed > .menu-wrapper {
  background: #162138;
}

.menu-item {
  margin-right: 5%;
  color: white;
  cursor: pointer;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.menu-item-catalog {
  width: 20%;
  color: white;
  cursor: pointer;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.submenu-catalog {
  position: fixed;
  text-align: right;
  z-index: 99998;
  width: 100vw;
  background: #162138;
}

.submenu-catalog-item {
  width: 138px;
}

.submenu-catalog-item1 {
  margin-right: 26px;
}

@media (max-width: 960px) {
  .logo {
    width: 110px;
  }

  .menu {
    align-items: center;
  }

  .menu-icon {
    width: 25px;
  }

  .spacer {
    flex-grow: 1;
  }
}

@media (min-width: 960px) {
  .logo {
    max-width: 13%;
    margin-left: 6%;
  }

  .menu-item,
  .menu-item-catalog {
    font-size: 20px;
  }

  .submenu-catalog {
    padding-right: 4%;
    padding-top: 90px;
  }
}

@media (min-width: 1440px) {
  .menu-item,
  .menu-item-catalog {
    font-size: 22px;
  }

  .submenu-catalog {
    padding-right: 4.5%;
    padding-top: 95px;
  }
}

@media (min-width: 1920px) {
  .menu-item,
  .menu-item-catalog {
    font-size: 24px;
  }

  .submenu-catalog {
    padding-right: 5%;
  }
}
</style>
