<template>
  <section>
    <h2>간편 상담 신청</h2>
    <div class="form">
      <div>
        <p>메세지: {{ message }}</p>
        <input v-model="message" placeholder="메세지 입력하기" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection11",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;

  padding: 200px 20px 232px;
  background-image: url("../../assets/green-remodeling-11.jpg");
  background-size: cover;
}
img {
  vertical-align: top;
}

h2 {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 70px;
  line-height: 72px;
  letter-spacing: -1px;
  word-break: keep-all;
  text-align: center;
}
.form {
  background: white;
  max-width: 1000px;
  margin: 50px auto 0;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
