//Seletores
let palavras = ["ALURA", "ORACLE", "PARALELEPIPEDO", "CARAPICUIBA","OSASCO", "GENSHIN IMPACT", "BANANA", "ALFABETO", "MANJERICAO", ""];
let forca = document.querySelector('#forca').getContext("2d");
let palavraSecreta = "";
let letras = []

//Funções - Do jogo
function sortearPalavra(){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
}

function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key)
        console.log(key)
        console.log(letras)
        return estado  
    }else{
        letras.push(key)
        console.log(key)
        console.log(letras,"if true")
        estado = true
    }
}

function iniciarJogo(){
    document.getElementById('menu-inicial').style.display = 'none'
    document.getElementById('jogo').style.display ='flex'
    sortearPalavra()
    desenharCanvas()
    desenharLinha()

    document.onkeydown = (e) =>{
        let letra = e.key.toUpperCase()

        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
            for(let i = 0; i < palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    
                }
            }
        }
    }
}

function adicionarPalavra(){
    document.getElementById('menu-inicial').style.display = 'none'
    document.getElementById('menu-cfg').style.display ='flex'
}

//Captar teclas digitadas
//verificar se é uma letra
//Saber se a palavra secreta inclui a letra digitada 
// escrever a letra correta
// se não, escrever letra incorreta
//contar erros

//Funções - Canvas
function desenharCanvas(){
    forca.lineWidth = 8;
    forca.lineCap = "round";
    forca.lineJoin = "round";
    forca.fillStyle = "#eb0000";
    forca.strokeStyle = "#0A3871";
    forca.fillRect(0, 0, 1200, 800);
    forca.beginPath();
    forca.moveTo(50,500);
    forca.lineTo(300,500);
    forca.stroke();
    forca.closePath();
}

function desenharLinha(){
    forca.lineWidth = 6;
    forca.lineCap = "round";
    forca.lineJoin = "round";
    forca.strokeStyle = "#000000";

    forca.beginPath()
    let largura = 1000/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        forca.moveTo(50+(largura*i), 640)
        forca.lineTo(100+(largura*i), 640)
        forca.stroke()
    }
    forca.closePath()
}