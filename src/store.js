import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        contentWidth: 0,
        contentHeight: 0,
        LocalRoutes: null,
    },
    mutations: {
        setContent(state, { contentWidth, contentHeight }) {
            state.contentWidth = contentWidth;
            state.contentHeight = contentHeight;
        },
        setRoutes(state, LocalRoutes) {
            state.LocalRoutes = LocalRoutes;
        },

    },
    getters: {},
    actions: {},
    plugins: [createLogger()]
})


