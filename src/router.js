import Vue from "vue";
import VueRouter from "vue-router";
import { staticRoutes } from "@/route"
// import { descending } from "d3-array";
Vue.use(VueRouter);
// const context = require.context('./route', true, /\/*\/route\.js$/);
// const keys = context.keys();
// let routes = keys.reduce((initial, key) => {
//     let module = context(key);
//     return initial.concat(module instanceof Array ? module : module.default)
// }, []);
// const DynamicLayout = () => import('@/layout');
/**created by ZhangY on 2020/6/6
*@desc 兼容 重复路由跳转报错问题
*/
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const creatRouter=()=>new VueRouter({
    mode: "hash",
    routes: staticRoutes
});
const router = creatRouter()

export const resetRouter=()=>{
    const newRouter=creatRouter()
    router.matcher=newRouter.matcher;
}
export default router;