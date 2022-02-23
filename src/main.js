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
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true // 复制粘贴插件
Vue.use(VueClipboard)
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
sync(store,router);  
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
