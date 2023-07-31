<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>낡은 집도 새집처럼!</h2>
        <p class="sub">오래 된 샤시, 사용하고 계시나요?</p>
        <p class="desc">
          겨울이면 찬바람이 그대로 느껴지고, 여름에도 냉방기를 틀어도 온도
          유지가 잘 안되고<br />
          비가 오는 날이면, 베란다 틀에 물도 고이고, 많이 불편하셨죠?<br />
          샤시를 바꾸면, 정말 삶의 질이 높아지는데, 아무래도 비용 때문에 고민
          많으셨죠?
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection2",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  background: url("../../assets/green-remodeling-2.jpg") center center no-repeat;
  background-size: cover;
  padding: 250px 20px;
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
@media (min-width: 768px) {
  .phrase h2 {
    font-size: 96px;
    line-height: 110px;
  }
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
