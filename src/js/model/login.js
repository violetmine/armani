require(['../config'],()=>{
    require(['cookie','headerjs','footerjs'],(cookie)=>{
        class log{
            constructor(){
             this.init();   
            }
            init(){
                $("#logi").on('click',()=>{
                    this.cookID();
                })
            }
            cookID(){
                
                let useremail=$("#useremail").val();
                let password=$("#password").val();
                //需要判断数据库是否有这个账号

                $.cookie("useremail",useremail,{path:'/',expires:7});
                $.cookie("password",password,{path:'/',expires:7});
                
                if($.cookie('useremail') != "" && $.cookie("password") !=""){
                    $("#loging").html($.cookie('useremail'));
                    $("#loging #aa").addClass("loginin");
                }else{
                    alert("登录名和密码不能为空");
                }
                window.location.href='/index.html';
               
            }
        }
        new log();
        
    })
})