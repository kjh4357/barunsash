<template>
  <section>
    <img class="logo" src="../../assets/barun_logo.svg" alt="" />
    <div class="phrase-wrapper" data-aos="fade-up" data-aos-duration="1500">
      <div class="phrase">
        <h2>행복한 환경이 만들어지는 과정을 살펴볼까요?</h2>
      </div>
    </div>
    <div
      class="environment-list"
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="1500"
    >
      <ul>
        <li>
          <img src="../../assets/green-remodeling-environment-1.jpg" alt="" />
        </li>
        <li>
          <img src="../../assets/green-remodeling-environment-2.jpg" alt="" />
        </li>
        <li>
          <img src="../../assets/green-remodeling-environment-3.jpg" alt="" />
        </li>
        <li>
          <img src="../../assets/green-remodeling-environment-4.jpg" alt="" />
        </li>
      </ul>
    </div>

    <div class="area-btn">
      <a
        href="https://blog.naver.com/barunsash"
        target="_blank"
        title="새창 열림"
        >다양한 시공사례 보러가기</a
      >
    </div>
  </section>
</template>

<script>
// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  name: 'GreenRemodelingSection10',

  computed: {
    slidesPerView: function () {
      return 'auto';
      // if (matchMedia("screen and (min-width: 1200px)").matches) {
      //   return 5;
      // } else if (matchMedia("screen and (min-width: 787px)").matches) {
      //   return 3;
      // } else {
      //   return 2;
      // }
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 120px 20px 160px;
}

img.logo {
  position: absolute;
  right: 20px;
  top: 20px;
  vertical-align: top;
  width: 82px;
}
ul {
  padding-left: 0;
}
ul,
li {
  list-style: none;
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
  line-height: 45px;
  letter-spacing: -1px;
  word-break: keep-all;
}

.environment-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.environment-list ul {
  margin-top: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.environment-list ul li {
  width: calc(50% - 20px);
  margin: 10px 10px;
  flex-shrink: 0;
}
.environment-list ul li img {
  width: 100%;
}
.slide-wrapper {
  margin-top: 20px;
}
.slide-wrapper .swiper-slide {
  width: auto !important;
}
.area-btn {
  margin-top: 60px;
  text-align: center;
}
.area-btn a {
  display: inline-block;

  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 22px;
  padding: 19px 25px;
  line-height: 22px;
  background: #3b4b6c;
  text-decoration: none;
}
@media (min-width: 960px) {
  section {
    padding: 185px 20px 220px;
  }
  img.logo {
    right: 60px;
    top: 60px;
    width: auto;
  }
  .phrase h2 {
    font-size: 48px;
    line-height: 52px;
  }
  .environment-list ul {
    margin-top: 92px;
  }
  .environment-list ul li {
    width: calc(25% - 20px);
  }
  .slide-wrapper {
    margin-top: 70px;
  }
  .area-btn {
    margin-top: 90px;
  }
  .area-btn a {
    font-size: 36px;
    padding: 40px 45px;
    line-height: 38px;
  }
}

@media (min-width: 1625px) {
}
</style>
