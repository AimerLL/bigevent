
    // 定义一个对象，其中一个方法是login
    // 模块式的开发
    // 把所有与!!用户相关!!的功能写在一个对象中
var user = {
    // 用户登录
    login: function (myName, myPassword) {
        // $.post(地址，参数，回调)
        return $.post(APILIST.user_login, {
            'user_name': myName,
            'password': myPassword
        })
    },
    // 用户退出
    logout: function () {
        return $.post(APILIST.user_logout)
    },
    // 获取用户信息
    getInfo: function () {
        return $.get(APILIST.user_getInfo)
    }
}
