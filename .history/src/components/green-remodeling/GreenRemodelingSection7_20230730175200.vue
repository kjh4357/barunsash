<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2><span>그린리모델링</span> 샤시교체 전문 바른샤시</h2>
        <span class="d-inline-block line"></span>
        <p class="sub">오래 된 샤시, 사용하고 계시나요?</p>
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

  padding: 250px 20px;
  background: #162138;
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
  font-size: 96px;
  line-height: 110px;
  letter-spacing: -1px;
}
.phrase h2 span {
  display: block;
  font-size: 48px;
  line-height: 100px;
}
.phrase .sub {
  margin-top: 50px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
}
.phrase .desc {
  margin-top: 20px;
  font-family: NEXONLv1GothicRegular, sans-serif;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1px;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
