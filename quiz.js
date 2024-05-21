function exibirPergunta(pergunta, opcoes) {
    console.log(pergunta);
    opcoes.forEach((opcao, indice) => {
        console.log(`${indice + 1}. ${opcao}`); 
    });
}

function receberResposta() {
    const resposta = prompt("Digite os números das opções corretas da perguntas:");
    return parseInt(resposta); 
}


function executarQuiz() {
    const perguntas = [
        {
            pergunta: "Qual o brasileiro a ser eleito o último melhor jogador do mundo?",
            opcoes: ["Ronaldinha", "Ronaldo", "Kaka", "Neymar"],
            respostaCorreta: 3 
        },
        {
            pergunta: "Qual é o maior planeta do sistema solar?",
            opcoes: ["Terra", "Júpiter", "Saturno", "Marte"],
            respostaCorreta: 2 
        },
        {
            pergunta: "Quem escreveu 'Dom Quixote'?",
            opcoes: ["William Shakespeare", "Miguel de Cervantes", "Jorge Luis Borges", "Gabriel García Márquez"],
            respostaCorreta: 1 
        }
    ];

    let pontuacao = 0; 

    
    perguntas.forEach(pergunta => {
        exibirPergunta(pergunta.pergunta, pergunta.opcoes); 
        const respostaUsuario = receberResposta(); 

        
        if (respostaUsuario === pergunta.respostaCorreta) {
            pontuacao++;
            console.log("Resposta correta!\n");
        } else {
            console.log("Resposta incorreta!\n");
        }
    });

    console.log(`Você acertou ${pontuacao} de ${perguntas.length} perguntas.`);
}

executarQuiz();
