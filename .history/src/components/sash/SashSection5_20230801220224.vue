<template>
  <section>
    <p class="phrase-title" data-aos="fade-up" data-aos-duration="1000">
      바른인증
    </p>
    <p
      class="phrase d-none d-md-block"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <span>KS 인증, 에너지 소비 효율 1등급</span><br />
      단열성, 기밀성, 수밀성, 방음성, 내품압성, 결로방지성, 침입방지
    </p>
    <p
      class="phrase d-block d-md-none"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      안전한 샤시를 위한 노력
    </p>
    <div class="marquee">
      <Swiper
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :freeMode="false"
        :loop="true"
        :resistance="false"
        :slides-per-view="slidesPerView"
        :space-between="10"
        :speed="5000"
        class="certification-wrapper"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-1"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-1.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-1.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-2"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-2.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-2.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <div>
            <vue-flip
              active-click
              class="certification"
              height="293px"
              width="195px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-3.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-3.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
            <vue-flip
              active-click
              class="certification certification-3"
              height="293px"
              width="195px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-4.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-4.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
          </div>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-1"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-5.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-5.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-2"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-6.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-6.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-1"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-7.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-7.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-2"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-8.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-8.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <div>
            <vue-flip
              active-click
              class="certification"
              height="293px"
              width="195px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-9.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-9.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
            <vue-flip
              active-click
              class="certification certification-3"
              height="293px"
              width="195px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-10.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-10.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
          </div>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-1"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-11.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-11.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-2"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-13.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-13.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-1"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-15.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-15.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <vue-flip
            active-click
            class="certification certification-2"
            height="293px"
            width="195px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-16.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-16.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-none d-md-block">
          <div>
            <vue-flip
              active-click
              class="certification"
              height="293px"
              width="195px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-17.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-17.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
            <vue-flip
              active-click
              class="certification certification-3"
              height="293px"
              width="195px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-18.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-18.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
          </div>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-1"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-1.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-1.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-2"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-2.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-2.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <div>
            <vue-flip
              active-click
              class="certification"
              height="225px"
              width="150px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-3.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-3.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
            <vue-flip
              active-click
              class="certification certification-3"
              height="225px"
              width="150px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-4.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-4.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
          </div>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-1"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-5.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-5.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-2"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-6.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-6.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-1"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-7.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-7.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-2"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-8.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-8.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <div>
            <vue-flip
              active-click
              class="certification"
              height="225px"
              width="150px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-9.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-9.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
            <vue-flip
              active-click
              class="certification certification-3"
              height="225px"
              width="150px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-10.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-10.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
          </div>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-1"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-11.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-11.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-2"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-13.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-13.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-1"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-15.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-15.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <vue-flip
            active-click
            class="certification certification-2"
            height="225px"
            width="150px"
          >
            <template v-slot:front>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-front-16.png')
                "
                class="slide-img"
              />
            </template>
            <template v-slot:back>
              <v-img
                :src="
                  require('../../assets/sash-section-5-certification-back-16.png')
                "
                class="slide-img"
              />
            </template>
          </vue-flip>
        </SwiperSlide>
        <SwiperSlide class="inner-wrapper d-block d-md-none">
          <div>
            <vue-flip
              active-click
              class="certification"
              height="225px"
              width="150px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-17.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-17.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
            <vue-flip
              active-click
              class="certification certification-3"
              height="225px"
              width="150px"
            >
              <template v-slot:front>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-front-18.png')
                  "
                  class="slide-img"
                />
              </template>
              <template v-slot:back>
                <v-img
                  :src="
                    require('../../assets/sash-section-5-certification-back-18.png')
                  "
                  class="slide-img"
                />
              </template>
            </vue-flip>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <p
      class="phrase2 d-block d-md-none"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <span>KS 인증, 에너지 소비 효율 1등급</span><br />
      단열성, 기밀성, 수밀성, 방음성, 내품압성, 결로방지성, 침입방지
    </p>

    <p
      class="phrase3 d-block d-md-none"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      * 제품마다 인증 내용은 상이합니다
    </p>
  </section>
</template>

<script>
import VueFlip from "vue-flip";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperCore, SwiperSlide } from "swiper-vue2";
// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  name: "SashSection5",
  components: { "vue-flip": VueFlip, Swiper, SwiperSlide },
  computed: {
    slidesPerView: function () {
      if (matchMedia("screen and (min-width: 768px)").matches) {
        return 6;
      } else {
        return 2;
      }
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  background: #eeeeee;
}

.phrase-title {
  color: #3b4b6c;
  text-align: center;
  font-size: 83px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.phrase {
  color: black;
  text-align: center;
  font-size: 21px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.phrase > span {
  font-size: 40px;
}

.marquee {
  width: 100%;
  margin-top: 50px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.certification-wrapper {
  display: flex;
}

.inner-wrapper {
  display: inline-flex;
}

.certification-1 {
  margin-top: 100px;
}

.certification-2 {
  margin-top: 200px;
}

.certification-3 {
  margin-top: 50px;
}

.slide-img {
  border-radius: 10px;
}

.swiper-wrapper {
  transition-timing-function: linear;
}

@media (max-width: 959px) {
  section {
    position: relative;
    padding-top: 62px;
    padding-bottom: 82px;
  }

  .phrase-title {
    font-size: 65px;
  }

  .phrase {
    margin-top: 10px;
    font-size: 19px;
  }

  .phrase2 {
    margin-top: 49px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 13px;
    text-align: center;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .phrase2 > span {
    font-size: 24px;
  }

  .phrase3 {
    margin-top: 20px;
    font-size: 10px;
    text-align: end;
    padding-left: 25px;
    padding-right: 25px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .marquee {
    padding: 0 15px;
  }

  .slide-img {
    width: 150px;
    height: 225px;
  }
}

@media (min-width: 768px) {
  section {
    height: 1156px;
  }

  .phrase-title {
    padding-top: 115px;
  }

  .phrase {
    margin-top: 36px;
  }
}
</style>
