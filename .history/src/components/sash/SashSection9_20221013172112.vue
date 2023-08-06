<template>
  <section>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col align="center">
          <v-img :src="require('../../assets/main-logo-small.svg')" class="title" data-aos="fade-up"
                 data-aos-duration="1500"/>

          <div class="phase d-none d-md-block" data-aos="fade-up" data-aos-duration="1500">
            바른샤시는 바르고 정직하게 만들자 라는 슬로건 아래<br>
            행복한 실내 환경을 만들기 위한 비전과<br>
            새로운 인테리어 제품의 기준을 제시합니다
          </div>

          <div class="phase d-block d-md-none" data-aos="fade-up" data-aos-duration="1500">
            바른샤시는<br>
            바르고 정직하게 만들자 라는 슬로건 아래<br>
            행복한 실내 환경을 만들기 위한 비전과<br>
            새로운 인테리어 제품의 기준을 제시합니다.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SashSection9"
}
</script>

<style scoped>
section {
  width: 100%;
  background-size: cover;
}

.phase {
  color: white;
  font-family: NEXONLv1GothicBold, sans-serif;
}

@media (max-width: 959px) {
  section {
    height: 100vh;
    background-image: url("../../assets/sash-section-9-mobile.png");
  }

  .title {
    width: 50%;
  }

  .phase {
    margin-top: 100px;
    font-size: 17px;
  }
}

@media (min-width: 960px) {
  section {
    height: 1156px;
    background-image: url("../../assets/sash-section-9.png");
  }

  .title {
    width: 314px;
  }

  .phase {
    margin-top: 53px;
    font-size: 35px;
  }
}
</style>
