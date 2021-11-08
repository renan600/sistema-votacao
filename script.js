var iniciar = window.document.querySelector('button#inicio')
iniciar.addEventListener('click', iniciou)

var voto = window.document.querySelector('div#participantes')
var paragrafo = window.document.querySelector('h1#titulo') 
var titulo = window.document.querySelector('p#paragrafo') 

function iniciou(){
    paragrafo.style=('visibility: hidden;')
    titulo.style=('visibility: hidden;')
    iniciar.style=('visibility: hidden;')

    voto.innerHTML = ('<h2>Vote Para Prefeito</h2>')
    voto.innerHTML += ('<p><img src="fradyK.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px;" > [1]-Fred Kruguer </span></p>')
    voto.innerHTML += ('<p><img src="franke.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; ">[2]-Frankstein</span></p>')
    voto.innerHTML += ('<p><img src="fredyM.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; ">[3]-Fredy Mercury</span></p>')
    voto.innerHTML += ('<input type="number" name="usuario" id="pre" >')
    voto.innerHTML += ('<button type="submit" id="prefeito">Votar</button>')

    var botaoprefeito = window.document.querySelector('button#prefeito')
    botaoprefeito.addEventListener('click', prefe)

function prefe(){
    var pre = window.document.querySelector('input#pre').value
    if(pre != 1 && pre != 2 && pre != 3){
        window.alert('Você não digitou os números corretos , por favor vote novamente!')
        voto.innerHTML = ('<h2>Vote Para Prefeito</h2>')
        voto.innerHTML += ('<p><img src="fradyK.png" alt=""><span style=" position: absolute; margin-left:  5px;margin-top: 49px; color:white;" > [1]-Fred Kruguer </span></p>')
        voto.innerHTML += ('<p><img src="franke.png" alt=""><span style=" position: absolute; margin-left:  5px;margin-top: 49px; color:white;">[2]-Frankstein</span></p>')
        voto.innerHTML += ('<p><img src="fredyM.png" alt=""><span style=" position: absolute; margin-left:  5px;margin-top: 49px; color:white;">[3]-Fredy Mercury</span></p>')
        voto.innerHTML += ('<input type="number" name="usuario" id="pre" >')
        voto.innerHTML += ('<button type="submit" id="prefeito">Votar</button>')
        var pre = window.document.querySelector('input#pre').value
        var botaoprefeito = window.document.querySelector('button#prefeito')
        botaoprefeito.addEventListener('click', prefe)
    }else if(pre == 1 || pre == 2 || pre == 3){
        window.alert('Voto contabilizado , Agora vote para Vereador!')
        voto.innerHTML = ('<h2>Vote Para Vereador</h2>')
        voto.innerHTML += ('<p><img src="escobar.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;" > [1]-Pablo Escobar </span></p>')
        voto.innerHTML += ('<p><img src="robot.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;" > [2]-Mr.Robot </span></p>')
        voto.innerHTML += ('<p><img src="marley.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;" > [3]-Bob marley </span></p>')
        voto.innerHTML += ('<input type="number" name="ver" id="ver">')
        voto.innerHTML += ('<button type="submit" id="vereador">Votar</button>')
        var botaovereador = window.document.querySelector('button#vereador')
        botaovereador.addEventListener('click', verea)
        
function verea(){
     
    var ver = window.document.querySelector('input#ver').value

    if(ver != 1 && ver != 2 && ver != 3){
        window.alert('Você não digitou os números corretos , por favor vote novamente!')
        voto.innerHTML = ('<h2>Vote Para Vereador</h2>')
        voto.innerHTML += ('<p><img src="escobar.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px color:white;;" > [1]-Pablo Escobar </span></p>')
        voto.innerHTML += ('<p><img src="robot.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;" > [2]-Mr.Robot </span></p>')
        voto.innerHTML += ('<p><img src="marley.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;" > [3]-Bob marley </span></p>')
        voto.innerHTML += ('<input type="number" name="ver" id="ver">')
        voto.innerHTML += ('<button type="submit" id="vereador">Votar</button>')
        var ver = window.document.querySelector('input#ver').value
        var botaovereador = window.document.querySelector('button#vereador')
        botaovereador.addEventListener('click', verea)
    }else if(pre == 1 || pre == 2 || pre == 3){
        window.alert('Voto contabilizado , Agora vote para Governador!')
        voto.innerHTML = ('<h2>Vote Para Governador</h2>')
        voto.innerHTML += ('<p><img src="snoop.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;c" > [1]-Snoop Dog </span></p>')
        voto.innerHTML += ('<p><img src="pac.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;c" > [2]-2Pac </span></p>')
        voto.innerHTML += ('<p><img src="commander.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px; color:white;" >[3]-Commander-X </span></p>')
        voto.innerHTML += ('<input type="number" name="gov" id="gov">')
        voto.innerHTML += ('<button type="submit" id="governador">Votar</button>')              
        var botaogovernador = window.document.querySelector('button#governador')
        botaogovernador.addEventListener('click', gover)

function gover(){
    var gov = window.document.querySelector('input#gov').value

    if(gov != 1 && gov != 2 && gov != 3){
                
        window.alert('Você não digitou os números corretos , por favor vote novamente!')
        voto.innerHTML = ('<h2>Vote Para Governador</h2>')
        voto.innerHTML += ('<p><img src="snoop.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px;" > [1]-Snoop Dog </span></p>')
        voto.innerHTML += ('<p><img src="pac.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px;" > [2]-2Pac </span></p>')
        voto.innerHTML += ('<p><img src="commander.png" alt=""><span style=" position: absolute; margin-left: 5px;margin-top: 49px;" >[3]-Commander-X </span></p>')
        voto.innerHTML += ('<input type="number" name="gov" id="gov">')
        voto.innerHTML += ('<button type="submit" id="governador">Votar</button>')

        var gov = window.document.querySelector('input#gov').value
        var botaogovernador = window.document.querySelector('button#governador')
        botaogovernador.addEventListener('click', gover)

        }else if(gov == 1 || gov ==2 || gov == 3){
            window.alert('Voto contabilizado, Sessão encerrada com sucesso !')
            voto.innerHTML=('')
            iniciar.style=('visibility: visible;')
            paragrafo.style=('visibility: visible;')
            titulo.style=('visibility: visible;')
        }

        var votos = [pre , ver , gov]
        console.log (votos)
        }
    }
}
}
}


}
