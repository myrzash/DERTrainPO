import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'

import VueLocalization from 'vuejs-localization'
import Lang from './Lang.vue'
import VueScroll from 'vue-scroll'

import store from './store'
import Main from './components/Main.vue'
import Game from './components/Game.vue'
import Result from './components/DialogResult.vue'
// import Error from './components/404.vue'

Vue.use(Vuetify);
Vue.use(VueRouter);
VueLocalization.requireAll(require.context('./lang', true, /\.js$/));
Vue.use(VueLocalization);
Vue.use(VueScroll);

const router = new VueRouter({
    routes: [
        {
            path: '/:lang', component: Lang,
            children: [
                {path: '', name: 'main', component: Main},
                {
                    path: 'game/:gameId', name: 'game', component: Game,
                    // children: [
                    //
                    // ]
                    // children: [
                    //     {path: 'lect', name: 'lect', component: Lecture},
                    //     {path: 'sort', name: 'sort', component: Sortable},
                    //     {path: 'test/:pos', name: 'test', component: Test},
                    // ]
                },
                {path: 'res', name: 'res', component: Result}
            ]
        },
    ]
});

new Vue({
    el: '#app',
    // directives: {
    //     'v-scroll': VueScroll  // tried 'vScroll': vScroll as well
    // },
    router,
    store,
    render: h => h(App)
});


document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
};