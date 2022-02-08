export const staticRoutes=[
    {
        path: '/',
        redirect: "/login",
        component: () => import('@/layout'),
        children:[]
    },
    {
        path: '/login',
        component: () => import('@/pages/login'),
    },
]
export const notFoundRoute=[
    { path: '*', component: () => import("@/pages/404"), }
]
//这个是 当作axios 接口请求返回的作用

export default [
    {
        path: 'drawSvg',
        name: 'drawSvg',
        component: 'drawSvg',
        meta: {
            desc: '原生svg绘图',
            auth: ['norma']
        },
        children: [
            {
                path: 'drawPie',
                name: 'drawPie',
                component: 'drawPie',
                meta: {
                    desc: '原生Canvas绘饼图',
                    auth: ['admin']
                },
                children: [
                    {
                        path: 'drawLine',
                        name: 'drawLine',
                        component: 'drawLine',
                        meta: {
                            desc: '原生Canvas绘折线图',
                            auth: ['admin']
                        },
                    },
                ],

            },
        ]
    },
    {
        path: 'monaco',
        name: 'monaco',
        component: 'monaco',
        meta:{
            desc:'monaco插件',
            auth:['admin']
        }
    },
    {
        path: 'compressImg',
        name: 'compressImg',
        component:  'compressImg',
        meta:{
            desc:'前端压缩图片',
            auth:['admin']
        }
    },
    {
        path: 'interview',
        name: 'interview',
        component: "interview",
        meta:{
            desc:'面试题'
        }
    },
    {
        path: 'jsPlumb',
        name: 'jsPlumb',
        component: "jsPlumb",
        meta:{
            desc:'jsPlumb插件'
        }
    },
    {
        path: 'turn',
        name: 'turn',
        component: "turn",
        meta:{
            desc:'turnJs 插件'
        }
    },
    {
        path: 'SeamlessCarousel',
        name: 'SeamlessCarousel',
        component: "SeamlessCarousel",
        meta:{
            desc:'SeamlessCarousel 插件'
        }
    },
    {
        path: 'coumputedRGB',
        name: 'coumputedRGB',
        component: "coumputedRGB",
        meta:{
            desc:'计算渐变 '
        }
    },
    {
        path: 'sandBoxIframe',
        name: 'sandBoxIframe',
        component: "sandBoxIframe",
        meta:{
            desc:'嵌套sandBox'
        }
    },
]