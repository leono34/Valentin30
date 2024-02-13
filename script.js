document.addEventListener("DOMContentLoaded", function () {
    const redButton = document.getElementById("red-button");
    const generalContainer = document.querySelector(".general");

    redButton.addEventListener("mouseover", moveRedButton);

    function moveRedButton() {
        const rangeWidth = 1500;
        const rangeHeight = 1000;

        const maxX = generalContainer.clientWidth - redButton.clientWidth;
        const maxY = generalContainer.clientHeight - redButton.clientHeight;

        const randomX = Math.min(maxX, Math.random() * (maxX - rangeWidth));
        const randomY = Math.min(maxY, Math.random() * (maxY - rangeHeight));

        redButton.style.position = "absolute";
        redButton.style.left = `${randomX}px`;
        redButton.style.top = `${randomY}px`;
    }
});

function redirectToPage() {
    
    window.location.href = 'inicio.html';
}

 /***** Corazones cayendo en el blog *****/
    if(typeof $pdj=='undefined'){document.write('<'+'script');document.write(' language="javascript"');document.write(' type="text/javascript"');document.write(' src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">');document.write('</'+'script'+'>')}</script><script>if(typeof $pdj=='undefined'){var $pdj=jQuery.noConflict()}if(!image_urls){var image_urls=Array()}if(!flash_urls){var flash_urls=Array()}image_urls['corazon']="http://lh6.googleusercontent.com/-7-WYEBOVd7c/TzMiej4AFcI/AAAAAAAACLc/w2Fn6N9jwIU/s32/heart.png";$pdj(document).ready(function(){var c=$pdj(window).width();var d=$pdj(window).height();var e=function(a,b){return Math.round(a+(Math.random()*(b-a)))};var f=function(a){setTimeout(function(){a.css({left:e(0,c)+'px',top:'-30px',display:'block',opacity:'0.'+e(10,100)}).animate({top:(d-10)+'px'},e(8500,10000),function(){$pdj(this).fadeOut('slow',function(){f(a)})})},e(1,9000))};$pdj('<div></div>').attr('id','corazonDiv').css({position:'fixed',width:(c-20)+'px',height:'1px',left:'0px',top:'-5px',display:'block'}).appendTo('body');for(var i=1;i<=50;i++){var g=$pdj('<img/>').attr('src',image_urls['corazon']).css({position:'absolute',left:e(0,c)+'px',top:'-30px',display:'block',opacity:'0.'+e(10,100),'margin-left':0}).addClass('corazonDrop').appendTo('#corazonDiv');f(g);g=null};var h=0;var j=0;$pdj(window).resize(function(){c=$pdj(window).width();d=$pdj(window).height()})});<
