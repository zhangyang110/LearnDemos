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

