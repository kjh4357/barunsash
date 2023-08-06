<template>
  <section>
    <v-container class="wrap d-none d-md-block" fluid>
      <v-row class="phrase-wrap">
        <v-col class="phrase" cols="auto" data-aos="fade-right">
          <p class="phrase-title">AESTHETIC</p>
          <p>
            바른샤시는 견고한 제품으로<br />
            일상의 편안함을<br />
            아름답게 연출 합니다.
          </p>
        </v-col>
        <v-col align="right" class="item-wrapper">
          <v-img
            :src="require('../../assets/main-section-6-item-1.png')"
            class="item"
            data-aos="fade-down"
            data-aos-duration="1500"
          />
        </v-col>
        <v-col align="center" class="item-wrapper">
          <v-img
            :src="require('../../assets/main-section-6-item-2.png')"
            class="item item2"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </v-col>
      </v-row>
    </v-container>
    <div class="wrap d-md-none">
      <div class="phrase" data-aos="fade-right">
        <p class="phrase-title">AESTHETIC</p>
        <p>
          바른샤시는 견고한 제품으로<br />
          일상의 편안함을<br />
          아름답게 연출 합니다.
        </p>
      </div>
      <div class="item-wrapper">
        <v-img
          :src="require('../../assets/main-section-6-item-1-mobile.png')"
          class="item item1"
        />
        <v-img
          :src="require('../../assets/main-section-6-item-2-mobile.png')"
          class="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSection6",
};
</script>

<style scoped>
.wrap {
  position: relative;
  width: 100%;
  background: #222a35;
  background-size: cover;
}

.phrase {
  color: white;
  font-size: 23px;
  font-family: NEXONLv1GothicRegular, sans-serif;
  padding: 0;
}

.phrase-title {
  font-size: 40px;
  font-family: Outfit-Regular, sans-serif;
}

@media (max-width: 959px) {
  .item-wrapper {
    padding: 0 70px 70px;
    display: flex;
    margin-top: 45px;
    overflow-x: auto;
  }

  .item-wrapper::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 453px;
  }

  .item1 {
    margin-right: 30px;
  }

  .phrase {
    color: white;
    margin-left: 70px;
    padding-top: 70px;
    font-size: 15px;
  }

  .phrase-title {
    font-size: 27px;
  }
}

@media (min-width: 768px) {
  .wrap {
    height: 1080px;
  }

  .phrase-wrap {
    height: 1080px;
    padding: 0;
  }

  .phrase {
    margin-top: 697px;
    margin-left: 80px;
  }

  .item-wrapper {
    padding: 0;
  }

  .item {
    width: 320px;
    padding: 0;
  }

  .item2 {
    margin-top: 500px;
  }
}

@media (min-width: 1200px) {
  .phrase {
    margin-left: 100px;
  }

  .item {
    width: 350px;
    padding: 0;
  }

  .item2 {
    margin-top: 448px;
  }
}

@media (min-width: 1386px) {
  .phrase {
    margin-left: 120px;
  }

  .item {
    width: 453px;
    padding: 0;
  }

  .item2 {
    margin-top: 265px;
  }
}
</style>
