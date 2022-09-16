//Seletores
let palavras = ["ALURA", "ORACLE", "PARALELEPIPEDO", "CARAPICUIBA","OSASCO", "GENSHIN IMPACT", "BANANA", "ALFABETO", "MANJERICAO"];
let forca = document.getElementById("forca");
let canvas = forca.getContext("2d");
let palavraSecreta = "";


//Funções - xxx
function sortearPalavra(){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
}

function iniciarJogo(){
    document.getElementById('menu-inicial').style.display = 'none'
    document.getElementById('jogo').style.display ='flex'
    sortearPalavra()
    desenharCanvas()
    desenharLinha()
    console.log(palavraSecreta)
}

function adicionarPalavra(){
    document.getElementById('menu-inicial').style.display = 'none'
    document.getElementById('menu-cfg').style.display ='flex'
}


//Funções - Canvas
function desenharCanvas(){
    canvas.lineWidth = 8;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "#eb0000";
    canvas.strokeStyle = "#0A3871";

    //manipulação tabuleiro
    canvas.fillRect(0, 0, 1200, 800);
    canvas.beginPath();
    canvas.moveTo(900,500);
    canvas.lineTo(650,500);
    canvas.stroke();
    canvas.closePath();
}

function desenharLinha(){
    canvas.lineWidth = 6;
    canvas.lineCap = "round";
    canvas.lineJoin = "round";
    canvas.fillStyle = "#F3F5FC";
    canvas.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        canvas.moveTo(500+(largura*i), 640)
        canvas.lineTo(550+(largura*i), 640)
    }
    canvas.stroke()
    canvas.closePath()
}