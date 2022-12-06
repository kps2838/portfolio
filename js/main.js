$(function(){
    let w = window.innerWidth;
    console.log(w);
    $(window).resize(function(){
        if(w=768) {
            location.reload()
        }
        else if(w=767){
            location.reload()
        }
    });

    if(w >= 768){
        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          var about_scroll = $('#about').offset().top;
          var works_scroll = $('#works').offset().top;
          var contact_scroll = $('#contact').offset().top;
  
          if (scroll < about_scroll) {
              $("#gnb > ul > li > a").css("color" , "#fff");
              $("#gnb .border").css("background-color" , "#fff");
              $("#gnb > ul > li").eq(0).find('a').css('color','#ff0000')
            } 
            
            else if (scroll >= about_scroll && scroll < works_scroll) {
              $("#gnb > ul > li > a").css("color" , "#252C65");
              $("#gnb .border").css("background-color" , "#252C65");
              $("#gnb > ul > li").eq(1).find('a').css('color','#ff0000')
            } 
              
              else if (scroll >= works_scroll && scroll < contact_scroll) {
              $("#gnb > ul > li > a").css("color" , "#fff");
              $("#gnb .border").css("background-color" , "#fff");
              $("#gnb > ul > li").eq(2).find('a').css('color','#ff0000')
            } 
            
            else if (scroll >= contact_scroll){
              $("#gnb > ul > li > a").css("color" , "#252C65");
              $("#gnb .border").css("background-color" , "#252C65");
              $("#gnb > ul > li").eq(3).find('a').css('color','#ff0000')
            }
        });


       // 섹션 스크롤
        var scroll_section = function(){
          $("section").each(function () {
            $(this).on("mousewheel DOMMouseScroll", function (e) {
              e.preventDefault();
              var delta = 0;
              if (!event) event = window.event;
              if (event.wheelDelta) {
                  delta = event.wheelDelta / 120;
                  if (window.opera) delta = -delta;
              } else if (event.detail) delta = -event.detail / 3;
        
              var moveTop = null;
              if (delta < 0) {
                  if ($(this).next() != undefined) {
                      moveTop = $(this).next().offset().top;
                  }
              } else {
                  if ($(this).prev() != undefined) {
                      moveTop = $(this).prev().offset().top;
                  }
              }
        
              $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
              }, {
                  duration: 100, complete: function () {
                  }
        
              });
        
            });
          });
        }
        scroll_section();

  

        // about 영역
        $('#about .container .img').hover(function(){
          $(this).find('.name_band').find('img').attr('src', './images/name_white.png')
        }, function(){
          $(this).find('.name_band').find('img').attr('src', './images/name.png')
        });


        // 팝업창
        $('#website .han .detail').click(function(){
          $('.workdetail .w_detail_01').addClass('on');
          $('#works .bg_black').addClass('on');
          $('section').off("mousewheel DOMMouseScroll");
        });

        $('#website .rbw .detail').click(function(){
          $('.workdetail .w_detail_02').addClass('on');
          $('#works .bg_black').addClass('on');
          $('section').off("mousewheel DOMMouseScroll");
        });

        $('#website .uplix .detail').click(function(){
          $('.workdetail .w_detail_03').addClass('on');
          $('#works .bg_black').addClass('on');
          $('section').off("mousewheel DOMMouseScroll");
        });

        $('#website .ikea .detail').click(function(){
          $('.workdetail .w_detail_04').addClass('on');
          $('#works .bg_black').addClass('on');
          $('section').off("mousewheel DOMMouseScroll");
        });

        $('#responsive .noroo .detail').click(function(){
          $('.workdetail .r_detail_01').addClass('on');
          $('#works .bg_black').addClass('on');
          $('section').off("mousewheel DOMMouseScroll");
        });

        $('#responsive .roche .detail').click(function(){
          $('.workdetail .r_detail_02').addClass('on');
          $('#works .bg_black').addClass('on');
          $('section').off("mousewheel DOMMouseScroll");
        });


        // 팝업창 닫기
        $(document).mouseup(function (e){
          var LayerPopup = $(".workdetail > div");
          if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("on");
            $('#works .bg_black').removeClass('on');
            scroll_section();
          }
        });
      


  
      } else{
        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          var about_scroll = $('#about').offset().top;
          var works_scroll = $('#works').offset().top;
          var contact_scroll = $('#contact').offset().top;
  
          if (scroll < about_scroll) {
              $("#gnb > ul > li > a").css("color" , "#fff");
              $("#gnb > ul").css("border-bottom" , "5px solid #fff");
              $("#gnb > ul > li").eq(0).find('a').css('color','#ff0000')
            }
  
          if (scroll >= about_scroll && scroll < works_scroll) {
            $("#gnb > ul > li > a").css("color" , "#252C65");
            $("#gnb > ul").css("border-bottom" , "5px solid #252C65");
            $("#gnb > ul > li").eq(1).find('a').css('color','#ff0000')
          }
  
          if (scroll >= works_scroll && scroll < contact_scroll) {
              $("#gnb > ul > li > a").css("color" , "#fff");
              $("#gnb > ul").css("border-bottom" , "5px solid #fff");
              $("#gnb > ul > li").eq(2).find('a').css('color','#ff0000')
            }
  
            if (scroll >= contact_scroll){
              $("#gnb > ul > li > a").css("color" , "#252C65");
              $("#gnb > ul").css("border-bottom" , "5px solid #252C65");
              $("#gnb > ul > li").eq(3).find('a').css('color','#ff0000')
            }
        })
      }




  
        // 스크롤 애니메이션

        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
            } else {
              entry.target.classList.remove('on');
            }
          });
        },{
          treshold : 0.5,
        });

        const section_title = document.querySelectorAll('section > .title_box .title > div');
        section_title.forEach(el => observer.observe(el));

        const about_section = document.querySelectorAll('#about .container > div');
        about_section.forEach(el => observer.observe(el));

        const contact_section = document.querySelectorAll('#contact > div');
        contact_section.forEach(el => observer.observe(el));

    
})