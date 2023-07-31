<template>
  <section>
    <div class="marquee">
      <div class="item-wrapper">
        <div class="item-wrapper-top">
          <v-img :src="require('../../assets/main-section-4-item-1.png')" class="item1"/>
          <v-img :src="require('../../assets/main-section-4-item-3.png')" class="item3"/>
          <v-img :src="require('../../assets/main-section-4-item-4.png')" class="item4"/>
          <v-img :src="require('../../assets/main-section-4-item-5.png')" class="item5"/>
        </div>
        <div class="item-wrapper-bottom">
          <v-img :src="require('../../assets/main-section-4-item-2.png')" class="item2"/>
          <v-img :src="require('../../assets/main-section-4-item-6.png')" class="item6"/>
        </div>
      </div>
    </div>
    <div class="phrase">
      <p class="phrase-title">PERSONALIZED</p>
      <p>
        바른샤시는 집집마다의 개성을 사랑합니다.<br>
        쉽고 편리하게 우리집에 딱 맞는<br>
        홈 스타일링을 할 수 있도록 맞춤 서비스를 제공합니다.
      </p>
    </div>
    <div class="notice d-none d-md-block">
      *해당 홈페이지에 있는 이미지는 이해를 돕기 위한 연출 이미지 입니다.
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSection4"
}
</script>

<style scoped>
.item2 {
  margin-left: 920px;
}

.item3 {
  margin-left: 30px;
}

.item4 {
  margin-left: 30px;
}

.item5 {
  margin-left: 30px;
}

.item6 {
  margin-left: 41px;
}

.marquee {
  width: 100%;
  margin-top: 120px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.item-wrapper {
  animation: marquee 15s infinite linear alternate;
}

.item-wrapper-top {
  display: flex;
}

.item-wrapper-bottom {
  display: flex;
  margin-top: 30px;
}

.phrase {
  color: #222222;
  font-size: 23px;
  font-family: NEXONLv1GothicRegular, sans-serif;
  margin-top: 120px;
  padding-left: 120px;
  padding-right: 120px;
}

.phrase-title {
  font-size: 40px;
  font-family: Outfit-Regular, sans-serif;
}

.notice {
  width: 100%;
  text-align: right;
  padding-right: 67px;
  color: #222222;
  font-size: 14px;
  font-family: NEXONLv1GothicRegular, sans-serif;
  margin-top: 120px;
}

@media (max-width: 959px) {
  section {
    padding-bottom: 50px
  }

  @keyframes marquee {
    from {
      transform: translate(100px, 0);
    }

    to {
      transform: translate(-1300px, 0);
    }
  }

  .marquee {
    margin-top: 50px;
  }

  .item1 {
    max-width: 540px;
  }

  .item2 {
    max-width: 351px;
    margin-left: 369px;
  }

  .item3 {
    max-width: 153px;
    margin-left: 12px;
  }

  .item4 {
    max-width: 345px;
    margin-left: 12px;
  }

  .item5 {
    max-width: 540px;
    margin-left: 12px;
  }

  .item6 {
    max-width: 398px;
    margin-left: 16px;
  }

  .item1, .item2, .item3, .item4, .item5, .item6 {
    height: 189px;
  }

  .phrase {
    margin: 49px 13% 0;
    padding: 0;
    font-size: 15px;
  }

  .phrase-title {
    font-size: 27px;
  }
}

@media (min-width: 960px) {
  section {
    height: 1080px;
  }

  @keyframes marquee {
    from {
      transform: translate(100px, 0);
    }

    to {
      transform: translate(-1600px, 0);
    }
  }

  .item1 {
    max-width: 707px;
  }

  .item2 {
    max-width: 461px;
  }

  .item3 {
    max-width: 200px;
  }

  .item4 {
    max-width: 453px;
  }

  .item5 {
    max-width: 707px;
  }

  .item6 {
    max-width: 522px;
  }
}
</style>
