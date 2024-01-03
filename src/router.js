import { createRouter, createWebHashHistory } from "vue-router";
import Homescreen from './components/Homescree.vue';
import Linkform from './components/Linkform.vue';
import Sidemenu from "./components/Sidemenu.vue";

const routes = [
    { path: "/", name: "Homescreen", component: Homescreen },
    { path: "/addlink", name: "Linkform", component: Linkform },
    { path: "/aboutme", name: "Sidemenu", component: Sidemenu },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;