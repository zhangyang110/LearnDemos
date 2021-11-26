/**
* 常用工具
* */
export const myFilter = (arr) => {
    let _arr = arr.map(JSON.stringify);
    return [...new Set(_arr)].map(JSON.parse);
};
export const joinPath = (routes, parentPath = '',) => {
    return routes.map(item => {
        if (item.children && item.children.length > 0) {
            let idPath = parentPath ? `${parentPath}/${item.path}` : item.path;
            return {
                ...item,
                path: idPath,
                children: joinPath(item.children, idPath)
            }
        } else {
            return {
                ...item,
                path: parentPath ? `${parentPath}/${item.path}` : item.path,
            }
        }
    })
}
//主要转换path 字段 并且按照规则拼接
export const routerToMenu = (routes) => {
    let aa = joinPath(routes)
    return aa
    // return changeRoutes(joinPath(routes))
}

// 分类tree数据结构转换
// changeTreeData(data, parentIdPath = '', parentNamePath = '') {
//     return data.map(item => {
//         if (item.children && item.children.length > 0) {
//             let idPath = parentIdPath ? `${parentIdPath}|${item.ID}` : item.ID;
//             let namePath = parentNamePath ? `${parentNamePath}|${item.DirName}` : item.DirName;

//             return {
//                 key: item.ID,
//                 title: item.DirName,
//                 entityType: item.EntityType,
//                 parentId: item.ParentId,
//                 tableName: item.TableName,
//                 orderNum: item.OrderNum,
//                 comments: item.Comments,
//                 isLeaf: false,
//                 idPath: idPath,
//                 namePath: namePath,
//                 children: this.changeTreeData(item.children, idPath, namePath),
//                 scopedSlots: { title: 'custom' },
//             };
//         }
//         return {
//             key: item.ID,
//             title: item.DirName,
//             entityType: item.EntityType,
//             parentId: item.ParentId,
//             tableName: item.TableName,
//             orderNum: item.OrderNum,
//             comments: item.Comments,
//             isLeaf: true,
//             idPath: parentIdPath ? `${parentIdPath}|${item.ID}` : item.ID,
//             namePath: parentNamePath ? `${parentNamePath}|${item.DirName}` : item.DirName,
//             scopedSlots: { title: 'custom' },
//         };
//     });
// },



