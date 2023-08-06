<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>
          <span class="d-block d-lg-inline-block"
            ><em>그린리모델링사업</em>은</span
          >
          무엇인가요?
        </h2>
        <p>
          노후된 기존 건축물의
          <span class="d-block d-lg-inline-block"
            >에너지 성능 향상과 효율 개선을</span
          >
          위해 지원하는 정부 정책사업
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection3",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  background: url("../../assets/green-remodeling-3.jpg") center center no-repeat;
  background-size: cover;
  padding: 138px 20px 128px;
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
  color: #343536;
  font-size: 38px;
  line-height: 52px;
  letter-spacing: -1px;
}
.phrase h2 em {
  color: #3b4b6c;
  text-decoration: underline;
  font-style: normal;
}
.phrase p {
  margin-top: 31px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #3b4b6c;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -1px;
  word-break: keep-all;
}
@media (min-width: 960px) {
  section {
    background: url("../../assets/green-remodeling-3.jpg") center center
      no-repeat;
    background-size: cover;
    padding: 260px 20px;
  }
  .phrase h2 {
    font-size: 64px;
    line-height: 74px;
  }
  .phrase p {
    font-size: 32px;
    line-height: 40px;
  }
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
