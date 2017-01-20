$(document).ready(function(){


    $("#img_htmlacademy_js").click(function(){

        $(".sertificate__layout").html('<img src="img/htmlacademy_javascript_preview.jpg" width="800">');
        $(".sertificate__preview").css("display","block");

    });
   
    $("#img_htmlacademy").click(function(){
       
        $(".sertificate__layout").html('<img src="img/htmlacademy_preview.jpg" width="800">');
        $(".sertificate__preview").css("display","block");
                
    });
  
    $("#img_htmlacademy_adv").click(function(){
       
        $(".sertificate__layout").html('<img src="img/htmlacademy_adv_preview.jpg" width="800">');
        $(".sertificate__preview").css("display","block");
                
    });  
    
    $("#img_javascript").click(function(){
       
        $(".sertificate__layout").html('<img src="img/javascript.jpg" height="800">');
        $(".sertificate__preview").css("display","block");
                
    });
    
    $("#img_php").click(function(){
       
        $(".sertificate__layout").html('<img src="img/php.jpg" height="800">');
        $(".sertificate__preview").css("display","block");
                
    });
    
    $("#sertificate__close").click(function(){
               
        $(".sertificate__preview").css("display","none");        
        
    });
    
    
});