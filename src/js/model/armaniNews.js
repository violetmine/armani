require(['../config'],()=>{
    require(['template','url','headerjs','footerjs'],(template,url)=>{
        class News{
            constructor(){
                //做端口匹配的方法
                this.goods();
                
            }
            goods(){
                $.get(url.baseUrl+'/armani/goods/imfo/get',resp=>{
                    if(resp.res_code == 200){
                        this.renderGood(resp.good);
                    }
                   
                })
            }
            renderGood(respgood){
                let html=template('listT',{
                    list:respgood.list
                })
                
                //把template模板写出来的html加到页面中
                $('#goods').html(html);
            }
        }
        new News();
    })
    
})