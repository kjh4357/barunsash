<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          <strong class="d-md-block d-lg-inline">그린모델링 샤시,</strong> 어떤
          <em>혜택</em>이 있나요?
        </h2>
        <p
          class="sub"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1500"
        >
          노후된 아파트나 주택의 낡은 샷시를 고효율 단열 샤시로 변경
        </p>
        <div
          class="img"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <img
            class="d-md-none"
            src="../../assets/m-green-remodeling-section4-chart.jpg"
            alt=""
          />
          <img
            class="d-none d-md-inline-block"
            src="../../assets/green-remodeling-section4-chart.jpg"
            alt=""
          />
        </div>
        <p
          class="desc"
          data-aos="fade-up"
          data-aos-delay="750"
          data-aos-duration="1500"
        >
          <span class="d-block d-md-inline-block"
            >샤시교체시총 견적이 산출되면, 집 명의자의 신용으로
            <strong>은행</strong></span
          >
          <strong>대출</strong>을 실행하게 되는데요.<br
            class="d-none d-md-block"
          />
          대출의 조건으로
          <strong>60개월</strong>
          <span class="d-block d-md-inline"
            ><strong> 할부 가능 및 4%까지 이자를 지원해 주게 되는 제도</strong
            >입니다.</span
          ><br class="d-none d-md-block" />
          <span class="d-block d-md-inline"
            >60개월 전 상환하셔도
            <strong>중도상환수수료가 없습니다.</strong> 이렇게 교체된</span
          >
          <span class="d-block d-md-inline"
            >샤시는 <strong>15년 이상</strong> 사용하실 수 있습니다.<br
              class="d-none d-md-block"
            />
            이렇게 하면 <strong>겨울철 난방비</strong></span
          >
          <strong>여름철 전기세를 확 낮출 수 있습니다.</strong>
          또한,
          <strong
            >탄소 배출을 줄여 지구의 온난화를 막을 수 있는 일석삼조의
            효과</strong
          >를 가져오게 됩니다.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection4",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 114px 20px 121px;
  background: white;
}
.img {
  padding: 0 16px;
}
img {
  max-width: 100%;
  width: 300px;
  vertical-align: top;
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
  line-height: 52px;
  letter-spacing: -1px;
}
.phrase strong {
  color: #3b4b6c;
}
.phrase h2 em {
  color: #3b4b6c;
  text-decoration: underline;
  font-style: normal;
}
.phrase .sub {
  margin-top: 25px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #3b4b6c;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -1px;
}
.phrase .img {
  margin: 68px 0 46px;
}
.phrase .desc {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -1px;
  word-break: keep-all;
}
@media (min-width: 960px) {
  section {
    padding: 250px 20px;
  }
  .phrase h2 {
    font-size: 64px;
    line-height: 74px;
  }
  img {
    width: auto;
  }
  .phrase .sub {
    font-size: 32px;
    line-height: 40px;
  }
  .phrase .desc {
    font-size: 19px;
    line-height: 27px;
  }
  .phrase .img {
    margin: 64px 0;
  }
}

@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
