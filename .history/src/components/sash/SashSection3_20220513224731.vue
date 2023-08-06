<template>
  <section>
    <v-container class="wrap">
      <v-row align="center" justify="center">
        <v-col align="center">
          <div class="phrase" data-aos="fade-up" data-aos-duration="1500">
            <span>02</span><br>
            가격에 얽매이지 마세요.<br>
            <span>품질에 집중하세요.</span><br><br>
          </div>
          <div class="phrase2" data-aos="fade-up" data-aos-duration="1500">
            <span>바른샤시</span>는 <span>최고의 재료와 배합</span>으로<br>
            <span>고기능 경량화를 실현</span>했습니다.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SashSection3"
}
</script>

<style scoped>
section {
  background: #162138;
}

.container, .row {
  height: 100%;
}

.phrase {
  color: white;
  font-size: 40px;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.phrase2 {
  color: white;
  font-size: 23px;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.phrase > span, .phrase2 > span {
  font-family: NEXONLv1GothicBold, sans-serif;
}

@media (max-width: 959px) {
  section {
    padding: 30vh 0;
  }

  .phrase {
    font-size: 30px;
  }

  .phrase2 {
    font-size: 17px;
  }
}

@media (min-width: 960px) {
  section {
    height: 1156px;
  }
}
</style>
