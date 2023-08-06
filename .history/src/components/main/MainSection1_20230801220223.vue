<template>
  <section>
    <v-container class="section">
      <div class="d-none d-md-flex phrase-wrapper">
        <div class="phrase" data-aos="fade-up" data-aos-duration="1500">
          바르게
        </div>
        <div
          class="phrase2"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1500"
        >
          SINCERITY AND INTEGRITY
        </div>
        <div
          class="text-stroke"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          만든
        </div>
        <div
          class="phrase2"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1500"
        >
          30 YEARS OF<br />HISTORY
        </div>
        <div
          class="phrase"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          샤시
        </div>
      </div>

      <div class="d-flex d-md-none phrase-wrapper">
        <div class="phrase" data-aos="fade-up" data-aos-duration="1500">
          바르게
        </div>
        <div
          class="phrase2"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          SINCERITY AND INTEGRITY
        </div>
        <div
          class="text-stroke"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          만든
        </div>
        <div
          class="phrase2"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          30 YEARS OF<br />HISTORY
        </div>
        <div
          class="phrase"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          샤시
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "MainSection1",
};
</script>

<style scoped>
.section {
  max-width: 100%;
  background: #162138;
  background-size: cover;
}

.text-stroke {
  color: transparent;
  -webkit-text-stroke: 1px #fff;
}

@media (max-width: 959px) {
  .section {
    height: 100vh;
    padding: 0;
  }

  .phrase-wrapper {
    width: 100%;
    height: 100vh;
    padding: 13vh 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .text-stroke,
  .phrase {
    font-size: 75px;
    text-align: center;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .phrase {
    color: white;
  }

  .phrase2 {
    color: white;
    text-align: center;
    font-size: 15px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }
}

@media (min-width: 768px) {
  .section {
    height: 1080px;
    padding: 0 60px;
  }

  .phrase-wrapper {
    height: 1080px;
    align-items: center;
    justify-content: space-between;
  }

  .text-stroke,
  .phrase {
    font-size: 70px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .phrase {
    color: white;
  }

  .phrase2 {
    color: white;
    text-align: center;
    font-size: 15px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }
}

@media (min-width: 1050px) {
  .text-stroke,
  .phrase {
    font-size: 80px;
  }

  .phrase2 {
    font-size: 17px;
  }
}

@media (min-width: 1264px) {
  .text-stroke,
  .phrase {
    font-size: 100px;
  }

  .phrase2 {
    font-size: 19px;
  }
}

@media (min-width: 1400px) {
  .text-stroke,
  .phrase {
    font-size: 105px;
  }

  .phrase2 {
    font-size: 23px;
  }
}

@media (min-width: 1500px) {
  .text-stroke,
  .phrase {
    font-size: 115px;
  }
}

@media (min-width: 1600px) {
  .text-stroke,
  .phrase {
    font-size: 130px;
  }
}

@media (min-width: 1700px) {
  .text-stroke,
  .phrase {
    font-size: 150px;
  }
}

@media (min-width: 1920px) {
  .text-stroke,
  .phrase {
    font-size: 170px;
  }
}
</style>
