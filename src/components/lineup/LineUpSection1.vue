<template>
  <section>
    <v-container class="d-none d-md-flex line-up-desktop" fluid>
      <v-row align="center" justify="center">
        <v-col align="center" cols="auto">
          <div class="item-desktop" data-aos="fade-left" data-aos-duration="1500">
            <v-img :src="require('../../assets/line-up-section-1-item-1.png')"/>
          </div>
          <div class="item-desktop" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1500">
            <v-img :src="require('../../assets/line-up-section-1-item-2.png')"/>
          </div>
          <div class="item-desktop" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1500">
            <v-img :src="require('../../assets/line-up-section-1-item-3.png')"/>
          </div>
        </v-col>
      </v-row>
      <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
        <router-link class="link" to="/catalog-client">BARUN LINE UP</router-link>
      </div>
    </v-container>
    <div class="d-block d-md-none">
      <div class="section-title">바른 라인업</div>
      <Swiper
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
          }"
          :centeredSelides="false"
          :loop="true"
          :resistance="false"
          :slides-per-view="1"
          :space-between="20"
          :speed="3000"
          class="item-wrapper"
      >

        <SwiperSlide>
          <v-img :src="require('../../assets/line-up-section-1-item-1-mobile.jpg')" class="item"/>
        </SwiperSlide>

        <SwiperSlide>
          <v-img :src="require('../../assets/line-up-section-1-item-2-mobile.jpg')" class="item"/>
        </SwiperSlide>

        <SwiperSlide>
          <v-img :src="require('../../assets/line-up-section-1-item-3-mobile.jpg')" class="item"/>
        </SwiperSlide>

      </Swiper>
      <div class="desc">바른 샤시는 샤시 전문 브랜드로써<br>공간마다 최적화된 제품을 제공합니다.</div>
      <div class="link-mobile-wrapper" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
        <router-link class="link-mobile" to="/catalog-client">BARUN LINE UP</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperCore, SwiperSlide} from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  name: "LineUpSection1",
  components: {Swiper, SwiperSlide},
}
</script>

<style scoped>
section {
  width: 100%;
}

.line-up-desktop {
  width: 100%;
  padding-top: 150px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.item-desktop {
  display: inline-block;
  margin-left: 6px;
  margin-right: 6px;
}

.link {
  margin-top: 68px;
  margin-bottom: 68px;
  color: white;
  font-family: Outfit-Regular, sans-serif;
  background: transparent;
  display: inline-block;
  border-radius: 37px;
  border: 2px solid;
}

.link-mobile-wrapper {
  text-align: center;
}

.link-mobile {
  color: #222222;
  font-family: Outfit-Regular, sans-serif;
  display: inline-block;
  border-radius: 37px;
  border: 2px solid;
}

a {
  text-decoration: none;
}

@media (max-width: 959px) {
  section {
    position: relative;
    padding: 10vh 0;
  }

  .section-title {
    color: #3B4B6C;
    margin-top: 11px;
    margin-bottom: 35px;
    text-align: center;
    font-size: 48px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .item-wrapper {
    padding: 0 50px;
  }

  .desc {
    margin-top: 45px;
    font-size: 16px;
    text-align: center;
    color: #3B4B6C;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .link-mobile {
    margin-top: 80px;
    font-size: 12px;
    padding: 6px 15px;
  }
}

@media (min-width: 960px) {
  section {
    background-image: url("../../assets/line-up-section-1.png");
    background-size: cover;
  }

  .item-desktop {
    max-width: 296px;
  }

  .link {
    font-size: 23px;
    padding: 8px 33px;
  }
}

@media (min-width: 1264px) {
  .item-desktop {
    max-width: 400px;
  }
}

@media (min-width: 1625px) {
  .item-desktop {
    max-width: 525px;
  }
}
</style>
