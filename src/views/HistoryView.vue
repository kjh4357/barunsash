<template>
  <section>
    <BarunHeader/>
    <div class="header d-none d-md-block">
      <div>
        <div class="phrase hr-sect">바른히스토리</div>
        <div class="phrase-sub">
          30년 전부터 기본을 지키는 올바른 원칙으로 타협하지 않고<br>
          끊임없는 연구와 개선으로 우수한 품질을 고집하는 바른샤시입니다.
        </div>
      </div>
      <v-img :src="require('../assets/history-1.png')" class="logo"/>
    </div>
    <div class="d-none d-md-block">
      <v-row align="center" class="history" justify="center">
        <v-col class="year-1">
          <div data-aos="fade-right" data-aos-duration="1000">19</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">91</div>
        </v-col>
        <v-col>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">· 신양기업 창립</div>
        </v-col>
      </v-row>
      <v-row align="center" class="history" justify="center">
        <v-col class="year-1">
          <div data-aos="fade-right" data-aos-duration="1000">19</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">93</div>
        </v-col>
        <v-col>
          <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">· 경기도 지역 판매 1위 기록하며 매출 상승
          </div>
        </v-col>
      </v-row>
      <v-row align="center" class="history" justify="center">
        <v-col class="year-1">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">08</div>
        </v-col>
        <v-col>
          <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">· 신양ENG로 사명 변경</div>
        </v-col>
      </v-row>
      <v-row align="top" class="history" justify="center">
        <v-col class="year-1">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">14</div>
        </v-col>
        <v-col>
          <div class="desc2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 본사건축
            <v-img :src="require('../assets/history-item-1.png')" class="image"/>
          </div>
        </v-col>
      </v-row>
      <v-row align="top" class="history" justify="center">
        <v-col class="year-2">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">17</div>
        </v-col>
        <v-col>
          <div class="desc2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 주식회사 신양화학 법인 설립<br>
            · 경기화성바이벨리 공장 설립
            <v-img :src="require('../assets/history-item-2.png')" class="image"/>
          </div>
        </v-col>
      </v-row>
      <v-row align="top" class="history" justify="center">
        <v-col class="year-2">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">18</div>
        </v-col>
        <v-col>
          <div class="desc2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 최선의 프로파일을 만들기 위한 노력<br>
            · BEST 원재료 배합 테스트 정책 실행
            <v-img :src="require('../assets/history-item-3.png')" class="image"/>
            <br>
            · KS F 5602 인증 획득으로 제품신뢰성 제고 <br>
            · 창호 전문 브랜드 바른샤시 런칭<br>
            · 금형 상반기 33벌, 후반기 2벌
          </div>
        </v-col>
      </v-row>
      <v-row align="center" class="history" justify="center">
        <v-col class="year-2">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">19</div>
        </v-col>
        <v-col>
          <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 제품라인 확장에 따른 신규 금형 11개 추가 제작
          </div>
        </v-col>
      </v-row>
      <v-row align="top" class="history" justify="center">
        <v-col class="year-3">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">20</div>
        </v-col>
        <v-col>
          <div class="desc2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 커스터마이징된 제품제조를 위한<br>&nbsp;&nbsp;압출기계 1대 증설, 신규 금형 4개 추가 제작<br>
            · BEST 원재료 배합 테스트 정책 실행
            <v-img :src="require('../assets/history-item-4.png')" class="image"/>
            <br>
          </div>
        </v-col>
      </v-row>
      <v-row align="top" class="history" justify="center">
        <v-col class="year-3">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">21</div>
        </v-col>
        <v-col>
          <div class="desc2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 고객 경험을 중점을 둔 브랜드 정책으로<br>&nbsp;&nbsp;쇼룸 등을 통한 소통을 실현함<br>&nbsp;&nbsp;ACE 하드웨어 용산점, 금천점 쇼룸 입점<br><br>
            · 전년도 대비 매출액 100% 성장 및<br>&nbsp;&nbsp;KS F 5602 정기심사 인증완료
            <v-img :src="require('../assets/history-item-5.png')" class="image"/>
            <br>
          </div>
        </v-col>
      </v-row>
      <v-row align="top" class="history" justify="center">
        <v-col class="year-3">
          <div data-aos="fade-right" data-aos-duration="1000">20</div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">22</div>
        </v-col>
        <v-col>
          <div class="desc2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            · 자동 배합설비 증축<br>
            · 입출기계 1대 증설<br>
            · 신규 금형 3벌 추가 제작<br>
            · 창호 전문 브랜드 리뉴얼 런칭<br>
            · 고객 소통 중심형 website 오픈<br>
            · 고객 경험 중심형 카다로그 개발<br>
            · 전문 대리점용 카다로그 개발<br>
            · 한국품질만족도1위 창호부분 수상<br>
            <v-img :src="require('../assets/history-item-6.png')" class="image"/>
            <br>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="d-block d-md-none">
      <div class="header">
        <div>
          <div class="phrase">바른히스토리</div>
          <div class="phrase-sub">
            30년 전부터 기본을 지키는 올바른 원칙으로<br>
            타협하지 않고 끊임없는 연구와 개선으로<br>
            우수한 품질을 고집하는 바른샤시입니다.
          </div>
        </div>
        <v-img :src="require('../assets/history-1-mobile.png')" class="logo"/>
      </div>
      <v-container>
        <div class="header-sub">
          <span>30년</span>
          <span>올바른 원칙</span>
          <span>우수한 품질을 위한 노력</span>
        </div>
        <div class="year-1" data-aos="fade-up" data-aos-duration="1000">
          1991
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">· 신양기업 창립</div>
        </div>
        <div class="hr"/>
        <div class="year-1" data-aos="fade-up" data-aos-duration="1000">
          1993
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">· 경기도 지역 판매 1위 기록하며 매출 상승
          </div>
        </div>
        <div class="hr"/>
        <div class="year-1" data-aos="fade-up" data-aos-duration="1000">
          2008
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">· 신양ENG로 사명 변경</div>
        </div>
        <div class="hr"/>
        <div class="year-1" data-aos="fade-up" data-aos-duration="1000">
          2014
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">· 본사건축</div>
        </div>
        <v-img :src="require('../assets/history-item-1.png')" class="image" data-aos="fade-up" data-aos-delay="240"
               data-aos-duration="1000"/>
        <div class="hr"/>
        <div class="year-2" data-aos="fade-up" data-aos-duration="1000">
          2017
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">
            · 주식회사 신양화학 법인 설립<br>
            · 경기화성바이벨리 공장 설립
          </div>
        </div>
        <v-img :src="require('../assets/history-item-2.png')" class="image" data-aos="fade-up" data-aos-delay="240"
               data-aos-duration="1000"/>
        <div class="hr"/>
        <div class="year-2" data-aos="fade-up" data-aos-duration="1000">
          2018
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">
            · 최선의 프로파일을 만들기 위한 노력<br>
            · BEST 원재료 배합 테스트 정책 실행
          </div>
          <v-img :src="require('../assets/history-item-3.png')" class="image" data-aos="fade-up" data-aos-delay="240"
                 data-aos-duration="1000"/>
          <br>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">
            · KS F 5602 인증 획득으로 제품신뢰성 제고 <br>
            · 창호 전문 브랜드 바른샤시 런칭<br>
            · 금형 상반기 33벌, 후반기 2벌
          </div>
        </div>
        <div class="hr"/>
        <div class="year-2" data-aos="fade-up" data-aos-duration="1000">
          2019
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">
            · 제품라인 확장에 따른 신규 금형 11개 추가 제작
          </div>
        </div>
        <div class="hr"/>
        <div class="year-3" data-aos="fade-up" data-aos-duration="1000">
          2021
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">
            · 고객 경험을 중점을 둔 브랜드 정책으로 쇼룸 등을 통한 소통을 실현함<br><br>
            · ACE 하드웨어 용산점, 금천점 쇼룸 입점<br><br>
            · 전년도 대비 매출액 100% 성장 및 KS F 5602 정기심사 인증완료
          </div>
        </div>
        <v-img :src="require('../assets/history-item-5.png')" class="image" data-aos="fade-up" data-aos-delay="300"
               data-aos-duration="1000"/>
        <div class="hr"/>
        <div class="year-3" data-aos="fade-up" data-aos-duration="1000">
          2022
        </div>
        <div>
          <div class="desc" data-aos="fade-up" data-aos-delay="240" data-aos-duration="1000">
            · 자동 배합설비 증축<br>
            · 입출기계 1대 증설<br>
            · 신규 금형 3벌 추가 제작<br>
            · 창호 전문 브랜드 리뉴얼 런칭<br>
            · 고객 소통 중심형 website 오픈<br>
            · 고객 경험 중심형 카다로그 개발<br>
            · 전문 대리점용 카다로그 개발<br>
            · 한국품질만족도1위 창호부분 수상
          </div>
        </div>
        <v-img :src="require('../assets/history-item-6.png')" class="image" data-aos="fade-up" data-aos-delay="300"
               data-aos-duration="1000"/>
        <div class="hr2"/>
      </v-container>
    </div>
    <BarunFooter/>
  </section>
</template>

<script>
import BarunHeader from "@/components/BarunHeader";
import BarunFooter from "@/components/BarunFooter";

export default {
  name: "HistoryView",
  components: {BarunFooter, BarunHeader},
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background: #162138;
}

.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: white;
  font-size: 12px;
}

.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: white;
  height: 1px;
  font-size: 0;
  line-height: 0;
}

.hr-sect::before {
  margin-right: 70px;
}

.hr-sect::after {
  margin-left: 70px;
}

.phrase {
  color: white;
  margin-top: 0;
  font-size: 100px;
  text-align: center;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.phrase-sub {
  color: white;
  text-align: center;
  font-size: 27px;
  margin-top: 64px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.logo {
  margin-top: 150px;
}

.year-1 {
  color: #c4c4c4;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.year-2 {
  color: #c5e3ff;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.year-3 {
  color: #3B4A6A;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.desc {
  color: black;
  font-size: 30px;
  margin-left: 67px;
  margin-right: 67px;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

.desc2 {
  color: black;
  font-size: 30px;
  margin-left: 67px;
  font-family: NEXONLv1GothicRegular, sans-serif;
}

@media (max-width: 959px) {
  .header {
    position: relative;
    padding-top: 130px;
    padding-bottom: 50px;
  }

  .header-sub {
    display: flex;
    justify-content: space-between;
    color: #162138;
    font-size: 15px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .logo {
    margin-top: 90px;
  }

  .phrase {
    text-align: center;
    font-size: 52px;
  }

  .phrase-sub {
    font-size: 17px;
    margin-top: 30px;
  }

  .image {
    width: 100%;
    margin-top: 34px;
  }

  .year-1, .year-2, .year-3 {
    margin-top: 15px;
    font-size: 76px;
  }

  .hr {
    margin-top: 15px;
    height: 1px;
    background: #162138;
  }

  .hr2 {
    margin: 15px 0;
    height: 1px;
    background: #162138;
  }

  .desc, .desc2 {
    font-size: 16px;
    margin: 0 20px;
  }
}

@media (min-width: 960px) {
  .header {
    height: 1156px;
  }

  .phrase {
    padding-top: 489px;
  }

  .logo {
    margin-left: 35px;
    margin-right: 35px;
  }

  .history {
    margin-top: 246px;
  }

  .year-1, .year-2, .year-3 {
    display: flex;
    font-size: 110px;
    justify-content: end;
  }

  .desc, .desc2 {
    font-size: 21px;
  }

  .desc2 {
    margin-top: 37px;
  }

  .image {
    width: 384px;
    margin-top: 17px;
  }
}

@media (min-width: 1264px) {
  .history {
    margin: 0 162px;
  }

  .year-1, .year-2, .year-3 {
    font-size: 145px;
    justify-content: end;
  }

  .desc, .desc2 {
    font-size: 28px;
  }

  .desc2 {
    margin-top: 49px;
  }

  .image {
    width: 400px;
    margin-top: 22px;
  }
}

@media (min-width: 1920px) {
  .history {
    margin: 0 246px;
  }

  .year-1, .year-2, .year-3 {
    font-size: 220px;
    justify-content: end;
  }

  .desc, .desc2 {
    font-size: 30px;
  }

  .desc2 {
    margin-top: 74px;
  }

  .image {
    width: 620px;
    margin-top: 34px;
  }
}

@media (min-width: 2000px) {
  .history {
    margin: 0 256px;
  }

  .year-1, .year-2, .year-3 {
    font-size: 230px;
    justify-content: end;
  }

  .desc, .desc2 {
    font-size: 30px;
  }

  .desc2 {
    margin-top: 77px;
  }

  .image {
    width: 680px;
    margin-top: 35px;
  }
}
</style>
