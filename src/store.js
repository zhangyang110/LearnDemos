import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        contentWidth: 0,
        contentHeight: 0,
    },
    mutations: {
        setContent(state, {contentWidth, contentHeight}) {
            state.contentWidth = contentWidth;
            state.contentHeight = contentHeight;
        }
    },
    getters: {},
    actions: {},
    plugins: [createLogger()]
})


