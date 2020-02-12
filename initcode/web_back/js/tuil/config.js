// 配置文件
// 把这个项目中所有的接口地址放在这里

// 所有接口的基地址
var BASEURL =  'http://192.168.1.105:8000'

// 用来保存所有的接口信息
var APILIST = {
    // 用户登录接口
    user_login : BASEURL + '/admin/login',
    // 用户退出接口
    user_logout : BASEURL + '/admin/logout',
    // 获取用户信息接口
    user_getInfo : BASEURL + '/admin/getuser',
    // 文章类别获取
    category_get : BASEURL + '/admin/category_search',
    // 添加文章类别
    category_add : BASEURL + '/admin/category_add',
    // 删除文章类别
    category_del : BASEURL + '/admin/category_delete',
    // 编辑文章分类
    category_edit: BASEURL + '/admin/category_edit',
}