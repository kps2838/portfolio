$(function(){
    let w = window.innerWidth;
    console.log(w);
    $(window).resize(function(){
        location.reload()
    })

    let slideNum = 0;
    let position = 0;
    
    $('#responsive .prev').click(function(){
        const target = $('#works .slide .box_group .bg_box');
        target.removeClass('on'),
        void target.outerWidth(),
        target.addClass('on');
        if(slideNum > 0){
            position += w;
            $('#works .contents .slide').css('transform', `translateX(${position}px)`);
            slideNum = slideNum-1;
        } else if(slideNum == 0){
            $('#works .contents .slide').css('transform', `0`);
        }
    });

    $('#responsive .next').click(function(){
        const target = $('#works .slide .box_group .bg_box');
        target.removeClass('on'),
        void target.outerWidth(),
        target.addClass('on');
        if(slideNum < 1){
            position -= w;
            $('#works .contents .slide').css('transform', `translateX(${position}px)`);
            slideNum = slideNum+1;
        } else if(slideNum == 1){
            $('#works .contents .slide').css('transform', `${2 * w}`);
        }
    });



    $('#website .prev').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum > 0){
                position += w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum-1;
            } else if(slideNum == 0){
                $('#works .contents .slide').css('transform', `0`);
            }
        })

    $('#website .next').click(function(){
            const target = $('#works .slide .box_group .bg_box');
            target.removeClass("on"),
            void target.outerWidth(),
            target.addClass("on");
            if(slideNum < 3){
                position -= w;
                $('#works .contents .slide').css('transform', `translateX(${position}px)`);
                slideNum = slideNum+1;
            } else if(slideNum == 3){
                $('#works .contents .slide').css('transform', `${3 * w}`);
            }
        })



    $('#mobile .prev').click(function(){
        const target = $('#works .slide .box_group .bg_box');
        target.removeClass('on'),
        void target.outerWidth(),
        target.addClass('on');
        if(slideNum > 0){
            position += w;
            $('#works .contents .slide').css('transform', `translateX(${position}px)`);
            slideNum = slideNum-1;
        } else if(slideNum == 0){
            $('#works .contents .slide').css('transform', `0`);
        }
    });

    $('#mobile .next').click(function(){
        const target = $('#works .slide .box_group .bg_box');
        target.removeClass('on'),
        void target.outerWidth(),
        target.addClass('on');
        if(slideNum < 1){
            position -= w;
            $('#works .contents .slide').css('transform', `translateX(${position}px)`);
            slideNum = slideNum+1;
        } else if(slideNum==1){
            $('#works .contents .slide').css('transform', `${3 * w}`);
        }
    });



    // 작품 탭
    $('#works .category > button').click(function(){
        $('.category > button').removeClass('on');
        $(this).addClass('on');
        $('#works .contents .slide').css('transform', `translateX(0)`);
        slideNum=0; position = 0;
      });
      
      $('#works .category > button').eq(0).click(function(){
        $('#works .contents').removeClass('on');
        $('#responsive').addClass('on');
      })

      $('#works .category > button').eq(1).click(function(){
        $('#works .contents').removeClass('on');
        $('#website').addClass('on');
      })

      $('#works .category > button').eq(2).click(function(){
        $('#works .contents').removeClass('on');
        $('#mobile').addClass('on');
      })

})