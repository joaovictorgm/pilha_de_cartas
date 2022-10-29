let interativeMenu = ""

let cards = ["Ás de espadas","2 de ouros","3 de paus","6 de copas","8 de espadas"]

do{
     interativeMenu = parseInt(prompt("Bem vindo ao menu interativo do baralho. Atualmente têm " + cards.length + " cartas disponíveis.\n O que você deseja fazer?\n\n>>Opção 1 - Adicionar carta \n>>Opção 2 - Puxar carta \n>>Opção 3 - Sair"))

    switch(interativeMenu){
    case 1:
        let newCard = prompt("Digite a carta que você deseja adicionar:")
        cards.push(newCard)
        alert("A carta adicionada foi " + newCard)
        break
    case 2:
        let pickupCard =cards.pop()
       
        // inverte o valor de "pickupCard" com o !(not)
        if(!pickupCard){
            alert("Não há cartas no baralho!")
        }else{
           alert("A carta puxada foi: " + pickupCard)  
        }
        break
    case 3:
        alert("Programa encerrado")
        
        break 
    default:
        alert("Opção invalida")

        break
        
    }

    
} while (interativeMenu !== 3)