// 把所有文章分类的相关操作写在这里

var category = {
    // 文章类别获取
    get: function () {
        return $.get(APILIST.category_get)
    },
    // 添加文章类别
    add: function(name,slug){
        return $.post(APILIST.category_add,
        {'name': name, 'slug':slug})
    },
    // 删除文章类别
    del: function(){
        return $.post(APILIST.category_del)
    }
}