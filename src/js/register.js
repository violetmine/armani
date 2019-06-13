require(['./config'],()=>{
    require(['tools','cookie','headerjs','footerjs'],(tools)=>{
        class regis{
            constructor(){
               $("#regi").on('click',()=>{
                this.reg();
                
               }) 
            }
            reg(){
                let useremail=$("#useremail").val();
                let password=$("#password").val();
                let password2=$("#password2").val();
                //如果两次输入的密码相同
                if(password==password2){
                    
                    window.location.href="/html/login.html";
                    tools.fetch("http://localhost:80/api/armaniphp/register.php",{useremail,password}).then(resp=>{
                        console.log(1);
                        console.log(resp);
                        if(resp.res_code===1){
                            alert("注册成功");
                        }else{
                            alert("注册失败，请重新注册")
                        }
                    })
                }else{
                    alert("两次密码不同，请重新输入")
                }
            }
        }
        new regis();
    })
})