
import { notFoundRoute } from "@/route"
import { staticRoutes } from "@/route"
export const diguiRoutes = (routes) => {
    return routes.map((item) => {
        if (item.children && item.children instanceof Array) {
            return {
                ...item,
                children: diguiRoutes(item.children),
                // component: () => import(`@/pages/${item.component}/index.vue`)
                component: (resolve) => require([`@/pages/${item.component}/index.vue`], resolve)
            }
        } else {
            return {
                ...item,
                component: () => import(`@/pages/${item.component}/index.vue`)
            }
        }
    })
}
    
export const dynamicRoutes = (asyncRoutes) => {
    return staticRoutes.map(t => {
        if (t.path === '/') {
            return {
                ...t,
                children: diguiRoutes(asyncRoutes)
            }
        }
        return t
    }).concat(notFoundRoute)
}


