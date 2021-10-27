export default [
        {
            path: 'drawSvg',
            name: 'drawSvg',
            component: () => import("./drawSvg/index"),
            children:[
                {
                    
                }
            ],
            meta:{
                desc:'原生svg绘图'
            },
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
        {
            path: 'monaco',
            name: 'monaco',
            component: () => import("./monaco/index"),
            meta:{
                desc:'monaco插件'
            }
        },
        {
            path: 'compressImg',
            name: 'compressImg',
            component: () => import("./compressImg/index"),
            meta:{
                desc:'前端压缩图片'
            }
        },
        {
            path: 'interview',
            name: 'interview',
            component: () => import("./interview/index"),
            meta:{
                desc:'面试题'
            }
        }
    ]