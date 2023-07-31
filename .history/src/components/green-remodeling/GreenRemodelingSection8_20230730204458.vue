<template>
  <section>
    <div class="wrapper">
      <ul>
        <li>
          <p class="num"></p>
          <h2></h2>
          <p class="desc"></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection8",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 160px 20px;
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
  font-size: 96px;
  line-height: 110px;
  letter-spacing: -1px;
}
.phrase h2 span {
  display: block;
  font-size: 48px;
  line-height: 100px;
}
.phrase .line {
  margin-top: 52px;
  width: 90px;
  height: 3px;
  background-color: white;
}
.phrase .sub {
  margin-top: 68px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
  opacity: 0.7;
}

@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
