
let joinPath = (routes, parentPath = '',) => {
    return routes.map(item => {
        if (item.children && item.children.length > 0) {
            let joinedPath = parentPath ? `${parentPath}/${item.path}` : item.path;
            return {
                ...item,
                path: joinedPath,
                children: joinPath(item.children, joinedPath)
            }
        } else {
            return {
                ...item,
                path: parentPath ? `${parentPath}/${item.path}` : item.path,
            }
        }
    })
}

let tree = [
    {
        path: 'a',
        children: [
            {
                path: 'b',
                children: [
                    {
                        path: 'c'
                    }
                ]
            },

        ]
    }
]

let formatedTree = joinPath(tree)
console.log(formatedTree);