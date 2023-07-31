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
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-1.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">01 상담 신청</p>
              <p class="txt">
                홈페이지나 유선상담을 신청해주세요 1분이면 상담신청이
                완료됩니다.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-2.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">02 대면상담</p>
              <p class="txt">
                현장 확인 및 실측을 진행하여 고객님이 원하시는 공간, 유지 보수의
                최적의 시공을 진행하기 위한 상세한 상담을 진행합니다.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-3.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">03 견적안내</p>
              <p class="txt">대면상담 내용을 바탕으로 견적상담해드립니다.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-4.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">04 예약</p>
              <p class="txt">
                원하시는 시공일정에 공사가 진행될 수 있도록 현장일정을
                예약합니다.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-5.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">05 계약</p>
              <p class="txt">
                상담 내용을 바탕으로 시공 자재 및 일정을 최종 확인하는 계약서
                작성 및 계약금 지급을 진행합니다.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-6.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">06 제작</p>
              <p class="txt">고객님의 집에 맞춤으로 자체생산이 시작됩니다.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-7.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">07 시공</p>
              <p class="txt">
                고객님의 집에 맞춤으로 정교한 전문가의 시공이 진행됩니다.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-8.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">08 완성</p>
              <p class="txt">고객님의 HAPPY HOME 완성입니다.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="width: 260px">
          <div class="slide-box">
            <div class="img">
              <img src="../../assets/green-remodeling-module-9.png" alt="" />
            </div>
            <div class="desc">
              <p class="tit">09 고객만족도 조사</p>
              <p class="txt">
                좋은 서비스를 제공하기 위해 고객님의 소리에 마지막까지 귀를
                기울입니다.
              </p>
            </div>
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
        return 6;
      } else if (matchMedia("screen and (min-width: 787px)").matches) {
        return 4;
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
