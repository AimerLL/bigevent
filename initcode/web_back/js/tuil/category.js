// 把所有文章分类的相关操作写在这里

var category = {
    // 获取文章类别
    get: function () {
        return $.get(APILIST.category_get)
    },
    // 添加文章类别
    add: function (name, slug) {
        return $.post(APILIST.category_add,
            { 'name': name, 'slug': slug })
    },
    // 删除文章类别
    del: function (id) {
        return $.post(APILIST.category_del,
            { 'id': id })
    },
    // 编辑文章类型
    edit: function (id, name, slug) {
        return $.post(APILIST.category_edit,
            { 'id': id, 'name': name, 'slug': slug })
    }
}