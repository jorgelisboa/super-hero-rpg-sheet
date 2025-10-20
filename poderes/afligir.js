const afligir = {
  nome: "Afligir",
  tipo: "Ação Padrão",
  descricao: "Você impõe uma ou mais condições em um alvo com uma ação. A CD para o alvo resistir é igual a 10 + Habilidade Relacionada ao Poder (max 10) + PP’s gastos/5. Escolha as condições (Atordoado, Lento, Vulnerável, etc.). A CD é resistida por um teste de Habilidade Relacionada ao Poder. A cada turno do alvo ele pode realizar um teste para sair da condição, senão fica com a condição por 1 minuto.",
  condicoes: [
    { nivel: "Leve", custo: 10, nome: "Fatigado", descricao: "O personagem está cansado. Sofre –1d6 suas rolagens de d20." },
    { nivel: "Leve", custo: 10, nome: "Caído", descricao: "O personagem tem desvantagem ao realizar jogadas de ataque, inimigos que realizam ataques corpo-a-corpo contra um personagem caído possuem vantagem no ataque. Para se levantar deve ser gasto metade de seu deslocamento ou 6m, o que for maior." },
    { nivel: "Leve", custo: 10, nome: "Lento", descricao: "A velocidade de movimento do personagem é reduzida pela metade e ele só pode realizar uma Ação de Movimento ou Ação Padrão por turno (não ambas)." },
    { nivel: "Leve", custo: 10, nome: "Prejudicado", descricao: "O personagem está cansado. Sofre –2d4 suas rolagens de d20." },
    { nivel: "Leve", custo: 10, nome: "Vantagem", descricao: "O personagem está exposto. Ataques ou testes de alguma perícia escolhida, feitos contra ele, têm vantagem." },
    { nivel: "Leve", custo: 10, nome: "Desorientado", descricao: "O personagem está desorientado. Ele só pode realizar uma Ação Bônus ou Ação de Movimento por turno." },
    { nivel: "Leve", custo: 10, nome: "Agarrado", descricao: "O personagem está preso. O deslocamento da criatura se torna zero. Desvantagem em jogadas de ataque contra criaturas que não sejam a que agarrou ela." },
    { nivel: "Média", custo: 20, nome: "Atordoado", descricao: "O personagem não pode realizar ações, se mover, ou reagir, e perde o bônus de Destreza na CA." },
    { nivel: "Média", custo: 20, nome: "Cegado", descricao: "O personagem não pode ver. Falha automaticamente em testes de Percepção que exijam visão e sofre Desvantagem em todos os ataques. Alvos que ele não consegue ver têm Camuflagem Total." },
    { nivel: "Média", custo: 20, nome: "Surpreendido", descricao: "O personagem não estava atento. Perde sua primeira ação no combate e não pode realizar Ação de Reação até o início do seu primeiro turno." },
    { nivel: "Média", custo: 20, nome: "Incapacitado", descricao: "O personagem não pode realizar ações e está caído. Ele tem Vulnerabilidade e seus ataques sofrem Desvantagem." },
    { nivel: "Grave", custo: 30, nome: "Paralisado", descricao: "O personagem está congelado, não pode realizar ações e sofre Desvantagem em testes de Destreza e Força. Qualquer ataque corpo a corpo que o atinja é considerado um Acerto Crítico Automático." },
    { nivel: "Grave", custo: 30, nome: "Exausto", descricao: "O personagem está gravemente esgotado. Sofre Desvantagem e –10 em testes de Força, Destreza, e Constituição." },
    { nivel: "Grave", custo: 30, nome: "Controlado", descricao: "O personagem age de acordo com as ordens do controlador, perdendo completamente sua liberdade de ação." },
    { nivel: "Grave", custo: 30, nome: "Morrendo", descricao: "O personagem cai Incapacitado. No início de cada turno, faz um Teste de Morte (1d20). Acumula 1 Sucesso (se rolar 10 ou mais) ou 1 Falha (se rolar 9 ou menos). 3 Sucessos: estabiliza. 3 Falhas: morre." },
    { nivel: "Grave", custo: 30, nome: "Morto", descricao: "O personagem não pode realizar ações e é permanentemente removido do jogo." },
  ],
  custoPH: "Custo em PP/5",
  modificadores: [
    { nome: "Área", custo: 5, descricao: "O poder afeta todos em uma área de 1,5m de raio." },
    { nome: "Alvos Múltiplos", custo: 2, descricao: "Afeta um alvo adicional." },
    { nome: "Extra Condição", custo: 5, descricao: "Adiciona uma condição extra ao efeito." },
  ]
};
