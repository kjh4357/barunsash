<template>
  <div class="popup" v-if="visible">
    <v-img :src="require('../assets/popup.jpg')" class="d-none d-md-block"/>
    <v-img :src="require('../assets/popup-mobile.jpg')" class="d-block d-md-none"/>
    <div class="popup-buttons">
      <div class="popup-button-1" @click="noSeeDayEmit">오늘하루그만보기</div>
      <div class="popup-button-2" @click="closeEmit">닫기</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupDialog",

  props: { visible: Boolean },

  methods: {
    closeEmit() {
      this.$emit("close")
    },

    noSeeDayEmit() {
      this.$emit("noSee")
    }
  }
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

.popup-button-1, .popup-button-2 {
  cursor: pointer;
  width: 50%;
  color: #FFFFFF;
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
    width: 100%;
  }

  .popup-buttons {
    width: 100%;
  }

  .popup-button-1, .popup-button-2 {
    font-size: 18px;
    color: #000000;
  }
}

</style>
