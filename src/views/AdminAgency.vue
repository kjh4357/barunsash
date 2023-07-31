<template>
  <section>
    <BarunHeader/>
    <div class="section">
      <div class="phrase-wrapper">
        <div class="phrase">
          대리점 등록
        </div>
      </div>
    </div>
    <div class="wrap">
      <v-container>
        <v-row>
          <v-col cols="10"/>
          <v-col>
            <v-btn
                block
                color="#162138"
                dark
                depressed
                @click="showWriteDialog"
            >
              대리점 등록
            </v-btn>
          </v-col>
        </v-row>
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
        <v-pagination
            v-model="page"
            :length="total_page"
            circle
            class="paging"
            @input="getAgencies"
        />
      </v-container>
      <v-dialog
          v-model="show_dialog"
          max-width="400px"
          persistent
      >
        <v-card>
          <v-card-text />
          <v-card-title>
            대리점 등록
          </v-card-title>
          <v-card-text>
            <v-text-field
                v-model="name"
                label="대리점명"
                required
            />
          </v-card-text>
          <v-card-text>
            <v-text-field
                v-model="address"
                label="주소"
                required
            />
          </v-card-text>
          <v-card-text>
            <v-text-field
                v-model="tel"
                label="전화번호"
                required
            />
          </v-card-text>
          <v-card-actions v-show="!is_loading">
            <v-spacer />
            <v-btn
                color="blue darken-1"
                text
                @click="cancel"
            >
              취소
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="createAgency"
            >
              등록
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>

<script>
import BarunHeader from "@/components/BarunHeader";
import * as api from '@/api/agency';

export default {
  name: "AdminAgency",
  components: {BarunHeader},
  methods: {
    async getAgencies() {
      const res = await api.getAgencies('', '', '', this.page)
      if (res.status === 200) {
        const data = res.data
        this.total_page = Math.ceil(data.total);
        this.items = data.results;
      }
    },

    cancel() {
      this.name = ''
      this.address = ''
      this.tel = ''
      this.show_dialog = false
    },

    validate() {
      if (this.name.trim() === '') {
        this.notifyError("대리점명을 입력하세요")
        return false;
      }

      if (this.address.trim() === '') {
        this.notifyError("주소를 입력하세요")
        return false;
      }

      if (this.tel.trim() === '') {
        this.notifyError("전화번호를 입력하세요")
        return false;
      }

      return true
    },

    async createAgency() {
      if (!this.validate()) return;

      this.is_loading = true

      try {
        const res = await api.createAgency({name: this.name, address: this.address, tel: this.tel})
        if (res.status === 200) {
          this.show_dialog = false
          this.notifySuccess('등록되었습니다.')
          this.page = 1
          await this.getAgencies()
          this.name = ''
          this.address = ''
          this.tel = ''
        }
      } catch (e) {
        this.notifyError('오류가 발생했습니다. 다시 시도해 주세요.')
      } finally {
        this.is_loading = false
      }
    },

    showWriteDialog() {
      this.show_dialog = true;
    },

    notifyError(message) {
      this.$dialog.notify.error(message)
    },

    notifySuccess(message) {
      this.$dialog.notify.success(message)
    },
  },
  data() {
    return {
      is_loading: false,
      show_dialog: false,
      page: 1,
      total_page: 0,
      items: [],
      name: '',
      address: '',
      tel: '',
    }
  },
  async created() {
    await this.getAgencies()
  }
}
</script>

<style scoped>
.section {
  height: 527px;
  background-size: cover;
  background-image: url("../assets/service-center-1.png");
}

.phrase-wrapper {
  height: 527px;
  display: flex;
  align-items: center;
}

.phrase {
  width: 100%;
  color: white;
  text-align: center;
  font-size: 40px;
  font-family: NEXONLv1GothicBold, sans-serif;
}

.table, .hr {
  max-width: 100%;
}

.hr {
  height: 3px;
  background: #4e4e4e;
}

.paging {
  margin-top: 85px;
}
</style>
