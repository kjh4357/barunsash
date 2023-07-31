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
              type="checkbox"
              id="green01"
              name="greenRemodeling"
              value="true"
              v-model="greenRemodeling"
              @input="greenRadioChange()"
            />
            <span class="icon"></span>
            아파트
          </label>
        </div>
      </div>
      <div>
        <p>기타 문의 {{ name }}</p>
        <textarea v-model="etc" placeholder=""></textarea>
      </div>
      <div class="space-between">
        <p>
          개인정보 동의<span
            >바른 매니저가 24시간 이내 전화드리도록 하겠습니다.</span
          >
        </p>
        <div class="check-box" v-cloak>
          <label class="radio-item" for="agreeChk">
            <input
              type="checkbox"
              id="agreeChk"
              name="agreeChk"
              v-model="privacyAgree"
              @input="privacyCheck()"
            />
            <span class="icon"></span>
          </label>
        </div>
      </div>
      <div class="area-btn">
        <a href="#">상담 신청</a>
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
    greenRadioChange() {
      // var selected = event.target.;
      console.log("selected : ", this.greenRemodeling);
    },
    privacyCheck() {
      // var selected = event.target.;
      console.log("selected : ", this.privacyAgree);
    },
  },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      expectDate: "",
      greenRemodeling: false,
      privacyAgree: false,
      etc: "",
    };
  },
};
</script>

<style scoped>
section {
  position: relative;

  padding: 55px 20px 80px;
  background-image: url("../../assets/green-remodeling-11.jpg");
  background-size: cover;
}
img {
  vertical-align: top;
}

h2 {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 38px;
  line-height: 43px;
  letter-spacing: -1px;
  word-break: keep-all;
  text-align: center;
}
.form {
  background: white;
  max-width: 1000px;
  margin: 17px auto 0;
  padding: 24px 10px;
}
input {
  width: 100%;
  height: 28px;
  line-height: 528px;
  text-indent: 10px;
  font-size: 16px;
  color: #343536;
  border: 1px solid #343536;
}

textarea {
  width: 100%;
  height: 240px;
  padding: 20px;
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
.form .space-between {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.form .space-between span {
  display: inline-block;
  margin-left: 15px;
  font-family: NEXONLv1GothicRegular, sans-serif;
  color: #343536;
  font-size: 20px;
  line-height: 28px;
  opacity: 0.7;
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
.check-box .radio-item input + .icon {
  margin-right: 0;
}
.radio-item input:checked + .icon {
  background: url("../../assets/checkbox-on.png") center center no-repeat
    no-repeat;
}
.form .area-btn {
  margin-top: 100px;
  text-align: center;
}
.area-btn a {
  display: inline-block;
  width: 492px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 36px;
  padding: 40px 45px;
  line-height: 38px;
  background: #3b4b6c;
  text-decoration: none;
}
@media (min-width: 768px) {
  section {
    padding: 200px 20px 232px;
    background-image: url("../../assets/green-remodeling-11.jpg");
    background-size: cover;
  }
  img {
    vertical-align: top;
  }

  h2 {
    font-size: 70px;
    line-height: 72px;
  }
  .form {
    margin: 50px auto 0;
    padding: 60px 74px;
  }
  input {
    height: 50px;
    line-height: 50px;
    text-indent: 10px;
  }

  textarea {
    width: 100%;
    height: 240px;
    padding: 20px;
    font-size: 16px;
    color: #343536;
    border: 1px solid #343536;
  }
}

@media (min-width: 1625px) {
}
::placeholder {
  color: #343536;
  opacity: 0.3; /* Firefox */
}
</style>
