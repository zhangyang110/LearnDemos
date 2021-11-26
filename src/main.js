import Vue from 'vue';
import App from './App.vue';
import moment from "moment";
import store from "./store";
import router from "./router";
import {sync} from 'vuex-router-sync'; 
import '@/common/style/index.less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
//模拟数据
import './mock'
import AMap from 'vue-amap';
import jsPlumb from 'jsplumb';
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb
Vue.use(AMap);
Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.prototype.$echarts = echarts


Vue.use(ElementUI);
// 初始化vue-amap 高德地图
AMap.initAMapApiLoader({
    // 高德key
    key: 'e9049e7f5446dba12716c023be891d9e',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
    v: '1.4.4',
    uiVersion: '1.0'
});
<<<<<<< HEAD
sync(store, router);  
=======
sync(store,router);  
>>>>>>> 012edfbdc07aed2f10c18f5961d541410204b301
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
