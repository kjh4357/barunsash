<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>행복한 환경이 만들어지는 과정을 살펴볼까요?</h2>
      </div>
    </div>
    <div class="environment-list">
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
  padding: 200px 20px;
}
img {
  vertical-align: top;
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
  font-size: 48px;
  line-height: 52px;
  letter-spacing: -1px;
}

.environment-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.environment-list ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.environment-list ul li {
  width: 25%;
}
.environment-list ul li img {
  width: 100%;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
