require(['./config'],()=>{
    require(['jquery'],()=>{
        class buycar{
            constructor(){
                this.allmoney=0;
                this.bind();
                this.num=0;
                
            }
            bind(){
                this.carlist = JSON.parse(localStorage.getItem('cart'));
                
                console.log(this.carlist)
                
                if(!this.carlist ){
                    console.log(1);
                    $(".nogood").removeClass("change");
                    $(".goodin").addClass("change");
                }else {
                    if(this.carlist.length==0){
                        $(".nogood").removeClass("change");
                        $(".goodin").addClass("change");
                    }else{
                        $(".nogood").addClass("change");
                        $(".goodin").removeClass("change");
                        this.addlist();
                        $("#goodnum").html(this.carlist.length);
                    }
                }
                
                // this.carlist = JSON.parse(localStorage.getItem('cart'));
                
            }
            //在页面中加入效果
            addlist(){
                let _this=this;
                let arr=[];
                let precar=JSON.parse(localStorage.getItem('cart'));
                $("#goodnum").html(precar.length);
                precar.forEach((good,index)=>{
                    $("<li>").html(`
                    <div><input type="checkbox" checked class="checks"></div>
                    <div class="pic"><img src="${good.image}" alt=""></div>
                    <div class="imfor">
                        <p>${good.name}</p>
                        <p>${good.enname}</p>
                        <p><a class="delet">删除</a></p>
                    </div>
                    <div class="price">￥${good.price}</div>
                    <div class="num">
                        <select name="" class="getnum" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div class='totle'>￥${good.price * good.number}</div>

                `).appendTo("#buycarvl").addClass("ll")
                
                arr.push(good.number);
                })
                
                $(".getnum").each((index,item)=>{
                    $(item).val(arr[index]);
                    $(item).on("click",()=>{
                        //注意不要用原生方法取值
                         $(".totle").eq(index).html("￥"+$(item).val() * Number($(".price").eq(index).html().slice(1)));
                        _this.changes();
                    })
                })
                //复选框算总数
                this.checkevent();
                //删除事件
                this.del();
            }
            del(){
                let _this=this
                $(".delet").each((index,item)=>{
                    $(item).on("click",function(){
                        //删除当前数据
                        $(this).parent().parent().parent().remove();
                        //删除localstorage里的数据
                         let carlist = JSON.parse(localStorage.getItem('cart'));
                         carlist.splice(index,1);
                         localStorage.setItem('cart', JSON.stringify(carlist));
                         let precar=JSON.parse(localStorage.getItem('cart'));
                         console.log(precar.length)
                         $("#goodnum").html(precar.length);
                         $("#buycarvl").html("");
                         _this.bind();
                         _this.changes();
                    })
                    
                })
            }

           checkevent(){
               let _this=this;
                let allmoney=this.allmoney;
               //全选框
               $("#allcheck").on("change",()=>{
                   
                    //全选框选中的情况下
                    $(".checks").each(function(index,check){
                        $(check).prop("checked",$("#allcheck").is(':checked'))
                    })
                    this.num =$("#allcheck").is(':checked')? $(".checks").length : 0 ;
                    
               })
              
               //单选框
               $(".checks").each((index,check)=>{
                     allmoney=0;
                 //计算当前框框的值 总价
                    $(".totle").each((index,item)=>{
                        if( $(check).is(':checked')){
                            let number=$(item).html().slice(1);
                            allmoney += Number(number);
                        }
                        $("#m1").html(allmoney);
                        $("#m2").html(allmoney);
                    })

                //选中框状态改变时
                   $(check).on("change",()=>{
                       //框框选中
                        this.num += $(check).is(':checked')? 1 : -1 ;
                        if(this.num===$(".checks").length){
                            $("#allcheck").prop("checked",true);
                        }
                        if(this.num!=$(".checks").length){
                            $("#allcheck").prop("checked",false);
                        }
                        
                        //计算改变后选中框框的值
                      _this.changes();
                    })
                    
                   
               })
               //全选框
               $("#allcheck").on("change",()=>{
                   console.log(1);
                   console.log($(".checks").eq(0).is(':checked'));
                    _this.changes();
                })
           
            }
            //重新计算总价
            changes(){
                let allmoney=this.allmoney;
                $(".totle").each((index,item)=>{
                    allmoney=0;
                    $(".checks").each(function(index,check){
                        if( $(check).is(':checked')){
                            let number=$(this).parent().parent().children(".totle").html().slice(1);
                            allmoney += Number(number);
                        }
                    })
                    $("#m1").html(allmoney);
                    $("#m2").html(allmoney);
                })
            }
         }
        new buycar();
    })
})
