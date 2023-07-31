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
        :autoplay="{
          delay: 0,
        }"
        :loop="true"
        :free-mode="false"
        :slides-per-view="slidesPerView"
        :spaceBetween="30"
        :speed="5000"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <swiper-slide>
          <img src="../../assets/green-remodeling-construction-1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/green-remodeling-construction-2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/green-remodeling-construction-3.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/green-remodeling-construction-4.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/green-remodeling-construction-5.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="area-btn">
      <a
        href="https://blog.naver.com/barunsash"
        target="_blank"
        title="새창 열림"
        >다양한 시공사례 보러가기</a
      >
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
      return "auto";
      // if (matchMedia("screen and (min-width: 1200px)").matches) {
      //   return 5;
      // } else if (matchMedia("screen and (min-width: 787px)").matches) {
      //   return 3;
      // } else {
      //   return 2;
      // }
    },
  },
};
</script>

<style scoped>
section {
  padding: 120px 20px 160px;
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
  font-size: 38px;
  line-height: 45px;
  letter-spacing: -1px;
  word-break: keep-all;
}

.environment-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.environment-list ul {
  margin-top: 37px;
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
.slide-wrapper {
  margin-top: 20px;
}
.slide-wrapper .swiper-slide {
  width: auto !important;
}
.area-btn {
  margin-top: 60px;
  text-align: center;
}
.area-btn a {
  display: inline-block;

  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 36px;
  padding: 40px 45px;
  line-height: 38px;
  background: #3b4b6c;
  text-decoration: none;
}
@media (min-width: 768px) {
  section {
    padding: 185px 20px 220px;
  }
  .phrase h2 {
    font-size: 48px;
    line-height: 52px;
  }
  .environment-list ul {
    margin-top: 92px;
  }
  .environment-list ul li {
    width: calc(25% - 20px);
  }
  .slide-wrapper {
    margin-top: 70px;
  }
  .area-btn {
    margin-top: 90px;
  }
}

@media (min-width: 1625px) {
}
</style>
