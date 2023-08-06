<template>
  <section>
    <div class="d-none d-md-block wrap">
      <div class="item-catalog-wrapper">
        <div class="title">E 카다로그</div>
        <v-row>
          <v-col md="6" class="item-catalog-item">
            <router-link to="/catalog-client">
              <v-img
                :src="require('../../assets/service-center-e-book-1.png')"
              />
            </router-link>
          </v-col>
          <v-col md="6" class="item-catalog-item">
            <router-link to="/catalog-agency">
              <v-img
                :src="require('../../assets/service-center-e-book-2.png')"
              />
            </router-link>
          </v-col>
        </v-row>
      </div>
      <div class="item-contact-us-wrapper">
        <div class="title">고객문의</div>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <hr class="solid-4" />
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <a class="link" href="http://pf.kakao.com/_xbhdcb">
              <v-row align="center">
                <v-col md="6">관공서 직원이신가요?</v-col>
                <v-col md="6" align="right">
                  <v-img
                    class="arrow"
                    :src="require('../../assets/service-center-arrow.png')"
                  />
                </v-col>
              </v-row>
            </a>
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <hr class="solid-1" />
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <a class="link" href="http://pf.kakao.com/_xbhdcb">
              <v-row align="center">
                <v-col md="6">인테리어 대표님이신가요?</v-col>
                <v-col md="6" align="right">
                  <v-img
                    class="arrow"
                    :src="require('../../assets/service-center-arrow.png')"
                  />
                </v-col>
              </v-row>
            </a>
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <hr class="solid-1" />
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <a class="link" href="http://pf.kakao.com/_xbhdcb">
              <v-row align="center">
                <v-col md="6">대리점 대표님이신가요?</v-col>
                <v-col md="6" align="right">
                  <v-img
                    class="arrow"
                    :src="require('../../assets/service-center-arrow.png')"
                  />
                </v-col>
              </v-row>
            </a>
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <hr class="solid-1" />
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <a class="link" href="http://pf.kakao.com/_xbhdcb">
              <v-row align="center">
                <v-col md="6">고객님이신가요?</v-col>
                <v-col md="6" align="right">
                  <v-img
                    class="arrow"
                    :src="require('../../assets/service-center-arrow.png')"
                  />
                </v-col>
              </v-row>
            </a>
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <hr class="solid-2" />
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="6">
            <v-row align="center">
              <v-col md="6" class="contact-item-1">
                <a v-if="isMobile" href="tel:031-357-9918">
                  전화문의하기<v-spacer /><v-img
                    :src="require('../../assets/contact-tel-mobile.png')"
                    max-width="38px"
                  />
                </a>
                <div v-else>
                  전화문의하기<v-spacer /><v-img
                    :src="require('../../assets/contact-tel-mobile.png')"
                    max-width="38px"
                  />
                </div>
              </v-col>
              <v-col md="6" class="contact-item-2">
                <a href="http://pf.kakao.com/_xbhdcb">
                  카카오채널로 문의하기<v-spacer /><v-img
                    :src="require('../../assets/contact-kakao-mobile.png')"
                    max-width="38px"
                  />
                </a>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
      </div>
      <div class="notice">문의주시면 24시간안에 전문적인 응대 가능합니다.</div>
    </div>
    <v-container class="d-block d-md-none wrap">
      <div class="title title-1">E 카다로그</div>
      <router-link to="/catalog-client">
        <v-img
          :src="require('../../assets/service-center-e-book-1-mobile.png')"
          class="ebook-1"
        />
      </router-link>
      <router-link to="/catalog-agency">
        <v-img
          :src="require('../../assets/service-center-e-book-2-mobile.png')"
          class="ebook-2"
        />
      </router-link>

      <div class="title title-2">고객센터</div>
      <v-row>
        <v-col>
          <hr class="solid-4" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <a class="link" href="http://pf.kakao.com/_xbhdcb">
            <v-row align="center">
              <v-col md="6">관공서 직원이신가요?</v-col>
              <v-col md="6" align="right">
                <v-img
                  class="arrow"
                  :src="require('../../assets/service-center-arrow-mobile.png')"
                />
              </v-col>
            </v-row>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <hr class="solid-1" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <a class="link" href="http://pf.kakao.com/_xbhdcb">
            <v-row align="center">
              <v-col md="6">인테리어 대표님이신가요?</v-col>
              <v-col md="6" align="right">
                <v-img
                  class="arrow"
                  :src="require('../../assets/service-center-arrow-mobile.png')"
                />
              </v-col>
            </v-row>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <hr class="solid-1" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <a class="link" href="http://pf.kakao.com/_xbhdcb">
            <v-row align="center">
              <v-col md="6">대리점 대표님이신가요?</v-col>
              <v-col md="6" align="right">
                <v-img
                  class="arrow"
                  :src="require('../../assets/service-center-arrow-mobile.png')"
                />
              </v-col>
            </v-row>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <hr class="solid-1" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <a class="link" href="http://pf.kakao.com/_xbhdcb">
            <v-row align="center">
              <v-col md="6">고객님이신가요?</v-col>
              <v-col md="6" align="right">
                <v-img
                  class="arrow"
                  :src="require('../../assets/service-center-arrow-mobile.png')"
                />
              </v-col>
            </v-row>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <hr class="solid-2" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="contact-item-1">
          <a v-if="isMobile" href="tel:031-357-9918">
            전화문의하기<v-spacer /><v-img
              :src="require('../../assets/contact-tel-mobile.png')"
              max-width="38px"
            />
          </a>
          <div v-else>
            전화문의하기<v-spacer /><v-img
              :src="require('../../assets/contact-tel-mobile.png')"
              max-width="38px"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="contact-item-2">
          <a href="http://pf.kakao.com/_xbhdcb">
            카카오채널로 문의하기<v-spacer /><v-img
              :src="require('../../assets/contact-kakao-mobile.png')"
              max-width="38px"
            />
          </a>
        </v-col>
      </v-row>
      <div class="notice">문의주시면 24시간안에 전문적인 응대 가능합니다.</div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "ServiceCenterTab2",

  data: () => ({
    isMobile: /Mobi/i.test(window.navigator.userAgent),
  }),
};
</script>

<style scoped>
.notice {
  text-align: center;
  color: #222222;
  font-family: NEXONLv1GothicBold, sans-serif;
}

hr.solid-4 {
  border-top: 4px solid #162138;
  margin-top: 45px;
}

hr.solid-1 {
  border-top: 1px solid #d8d8d8;
}

hr.solid-2 {
  border-top: 1px solid #000000;
}

.title {
  color: #222222;
  text-align: center;
  font-size: 25px !important;
  font-weight: bold !important;
}

a {
  text-decoration: none;
}

a.link {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
}

@media (max-width: 959px) {
  section {
    padding: 10px;
  }

  .notice {
    font-size: 20px;
    margin-top: 90px;
    margin-bottom: 180px;
    color: #979797;
  }

  .ebook-1 {
    margin-top: 58px;
  }

  .ebook-2 {
    margin-top: 26px;
  }

  .title-1 {
    margin-top: 69px;
  }

  .title-2 {
    margin-top: 99px;
  }

  a.link {
    font-size: 14px;
  }

  .arrow {
    width: 26px;
  }

  .contact-item-1,
  .contact-item-2 {
    font-weight: bold;
    font-size: 16px;
  }

  .contact-item-1 > a,
  .contact-item-2 > a,
  .contact-item-1 > div,
  .contact-item-2 > div {
    display: flex;
    color: #000000;
    border: 1px solid #000000;
    padding: 9px 18px;
    line-height: 35px;
  }

  .contact-item-1 {
    padding-top: 5px;
    padding-bottom: 0;
  }

  .contact-item-2 {
    padding-bottom: 0;
  }
}

@media (min-width: 768px) {
  .item-catalog-wrapper {
    margin-top: 130px;
  }

  .item-contact-us-wrapper {
    margin-top: 195px;
  }

  .item-catalog-item {
    margin-top: 60px;
    padding: 0;
  }

  hr.solid-4 {
    margin-top: 60px;
  }

  a.link {
    font-size: 20px;
  }

  .arrow {
    width: 64px;
  }

  .notice {
    font-weight: bold;
    font-size: 23px;
    margin-top: 100px;
    margin-bottom: 390px;
  }

  .contact-item-1,
  .contact-item-2 {
    font-weight: bold;
    padding-top: 0;
    padding-bottom: 0;
  }

  .contact-item-1 {
    padding-right: 6px;
  }

  .contact-item-2 {
    padding-left: 6px;
  }

  .contact-item-1 > a,
  .contact-item-1 > div,
  .contact-item-2 > a,
  .contact-item-2 > div {
    font-size: 16px;
    color: #000000;
    display: flex;
    border: 1px solid #000000;
    padding: 12px 18px;
  }

  .contact-item-1 > a > img,
  .contact-item-1 > div > img {
    max-width: 32px;
  }
}

@media (min-width: 975px) {
  a.link {
    font-size: 22px;
  }

  .contact-item-1 > a,
  .contact-item-1 > div,
  .contact-item-2 > a,
  .contact-item-2 > div {
    font-size: 18px;
  }
}

@media (min-width: 1020px) {
  a.link {
    font-size: 23px;
  }

  .contact-item-1 > a,
  .contact-item-1 > div,
  .contact-item-2 > a,
  .contact-item-2 > div {
    font-size: 19px;
    line-height: 37px;
  }
}

@media (min-width: 1100px) {
  a.link {
    font-size: 25px;
  }
}

@media (min-width: 1180px) {
  .contact-item-1 > a,
  .contact-item-1 > div,
  .contact-item-2 > a,
  .contact-item-2 > div {
    font-size: 21px;
  }
}
</style>
