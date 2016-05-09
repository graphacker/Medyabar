$(function(){
    $('.olc').css({'display':'flex',
                         'justify-content':'center',
                         'align-items':'center',
                          'background':'#ccc' });
                         
    $('.olc').each(function(){
        var dW = $(this).width();
        var dH = $(this).height();
        $(this).append('<span style="color:#959595; font-family: Helvetica,normal; font-size:25px;">'+ dW +' x '+ dH +'</span>')
    })
    
})