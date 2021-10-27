const route = [
    {
        path: '/home',
        name: 'home',
        redirect: 'drawSvg',
        component: () => import("./index"),
        children: []
    },
];
export default route;