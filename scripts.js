
$(document).ready(function(){  
  var winwidth  = $(window).width();
  var winheight = $(window).height();
  
  $(".container").css({'height': winheight, 'width': winwidth});    
  
  $("#wwidth").html(winwidth);
  $("#wheight").html(winheight);
  
  bgChanger("0");    


// Taralı alanı belirt 
$("#wtf").live("click", function(){ 
  $('#container').css('margin','0 auto');
  
  var winwidth  = $(window).width();
  var winheight = $(window).height();
  
  $("body").css('height',winheight);
  
  $('#container').animate({
    top: '+=60',
    width: '800px',
    height: '500px'
  }, 800, function() {
    // Animation complete.
      $('#container').animate({
        top: '0',
        width: winwidth,
        height: winheight
      }, 800, function() {
        // Animation complete.
        $('#container').css('margin','');
        $("body").css('height','');
      });
  });
});
  
}); //doc ready end


// Resize auto-fit
$(window).resize(function() {
  var winwidth  = $(window).width();
  var winheight = $(window).height();
  
  $(".container").css({'height': winheight, 'width': winwidth});    
  
  $("#wwidth").html(winwidth+'px');
  $("#wheight").html(winheight+'px');
}); 

// BG Changer
function bgChanger(repeat) {
  var randbg  = ['http://hizliresim.com/pEDpNo','http://hizliresim.com/7ALr1L','http://hizliresim.com/A3bdXB','http://hizliresim.com/G3JOWb','http://hizliresim.com/qEDZDB','http://hizliresim.com/G3JOJN','http://hizliresim.com/Y4979A']; // arkaplan resimleri
  var thebg   = randbg[Math.floor(Math.random()*randbg.length)]; // rastgele arkaplan seç
  
  var randpos = ['left top','left bottom','center top','center bottom','right top','right bottom']; // arkaplan pozisyonu  
  var thepos  = randpos[Math.floor(Math.random()*randpos.length)]; // rastgele pozisyon seç
  
  var tekrar  = "1000"; // arkaplan kaç defa değişecek?
  var msaniye = "4000"; // arkaplan kaç milisaniyede bir değişecek?
  
  if(repeat >= tekrar) { 
    $("#bgtext").html('Arkaplan daha fazla değişmeyecek. Tarayıcı şişmesin. <br /><a href="javascript:void();" class="myButton" id="devam">Şişsin, ben böyle şeylere takılmam</a>');
  }
  
  else {
    setTimeout(function(){ 
     $("body").css('background','url("images/'+thebg+'.jpg") '+thepos+'');
      repeat++;
      var kalan = tekrar-repeat;
      $("#bgtext").html('Arkaplan <span id="bgcount">'+kalan+'</span> defa daha değişecek.');
      bgChanger(repeat); 
    }, msaniye); 
   } 
}