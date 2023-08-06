<template>
  <v-dialog
    v-model="isShowing"
    fullscreen
    persistent
    transition="dialog-top-transition"
  >
    <div class="menu-dialog">
      <router-link class="menu-item" to="/sash">
        ABOUT BARUN SASH<br /><span>바른샤시</span>
      </router-link>

      <router-link class="menu-item" to="/history">
        BARUN HISTORY<br /><span>바른히스토리</span>
      </router-link>

      <router-link class="menu-item" to="/line-up">
        PRODUCT LINEUP<br /><span>바른라인업</span>
      </router-link>

      <router-link class="menu-item" to="/green-remodeling">
        GREEN REMODELING<br /><span>그린리모델링</span>
      </router-link>

      <router-link class="menu-item" to="/service-center">
        CUSTOMER SERVICE<br /><span>고객지원</span>
      </router-link>

      <div class="menu-item">
        e-catalog<br /><span>E-카다로그</span><br />
        <router-link class="menu-item" to="/catalog-agency">대리점</router-link>
        <span class="divider">|</span>
        <router-link class="menu-item" to="/catalog-client">고객용</router-link>
      </div>

      <v-container class="out-link-wrapper">
        <a class="out-link" href="https://www.instagram.com/barun__official/">
          <v-img
            :src="require('../assets/footer-insta.png')"
            class="out-link-image"
          />
        </a>
        <a class="out-link" href="http://pf.kakao.com/_xbhdcb">
          <v-img
            :src="require('../assets/footer-kakao-channel.svg')"
            class="out-link-image"
          />
        </a>
        <a class="out-link" href="https://blog.naver.com/barunsash">
          <v-img
            :src="require('../assets/footer-blog.svg')"
            class="out-link-image"
          />
        </a>
        <a
          class="out-link"
          href="https://www.youtube.com/channel/UCzmeJ-6clOC8ewR9gLny8IQ"
        >
          <v-img
            :src="require('../assets/footer-youtube.svg')"
            class="out-link-image"
          />
        </a>
      </v-container>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "BarunMenu",
  data: () => ({
    isShowing: true,
  }),
};
</script>

<style scoped>
.menu-dialog {
  height: 100vh;
  background: #162138;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

.menu-item {
  color: white;
  font-size: 16px;
  font-family: Outfit-Regular, sans-serif;
  margin-top: 20px;
  text-align: center;
}

.menu-item span {
  font-size: 40px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.menu-item > span.divider {
  font-size: 20px;
  margin: 0 35px;
}

.menu-item > .menu-item {
  font-size: 20px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.out-link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.out-link {
  display: block;
  padding: 20px 10px 10px;
  width: 59px;
}
</style>
