<template>
  <section>
    <v-container class="wrap d-none d-md-block" fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" class="phrase-wrap">
            <v-col class="phrase" data-aos="fade-up">
              <p class="phrase-title">REASONABLE</p>
              <p>
                바른샤시는 거품을 빼고<br>
                합리적인 가격으로<br>
                견고하고 완성도 있는 제품을 제공합니다.
              </p>
            </v-col>
            <v-col align="right" cols="8">
              <horizontal-scroll class="item-wrapper">
                <v-card class="item" data-aos="fade-left" data-aos-duration="1000">
                  <v-img :src="require('../../assets/main-section-2-item-1.png')" class="card-image"/>
                  <div class="card-title">
                    #내창
                  </div>
                  <div class="card-desc">
                    주거용 빌라, 아파트 등<br>
                    내부 단열을 위한 창으로<br>
                    교체가 용이한 제품
                  </div>
                </v-card>

                <v-card class="item2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                  <v-img :src="require('../../assets/main-section-2-item-2.png')" class="card-image"/>
                  <div class="card-title">
                    #시스템창
                  </div>
                  <div class="card-desc">
                    고급 아파트, 주상복합, 오피스텔, 호텔 등<br>
                    내외관 전경을<br>
                    중요시한 고급 제품
                  </div>
                </v-card>

                <v-card class="item" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                  <v-img :src="require('../../assets/main-section-2-item-3.png')" class="card-image"/>
                  <div class="card-title">
                    #발코니창
                  </div>
                  <div class="card-desc">
                    고층 아파트, 빌라 등<br>
                    외부 단열을 위한 발코니에<br>
                    최적화된 전용제품
                  </div>
                </v-card>
              </horizontal-scroll>
            </v-col>
          </v-row>
        </v-col>
        <v-col align="right" class="desc" cols="12">
          *해당 홈페이지에 있는 이미지는 이해를 돕기 위한 연출 이미지 입니다.
        </v-col>
      </v-row>
    </v-container>
    <div class="wrap d-block d-md-none">
      <div class="phrase" data-aos="fade-up">
        <p class="phrase-title">REASONABLE</p>
        <p>
          바른샤시는 거품을 빼고<br>
          합리적인 가격으로<br>
          견고하고 완성도 있는 제품을 제공합니다.
        </p>
      </div>
      <swiper
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :freeMode="false"
          :loop="true"
          :slides-per-view="1"
          :space-between="20"
          :speed="1500"
          class="item-wrapper"
      >
        <swiper-slide>
          <v-card class="item">
            <v-img :src="require('../../assets/main-section-2-item-1.png')" class="card-image"/>
            <div class="card-title">
              #내창
            </div>
            <div class="card-desc">
              주거용 빌라, 아파트 등<br>
              내부 단열을 위한 창으로<br>
              교체가 용이한 제품
            </div>
          </v-card>
        </swiper-slide>
        <swiper-slide>
          <v-card class="item">
            <v-img :src="require('../../assets/main-section-2-item-2.png')" class="card-image"/>
            <div class="card-title">
              #시스템창
            </div>
            <div class="card-desc">
              고급 아파트, 주상복합, 오피스텔, 호텔 등<br>
              내외관 전경을<br>
              중요시한 고급 제품
            </div>
          </v-card>
        </swiper-slide>
        <swiper-slide>
          <v-card class="item">
            <v-img :src="require('../../assets/main-section-2-item-3.png')" class="card-image"/>
            <div class="card-title">
              #발코니창
            </div>
            <div class="card-desc">
              고층 아파트, 빌라 등<br>
              외부 단열을 위한 발코니에<br>
              최적화된 전용제품
            </div>
          </v-card>
        </swiper-slide>
      </swiper>
      <div class="desc">
        *해당 홈페이지에 있는 이미지는 이해를 돕기 위한 연출 이미지 입니다.
      </div>
    </div>
  </section>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

import {Autoplay, Navigation, Pagination} from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  name: "MainSection2",
  components: {HorizontalScroll, Swiper, SwiperSlide}
}
</script>

<style scoped>
.wrap {
  width: 100%;
  background: #D9D9DA;
  background-size: cover;
}

.item-wrapper::-webkit-scrollbar {
  display: none;
}

.item-wrapper {
  display: flex;
}

.card-image {
  width: 100%;
}

@media (max-width: 959px) {
  .wrap {
    padding-bottom: 35px;
  }

  .phrase {
    color: #222222;
    font-size: 15px;
    font-family: NEXONLv1GothicRegular, sans-serif;
    padding-top: 77px;
    margin-left: 13%;
    margin-right: 13%;
  }

  .phrase-title {
    font-size: 27px;
    font-family: Outfit-Medium, sans-serif;
  }

  .item-wrapper {
    padding: 0 50px;
    margin-top: 50px;
  }

  .item {
    padding-bottom: 45px;
  }

  .card-title {
    font-size: 30px;
    margin-top: 55px;
    margin-left: 35px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .card-desc {
    font-size: 11px;
    margin-top: 23px;
    margin-left: 35px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .desc {
    margin-top: 37px;
    text-align: center;
    font-size: 9px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }
}

@media (min-width: 960px) {
  .wrap {
    height: 1080px
  }

  .phrase {
    color: #222222;
    font-size: 23px;
    font-family: NEXONLv1GothicRegular, sans-serif;
    margin-top: 662px;
    margin-left: 40px;
  }

  .phrase-title {
    font-size: 40px;
    font-family: Outfit-Regular, sans-serif;
  }

  .phrase-wrap {
    height: 1005px;
  }

  .desc {
    padding-right: 100px;
    font-size: 14px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .item {
    width: 31%;
  }

  .item2 {
    width: 31%;
    margin-left: 30px;
    margin-right: 30px;
  }

  .card-title {
    font-size: 25px;
    margin-top: 26px;
    margin-left: 34px;
    margin-right: 34px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .card-desc {
    font-size: 15px;
    margin: 52px 34px 38px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }
}

@media (min-width: 1391px) {
  .phrase {
    margin-left: 120px;
  }
}
</style>
