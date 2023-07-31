<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>행복한 환경이 만들어지는 과정을 살펴볼까요?</h2>
        <div>
          <img class="logo" src="../../assets/green-remodeling-9.png" alt="" />
        </div>
      </div>
    </div>
    <ul>
      <li>
        <div class="img"><img src="" alt="" /></div>
        <div class="desc"></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection10",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  height: 100vh;
  padding-top: 10px;
  background-image: url("../../assets/green-remodeling-1.jpg");
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
  font-size: 68px;
  line-height: 70px;
  letter-spacing: -1px;
}
.phrase p {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 24px;
  line-height: 30px;
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
.label {
  position: absolute;
  left: 70px;
  bottom: 66px;
  margin: 0;
  padding: 5px 10px;
  font-family: NEXONLv1GothicBold, sans-serif;
  font-size: 24px;
  line-height: 30px;
  color: #3b4b6c;
  background: white;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
