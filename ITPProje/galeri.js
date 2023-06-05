$(function(){
            $(".büyük").hide();
            $(".küçük").click(function(){
                var left = ($(document).width() - 640) / 2;
                var top = ($(document).height() - 480) / 2;
                var resim = $(this).html();
                $(".büyük").css({ "left": left, "top": top });
                $(".büyük").html(' <div class="resim"> ' + resim + '</div></div> </div> ');
                $(".resim img").width(640);
                $(".resim img").height(480);
                $(".resim img").hide();
                $(".resim img").load(function(){
                    $(".resim img").show();
                });
                $(".büyük").slideDown(500);
            });
            
        });