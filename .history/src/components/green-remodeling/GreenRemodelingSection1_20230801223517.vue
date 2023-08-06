<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          국토부
          <span class="d-block d-md-inline-block">그린리모델링 사업</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="1500">
          합리적 고품질 샤시 바른샤시,
          <span class="d-block d-md-inline-block"
            >샤시의 기준을 제시합니다.</span
          >
        </p>
        <span
          class="d-inline-block line"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        ></span>
        <div data-aos="fade-up" data-aos-delay="7500" data-aos-duration="1500">
          <img
            class="logo"
            src="../../assets/green-remodeling-section1-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="label">
      <p>그린리모델링 사업자등록 기업 바른샤시</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection1",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  height: 100vh;
  padding-top: 10px;
  background: url("../../assets/green-remodeling-1.jpg") center center no-repeat;
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
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 38px;
  line-height: 52px;
  letter-spacing: -1px;
}
.phrase p {
  margin-top: 16px;
  margin-bottom: 30px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -1px;
}
.phrase .line {
  width: 32px;
  height: 3px;
  background-color: white;
}
.phrase div {
  margin-top: 40px;
}
.logo {
  width: 135px;
}
.label {
  position: absolute;
  bottom: 37px;
  width: 100%;
  text-align: center;
}
.label p {
  display: inline-block;
  margin: 0;
  padding: 7px 8px 6px;
  font-family: NEXONLv1GothicBold, sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: #3b4b6c;
  background: white;
}
@media (min-width: 960px) {
  .phrase h2 {
    font-size: 68px;
    line-height: 70px;
  }
  .phrase p {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 30px;
  }
  .label {
    left: 70px;
    bottom: 66px;
    text-align: left;
  }
  .label p {
    padding: 5px 10px;
    font-size: 24px;
    line-height: 30px;
  }
  .logo {
    width: auto;
  }
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
