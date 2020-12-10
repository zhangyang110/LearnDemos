/**
* 常用工具
* */

export const myFilter = (arr) => {
    let _arr = arr.map(JSON.stringify);
    return [...new Set(_arr)].map(JSON.parse);
};

