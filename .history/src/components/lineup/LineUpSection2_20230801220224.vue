<template>
  <section>
    <v-container class="section" fluid>
      <v-img
        :src="require('../../assets/line-up-section-2-circle.png')"
        class="image-circle d-none d-md-block"
      />
      <v-row>
        <v-col align="center">
          <div data-aos="fade-up" data-aos-duration="1500">
            <v-img
              :src="require('../../assets/line-up-section-2-phrase.png')"
              class="phrase"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
            <router-link class="link" to="/service-center"
              >BARUN STANDARD</router-link
            >
          </div>
        </v-col>
      </v-row>
      <v-img
        :src="require('../../assets/line-up-section-2-polygon.png')"
        class="image-polygon d-none d-md-block"
      />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "LineUpSection2",
};
</script>

<style scoped>
a {
  text-decoration: none;
}

section {
  width: 100%;
  background: #162138;
}

.section {
  position: relative;
}

.image-circle {
  position: absolute;
  top: 0;
  width: 20%;
  right: 8%;
}

.image-polygon {
  position: absolute;
  width: 25%;
  left: 7%;
  bottom: 0;
}

.link {
  color: #222222;
  font-family: Outfit-Regular, sans-serif;
  background: white;
  display: inline-block;
  border-radius: 37px;
}

@media (max-width: 959px) {
  section {
    padding: 10vh 0;
  }

  .phrase {
    width: 77%;
  }

  .link {
    margin-top: 130px;
    font-size: 12px;
    padding: 6px 15px;
  }
}

@media (min-width: 768px) {
  section {
    min-height: 1080px;
  }

  .section {
    min-height: 1080px;
  }

  .phrase {
    width: 578px;
    margin-top: 214px;
  }

  .link {
    margin-top: 236px;
    font-size: 23px;
    padding: 13px 30px;
  }
}
</style>
