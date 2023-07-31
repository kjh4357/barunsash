<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <p class="sub-tit">그린리모델링</p>
        <h2>바른샤시 <span class="d-block d-md-inline">대표제품 특징</span></h2>
        <div class="img">
          <img
            class="d-md-none"
            src="../../assets/m-green-remodeling-9.png"
            alt=""
          />
          <img
            class="d-none d-md-block"
            src="../../assets/green-remodeling-9.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <ul>
      <li>
        <div class="img">
          <img src="../../assets/green-remodeling-9-icon-1.png" alt="" />
        </div>
        <div class="desc">
          <p>난방비를 절감해주는</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="../../assets/green-remodeling-9-icon-2.png" alt="" />
        </div>
        <div class="desc">
          <p>부드럽게 열고 닫아요</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="../../assets/green-remodeling-9-icon-3.png" alt="" />
        </div>
        <div class="desc">
          <p>안심설계로 안전하게</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="../../assets/green-remodeling-9-icon-4.png" alt="" />
        </div>
        <div class="desc">
          <p>강한 바람과 폭우에도 괜찮아요</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection9",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 61px 20px 57px;
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
  font-size: 38px;
  line-height: 48px;
  letter-spacing: -1px;
}
.phrase p {
  margin-top: 0;
  margin-bottom: 17px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: -1px;
}
.phrase .img {
  margin-top: 66px;
  padding: 0 20px;
}
.phrase .img img {
  width: 100%;
}

ul {
  display: flex;
  margin: 42px 0 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
}
ul,
li {
  list-style: none;
}
li {
  position: relative;
  display: flex;
  width: calc(50% - 14px);
  height: auto;
  margin: 7px 7px;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;
  background: #3b4b6c;
}
li .img {
  display: flex;
  padding-top: 20px;
  padding-bottom: 60px;
  align-items: center;
  justify-content: center;
}
li .desc {
  position: absolute;
  bottom: 0;
}
li .desc p {
  margin-bottom: 0;
  padding: 3vw 5px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 3vw;
  line-height: 20px;
  word-break: keep-all;
}
@media (min-width: 768px) {
  section {
    padding: 180px 20px 145px;
  }
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
  .phrase .img {
    margin-top: 118px;
  }
  ul {
    margin: 117px 0 0;
  }
  li {
    width: 280px;
    height: 250px;
    margin: 7px 7px;
  }
  li .img {
    height: 200px;
  }
  li .desc p {
    font-size: 18px;
    line-height: 20px;
  }
}

@media (min-width: 1625px) {
}
</style>
