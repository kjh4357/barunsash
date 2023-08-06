<template>
  <section>
    <div class="phrase-wrapper">
      <v-img
        :src="require('../../assets/main-section-5-phrase.png')"
        class="phrase"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <div class="phrase-mobile" data-aos="fade-up" data-aos-duration="1500">
        만 개의 집에는<br />
        만 개의 이야기가 있습니다
        <span
          ><br /><br />
          당신만의 이야기와 함께하는<br />
          나다운 집을 쉽고 편하게 연출해보세요
        </span>
      </div>
    </div>
    <div class="logo-wrapper">
      <v-img
        :src="require('../../assets/main-section-5-bottom-logo.png')"
        class="bottom-logo"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="1500"
      />
      <v-img
        :src="require('../../assets/main-section-5-bottom-logo-mobile.png')"
        class="bottom-logo-mobile"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="1500"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSection5",
};
</script>

<style scoped>
section {
  background: #a4c8ea;
  position: relative;
  padding-top: 20vh;
  padding-bottom: 67px;
}

@media (max-width: 959px) {
  .phrase {
    display: none;
  }

  .phrase-mobile {
    text-align: center;
    font-family: NEXONLv1GothicBold, sans-serif;
    font-size: 24px;
    color: white;
  }

  .phrase-mobile > span {
    font-size: 17px;
  }

  .bottom-logo {
    display: none;
  }

  .bottom-logo-mobile {
    width: 90%;
    margin: 20vh auto 0;
  }
}

@media (min-width: 768px) {
  section {
    min-height: 1080px;
    position: relative;
  }

  .phrase {
    width: 647px;
    margin: 0 auto;
  }

  .phrase-mobile {
    display: none;
  }

  .logo-wrapper {
    position: absolute;
    bottom: 67px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .bottom-logo {
    width: 336px;
  }

  .bottom-logo-mobile {
    display: none;
  }
}
</style>
