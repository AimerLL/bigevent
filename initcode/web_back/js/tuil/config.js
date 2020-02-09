// 配置文件
// 把这个项目中所有的接口地址放在这里

// 所有接口的基地址
var BASHURL =  'http://192.168.1.101:8000'

// 用来保存所有的接口信息
var APILIST = {
    // 用户登录接口
    user_login : BASHURL + '/admin/login',
    // 用户退出接口
    user_logout : BASHURL + '/admin/logout',
    // 获取用户信息接口
    user_getInfo : BASHURL + '/admin/getuser'
}