
let ipUrl = 'http://127.0.0.1:7001/default/';

let servicePath = {
    getArticleList: ipUrl + 'getArticleList',   // 首页接口
    getArticleById: ipUrl + 'getArticleById/',  // detail页接口
    getTypeInfo: ipUrl + 'getTypeInfo',         // 获取文章类别
    getListById: ipUrl + 'getListById/',        // 根据类别ID获取文章列表
}

export default servicePath