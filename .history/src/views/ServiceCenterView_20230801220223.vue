<template>
  <section>
    <BarunHeader />
    <div class="section1-2 d-none d-md-block">
      <div class="phrase-wrapper">
        <div class="phrase">
          궁금한 점이 있으신가요?<br />
          바른 샤시는 맞춤 답변을 위해<br />
          1:1 문의하기 서비스를 운영합니다
        </div>
      </div>
    </div>
    <v-container class="section1-3 d-block d-md-none">
      <v-row align="center" class="phrase-wrapper">
        <v-col>
          <div align="center" class="phrase2">
            궁금한 점이 있으신가요?<br />
            바른 샤시는 맞춤 답변을 위해<br />
            1:1 문의하기 서비스를 운영합니다
          </div>
        </v-col>
      </v-row>
    </v-container>

    <ServiceCenterTab2 />

    <BarunFooter />
  </section>
</template>

<script>
import BarunHeader from "@/components/BarunHeader";
import BarunFooter from "@/components/BarunFooter";
import ServiceCenterTab2 from "@/components/service-center/ServiceCenterTab2";

export default {
  name: "ServiceCenterView",
  components: { ServiceCenterTab2, BarunFooter, BarunHeader },
};
</script>

<style scoped>
.section1-1,
.section1-2,
.section1-3 {
  height: 527px;
  background-size: cover;
}

.phrase-wrapper {
  height: 527px;
  display: flex;
  align-items: center;
}

.phrase,
.phrase2 {
  width: 100%;
  color: white;
  text-align: center;
  font-size: 40px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.phrase > span,
.phrase2 > span {
  font-size: 30px;
}

.section1-2 {
  background-image: url("../assets/service-center-1.jpg");
}

.section1-3 {
  background-image: url("../assets/service-center-2.jpg");
}

.tab-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 959px) {
  .tab-menu {
    margin-top: 37px;
  }

  .phrase {
    font-size: 25px;
  }

  .phrase > span {
    font-size: 18px;
  }

  .phrase2 {
    font-size: 21px;
  }

  .tab1,
  .tab2 {
    font-size: 18px;
    padding: 13px 25px;
  }
}

@media (min-width: 768px) {
  .tab-menu {
    margin-top: 57px;
  }
}
</style>
