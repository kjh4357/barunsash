<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>행복한 환경이 만들어지는 과정을 살펴볼까요?</h2>
      </div>
    </div>
    <div class="environment-list">
      <ul>
        <li>
          <img src="../../assets/green-remodeling-environment-1.jpg" alt="" />
        </li>
        <li>
          <img src="../../assets/green-remodeling-environment-2.jpg" alt="" />
        </li>
        <li>
          <img src="../../assets/green-remodeling-environment-3.jpg" alt="" />
        </li>
        <li>
          <img src="../../assets/green-remodeling-environment-4.jpg" alt="" />
        </li>
      </ul>
    </div>
    <div class="slide-wrapper">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :loop="true"
        :resistance="false"
        :space-between="10"
        :speed="5000"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <swiper-slide style="width: auto">
          <div class="slide-box">
            <img
              src="../../assets/green-remodeling-construction-1.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide style="width: auto">
          <div class="slide-box">
            <img
              src="../../assets/green-remodeling-construction-2.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide style="width: auto">
          <div class="slide-box">
            <img
              src="../../assets/green-remodeling-construction-3.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide style="width: auto">
          <div class="slide-box">
            <img
              src="../../assets/green-remodeling-construction-4.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide style="width: auto">
          <div class="slide-box">
            <img
              src="../../assets/green-remodeling-construction-5.jpg"
              alt=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperCore, SwiperSlide } from "swiper-vue2";
// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  name: "GreenRemodelingSection10",
  components: { Swiper, SwiperSlide },
  computed: {
    slidesPerView: function () {
      if (matchMedia("screen and (min-width: 1200px)").matches) {
        return 5;
      } else if (matchMedia("screen and (min-width: 787px)").matches) {
        return 3;
      } else {
        return 2;
      }
    },
  },
};
</script>

<style scoped>
section {
  padding: 185px 20px 220px;
}
img {
  vertical-align: top;
}
ul {
  padding-left: 0;
}
ul,
li {
  list-style: none;
}
.phrase-wrapper {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.phrase {
  text-align: center;
  line-height: 1;
}
.phrase h2 {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 48px;
  line-height: 52px;
  letter-spacing: -1px;
  word-break: keep-all;
}

.environment-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.environment-list ul {
  margin-top: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.environment-list ul li {
  width: calc(50% - 20px);
  margin: 10px 10px;
  flex-shrink: 0;
}
.environment-list ul li img {
  width: 100%;
}
@media (min-width: 1264px) {
  .environment-list ul li {
    width: calc(25% - 20px);
  }
}

@media (min-width: 1625px) {
}
</style>
