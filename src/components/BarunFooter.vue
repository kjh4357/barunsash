<template>
  <section>
    <div class="d-none d-md-block">
      <div class="up-wrapper">
        <div class="up" @click="scrollToTop">
          <v-img :src="require('../assets/footer-up.png')"/>
        </div>
      </div>
      <div class="wrap">
        <div class="logo-wrapper">
          <v-img :src="require('../assets/footer-logo.svg')" class="logo"/>
        </div>
        <div class="copyright-wrapper">
          <div class="menu-terms">
            <router-link class="menu-terms-item" to="/terms">이용약관</router-link>
            <span class="menu-terms-divider">│</span>
            <router-link class="menu-terms-item" to="/indi">개인정보처리방침</router-link>
          </div>
          <div>
            <v-col class="copyright">
              주식회사 신양화학 | 대표 : 심미선 | 사업자등록번호 : 374-87-00727<br>
              개인정보관리책임자 : 심미선 | 경기도 화성시 마도면 청원산단3길 43 (경기화성바이오밸리 1-17-4 블럭)<br>
              대표번호 : 031-357-9918 | 팩스 : 031-357-3635<br>

            </v-col>
            <v-col class="copyright-2">
              Copyright@ 2022 주식회사 신양화학. All rights reserved.
            </v-col>
          </div>
        </div>
        <v-spacer/>
          <v-img :src="require('../assets/footer-kosi.png')" class="kosi" max-width="83px" max-height="87px"/>
          <div class="out-link-wrapper">
            <div class="out-link">
              <a class="out-link-image" href="https://www.instagram.com/barun__official/">
                <v-img :src="require('../assets/footer_bt1.png')"/>
              </a>
              <a class="out-link-image" href="http://pf.kakao.com/_xbhdcb">
                <v-img :src="require('../assets/footer_bt2.png')"/>
              </a>
              <a class="out-link-image" href="https://blog.naver.com/barunsash">
                <v-img :src="require('../assets/footer_bt3.png')"/>
              </a>
              <a class="out-link-image" href="https://www.youtube.com/channel/UCzmeJ-6clOC8ewR9gLny8IQ">
                <v-img :src="require('../assets/footer_bt4.png')"/>
              </a>
            </div>
            <div class="footer-tel-wrapper">
              T. 031-357-9918
            </div>
          </div>
      </div>
    </div>
    <div class="d-block d-md-none footer-mobile">
      <div class="logo-wrapper">
        <div class="logo-wrapper2">
          <v-img :src="require('../assets/footer-logo.png')" class="logo"/>
        </div>

        <v-spacer />

        <div class="out-link-wrapper">
          <div class="out-link">
            <a class="out-link-image" href="https://www.instagram.com/barun__official/">
              <v-img :src="require('../assets/footer_bt1.png')"/>
            </a>
            <a class="out-link-image" href="http://pf.kakao.com/_xbhdcb">
              <v-img :src="require('../assets/footer_bt2.png')"/>
            </a>
            <a class="out-link-image" href="https://blog.naver.com/barunsash">
              <v-img :src="require('../assets/footer_bt3.png')"/>
            </a>
            <a class="out-link-image" href="https://www.youtube.com/channel/UCzmeJ-6clOC8ewR9gLny8IQ">
              <v-img :src="require('../assets/footer_bt4.png')"/>
            </a>
          </div>
        </div>
      </div>
      <div class="tel-wrapper">
        <a class="tel" href="tel:031-357-9918">
          고객센터<span>031-357-9918</span>
          <v-img :src="require('../assets/footer-tel.png')" class="image"/>
        </a>
      </div>
      <div class="menu-terms">
        <router-link class="menu-terms-item" to="/terms">이용약관</router-link>
        <span class="menu-terms-divider">|</span>
        <router-link class="menu-terms-item" to="/indi">개인정보처리방침</router-link>
      </div>
      <div class="copyright">
        주식회사 신양화학<br>
        경기도 화성시 마도면 청원산단3길 43 (경기화성바이오밸리 1-17-4 블럭)<br>
        대표 : 심미선 | 사업자등록번호 : 374-87-00727<br>
        개인정보관리책임자 : 심미선<br><br>
        Copyright@ 2022 주식회사 신양화학. All rights reserved.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BarunFooter",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.menu-terms {
  padding: 0;
}

.menu-terms-item {
  color: #222222;
  cursor: pointer;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.out-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.out-link-image {
  max-width: 39px;
  cursor: pointer;
}

.footer-tel-wrapper {
  font-size: 24px;
  font-family: NEXONLv1GothicBold, sans-serif;
  padding: 0;
}

.copyright, .copyright-2 {
  color: #222222;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.kosi {
  margin-top: 12px;
  margin-right: 28px;
}

@media (max-width: 959px) {
  .footer-mobile {
    position: relative;
    color: #605E5E;
    padding: 0 24px;
  }

  .up-wrapper {
    position: absolute;
    top: 0;
    right: 0;
  }

  .up {
    width: 44px;
  }

  .logo-wrapper {
    display: flex;
  }

  .logo-wrapper2 {
    width: 125px;
  }

  .logo {
    width: 125px;
  }

  .out-link-image {
    max-width: 23px;
    margin-right: 10px;
    margin-top: 4px;
    cursor: pointer;
  }

  .menu-terms {
    margin-top: 12px;
  }

  .menu-terms-item {
    color: #605E5E;
    font-size: 12px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .copyright {
    color: #605E5E;
    font-size: 10px;
    margin: 20px 0;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .tel-wrapper {
    display: flex;
    margin-top: 33px;
  }

  .tel {
    color: #605E5E;
    font-size: 12px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .tel > span {
    margin-left: 12px;
    font-size: 18px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .tel > .image {
    display: inline-block;
    width: 18px;
    margin-left: 12px;
  }

  .menu-terms-divider {
    margin-left: 4px;
    margin-right: 4px;
    color: #605E5E;
  }
}

@media (min-width: 960px) {
  .wrap {
    display: flex;
    margin-left: 1%;
  }

  .copyright-wrapper {
    margin-left: 4%;
    margin-top: 12px;
  }

  .out-link-wrapper {
    margin-right: 1%;
    margin-top: 12px;
  }

  .footer-tel-wrapper {
    font-size: 17px;
    margin-top: 12px;
  }

  .menu-terms-item {
    font-size: 14px;
    font-weight: bold;
  }

  .copyright {
    font-size: 12px;
    padding: 0;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .copyright-2 {
    padding: 0;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .up-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .up {
    width: 66px;
  }

  .logo-wrapper {
    padding: 0;
  }

  .logo {
    width: 161px;
  }

  .menu-terms-divider {
    margin-left: 8px;
    margin-right: 8px;
    color: #222222;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }
}

@media (min-width: 1000px) {
  .wrap {
    margin-left: 3%;
  }

  .out-link-wrapper {
    margin-right: 3%;
  }
}

@media (min-width: 1200px) {
  .wrap {
    margin-left: 7%;
  }

  .out-link-wrapper {
    margin-right: 7%;
  }

  .footer-tel-wrapper {
    font-size: 20px;
  }

  .menu-terms-item {
    font-size: 16px;
  }

  .copyright, .copyright-2 {
    font-size: 13px;
  }
}

@media (min-width: 1400px) {
  .wrap {
    margin-left: 10%;
  }

  .out-link-wrapper {
    margin-right: 10%;
  }

  .footer-tel-wrapper {
    font-size: 22px;
  }
}

@media (min-width: 1500px) {
  .wrap {
    margin-left: 12%;
  }

  .out-link-wrapper {
    margin-right: 12%;
  }

  .footer-tel-wrapper {
    font-size: 23px;
  }
}

@media (min-width: 1650px) {
  .wrap {
    margin-left: 14%;
  }

  .out-link-wrapper {
    margin-right: 14%;
  }

  .footer-tel-wrapper {
    font-size: 24px;
  }

  .menu-terms-item {
    font-size: 18px;
  }

  .copyright, .copyright-2 {
    font-size: 14px;
  }
}
</style>
