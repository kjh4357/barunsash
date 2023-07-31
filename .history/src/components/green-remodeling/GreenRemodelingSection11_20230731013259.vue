<template>
  <section>
    <h2>간편 상담 신청</h2>
    <div class="form">
      <div>
        <p>이름 {{ name }}</p>
        <input v-model="name" placeholder="" />
      </div>
      <div>
        <p>핸드폰 번호 {{ phone }}</p>
        <input v-model="phone" placeholder="" />
      </div>
      <div>
        <p>시공 지역 {{ address }}</p>
        <input v-model="address" placeholder="시, 구, 동(까지 표기 되도록)" />
      </div>
      <div>
        <p>시공 예상 시기 {{ expectDate }}</p>
        <input v-model="expectDate" placeholder="즉시/ 3개월 이내/ 그 외" />
      </div>
      <div class="space-between">
        <p>건물 형태</p>
        <div class="check-list" v-cloak>
          <label class="radio-item" for="chk01">
            <input
              type="radio"
              id="chk01"
              name="form"
              value="apartment"
              @change="radioChange($event)"
            />
            <span class="icon"></span>
            아파트 </label
          ><label class="radio-item" for="chk02">
            <input
              type="radio"
              id="chk02"
              name="form"
              value="apartment"
              @change="radioChange($event)"
            />
            <span class="icon"></span>
            주택
          </label>
          <label class="radio-item" for="chk03">
            <input
              type="radio"
              id="chk03"
              name="form"
              value="apartment"
              @change="radioChange($event)"
            />
            <span class="icon"></span>
            빌라
          </label>
          <label class="radio-item" for="chk04">
            <input
              type="radio"
              id="chk04"
              name="form"
              value="apartment"
              @change="radioChange($event)"
            />
            <span class="icon"></span>
            상가
          </label>
          <label class="radio-item" for="chk05">
            <input
              type="radio"
              id="chk05"
              name="form"
              value="apartment"
              @change="radioChange($event)"
            />
            <span class="icon"></span>
            기타
          </label>
        </div>
      </div>
      <div class="space-between">
        <p>그린 리모델링 적용 여부</p>
        <div class="check-list" v-cloak>
          <label class="radio-item" for="green01">
            <input
              type="radio"
              id="chgreen01"
              name="greenRemodeling"
              value="true"
              @change="greenRadioChange($event)"
            />
            <span class="icon"></span>
            아파트
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection11",
  // components: { Swiper, SwiperSlide },
  methods: {
    radioChange(event) {
      var selected = event.target.value;
      console.log("selected : ", selected);
    },
    greenRadioChange(event) {
      var selected = event.target.value;
      console.log("selected : ", selected);
    },
  },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      expectDate: "",
    };
  },
};
</script>

<style scoped>
section {
  position: relative;

  padding: 200px 20px 232px;
  background-image: url("../../assets/green-remodeling-11.jpg");
  background-size: cover;
}
img {
  vertical-align: top;
}

h2 {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 70px;
  line-height: 72px;
  letter-spacing: -1px;
  word-break: keep-all;
  text-align: center;
}
.form {
  background: white;
  max-width: 1000px;
  margin: 50px auto 0;
  padding: 60px 74px;
}
input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-indent: 10px;
  font-size: 16px;
  color: #343536;
  border: 1px solid #343536;
}
.form > div p {
  margin-bottom: 10px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -1px;
}
.form > div + div {
  margin-top: 27px;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.check-list {
  display: flex;
  flex-wrap: wrap;
}
.radio-item {
  display: flex;
  height: 31px;
  line-height: 31px;
  font-size: 20px;
  color: #343536;
  align-items: center;
  font-family: NEXONLv1GothicBold, sans-serif;
}
.radio-item + .radio-item {
  margin-left: 20px;
}
.radio-item input {
  display: none;
}
.radio-item input + .icon {
  display: inline-block;
  width: 31px;
  height: 31px;
  margin-right: 8px;
  background: url("../../assets/checkbox.png") center center no-repeat no-repeat;
}
.radio-item input:checked + .icon {
  background: url("../../assets/checkbox-on.png") center center no-repeat
    no-repeat;
}
@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
::placeholder {
  color: #343536;
  opacity: 0.3; /* Firefox */
}
</style>
