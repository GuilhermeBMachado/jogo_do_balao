function addBola(){
    	//cria um paramentro no html
    	var bola = document.createElement("div");
    	//aplica o atributo css na classe bola
    	bola.setAttribute("class","bola");
    	//randomiza valores de altura e largura
    	var x = Math.floor(Math.random()*500);
    	var y = Math.floor(Math.random()*400);
    	//ramdomiza valores RGB para alteracao de cores
    	var r = Math.floor(Math.random()*256);
    	var g = Math.floor(Math.random()*256);
    	var b = Math.floor(Math.random()*256);
        //aplica os valores no elemento
        bola.setAttribute("style","background: rgb("+r+","+g+","+b+"); left:" + x +"px; top:" + y + "px;");

        //aplica a acao de estourar os baloes ao clicar
    	bola.setAttribute("onclick", "estourar(this)");

        //cria um novo campo
    	document.body.appendChild(bola);
    }
    function estourar(elemento) {
      var x = document.getElementsByTagName("div")[2].getAttribute("style");
    console.log(x);
    	//remove o campo
    	document.body.removeChild(elemento);
        // incrementa o contador


        contar(elemento);
    }
    function iniciar(){
    	setInterval(addBola,1000);
    }
    function contar(elemento) {

        var cont = document.getElementById("pontuacao").innerHTML;
        cont++;
        document.getElementById("pontuacao").innerHTML = cont;
    }
