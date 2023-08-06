<template>
  <section>
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col align="center" class="phrase-wrapper">
          <v-img
            :src="require('../../assets/sash-section-4-phrase.png')"
            class="phrase"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </v-col>
        <v-col class="phrase-mobile-wrapper">
          <v-img
            :src="require('../../assets/sash-section-4-phrase-mobile.png')"
            class="phrase-mobile"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </v-col>
      </v-row>
      <v-row align="center" class="graph-wrapper" justify="center">
        <v-col align="center">
          <div class="displayBox" data-aos="fade-up" data-aos-duration="1500">
            <v-img
              :src="require('../../assets/sash-section-4-graph.png')"
              class="graph"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SashSection4",
};
</script>

<style scoped>
section {
  width: 100%;
  background-size: cover;
}

@media (max-width: 959px) {
  section {
    background-image: url("../../assets/sash-section-4-mobile.png");
    padding: 50vh 0 10vh;
  }

  .phrase-mobile {
    width: 80%;
    margin: 0 auto;
  }

  .phrase-wrapper {
    display: none;
  }

  .graph-wrapper {
    display: none;
  }
}

@media (min-width: 768px) {
  section {
    background-image: url("../../assets/sash-section-4.png");
    height: 1156px;
  }

  .phrase {
    width: 833px;
  }

  .graph {
    width: 1200px;
  }

  .phrase-mobile-wrapper {
    display: none;
  }

  .phrase-mobile {
    display: none;
  }
}
</style>
