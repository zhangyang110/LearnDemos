const route = [{
    path: '/home',
    name: 'home',
    redirect:'/home/drawSvg',
    component: () => import("./index"),
    children: [
        {
            path: 'drawSvg',
            name: 'drawSvg',
            component: () => import("./drawSvg/index"),
            meta:{
                desc:'原生svg绘图'
            }
        },
        {
            path: 'drawPie',
            name: 'drawPie',
            component: () => import("./drawPie/index"),
            meta:{
                desc:'原生Canvas绘饼图'
            }
        },
        {
            path: 'drawLine',
            name: 'drawLine',
            component: () => import("./drawLine/index"),
            meta:{
                desc:'原生Canvas绘折线图'
            }
        },
    ]
},
];
export default route;