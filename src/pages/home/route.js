const route = [{
    path: '/home',
    name: 'home',
    redirect: '/home/drawSvg',
    component: () => import("./index"),
    children: [
        {
            path: 'drawSvg',
            name: 'drawSvg',
            component: () => import("./drawSvg/index"),
            meta: {
                desc: '原生svg绘图'
            }
        },
        {
            path: 'drawPie',
            name: 'drawPie',
            component: () => import("./drawPie/index"),
            meta: {
                desc: '原生Canvas绘饼图'
            }
        },
        {
            path: 'drawLine',
            name: 'drawLine',
            component: () => import("./drawLine/index"),
            meta: {
                desc: '原生Canvas绘折线图'
            }
        },
        {
            path: 'monaco',
            name: 'monaco',
            component: () => import("./monaco/index"),
            meta: {
                desc: 'monaco插件'
            }
        },
        {
            path: 'compressImg',
            name: 'compressImg',
            component: () => import("./compressImg/index"),
            meta: {
                desc: '前端压缩图片'
            }
        },
        {
            path: 'SeamlessCarousel',
            name: 'SeamlessCarousel',
            component: () => import("./SeamlessCarousel/index"),
            meta: {
                desc: '垂直无缝轮播demo'
            }
        },
        {
            path: 'coumputedRGB',
            name: 'coumputedRGB',
            component: () => import("./coumputedRGB"),
            meta: {
                desc: '渐变色计算公式'
            }
        },
    ]
},
];
export default route;