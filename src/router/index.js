import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/catalog-agency',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/CatalogB2B.vue'),
  },
  {
    path: '/catalog-client',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/CatalogB2C.vue'),
  },
  {
    path: '/main',
    redirect: '/',
  },
  {
    path: '/',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/MainView.vue'),
    meta: {
      title: '바른샤시',
    },
  },
  {
    path: '/sash',
    name: 'sash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sash" */ '../views/SashView.vue'),
    meta: {
      title: '바른샤시',
    },
  },
  {
    path: '/history',
    name: 'history',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "history" */ '../views/HistoryView.vue'),
    meta: {
      title: '바른히스토리',
    },
  },
  {
    path: '/line-up',
    name: 'line-up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "line-up" */ '../views/LineUpView.vue'),
    meta: {
      title: '바른라인업',
    },
  },
  {
    path: '/barun-framework',
    name: 'barun-framework',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "line-up" */ '../views/GreenRemodelingView.vue'
      ),
    meta: {
      title: '바른시공',
    },
  },
  {
    path: '/service-center',
    name: 'service-center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "service" */ '../views/ServiceCenterView.vue'
      ),
    meta: {
      title: '고객지원',
    },
  },
  {
    path: '/terms',
    name: 'terms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "service" */ '../views/TermsOfServiceView.vue'
      ),
    meta: {
      title: '이용약관',
    },
  },
  {
    path: '/indi',
    name: 'indi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "service" */ '../views/PrivacyPolicyView.vue'
      ),
    meta: {
      title: '개인정보처리방침',
    },
  },
  {
    path: '/admin/agency',
    name: 'admin-agency',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "service" */ '../views/AdminAgency.vue'),
    meta: {
      title: '대리점 등록',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  const title = to.meta.title === undefined ? '바른샤시' : to.meta.title;
  Vue.nextTick(() => {
    document.title = title;
  });
});

export default router;
