/*alert('Olá mundo'); é bom para saber se esta vinculando 

document.querySelector('#som_tecla_pom').play(); // esse execução retorna nula pq chamei o script la em cima, 
coloquei na body, a gente precisa executar um só quando clica, mas o navegado ainda continuou dando erro
 pq preciso clicar em alguma coisa pra fazer algo do jeito que estava, ele tocava direto  


 ----------------- SOM DO POM ------------------------
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();// esse é o audio
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; // essa é a tecla pom. onclick pra acessar essa tag


---------------- SOM DO CLAP ------------------------
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;*/


// AGORA VAI ARRUMAR PRA QUE NAO TER QUE COPIAR E COLAR (AUTOMATIZAR)
// LISTAS DE ELEMENTOS (VETORES)
// pegar todos os elementos de uma vez 

function tocaSom(seletorAudio){
   const elemento =  document.querySelector(seletorAudio);// esse é o audio

   
    if( elemento  && elemento.localName === 'audio'){
        
            elemento.play();
       
    }
    else{
       // (elemento === null)
              // alert('Elemento não encontrado') mais dramatico
        console.log('Elemento não encontrado ou seletor inválido') // console é mais discreto 
    }
  
}

// colocar numa variavel constante. e aqui continua sendo um vetor 
const listaDeTeclas = document.querySelectorAll('.tecla');



let cont = 0;
for(let cont = 0 ; cont < listaDeTeclas.length ; cont ++){

    const tecla = listaDeTeclas[cont]

    const instrumento = tecla.classList[1];

    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    //console.log(cont);

    tecla.onkeydown = function(evento){

        console.log(evento);
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
