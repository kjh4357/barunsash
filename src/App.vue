<template>
  <v-app>
    <popup-dialog :visible="visible" @close="close" @noSee="no_see_today" />
    <router-view />
  </v-app>
</template>

<script>
import PopupDialog from '@/components/PopupDialog';
import Cookies from 'js-cookie';

export default {
  name: 'App',
  components: { PopupDialog },
  data() {
    return {
      visible: false,
    };
  },

  created() {
    this.visible = Cookies.get('popup') !== 'n';
  },

  methods: {
    close() {
      this.visible = false;
    },

    no_see_today() {
      Cookies.set('popup', 'n', {
        expires: 1,
        path: '',
      });

      this.visible = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: 'NEXONLv1GothicBold';
  src: url('assets/font/NEXONLv1GothicBold.woff2') format('woff2');
}

@font-face {
  font-family: 'NEXONLv1GothicLight';
  src: url('assets/font/NEXONLv1GothicLight.woff2') format('woff2');
}

@font-face {
  font-family: 'NEXONLv1GothicRegular';
  src: url('assets/font/NEXONLv1GothicRegular.woff2') format('woff2');
}

@font-face {
  font-family: 'Outfit-Bold';
  src: url('assets/font/Outfit-Bold.woff2') format('woff2');
}

@font-face {
  font-family: 'Outfit-Light';
  src: url('assets/font/Outfit-Light.woff2') format('woff2');
}

@font-face {
  font-family: 'Outfit-Regular';
  src: url('assets/font/Outfit-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Outfit-Medium';
  src: url('assets/font/Outfit-Medium.woff2') format('woff2');
}
</style>
