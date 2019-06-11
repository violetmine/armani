require(['../config'],()=>{
    require(['jquery','etalage','template','url','headerjs','footerjs'],(etalage)=>{
        class Detail{
            constructor(){
                this.init();
                this.disc();
            }
            init(){
                $(document).ready(function($){
                    $("#example3").etalage({
                        thumb_image_width: 300,
                        thumb_image_height: 300,
                        source_image_width: 600,
                        source_image_height: 600,
                        zoom_area_width: 3,
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
            disc(){
                $("#useway").on('click',()=>{
                    $(".left").addClass("changes");
                })
                $("#des").on('click',()=>{
                    console.log(1);
                    $(".left").removeClass("changes");
                })
            }
        }
        return new Detail();
    })
})