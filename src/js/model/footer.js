define(['jquery'],()=>{
    class footer{
        constructor(){
            this.foot=$("footer");
            this.event();
        }
        event(){
            this.foot.load('/html/footer.html',()=>{

            })
        }
    }
    return new footer();
})