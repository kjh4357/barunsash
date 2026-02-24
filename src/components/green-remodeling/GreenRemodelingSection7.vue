<template>
  <section>
    <div class="phrase-wrapper">
      <img src="../../assets/barun_logo.svg" alt="" />
      <div class="phrase">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          <span>바른시공</span> 샤시교체
          <strong class="d-block d-lg-inline">전문 바른샤시</strong>
        </h2>
        <span
          class="d-inline-block line"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1500"
        ></span>
        <p
          class="sub"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          바른샤시는 시공만 하는 시공
          <span class="d-block d-md-inline">대리점이 아닙니다.</span
          ><br class="d-none d-md-block" />
          <span class="d-block d-md-inline"
            >샤시 제조부터 시공까지 토탈 서비스를 </span
          >제공 합니다.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GreenRemodelingSection7',
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  background: url('../../assets/green-remodeling-7.jpg') 0 center no-repeat;
  background-size: cover;
  padding: 100px 20px 105px;
}
img {
  position: absolute;
  right: 20px;
  top: 20px;
  vertical-align: top;
  width: 82px;
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
  line-height: 48px;
  letter-spacing: -1px;
}
.phrase h2 span {
  display: block;
  margin-bottom: 17px;
  font-size: 22px;
  line-height: 25px;
}
.phrase .line {
  margin-top: 30px;
  width: 52px;
  height: 3px;
  background-color: white;
}
.phrase .sub {
  margin-top: 30px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -1px;
  opacity: 0.7;
  word-break: keep-all;
}

@media (min-width: 960px) {
  section {
    background: url('../../assets/green-remodeling-7.jpg') center center
      no-repeat;
    background-size: cover;
    padding: 160px 20px;
  }
  img {
    right: 60px;
    top: 60px;
    width: auto;
  }
  .phrase h2 {
    font-size: 96px;
    line-height: 110px;
  }
  .phrase h2 span {
    font-size: 48px;
    line-height: 100px;
  }
  .phrase .line {
    margin-top: 52px;
    width: 90px;
  }
  .phrase .sub {
    margin-top: 68px;
    font-size: 32px;
    line-height: 48px;
  }
}
@media (max-width: 360px) {
  img {
    width: 82px;
  }
  .phrase .sub {
    margin-top: 30px;

    font-size: 18px;
    line-height: 28px;
  }
}

@media (min-width: 1625px) {
}
</style>
