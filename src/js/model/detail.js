require(['../config'],()=>{
    require(['headerjs','template','etalage','jquery','url','footerjs','fly'],(headerjs,template,etalage)=>{
        class Detail{
            constructor(){
                //选项卡方法
                this.disc();
                //从端口获取数据
                this.goodd();
            }
            init(){
                $(".colors span").hover(function(){
                    $(this).css({"height":"22px"})
                },function(){
                    $(this).css({"height":"10px"})
                })
                $(document).ready(function($){
                    $("#example3").etalage({
                        thumb_image_width: 300,
                        thumb_image_height: 300,
                        source_image_width: 900,
                        source_image_height: 900,
                        zoom_area_width: 300,
                        zoom_area_height: 300,
                        zoom_area_distance: 5,
                        small_thumbs: 4,
                        smallthumb_inactive_opacity: 0.3,
                        smallthumbs_position: 'left',
                        show_icon: false,
                        autoplay: false,
                        keyboard: false,
                        zoom_easing: false
                    })
                })
            }
            //选项卡
            disc(){
                $("#useway").on('click',()=>{
                    $(".left").addClass("changes");
                })
                $("#des").on('click',()=>{
                    $(".left").removeClass("changes");
                })
            }
            goodd(){
                $.get('http://rap2api.taobao.org/app/mock/210928/get',resp=>{
                    
                    if(resp.res_code==200){
                        this.renderGood(resp.gooddetail);
                        this.detail=resp.gooddetail.list[0];
                        //加入购物车的方法
                        
                        this.cart(resp);
                    }
                })
            }
            renderGood(respgood){
                let html1=template('Listg',{
                    list:respgood.list
                })
                let html2=template('Listp',{
                    piclist:respgood.bigpiclist
                })

                $('#gooddt').html(html1);
                $(".pics").html(html2);
                //放大镜插件
                this.init();
                
            }
            cart(resp){
                $("#addcart").on("click",()=>{
                    //获取当前页面的信息
                    this.detail={
                        ...this.detail,
                        number:Number($("#num option:selected").val()) 
                    }
                    //判断localstorage里是否有购物车
                    //先取出其中的内容
                    let cartlist=localStorage.getItem('cart');
                    
                    if(cartlist){
                        cartlist=JSON.parse(cartlist);
                        //判断购物车有没有当前数据
                        let i = -1;
                        let isexist=cartlist.some((cart,index)=>{
                            i=index;
                            return cart.id===this.detail.id;
                        })
                        //如果当前商品已经存在
                        if(isexist){
                            //数量相加
                            cartlist[i].number += this.detail.number;
                            //数量不超过5
                            if(cartlist[i].number > 5){
                                cartlist[i].number=5
                            }
                        }else{
                            //新建数据对象
                            cartlist.push(this.detail)
                        }
                        //刷新localstorage.
                        localStorage.setItem('cart', JSON.stringify(cartlist))
                    }else{
                        //没有购物车先创建一个并加入内容
                        localStorage.setItem('cart',JSON.stringify([this.detail]));

                    }
                    //飞入效果
                    $('<img src="$(".flyimg").attr("src")" style="width:20px;height:30px;">').fly({
                        start:$("#addcart").offset(),
                        end:$("#bagcart").offset(),
                        onEnd:function(){
                            this.destroy()
                            headerjs.cartstyle();
                        }
                    })
                })
                
            }
        }
       new Detail();
    })
})