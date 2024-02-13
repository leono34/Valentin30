function changeTheme(theme) {
  const body = document.body;
  const sidebar = document.getElementById('sidebar');

  // Remover todas las clases existentes
  body.classList.remove('amanecer', 'atardecer', 'noche');
  sidebar.classList.remove('amanecer', 'atardecer', 'noche');

  // Añadir la clase correspondiente al tema seleccionado tanto al cuerpo como al sidebar
  body.classList.add(theme);
  sidebar.classList.add(theme);
}


function showPoem() {
  const selector = document.getElementById("poemSelector");
  const poemContainer = document.getElementById("poemContainer");
  const selectedPoem = selector.options[selector.selectedIndex].value;

  establecerClima(selectedPoem, poemContainer);
}

//establecer poemas
function establecerClima(eleccion, div) {
  if (eleccion === "poem1") {
    div.textContent =
      "|| Valentin un dia especial. En sí, no me importa si es ese día o es otro, pero lo que sí sé es que" +
      "las llamadas por las noches, las desveladas que nos damos, el simple hecho de saber que tú estás bien para mí es lo mejor que me pasó. Porque no puedo vivir" +
      "sin ti, porque eres tú la que convierte la oscuridad en luz. Te amo, Karina ||";
  } else if (eleccion === "poem2") {
    div.textContent =
      "|| Antes que vuelvas a aparecer en mi vida. Estaba lloviendo a torrenciales. Si bien es cierto, estaba tranquilo, pero por dentro tenía un huracán " +
      "que destruye todo a su paso, destruyendo así lo poco de pequeños recuerdos. Los destruía hasta que un mensaje me llegó y, sin titubear, te contesté y no sabía en ese momento" +
      "o ese instante cambiaría todo ||";
  } else if (eleccion === "poem3") {
    div.textContent =
      "|| Sabes, quisiera pedirte 3 cosas: la primera es que me digas todo lo que te incomoda, así yo lo sabré y podré mejorar y nuestra relación" +
      "mejorará más de lo que ya está. La segunda es que si tienes algo que decir, lo digas sin importar qué. Dilo. La tercera y muy importante es" +
      "que me des el anillo :P jajaja, na mentira. La tercera es que nos amemos como si no hubiera mañana ||";
  } else if (eleccion === "poem4") {
    div.textContent =
      "|| Ahora un poema, mi princesa amada. El pensar que tú ahora eres mi enamorada es una alegría desmesurada. Te llegué amar de una manera inesperada, así como tú y" +
      "terminamos siendo pareja. Te amo, y este amor es tan especial que no hace falta verte ni tocarte. Con solo saber que tú existes, me basta con cerrar los ojos e imaginarte a ti " +
      "saber que existes. Con cada día que pasa, me doy cuenta de que el amor que te tengo es más que ayer, pero es menor al de mañana. ¡Te amo! ||";
  } else {
    div.textContent = "";
  }
}
 /***** Corazones cayendo en el blog *****/
    if(typeof $pdj=='undefined'){document.write('<'+'script');document.write(' language="javascript"');document.write(' type="text/javascript"');document.write(' src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">');document.write('</'+'script'+'>')}</script><script>if(typeof $pdj=='undefined'){var $pdj=jQuery.noConflict()}if(!image_urls){var image_urls=Array()}if(!flash_urls){var flash_urls=Array()}image_urls['corazon']="http://lh6.googleusercontent.com/-7-WYEBOVd7c/TzMiej4AFcI/AAAAAAAACLc/w2Fn6N9jwIU/s32/heart.png";$pdj(document).ready(function(){var c=$pdj(window).width();var d=$pdj(window).height();var e=function(a,b){return Math.round(a+(Math.random()*(b-a)))};var f=function(a){setTimeout(function(){a.css({left:e(0,c)+'px',top:'-30px',display:'block',opacity:'0.'+e(10,100)}).animate({top:(d-10)+'px'},e(8500,10000),function(){$pdj(this).fadeOut('slow',function(){f(a)})})},e(1,9000))};$pdj('<div></div>').attr('id','corazonDiv').css({position:'fixed',width:(c-20)+'px',height:'1px',left:'0px',top:'-5px',display:'block'}).appendTo('body');for(var i=1;i<=50;i++){var g=$pdj('<img/>').attr('src',image_urls['corazon']).css({position:'absolute',left:e(0,c)+'px',top:'-30px',display:'block',opacity:'0.'+e(10,100),'margin-left':0}).addClass('corazonDrop').appendTo('#corazonDiv');f(g);g=null};var h=0;var j=0;$pdj(window).resize(function(){c=$pdj(window).width();d=$pdj(window).height()})});
