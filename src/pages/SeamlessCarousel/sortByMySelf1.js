/**
 * 自己总结的reduce 排序方法es6  默认从小到大
 *
 * */
let ary = [
    {
        age: 9
    },
    {
        age: 1
    },
    {
        age: 8
    },
    {
        age: 2
    },
    {
        age: 7
    },
    {
        age: 3
    }]

let sortByMySelf = function (arr, key) {
    return arr.reduce((total, next) => {
        let findIndex = total.findIndex((item) => {
            return item[key] > next[key]
        })
        return findIndex === -1 ? total.concat([next]) : total.splice(findIndex, 0, next) && total
    }, [])
}
let result = sortByMySelf(ary, 'age')
console.log(result, 'result');

let aaa = [1, 2, 3]
aaa.splice(1, 0, 4)

console.log(aaa);


//测试

let ceshiary = [
    {
        name: '张二',
        id: 2
    },
    {
        name: '张一',
        id: 15
    },
    {
        name: '张一',
        id: 1
    },
    {
        name: '张三',
        id: 3
    }, {
        name: '张四',
        id: 4

    }, {
        name: '张五',
        id: 55
    },
    {
        name: '张一',
        id: 15
    },
    {
        name: '张二'
        ,
        id: 2
    },
    {
        name: '张一',
        id: 15
    },
    {
        name: '张一',
        id: 1
    },
    {
        name: '张三',
        id: 3
    },
    {
        name: '张二'
        ,
        id: 25
    }, {
        name: '张三',
        id: 35
    }, {
        name: '张四',
        id: 4

    },
    {
        name: '张五',
        id: 5
    },
    {
        name: '张二'
        ,
        id: 2
    },
    {
        name: '张二'
        ,
        id: 25
    }, {
        name: '张三',
        id: 35
    }, {
        name: '张四',
        id: 4

    },
    {
        name: '张一',
        id: 15
    },
    {
        name: '张一',
        id: 1
    },
    {
        name: '张三',
        id: 3
    }, {
        name: '张四',
        id: 4

    }, {
        name: '张五',
        id: 55
    },
    {
        name: '张一',
        id: 15
    },
    {
        name: '张二'
        ,
        id: 25
    },
    {
        name: '张三',
        id: 35
    }, {
        name: '张四',
        id: 4

    }, {
        name: '张五',
        id: 5
    },
];
let fn = function (ary, key) {
    return ary.reduce((total, next) => {
        let index = total.findIndex((item, index, self) => {
            return item[key] === next[key]
        })
        return index === -1 ? total.push(next) && total : total.splice(index, 0, next) && total
    }, [])
}
let xx = fn(ceshiary, 'name');
let ss = [
    {name: '张二', id: 25},
    {name: '张二', id: 25},
    {name: '张二', id: 25},
    {name: '张二', id: 2},
    {name: '张二', id: 2},
    {name: '张二', id: 2},
    {name: '张一', id: 15},
    {name: '张一', id: 15},
    {name: '张一', id: 15},
    {name: '张一', id: 15},
    {name: '张一', id: 15},
    {name: '张一', id: 1},
    {name: '张一', id: 1},
    {name: '张一', id: 1},
    {name: '张三', id: 35},
    {name: '张三', id: 35},
    {name: '张三', id: 35},
    {name: '张三', id: 3},
    {name: '张三', id: 3},
    {name: '张三', id: 3},
    {name: '张四', id: 4},
    {name: '张四', id: 4},
    {name: '张四', id: 4},
    {name: '张四', id: 4},
    {name: '张四', id: 4},
    {name: '张五', id: 5},
    {name: '张五', id: 5},
    {name: '张五', id: 55},
    {name: '张五', id: 55}
]

