$(function(){var r=$(".img_cover").eq(0).attr("src");$("<img/>").attr("src",r).load(function(){var r=$(this).attr("src"),a="url("+r+")";$(".intro_cover").css("background-image",a),$(".intro").addClass("loaded")})});