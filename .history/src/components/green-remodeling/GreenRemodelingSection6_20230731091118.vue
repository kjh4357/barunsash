<template>
  <section>
    <div class="phrase-wrapper">
      <div class="phrase">
        <h2>
          그린리모델링 <span class="d-block d-md-inline">신청 전</span>
          <strong>주의할 점!</strong>
        </h2>
        <p class="sub">
          그린리모델링은
          <em
            >해당 사업에 사업자
            <span class="d-block d-md-inline"
              >등록을 해야만 지원받을 수 있다는 점!</span
            ></em
          >
          <span class="d-block d-md-inline">놓치시면 안 되세요!</span
          ><br class="d-none d-md-block" />
          아래 사이트를 통해 국토부
          <span class="d-block d-md-inline">그린리모델링 사업자 등록을</span>
          확인할 수 있습니다.
        </p>
        <p class="desc">
          바른샤시는 주식회사 신양화학의 대표브랜드 입니다.
          <span class="d-block d-md-inline">아래 링크로 확인해 주세요.</span>
        </p>
        <a href="">www.greenremodeling.or.kr</a>
        <p class="table-text">1건이 검색되었습니다.</p>
        <table>
          <thead>
            <tr>
              <th>사업자명</th>
              <th>담당자명</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>소재지</th>
              <th>대표업종</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>주식회사 신양화학</td>
              <td>심미선</td>
              <td>031-357-9918</td>
              <td>president@barunsash.com</td>
              <td>경기 화성시</td>
              <td>건자재업</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreenRemodelingSection6",
  // components: { Swiper, SwiperSlide },
};
</script>

<style scoped>
section {
  position: relative;
  padding: 116px 20px 100px;
  background: white;
}
img {
  vertical-align: top;
}
.phrase-wrapper {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.phrase {
  text-align: center;
  line-height: 1;
}
.phrase h2 {
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 38px;
  line-height: 43px;
  letter-spacing: -1px;
}
.phrase strong {
  color: #3b4b6c;
}
.phrase em {
  color: #3b4b6c;
  text-decoration: underline;
  font-style: normal;
}
.phrase .sub {
  margin-top: 45px;
  margin-bottom: 0;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #343536;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -1px;
}

.phrase img {
  margin: 60px 0 0;
}
.phrase .desc {
  margin-top: 10px;
  margin-bottom: 0;
  font-family: NEXONLv1GothicRegular, sans-serif;
  color: #343536;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1px;
  opacity: 0.5;
}
.phrase a {
  display: inline-block;
  margin-top: 48px;
  font-family: NEXONLv1GothicBold, sans-serif;
  color: #3b4b6c;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -1px;
}
.table-text {
  margin-top: 59px;
  margin-bottom: 5px;
  font-family: NEXONLv1GothicBold, sans-serif;
  text-align: right;
}
table {
  width: 100%;
  border-spacing: 0;
}
table thead {
}
table thead th {
  padding: 12px 10px;
  background: #f8f8f8;
  border-top: 1px solid #000;
  border-left: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
}
table tbody td {
  padding: 12px 10px;
  border-bottom: 1px solid #c6c6c6;
  border-left: 1px solid #c6c6c6;
}
table thead th:first-child,
table tbody td:first-child {
  border-left: 0;
}
@media (min-width: 768px) {
  section {
    padding: 200px 20px;
  }
  .phrase h2 {
    font-size: 64px;
    line-height: 74px;
  }
  .phrase .sub {
    margin-top: 30px;
    font-size: 32px;
    line-height: 50px;
  }
  .phrase .desc {
    font-size: 19px;
    line-height: 20px;
  }
  .phrase a {
    margin-top: 20px;
    font-size: 32px;
    line-height: 50px;
  }
}

@media (min-width: 1264px) {
}

@media (min-width: 1625px) {
}
</style>
