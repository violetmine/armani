//配置文件
require.config({
    baseUrl:"/",
    paths:{
        jquery:"libs/jquery/jquery-3.2.1.min",
        headerjs:'js/model/header',
        footerjs:'js/model/footer',
        url:'js/model/url',
        cookie: 'libs/jquery-plugins/jquery.cookie',
        template:'libs/art-template/template-web',
        tools:'libs/tools',
        etalage:'libs/jquery-plugins/jquery.etalage.min'
    },
    shim: {
        cookie: {
          deps: ['jquery']
        },
        etalage:{
          deps:['jquery']
        }
      }
})