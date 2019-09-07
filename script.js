$(document).ready(funcion)(){
                 
    $('.red').click(funcion(){
                    
    (this).fadeOut();                
    
});            
            
 $(.green').click(funcion(){
                   
    $('.blue').hide ();             
                                  
                 
});

$('.yellow').click(funcion(){
                 
    $('.blue').fadeIn();
    $('.green').hide();
});

$('.blue').click(funcion(){
    $('.red, .green; .yellow').toggle();

});
                 
