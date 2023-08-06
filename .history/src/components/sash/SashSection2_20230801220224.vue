<template>
  <section>
    <div
      class="d-block d-md-none phrase"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      01<br />
      단순한 창호가 아닌,<br />
      <span>
        행복한 환경을 만들어 주는<br />
        창호를 만듭니다.
      </span>
    </div>
    <div
      class="d-none d-md-block phrase"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      01<br />
      단순한 창호가 아닌,<br />
      <span> 행복한 환경을 만들어 주는 창호를 만듭니다. </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "SashSection2",
};
</script>

<style scoped>
section {
  width: 100%;
  background-size: cover;
}

.phrase {
  color: white;
  font-size: 50px;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.phrase > span {
  font-family: NEXONLv1GothicBold, sans-serif;
}

@media (max-width: 959px) {
  section {
    background-image: url("../../assets/sash-section-2-mobile.png");
  }

  .phrase {
    font-size: 25px;
    padding: 70vh 8% 10vh;
  }
}

@media (min-width: 768px) {
  section {
    height: 1156px;
    background-image: url("../../assets/sash-section-2.png");
  }

  .phrase {
    padding-top: 491px;
    text-align: center;
  }
}
</style>
