// 配置文件
// 把这个项目中所有的接口地址放在这里

// 所有接口的基地址
var BASHURL =  'http://192.168.1.105:8000'

// 用来保存所有的接口信息
var APILIST = {
    // 用户登录接口
    user_login : BASHURL + '/admin/login',
    // 用户退出接口
    user_logout : BASHURL + '/admin/logout',
    // 获取用户信息接口
    user_getInfo : BASHURL + '/admin/getuser',
    // 文章类别获取
    category_get : BASHURL + '/admin/category_search',
    // 添加文章类别
    category_add : BASHURL + '/admin/category_add',
    // 删除文章类别
    category_del : BASHURL + '/admin/category_delete'
}