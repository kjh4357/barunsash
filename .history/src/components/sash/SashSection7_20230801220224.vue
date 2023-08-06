<template>
  <section>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col align="center">
          <v-img
            :src="require('../../assets/sash-section-7-title.png')"
            class="title"
            data-aos="fade-up"
            data-aos-duration="1500"
          />

          <div class="phrase d-none d-md-block">
            각자의 자리에서 올곧게 일하는 바른 일들이<br />
            하나하나 모이는 것이 바른 공정입니다.<br />
            고객만족도 측면에서 제품의 기준을 연구개발하며,<br />
            표준화된 품질 관리를 통해 엄격한 품질을 고수합니다.
          </div>

          <div
            class="phrase d-block d-md-none"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            올곧게, 일하는 방식
          </div>

          <div
            class="phrase2 d-block d-md-none"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            각자의 자리에서 올곧게 일하는 바른 일들이<br />
            하나하나 모이는 것이 바른 공정입니다.<br />
            고객만족도 측면에서 제품의 기준을 연구개발하며,<br />
            표준화된 품질 관리를 통해 엄격한 품질을 고수합니다.<br />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SashSection7",
};
</script>

<style scoped>
section {
  width: 100%;
  background-size: cover;
}

.phrase,
.phrase2 {
  color: white;
  font-family: NEXONLv1GothicBold, sans-serif;
}

@media (max-width: 959px) {
  section {
    position: relative;
    padding-top: 118px;
    padding-bottom: 107px;
    background-image: url("../../assets/sash-section-7-mobile.png");
  }

  .title {
    width: 69%;
  }

  .phrase {
    margin-top: 15px;
    font-size: 19px;
  }

  .phrase2 {
    margin-top: 282px;
    font-size: 12px;
    padding-left: 35px;
    padding-right: 35px;
    text-align: start;
  }
}

@media (min-width: 768px) {
  section {
    height: 1156px;
    background-image: url("../../assets/sash-section-7.png");
  }

  .title {
    width: 393px;
  }

  .phrase {
    margin-top: 42px;
    font-size: 27px;
  }
}
</style>
