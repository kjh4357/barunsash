<template>
  <section>
    <div class="wrap search-wrap d-none d-md-flex">
      <span>지역검색</span>
      <v-combobox
          v-model="search_region"
          :items="regions"
          background-color="#F2F2F2"
          class="search-combo"
          clearable
          dense
          hide-selected
          item-color="#383737"
          label="시/도"
          outlined
          solo
          @change="changeRegion"
      />

      <v-combobox
          v-model="search_city"
          :items="cities"
          background-color="#F2F2F2"
          class="search-combo"
          dense
          hide-selected
          item-color="#383737"
          label="시/군/구"
          outlined
          solo
      />

      <v-text-field
          v-model="search_word"
          class="search-word"
          dense
          placeholder="대리점명을 입력해주세요."
          type="text"
      />

      <button
          class="search-btn"
          @click="getAgencies"
      >
        검색
      </button>
    </div>
    <div class="search-wrap2 d-block d-md-none">
      <div style="display: flex">
        <v-combobox
            v-model="search_region"
            :items="regions"
            background-color="#F2F2F2"
            class="search-combo"
            clearable
            dense
            hide-selected
            item-color="#383737"
            label="시/도"
            outlined
            solo
            @change="changeRegion"
        />


        <v-combobox
            v-model="search_city"
            :items="cities"
            background-color="#F2F2F2"
            class="search-combo"
            dense
            hide-selected
            item-color="#383737"
            label="시/군/구"
            outlined
            solo
        />
      </div>

      <div style="display: flex; margin-top: 26px;">
        <v-text-field
            v-model="search_word"
            class="search-word"
            dense
            placeholder="대리점명을 입력해주세요."
            type="text"
        />

        <button
            class="search-btn"
            @click="getAgencies"
        >
          검색
        </button>
      </div>
    </div>
    <div class="d-block d-md-none wrap">
      <div class="hr"/>
      <div v-for="item in items" :key="item.id">
        <div class="name">{{ item.name }}</div>
        <div class="address">{{ item.address }}</div>
        <div class="tel">{{ item.tel }}</div>
        <div class="hr2"/>
      </div>
    </div>
    <div class="d-none d-md-block wrap">
      <v-row>
        <v-col align="center">
          <div class="hr"/>
          <v-simple-table class="table">
            <template>
              <thead>
              <tr>
                <th class="text-center">
                  NO
                </th>
                <th class="text-center">
                  대리점명
                </th>
                <th class="text-center">
                  주소
                </th>
                <th class="text-center">
                  전화번호
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in items" :key="item.id">
                <td class="text-center">
                  {{ item.id }}
                </td>
                <td class="text-center">
                  {{ item.name }}
                </td>
                <td class="text-center">
                  {{ item.address }}
                </td>
                <td class="text-center">
                  {{ item.tel }}
                </td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </div>
    <v-pagination
        v-model="page"
        :length="total_page"
        circle
        class="paging"
        @input="getAgencies"
    />
  </section>
</template>

<script>
import * as api from '@/api/agency';

export default {
  name: "ServiceCenterTab1",
  methods: {
    async getAgencies() {
      const res = await api.getAgencies(this.search_region, this.search_city, this.search_word, this.page)
      if (res.status === 200) {
        const data = res.data
        this.total_page = Math.ceil(data.total);
        this.items = data.results;
      }
    },
    changeRegion(region) {
      this.cities = this.cities_dict[region]
    },
  },
  data() {
    return {
      page: 1,
      total_page: 0,
      regions: [
        '서울특별시', '부산광역시', '대구광역시', '인천광역시', '대전광역시',
        '광주광역시', '울산광역시', '세종특별자치시', '경기도', '강원도',
        '충청북도', '충청남도', '전라북도', '전라남도', '경상북도',
        '경상남도', '제주특별자치도'
      ],
      cities: [],
      search_region: '',
      search_city: '',
      search_word: '',
      items: [],
      cities_dict: {
        '서울특별시': [
          '종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구',
          '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구',
          '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'
        ],
        '부산광역시': [
          '중구', '서구', '동구', '영도구', '부산진구',
          '동래구', '남구', '북구', '해운대구', '사하구',
          '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'
        ],
        '대구광역시': ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
        '인천광역시': ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'],
        '대전광역시': ['동구', '중구', '서구', '유성구', '대덕구'],
        '광주광역시': ['동구', '서구', '남구', '북구', '광산구'],
        '울산광역시': ['중구', '남구', '동구', '북구', '울주군'],
        '세종특별자치시': [],
        '경기도': [
          '수원시', '고양시', '용인시', '성남시', '부천시', '화성시', '안산시', '남양주시', '안양시',
          '평택시', '시흥시', '파주시', '의정부시', '김포시', '광주시', '광명시', '군포시', '하남시',
          '오산시', '양주시', '이천시', '구리시', '안성시', '포천시', '의왕시', '양평군', '여주시',
          '동두천시', '가평군', '과천시', '연천군'
        ],
        '강원도': [
          '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군',
          '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'
        ],
        '충청북도': ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'],
        '충청남도': [
          '천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군',
          '청양군', '홍성군', '예산군', '태안군'
        ],
        '전라북도': [
          '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군',
          '장수군', '임실군', '순창군', '고창군', '부안군'
        ],
        '전라남도': [
          '목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군',
          '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'
        ],
        '경상북도': [
          '포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시',
          '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'
        ],
        '경상남도': [
          '창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군',
          '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'
        ],
        '제주특별자치도': ['제주시', '서귀포시']
      },
    }
  },
  async created() {
    await this.getAgencies()
  }
}
</script>

<style>
.v-text-field__details {
  display: none !important;
}

.v-input__slot {
  height: 64px !important;
  margin: 0 !important;
}

@media (max-width: 959px) {
  .v-input__slot {
    height: 56px !important;
    margin: 0 !important;
    font-size: 14px;
  }
}
</style>

<style scoped>
.hr {
  height: 3px;
  background: #4e4e4e;
}

.hr2 {
  height: 1px;
  margin-top: 33px;
  background: #4e4e4e;
}

.search-wrap {
  align-items: center;
  justify-content: center;
  padding: 46px 7%;
  background: #3B4A6A;
  border-radius: 10px;
}

.search-wrap2 {
  padding: 26px 4%;
  margin-bottom: 72px;
  margin-left: 22px;
  margin-right: 22px;
  background: #3B4A6A;
  border-radius: 10px;
}

.search-wrap > span {
  color: white;
  font-size: 20px;
  font-family: NEXONLv1GothicBold sans-serif;
}

.search-combo {
  margin-left: 13px !important;
  border-radius: 8px;
}

.search-btn {
  width: 111px;
  margin-left: 13px;
  height: 64px;
  background-color: #E5F1FC;
  color: #222222;
  font-size: 20px;
  font-family: NEXONLv1GothicBold sans-serif;
  border-radius: 8px;
  padding: 9px 20px;
}

.search-word {
  margin-left: 13px !important;
  margin-top: 0;
  height: 64px;
  border-radius: 8px;
  padding: 0 12px;
  background-color: #F2F2F2;
  color: #383737;
}

@media (max-width: 959px) {
  section {
    padding-top: 36px;
  }

  .wrap {
    padding: 0 25px;
  }

  .hr, .hr2 {
    width: 100%;
  }

  .name {
    text-align: center;
    margin-top: 38px;
    color: #4e4e4e;
    font-size: 25px;
    font-family: NEXONLv1GothicBold, sans-serif;
  }

  .address {
    text-align: center;
    margin-top: 27px;
    color: #4e4e4e;
    font-size: 16px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .tel {
    text-align: center;
    margin-top: 17px;
    color: #4e4e4e;
    font-size: 20px;
    font-family: NEXONLv1GothicRegular, sans-serif;
  }

  .paging {
    margin-top: 58px;
    margin-bottom: 58px;
  }

  .search-word, .search-btn {
    height: 56px
  }

  .search-btn {
    font-size: 16px;
  }

  .search-word {
    font-size: 14px;
  }
}

@media (min-width: 960px) {
  section {
    padding-top: 52px;
  }

  .paging {
    margin-top: 85px;
  }

  .table {
    max-width: 1583px;
  }

  .hr, .hr2, .search-wrap {
    max-width: 1583px;
  }

  .search-wrap {
    margin: 0 auto 82px;
    text-align: center;
  }

  th.text-center {
    color: #3c3c3c !important;
    font-size: 22px !important;
    font-family: NEXONLv1GothicBold sans-serif !important;
  }

  td.text-center {
    color: #4e4e4e !important;
    font-size: 22px !important;
    font-family: NEXONLv1GothicRegular sans-serif !important;
  }
}
</style>
