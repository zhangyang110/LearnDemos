export default {
    Container: "_jsPlumpContainer",   //选择器id
    EndpointStyle: { radius: 4, fill: "#acd" },  //端点样式
    PaintStyle: { stroke: '#fafafa', strokeWidth: 3 },// 绘画样式，默认8px线宽  #456
    HoverPaintStyle: { stroke: '#1E90FF' }, // 默认悬停样式  默认为null
    EndpointHoverStyle: { fill: '#F00', radius: 6 }, // 端点悬停样式
    ConnectionOverlays: [                 //连线上的默认样式  这里是箭头
        ["Arrow", {
            location: 1,
            paintStyle: {
                stroke: '#00688B',
                fill: '#00688B',
            }
        }]
    ],
    Connector: ["Straight", { gap: 1 }]   //要使用的默认连接器的类型：折线，流程等
}
