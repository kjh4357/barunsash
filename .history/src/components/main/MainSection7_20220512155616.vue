<template>
  <section>
    <div class="wrap">
      <v-img :src="require('../../assets/main-logo-small.svg')" class="logo-small" data-aos="fade-up"
             data-aos-duration="1000"/>

      <div class="phrase" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
        아름다운 공간은<br>
        당신의 아름다운 본성을 일깨웁니다.<br>
        참된 휴식의 공간,<br>
        바른샤시가 만듭니다.
      </div>

      <v-img :src="require('../../assets/main-section-7-bottom-logo.png')" class="bottom-logo"
             data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSection7"
}
</script>

<style scoped>
section {
  background-image: url("../../assets/main-section-7.png");
  background-size: cover;
  padding: 0;
}

.wrap {
  padding-top: 358px;
  text-align: center;
}

.logo-small {
  width: 211px;
  margin: 0 auto;
}

.phrase {
  margin-top: 51px;
  color: white;
  font-size: 30px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.bottom-logo {
  width: 283px;
  margin: 0 auto;
}

@media (max-width: 959px) {
  .wrap {
    padding-top: 200px;
    padding-bottom: 51px;
  }

  .logo-small {
    width: 140px;
  }

  .phrase {
    font-size: 18px;
  }

  .bottom-logo {
    width: 225px;
    margin-top: 285px;
  }
}

@media (min-width: 960px) {
  section {
    min-height: 1080px;
  }

  .bottom-logo {
    margin-top: 331px;
  }
}
</style>
