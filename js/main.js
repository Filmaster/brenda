
$(function(){
    $('h2').text('Vylepšení brenu 2 vuči Cz 805:');
    $('.objekt').attr({'style':'fill:rgba(40,0,0,0);'});
    $('.objekt2').attr({'style':'fill:rgba(10,0,255,0);'});
    $('.objekt3').attr({'style':'fill:rgba(10,0,255,0);'});
    $('.objekt4').attr({'style':'fill:rgba(10,0,255,0);'});
    $('.objekt5').attr({'style':'fill:rgba(10,0,255,0);'});
    $('.objekt6').attr({'style':'fill:rgba(10,0,255,0);'});
    $('.objekt7').attr({'style':'fill:rgba(10,0,255,0);'});
    $('.objekt8').attr({'style':'fill:rgba(10,0,255,0);'});

    $('.objekt').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
    })
     

    $('.objekt2').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        
    })
     $('.objekt3').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        
    })
     $('.objekt4').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
       
    })
     $('.objekt5').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        
    })
    $('.objekt6').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        
    })
    $('.objekt7').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        
    })
    $('.objekt8').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        
    })

    $('.objekt').on('mouseenter',function(){
        $('.objekt').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt').on('mouseleave',function(){
        $('.objekt').attr({'style':'fill:rgba(40,0,0,0);'});
     })
    $('.objekt2').on('mouseenter',function(){
        $('.objekt2').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt2').on('mouseleave',function(){
        $('.objekt2').attr({'style':'fill:rgba(40,0,0,0);'});
     })
    $('.objekt3').on('mouseenter',function(){
        $('.objekt3').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt3').on('mouseleave',function(){
        $('.objekt3').attr({'style':'fill:rgba(40,0,0,0);'});
     })

    $('.objekt4').on('mouseenter',function(){
        $('.objekt4').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt4').on('mouseleave',function(){
        $('.objekt4').attr({'style':'fill:rgba(40,0,0,0);'});


     })
     $('.objekt5').on('mouseenter',function(){
        $('.objekt5').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt5').on('mouseleave',function(){
        $('.objekt5').attr({'style':'fill:rgba(40,0,0,0);'});


     })
     $('.objekt6').on('mouseenter',function(){
        $('.objekt6').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt6').on('mouseleave',function(){
        $('.objekt6').attr({'style':'fill:rgba(40,0,0,0);'});


     })
     $('.objekt7').on('mouseenter',function(){
        $('.objekt7').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt7').on('mouseleave',function(){
        $('.objekt7').attr({'style':'fill:rgba(40,0,0,0);'});


     })
     $('.objekt8').on('mouseenter',function(){
        $('.objekt8').attr({'style':'fill:rgba(250,0,255,0.3);'});
     })
     $('.objekt8').on('mouseleave',function(){
        $('.objekt8').attr({'style':'fill:rgba(40,0,0,0);'});
     })

})