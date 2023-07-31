<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>
          <span>그린리모델링</span> 샤시교체
          <strong class="d-block d-md-inline">전문 바른샤시</strong>
        </h2>
        <span class="d-inline-block line"></span>
        <p class="sub">
          바른샤시는 시공만 하는 시공 대리점이 아닙니다.<br />
          샤시 제조부터 시공까지 토탈 서비스를 제공 합니다.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection7",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  background: url("../../assets/green-remodeling-7.jpg") center center no-repeat;
  background-size: cover;
  padding: 160px 20px;
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
  line-height: 43px;
  letter-spacing: -1px;
}
.phrase h2 span {
  display: block;
  margin-bottom: 17px;
  font-size: 22px;
  line-height: 25px;
}
.phrase .line {
  margin-top: 52px;
  width: 90px;
  height: 3px;
  background-color: white;
}
.phrase .sub {
  margin-top: 68px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
  opacity: 0.7;
}

@media (min-width: 768px) {
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
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
