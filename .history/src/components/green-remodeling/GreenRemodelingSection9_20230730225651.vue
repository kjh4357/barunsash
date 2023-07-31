<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <p class="sub-tit">그린리모델링</p>
        <h2>바른샤시 대표제품 특징</h2>
        <div class="img">
          <img src="../../assets/green-remodeling-9.png" alt="" />
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
  padding: 180px 20px 145px;
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
.phrase .img {
  margin-top: 118px;
}
.phrase .img img {
  width: 100%;
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
ul {
  display: flex;
  margin: 117px 0 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
}
ul,
li {
  list-style: none;
}
li {
  display: flex;
  width: 280px;
  height: 250px;
  margin: 0 7px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #3b4b6c;
}
li .img {
  display: flex;
  height: 170px;
  align-items: center;
  justify-content: center;
}
li .desc p {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 18px;
  line-height: 20px;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
