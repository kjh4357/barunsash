<template>
  <section>
    <BarunHeader />
    <GreenRemodelingSection1 />
    <GreenRemodelingSection2 />
    <GreenRemodelingSection3 />
    <GreenRemodelingSection4 />
    <GreenRemodelingSection5 />
    <GreenRemodelingSection6 />
    <GreenRemodelingSection7 />
    <GreenRemodelingSection8 />
    <GreenRemodelingSection9 />
    <GreenRemodelingSection10 />
    <GreenRemodelingSection11 />

    <BarunFooter style="margin-top: 35px" />
  </section>
</template>

<script>
import BarunHeader from "@/components/BarunHeader";
import BarunFooter from "@/components/BarunFooter";
import GreenRemodelingSection1 from "@/components/green-remodeling/GreenRemodelingSection1";
import GreenRemodelingSection2 from "@/components/green-remodeling/GreenRemodelingSection2";
import GreenRemodelingSection3 from "@/components/green-remodeling/GreenRemodelingSection3";
import GreenRemodelingSection4 from "@/components/green-remodeling/GreenRemodelingSection4";
import GreenRemodelingSection5 from "@/components/green-remodeling/GreenRemodelingSection5";
import GreenRemodelingSection6 from "@/components/green-remodeling/GreenRemodelingSection6";
import GreenRemodelingSection7 from "@/components/green-remodeling/GreenRemodelingSection7";
import GreenRemodelingSection8 from "@/components/green-remodeling/GreenRemodelingSection8";
import GreenRemodelingSection9 from "@/components/green-remodeling/GreenRemodelingSection9";
import GreenRemodelingSection10 from "@/components/green-remodeling/GreenRemodelingSection10";
import GreenRemodelingSection11 from "@/components/green-remodeling/GreenRemodelingSection11";

export default {
  name: "GreenRemodelingView",
  components: {
    GreenRemodelingSection1,
    GreenRemodelingSection2,
    GreenRemodelingSection3,
    GreenRemodelingSection4,
    GreenRemodelingSection5,
    GreenRemodelingSection6,
    GreenRemodelingSection7,
    GreenRemodelingSection8,
    GreenRemodelingSection9,
    GreenRemodelingSection10,
    GreenRemodelingSection11,

    BarunFooter,
    BarunHeader,
  },
  // mounted() {
  //   window.scrollTo(0, 0);
  // },

  // data: () => ({
  //   menuShow: false,
  //   catalogMenuShow: false,
  //   threshold: 50,
  // }),

  methods: {
    // showMenu() {
    //   this.menuShow = !this.menuShow;
    // },
    // showCatalogMenu() {
    //   this.catalogMenuShow = !this.catalogMenuShow;
    // },
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

@media (max-width: 768px) {
  .logo {
    width: 117px;
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

  .logo-white {
    display: none;
  }

  .logo-black {
    display: block;
  }

  .navbar.vue-fixed-header--isFixed .logo-white {
    display: block;
  }

  .navbar.vue-fixed-header--isFixed .logo-black {
    display: none;
  }

  .menu-icon-white {
    display: none;
  }

  .menu-icon-black {
    display: block;
  }

  .navbar.vue-fixed-header--isFixed .menu-icon-white {
    display: block;
  }

  .navbar.vue-fixed-header--isFixed .menu-icon-black {
    display: none;
  }
}

@media (min-width: 768px) {
  .logo {
    max-width: 13%;
    margin-left: 6%;
  }

  .menu-item,
  .menu-item-catalog {
    font-size: 20px;
  }

  .logo-white {
    display: block;
  }

  .logo-black {
    display: none;
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
