<template>
  <div class="popup" v-if="visible">
    <VueSlickCarousel :arrows="false" :dots="false" :autoplay="true" :autoplaySpeed="3000">
      <div v-for="(img, index) in desktopImages" :key="'desktop-' + index" class="d-md-block">
        <v-img :src="require(`../assets/${img}`)" />
      </div>
<!--      <div v-for="(img, index) in mobileImages" :key="'mobile-' + index" class="d-block d-md-none">-->
<!--        <v-img :src="require(`../assets/${img}`)" />-->
<!--      </div>-->
    </VueSlickCarousel>

    <div class="popup-buttons">
      <div class="popup-button-1" @click="noSeeDayEmit">오늘하루그만보기</div>
      <div class="popup-button-2" @click="closeEmit">닫기</div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'PopupDialog',
  components: { VueSlickCarousel },
  props: { visible: Boolean },

  data() {
    return {
      desktopImages: ['img_popup_01.png', 'img_popup_02.png'],
      mobileImages: ['img_popup_01.png', 'img_popup_02.png'],
    }
  },

  methods: {
    closeEmit() {
      this.$emit('close')
    },
    noSeeDayEmit() {
      this.$emit('noSee')
    },
  },
}
</script>

<style scoped>
.popup {
  position: absolute;
  z-index: 99999;
  top: 232px;
  margin-left: auto;
  margin-right: auto;
  width: 512px;
  left: 0;
  right: 0;
  text-align: center;
}

.popup-buttons {
  display: flex;
  position: relative;
  width: 512px;
}

.popup-button-1,
.popup-button-2 {
  cursor: pointer;
  width: 50%;
  color: #ffffff;
  padding: 10px 0;
  font-size: 20px;
}

.popup-button-1 {
  background-color: #979797;
}

.popup-button-2 {
  background-color: #4e4e4e;
}

@media (max-width: 959px) {
  .popup {
    top: 100px;
    width: 70%;
  }

  .popup-buttons {
    width: 100%;
  }

  .popup-button-1,
  .popup-button-2 {
    font-size: 18px;
    color: #000000;
  }
}
</style>
