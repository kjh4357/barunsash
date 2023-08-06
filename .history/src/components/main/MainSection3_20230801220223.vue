<template>
  <section>
    <v-row>
      <v-spacer />
      <v-col>
        <v-img
          :src="require('../../assets/main-section-3-phrase.png')"
          class="phrase"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="bottom-logo-wrapper">
      <v-spacer />
      <v-col align="center">
        <div
          class="displayBox"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1500"
        >
          <v-img
            :src="require('../../assets/main-section-3-bottom-logo.png')"
            class="bottom-logo"
          />
        </div>
      </v-col>
      <v-spacer />
    </v-row>
  </section>
</template>

<script>
export default {
  name: "MainSection3",
};
</script>

<style scoped>
@media (max-width: 959px) {
  section {
    display: none;
  }
}

@media (min-width: 768px) {
  section {
    background-image: url("../../assets/main-section-3.png");
    background-size: cover;
    min-height: 1080px;
  }

  .bottom-logo-wrapper {
    width: 100%;
    margin-top: 392px;
  }

  .bottom-logo {
    width: 249px;
  }

  .phrase {
    margin-top: 428px;
  }
}
</style>
