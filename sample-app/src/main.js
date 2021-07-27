import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});

const { bootstrap } = vueLifecycles;
const { mount } = vueLifecycles;
const { unmount } = vueLifecycles;

export {
  bootstrap,
  mount,
  unmount,
};
