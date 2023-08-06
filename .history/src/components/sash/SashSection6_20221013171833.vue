<template>
  <section>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col align="center">
          <v-img :src="require('../../assets/sash-section-6-title.png')" class="title" data-aos="fade-up"
                 data-aos-duration="1500"/>

          <div class="phase d-none d-md-block" data-aos="fade-up" data-aos-duration="1500">
            바른샤시는 “바르고 정직하게 샤시를 만들자”라는 기업이념으로 시작하여<br>
            한국 건자재 시장에서 합리적인 가격의 고품질 브랜드로서<br>
            지속적인 성장을 거듭하고 있습니다.
          </div>

          <div class="phase d-block d-md-none" data-aos="fade-up" data-aos-duration="1500">
            바르고, 정직하게
          </div>

          <div class="phase2 d-block d-md-none" data-aos="fade-up" data-aos-duration="1500">
            바른샤시는 “바르고 정직하게 샤시를 만들자”라는<br>
            기업이념으로 시작하여 한국 건자재 시장에서<br>
            합리적인 가격의 고품질 브랜드로서<br>
            지속적인 성장을 거듭하고 있습니다.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SashSection6"
}
</script>

<style scoped>
section {
  width: 100%;
  background: #162138;
  background-size: cover;
}

.phase, .phase2 {
  color: white;
  font-family: NEXONLv1GothicBold, sans-serif;
}

@media (max-width: 959px) {
  section {
    position: relative;
    padding-top: 118px;
    padding-bottom: 107px;
  }

  .title {
    width: 69%;
  }

  .phase {
    margin-top: 15px;
    font-size: 19px;
  }

  .phase2 {
    margin-top: 282px;
    font-size: 13px;
    padding-left: 35px;
    padding-right: 35px;
    text-align: start;
  }
}

@media (min-width: 960px) {
  section {
    height: 1156px;
  }

  .title {
    width: 387px;
  }

  .phase {
    margin-top: 41px;
    font-size: 27px;
  }
}
</style>
