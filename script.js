const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual uma ultilidade da IA?",
        alternativas: [
            {
                texto: "Para fezer revisão do carro",
                afirmacao: "Não foi dessa vez"
            },
            {
                texto: " Em software varias coisas em quetoês teclogicas",
                afirmacao: "isso mesmo você acertou"
            }
        ]
    },
    {
        enunciado: "Quais são os dois principais tipos de IA??",
        alternativas: [
            {
                texto: "IA estreita (ou fraca): Projetada para realizar uma tarefa específica, como reconhecimento de imagem ou tradução de idiomas.",
                afirmacao: "afirmação"
            },
            {
                texto:"IA geral (ou forte): Capaz de realizar qualquer tarefa cognitiva humana, com uma compreensão e aprendizado amplos..",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais são duas áreas de aplicação da IA na saúde?",
        alternativas: [
            {
                texto: "Diagnóstico médico: Uso de IA para interpretar exames médicos, como radiografias ou ressonâncias magnéticas..",
                afirmacao: "afirmação"
            },
            {
                texto: "Assistentes virtuais: Ferramentas de IA que ajudam a monitorar a saúde dos pacientes e a lembrar-lhes de tomar seus medicamentos..",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais são duas técnicas comuns utilizadas no aprendizado de máquina??",
        alternativas: [
            {
                texto: "Aprendizado supervisionado: O modelo é treinado com dados rotulados, onde a resposta correta é conhecida.",
                afirmacao: "afirmação"
            },
            {
                texto: "Aprendizado não supervisionado: O modelo é treinado com dados não rotulados, e tenta encontrar padrões e relacionamentos no conjunto de dados..",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais são dois desafios éticos associados ao uso da IA?? ",
        alternativas: [
            {
                texto: "Viés e discriminação: Algoritmos de IA podem perpetuar ou amplificar preconceitos existentes nos dados de treinamento.",
                afirmacao: "afirmação"
            },
            {
                texto: "Privacidade: A coleta e análise de grandes quantidades de dados podem comprometer a privacidade dos indivíduos.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();