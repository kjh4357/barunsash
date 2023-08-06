<template>
  <section>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col align="center">
          <v-img :src="require('../../assets/sash-section-8-title.png')" class="title" data-aos="fade-up"
                 data-aos-duration="1500"/>
          <div class="phase d-none d-md-block" data-aos="fade-up" data-aos-duration="1500">
            샤시는 현장 시공에서 최종 품질이 좌우됩니다.<br>
            바른샤시는 우수한 시공능력을 바탕으로 체계적으로 시공합니다.<br>
            올바른시공원칙 - 올바른시공교육 - 올바른시공평가 - 고객만족A/S
          </div>

          <div class="phase d-block d-md-none" data-aos="fade-up" data-aos-duration="1500">
            품질을 위한, 올바른 시공
          </div>

          <div class="phase2 d-block d-md-none" data-aos="fade-up" data-aos-duration="1500">
            샤시는 현장 시공에서 최종 품질이 좌우됩니다.<br>
            바른샤시는 많은 시공능력을 바탕으로 올바르게<br>
            시공합니다.
          </div>

          <div class="phase3-wrapper d-block d-md-none" data-aos="fade-up" data-aos-duration="1500">
            <div class="phase3-inner-wrapper">
              <div>올바른 시공원칙</div>
              <div class="phase3-2">올바른 시공교육</div>
            </div>
            <div class="phase3-2-inner-wrapper">
              <div>올바른 시공평가</div>
              <div class="phase3-2">고객만족A/S</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SashSection8"
}
</script>

<style scoped>
section {
  width: 100%;
  background: #222a35;
  background-size: cover;
}

.phase, .phase2 {
  color: white;
  font-family: NEXONLv1GothicBold, sans-serif;
}

@media (max-width: 959px) {
  section {
    position: relative;
    padding-top: 118px;
    padding-bottom: 80px;
  }

  .title {
    width: 69%;
  }

  .phase {
    margin-top: 15px;
    font-size: 19px;
  }

  .phase2 {
    margin-top: 282px;
    font-size: 13px;
    padding-left: 35px;
    padding-right: 35px;
    text-align: start;
  }

  .phase3-wrapper {
    margin-top: 19px;
    margin-left: 35px;
    margin-right: 35px;
  }

  .phase3-inner-wrapper, .phase3-2-inner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .phase3-2-inner-wrapper {
    margin-top: 8px;
  }

  .phase3-inner-wrapper > div, .phase3-2-inner-wrapper > div {
    width: 124px;
    color: #222222;
    padding: 5px 0;
    background: white;
    font-size: 13px;
    font-family: Outfit-Regular, sans-serif;
    border: 1px solid #222222;
    border-radius: 37px;
  }

  .phase3-2 {
    margin-left: 8px;
  }
}

@media (min-width: 960px) {
  section {
    height: 1156px;
  }

  .title {
    width: 387px;
  }

  .phase {
    margin-top: 41px;
    font-size: 27px;
  }
}
</style>
