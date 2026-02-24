<template>
  <section>
    <div class="phrase-wrapper">
      <img class="logo" src="../../assets/barun_logo.png" alt="" />
      <div class="phrase">
        <h2 data-aos="fade-up" data-aos-duration="1500">샤시교체 현장소개</h2>
        <img
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          class="img"
          src="../../assets/barun_section03_01.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GreenRemodelingSection6',
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 116px 20px 100px;
  background: #f0f0f0;
}
img.logo {
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
  color: #343536;
  font-size: 38px;
  line-height: 54px;
  letter-spacing: -1px;
}
.img {
  width: 100%;
  margin-top: 62px;
}
@media (min-width: 960px) {
  section {
    padding: 200px 20px;
  }
  .phrase h2 {
    margin-top: 35px;
    font-size: 64px;
    line-height: 90px;
  }
  img.logo {
    right: 60px;
    top: 60px;
    width: auto;
  }
}

@media (max-width: 370px) {
}

@media (min-width: 1625px) {
}
</style>
