<template>
  <section>
    <div class="wrap">
      <div>
        <div class="phrase-1" data-aos="fade-up" data-aos-duration="1500">
          왜
        </div>
        <div class="phrase d-none d-md-block" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
          스마트한 사람들<span>은</span>
        </div>
        <div class="phrase d-block d-md-none" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
          스마트한
        </div>
        <div class="phrase d-block d-md-none" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
          사람들<span>은</span>
        </div>
        <div class="phrase" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
          바른샤시<span>를</span>
        </div>
        <div class="phrase phrase-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
          선택<span>할까요?</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SashSection1"
}
</script>

<style scoped>
section {
  width: 100%;
  background-image: url("../../assets/sash-section-1.png");
  background-size: cover;
}

.wrap {
  display: flex;
  justify-content: flex-end;
}

.phrase-1 span, .phrase span {
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.phrase, .phrase-1 {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  text-align: right;
}

@media (max-width: 959px) {
  section {
    height: 100vh;
  }

  .phrase, .phrase-1 {
    font-size: 50px;
  }

  .wrap {
    margin: 0 37px;
    height: 100vh;
    flex-direction: column;
    flex: 1;
  }

  .phrase-1 {
    margin-top: auto;
  }

  .phrase-2 {
    margin-bottom: 22vh;
  }
}

@media (min-width: 960px) {
  section {
    height: 1156px;
  }

  .phrase, .phrase-1 {
    font-size: 100px;
    margin-right: 102px;
  }

  .phrase {
    margin-top: -15px;
  }

  .phrase-1 {
    padding-top: 550px;
  }
}
</style>
