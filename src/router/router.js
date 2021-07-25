import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPageWithStore from "@/pages/PostPageWithStore";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
