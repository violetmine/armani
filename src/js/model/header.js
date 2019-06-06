define(['template','url','jquery'],(template,url)=>{
    class header{
        constructor(){
            this.head=$("header");
            this.event();
        }
        event(){
            this.head.load('/html/header.html',()=>{
                this.hovershow();
                this.login();
                this.orderMage();
                this.buybag();
            })
        }
        hovershow(){
           
            //导航第一个的hover事件
            $(".nav .u1 .news").hover(()=>{
                // console.log(1);
                $("<div>").appendTo(".nav .u1 .news").addClass("show-box");
                $(".show-box").html(`<ul>
                <li> <a href="">新品上市</a></li>
                <li><a href="">当季推荐</a></li>
                <li><a href="">全部产品</a></li>
            </ul>`)
            },()=>{
                $(".show-box").remove();
            });
            //第二个
            $(".nav .u1 .colormakeup").hover(()=>{
                // console.log(1);
                $("<div>").appendTo(".nav .u1 .colormakeup").addClass("show-colormakeup");
                $(".show-colormakeup").html(`<div>
                <div class="co-top">
                <ul>
                    <li>唇部</li>
                    <li> <a href="">唇釉</a> </li>
                    <li><a href="">唇膏</a> </li>
                    <li><a href="">唇线笔</a> </li>
                </ul>
                <ul>
                    <li>面部</li>
                    <li> <a href="">腮红/胭脂</a> </li>
                    <li><a href="">遮瑕</a> </li>
                    <li><a href="">粉底液</a> </li>
                    <li><a href="">面部清洁</a> </li>
                    <li><a href="">隔离与底妆</a> </li>
                </ul>
                <ul>
                    <li>眼部</li>
                    <li> <a href="">眉笔</a> </li>
                    <li><a href="">眼线</a> </li>
                    <li><a href="">眼影</a> </li>
                    <li><a href="">睫毛膏</a> </li>
                    <li><a href="">美眸膏</a> </li>
                    <li><a href="">眼部卸妆</a> </li>
                </ul>
                <ul>
                    <li>美容工具</li>
                    <li> <a href="">专业化妆刷</a> </li>
                </ul>
                <ul>
                    <li>发现更多</li>
                    <li> <a href="">阿玛尼唇妆衣橱</a> </li>
                    <li><a href="">阿玛尼粉妆衣橱</a> </li>
                    <li><a href="">阿玛尼香氛衣橱</a> </li>
                    <li><a href="">全新【裸感出色】彩妆系列</a> </li>
                </ul>
                </div>
                <div class="bottom">
                    <div>
                        <p>臻致丝绒哑光唇釉</p>
                        <p>The Best seller</p>
                        <p>lip gloss</p>
                        <a href="">立即购买</a>
                    </div>
                    <div>
                        <p>臻致丝绒哑光唇釉</p>
                        <p>The Best seller</p>
                        <p>lip gloss</p>
                        <a href="">立即购买</a>
                    </div>
                    <div>
                        <p>臻致丝绒哑光唇釉</p>
                        <p>The Best seller</p>
                        <p>lip gloss</p>
                        <a href="">立即购买</a>
                    </div>
                </div>
            </div>`)
            },()=>{
                $(".show-colormakeup").remove();
            })
        }
        login(){
             //登录的hover事件
             $("#loging").hover(()=>{
                console.log(1);
                $("<div>").appendTo('.show-login').addClass('show-loging');
                $('.show-loging').html(`<div class="left">
                <p>登录</p>
                <p><input type="text" placeholder="邮箱/手机"></p>
                <p><input type="text" placeholder="您的密码"></p>
                <p><input type="checkbox" checked><span>记住用户名</span><a href="">忘记密码</a></p>
                <p><a href="">登录</a></p>
                <p>----------------------或</p>
                <p>使用合作账号登录</p>
                <p><a href="">微信</a><a href="">新浪</a><a href="">支付宝</a><a href="">QQ</a></p>
            </div>
            <div class="right">
                <p>新用户注册</p>
                <p>注册成为阿玛尼美妆官网会员，下单流程更流畅，并可查看您的订单记录，追踪订单物流，第一时间获取官网最新资讯.</p>
                <p><a href="/html/register.html">立即注册</a></p>
            </div>`)
            },()=>{
                $('.show-loging').remove();
            })

    }
    orderMage(){
        //判断购物车内是否有商品，这是空购物弹框样式
        $("#order").hover(()=>{
            console.log(1);
            $("<div>").appendTo('.show-order').addClass('show-ordering');
            $('.show-ordering').html(` <div class="left">
            <p>订阅获取阿玛尼官网资讯</p>
            <p>沉迷于乔治阿玛尼的美丽世界. <br>
                报名参加我们的电子邮件通讯，享受我们的会员特权.</p>
            <p><input type="e-mail" placeholder="您的邮箱"></p>
            <p><a href="">立即订阅</a></p>
            <p><input type="checkbox"><span>我同意依照本使用条款和隐私政策对我的个人信息进行收集和使用；我已阅读并确认被给予充分机会理解该使用条款</span></p>
        </div>
        <div class="right">
            <p><img src="/images/newsletter-slot.jpg" alt=""></p>
            <p>阿玛尼美妆官网会员权益</p>
            <p>直击阿玛尼袖长最新妆容，获取潮流美妆技巧，<br>
                尊奢会员专属礼遇.</p>
        </div>`)
        
        },()=>{
            $('.show-ordering').remove();
        })

    }
    //hover购物车事件
    buybag(){
        $("#bag").hover(()=>{
            console.log(1);
            $("<div>").appendTo('#show-bag').addClass('show-bagingbefore');
            $('.show-bagingbefore').html(`  
            <div class="left">
                    <p ><span>您的购物袋为空</span><br><a href="/index.html">立即选购你喜欢的商品</a></p>
            </div>
            <div class="right">
                    <p  class="pt">你可能喜欢</p>
                    <div id="rangoods">

                    </div>
                    <script type='text/html' id="listL">
                        {{each list likeG}}
                                        <div>
                                            <div><img src="{{likeG.image}}" alt=""></div>
                                            <div>
                                                <p>{{likeG.name}}</p>
                                                <p>
                                                    <i class="iconfont icon-star_full"></i>
                                                    <i class="iconfont icon-star_full"></i>
                                                    <i class="iconfont icon-star_full"></i>
                                                    <i class="iconfont icon-star_full"></i>
                                                    <i class="iconfont icon-ai65"></i>
                                                </p>
                                                <p>￥{{likeG.price}}</p>
                                            </div>
                                        </div>
                        {{/each}}
                    </script>
            </div>`)
        //购物袋为空时的请求数据方法
        this.render();
        },()=>{
            $('.show-bagingbefore').remove();
        })
    }
    render(){
        $.get(url.baseUrl+"/armani/goods/imfo/get",(resp)=>{
            console.log(resp);
             this.recommend(resp.mightlike);
        })
    }
    recommend(like){
        let html=template('listL',{
            list:like.list
        })
        $('#rangoods').html(html)
    }
    
   }
   return new header();
})