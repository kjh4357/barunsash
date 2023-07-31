<template>
  <v-app>
    <popup-dialog :visible="visible" @close="close" @noSee="no_see_today" />
    <router-view/>
  </v-app>
</template>

<script>
import PopupDialog from "@/components/PopupDialog";
import Cookies from 'js-cookie'

export default {
  name: 'App',
  components: {PopupDialog},
  data() {
    return {
      visible: false,
    }
  },

  created() {
    this.visible = Cookies.get('popup') !== 'n';
  },

  methods: {
    close() {
      this.visible = false
    },

    no_see_today() {
      Cookies.set('popup', 'n', {
        expires: 1,
        path: ''
      })

      this.visible = false
    },
  }
};
</script>

<style>
@font-face {
  font-family: 'NEXONLv1GothicBold';
  src: url('assets/font/NEXONLv1GothicBold.ttf') format('truetype');
}

@font-face {
  font-family: 'NEXONLv1GothicLight';
  src: url('assets/font/NEXONLv1GothicLight.ttf') format('truetype');
}

@font-face {
  font-family: 'NEXONLv1GothicRegular';
  src: url('assets/font/NEXONLv1GothicRegular.ttf') format('truetype');
}

@font-face {
  font-family: 'Outfit-Bold';
  src: url('assets/font/Outfit-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Outfit-Light';
  src: url('assets/font/Outfit-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Outfit-Regular';
  src: url('assets/font/Outfit-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Outfit-Medium';
  src: url('assets/font/Outfit-Medium.ttf') format('truetype');
}
</style>
