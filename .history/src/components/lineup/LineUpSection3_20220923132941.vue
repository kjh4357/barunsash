<template>
  <section>
    <v-container class="d-none d-md-block section" fluid>
      <v-row>
        <v-col align="center">
          <div data-aos="fade-up" data-aos-duration="1500">
            <v-img :src="require('../../assets/line-up-section-3-phrase.png')" class="phrase"/>
          </div>
          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
            <router-link class="link" to="/service-center">BARUN GOVERNMENT</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="d-block d-md-none" fluid>
      <v-row>
        <v-col align="center">
          <div data-aos="fade-up" data-aos-duration="1500">
            <v-img :src="require('../../assets/line-up-section-3-phrase-mobile.png')" class="phrase"/>
          </div>
          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
            <router-link class="link" to="/service-center">BARUN GOVERNMENT</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "LineUpSection3"
}
</script>

<style scoped>
a {
  text-decoration: none;
}

section {
  width: 100%;
  background: #222222;
}

.section {
  position: relative;
}

.link {
  color: #222222;
  font-family: Outfit-Regular, sans-serif;
  background: white;
  display: inline-block;
  border-radius: 37px;
  cursor: pointer;
}

@media (max-width: 959px) {
  section {
    padding: 10vh 0;
  }

  .phrase {
    width: 92%
  }

  .link {
    margin-top: 130px;
    font-size: 12px;
    padding: 6px 15px;
  }
}

@media (min-width: 960px) {
  section {
    height: 1080px;
  }

  .phrase {
    width: 753px;
    margin-top: 193px;
  }

  .link {
    margin-top: 300px;
    font-size: 23px;
    padding: 13px 30px;
  }
}
</style>
