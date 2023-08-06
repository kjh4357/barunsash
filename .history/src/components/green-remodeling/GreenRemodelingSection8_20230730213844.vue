<template>
  <section>
    <div class="wrapper">
      <ul>
        <li>
          <p class="num">1</p>
          <h2>
            전국 대리점 직영 운영 시스템으로 <strong>누구보다 강한 A/S</strong>
          </h2>
          <p class="desc">
            대부분 본사 직영이라고 하는 곳은 제조된 샤시를 가져와 주문 제품에
            맞게 제작하는 곳을 말합니다.<br />
            반면에 바른샤시는 전국 대리점이 직영으로 운영되는 시스템으로<br />
            문의하신 고객님의 인근 대리점에서 빠르게 견적을 빠르게 받아 보실 수
            있습니다.
          </p>
          <ul class="box-list">
            <li>
              <div class="top">
                <img src="../../assets/green-remodeling-as-1.png" alt="" />
              </div>
              <div class="bottom">
                <span>제조</span>
              </div>
            </li>
            <li>
              <div class="top">
                <img src="../../assets/green-remodeling-as-2.png" alt="" />
              </div>
              <div class="bottom">
                <span>제작</span>
              </div>
            </li>
            <li>
              <div class="top">
                <img src="../../assets/green-remodeling-as-3.png" alt="" />
              </div>
              <div class="bottom">
                <span>시공</span>
              </div>
            </li>
            <li>
              <div class="top">
                <img src="../../assets/green-remodeling-as-4.png" alt="" />
              </div>
              <div class="bottom">
                <span>A/S</span>
              </div>
            </li>
          </ul>
          <p class="list-desc">
            제조 - 제작 - 시공 - A/S까지 핫라인으로, 고객만족 최우선 실현
          </p>
        </li>
        <li>
          <p class="num">2</p>
          <h2>제조 생산 단계부터 보장되는 <strong>고품질</strong></h2>
          <p class="desc">
            샤시는 시공도 중요하지만, 제조단계에서 완성도 높은 샤시 제품으로
            출시되는 것, 매우 중요합니다.<br />
            2022년 한국품질만족도 창호 부문 1위로 공식적으로 품질을
            인정받았습니다.<br />
            안전하고 편리한 제품을 위한 노력이 계속됩니다.
          </p>
          <div class="quality-list">
            <ul>
              <li>
                <img src="../../assets/green-remodeling-quality-1.jpg" alt="" />
              </li>
              <li>
                <img src="../../assets/green-remodeling-quality-2.jpg" alt="" />
              </li>
              <li>
                <img src="../../assets/green-remodeling-quality-3.jpg" alt="" />
              </li>
              <li>
                <img src="../../assets/green-remodeling-quality-4.jpg" alt="" />
              </li>
            </ul>
          </div>
        </li>
        <li>
          <p class="num">3</p>
          <h2>샤시선택 , 쉽고 편리하게 <strong>모듈화</strong></h2>
          <p class="desc">
            고객님에게 행복한 환경을 만들어 드리고자, 샤시 제품 선택부터 쉽고
            편리하게 서비스를 받아 볼 수 있도록 표준화하였습니다.<br />
            국토부 그린리모델링 바른샤시시에 대해서 아래처럼 바른 매니저의
            안내를 받아 보세요.
          </p>
        </li>
        <li class="last">
          <h2><small></small></h2>
          <div>
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
                    <img
                      src="../../assets/green-remodeling-module-1.png"
                      alt=""
                    />
                  </div>
                  <div class="desc">
                    <p class="tit"></p>
                    <p class="desc"></p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </li>
      </ul>
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
  name: "GreenRemodelingSection8",

  components: { Swiper, SwiperSlide },
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
  position: relative;
  padding: 200px 20px;
}
img {
  vertical-align: top;
}
ul {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.wrapper {
  text-align: center;
}
.wrapper > ul > li + li {
  margin-top: 200px;
}
.wrapper .num {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 64px;
  line-height: 74px;
  letter-spacing: -1px;
}
.wrapper h2 {
  margin-top: 23px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 64px;
  line-height: 74px;
  letter-spacing: -1px;
}
.wrapper strong {
  color: #3b4b6c;
}
.wrapper .desc {
  margin-top: 40px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1px;
}
.box-list {
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-list li {
  width: 210px;
  margin: 0 6px;
}
.box-list li .top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 167px;
}
.box-list li .bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  height: 67px;
}
.box-list li .bottom span {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -1px;
}
.box-list li .top,
.box-list li .bottom {
  background: #eae4e0;
}
.list-desc {
  margin-top: 42px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -1px;
}
.quality-list {
  margin-top: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quality-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.quality-list li {
  margin: 0 17px 17px;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
