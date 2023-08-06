<template>
  <section>
    <h2 data-aos="fade-up" data-aos-duration="1500">간편 상담 신청</h2>
    <div
      class="form"
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="1500"
    >
      <div>
        <p>이름</p>
        <input v-model="inquiry.name" placeholder="" />
      </div>
      <div>
        <p>핸드폰 번호</p>
        <input v-model="inquiry.phone" placeholder="" />
      </div>
      <div>
        <p>시공 지역</p>
        <input
          v-model="inquiry.address"
          placeholder="시, 구, 동(까지 표기 되도록)"
        />
      </div>
      <div>
        <p>시공 예상 시기</p>
        <input
          v-model="inquiry.expectDate"
          placeholder="즉시/ 3개월 이내/ 그 외"
        />
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
              v-model="inquiry.greenRemodeling"
              @input="greenRadioChange()"
            />
            <span class="icon"></span>
          </label>
        </div>
      </div>
      <div>
        <p>기타 문의</p>
        <textarea v-model="inquiry.memo" placeholder=""></textarea>
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
              v-model="inquiry.privacyAgree"
              @input="privacyCheck()"
            />
            <span class="icon"></span>
          </label>
        </div>
      </div>
      <div class="area-btn">
        <a href="#" @click.prevent="onSubmit()">상담 신청</a>
      </div>
    </div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="#3b4b6c" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { db } from "../../lib/firebase";
import dayjs from "dayjs";

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
      console.log(this.inquiry);
      console.log("selected : ", this.greenRemodeling);
    },
    privacyCheck() {
      // var selected = event.target.;
      console.log("selected : ", this.privacyAgree);
    },
    onSubmit() {
      console.log(this.inquiry);
      this.onSendFirebase();
      // this.dialog = true;
    },

    async onSendFirebase() {
      let array = [];
      const currentTime = dayjs().format("YYYY-MM-DDTHH:mm:ss");
      const data = db.collection("remodeling");

      // var docRef = db.collection("cities").doc("SF");
      // data.get().then((snapshot) => {
      //   snapshot.forEach((doc) => {
      //     array.push(doc.data());
      //   });
      // });

      data.set({ ...this.inquiry, createdAt: currentTime }).then(() => {
        console.log("Document successfully written!");
      });

      // try {
      //   const docRef = await addDoc(
      //     collection(this.$db, "remodeling"),
      //     this.inquiry
      //   );
      //   console.log(docRef);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    },
    sendPhoneMessage() {
      // 메시지 발송하기

      // req.body = {
      /*** 필수값입니다 ***/
      //   sender: 발신자 전화번호  // (최대 16bytes)
      //   receiver: 수신자 전화번호 // 컴마()분기 입력으로 최대 1천명
      //   msg: 메시지 내용	// (1~2,000Byte)
      /*** 필수값입니다 ***/
      //   msg_type: SMS(단문), LMS(장문), MMS(그림문자)
      //   title: 문자제목(LMS, MMS만 허용) // (1~44Byte)
      //   destination: %고객명% 치환용 입력
      //   rdate: 예약일(현재일이상) // YYYYMMDD
      //   rtime: 예약시간-현재시간기준 10분이후 // HHMM
      //   image: 첨부이미지 // JPEG, PNG, GIF
      // }
      // req.body 요청값 예시입니다.
      const axiosConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const params = {
        key: "ho1yae29ulb4dose9fubrjdcife2crxv",
        user_id: "barunsash",
        sender: "01093314357",
        receiver: "01093314357",
        msg: "테스트 중입니다.",
        // 테스트모드
        testmode_yn: "Y",
      };
      axios
        .post("https://apis.aligo.in", params, axiosConfig)
        .then((res) => res.data)
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  data() {
    return {
      dialog: false,
      inquiry: {
        name: "",
        phone: "",
        address: "",
        expectDate: "",
        greenRemodeling: false,
        privacyAgree: false,
        memo: "",
      },
    };
  },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 55px 20px 80px;
  background: url("../../assets/green-remodeling-11.jpg") center top no-repeat;
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
  line-height: 28px;
  text-indent: 10px;
  font-size: 14px;
  color: #343536;
  border: 1px solid #343536;
}

textarea {
  width: 100%;
  height: 140px;
  padding: 20px;
  font-size: 16px;
  color: #343536;
  border: 1px solid #343536;
}
.form > div p {
  margin-bottom: 6px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -1px;
}
.form > div + div {
  margin-top: 16px;
}
.form .space-between {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.form .space-between > div {
}
.form .space-between span {
  display: none;

  font-family: NEXONLv1GothicRegular, sans-serif;
  color: #343536;
  font-size: 14px;
  line-height: 14px;
  opacity: 0.7;
}
.form .space-between p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.check-list {
  display: flex;
  flex-wrap: wrap;
  align-self: end;
}
.radio-item {
  margin-bottom: 10px;
  display: flex;
  height: 19px;
  line-height: 19px;
  font-size: 14px;
  color: #343536;
  align-items: center;
  font-family: NEXONLv1GothicBold, sans-serif;
}
.radio-item + .radio-item {
  margin-left: 10px;
}
.radio-item input {
  display: none;
}
.radio-item input + .icon {
  display: inline-block;
  width: 19px;
  height: 19px;
  margin-right: 4px;
  background: url("../../assets/checkbox.png") center center no-repeat no-repeat;
  background-size: 100%;
}
.check-box .radio-item input + .icon {
  margin-right: 0;
}
.radio-item input:checked + .icon {
  background: url("../../assets/checkbox-on.png") center center no-repeat
    no-repeat;
  background-size: 100%;
}
.form .area-btn {
  margin-top: 40px;
  text-align: center;
}
.area-btn a {
  display: inline-block;
  width: 100%;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: white;
  font-size: 18px;
  padding: 15px 25px;
  line-height: 22px;
  background: #3b4b6c;
  text-decoration: none;
}
@media (min-width: 960px) {
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
    font-size: 20px;
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
  .form > div p {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 30px;
  }
  .form > div + div {
    margin-top: 27px;
  }
  .form .space-between {
    margin-top: 60px;
  }
  .form .space-between span {
    display: inline-block;
    margin-top: 0;
    margin-left: 15px;
    font-size: 20px;
    line-height: 28px;
  }
  .radio-item {
    height: 31px;
    line-height: 31px;
    font-size: 20px;
  }
  .radio-item input + .icon {
    width: 31px;
    height: 31px;
    margin-right: 8px;
  }
  .radio-item + .radio-item {
    margin-left: 20px;
  }
  .form .area-btn {
    margin-top: 100px;
  }
  .area-btn a {
    width: 492px;
    font-size: 36px;
    padding: 40px 45px;
    line-height: 38px;
  }
}

@media (min-width: 1625px) {
}
::placeholder {
  color: #343536;
  opacity: 0.3; /* Firefox */
}
</style>
