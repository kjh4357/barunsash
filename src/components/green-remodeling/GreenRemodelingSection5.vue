<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <p class="sub" data-aos="fade-up" data-aos-duration="1500">
          <strong
            >그린리모델링 샤시 교체 비용<span class="d-block d-md-inline"
              >(월 납부금액)</span
            ></strong
          >
          <br class="d-none d-md-block" />VS<br class="d-none d-md-block" />
          <span class="d-block d-md-inline"
            >겨울철 난방비 및 여름철 냉방비</span
          >
          <span class="d-block d-md-inline">비교해 본다면,</span>
        </p>

        <h2 data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
          하루빨리
          <span class="d-block d-lg-inline"
            ><em>낡은 샤시를 교체</em>하는 것을
          </span>
          <span class="d-block d-lg-inline">선택하실 거예요</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection5",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 90px 20px 111px;
  background: url("../../assets/green-remodeling-5.jpg") center center no-repeat;
  background-size: cover;
}
img {
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
  margin-top: 40px;
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
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -1px;
}

@media (min-width: 960px) {
  section {
    padding: 202px 20px;
    background: url("../../assets/green-remodeling-5.jpg") center center
      no-repeat;
    background-size: cover;
  }
  .phrase h2 {
    margin-top: 35px;
    font-size: 64px;
    line-height: 90px;
  }
  .phrase .sub {
    font-size: 38px;
    line-height: 52px;
  }
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
