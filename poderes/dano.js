AVAILABLE_POWERS.dano = {
  nome: "Dano",
  tipo: "Ação Padrão",
  descricao: "Você causa dano físico ou energético em um alvo. O alvo faz um teste de Resistência contra a CD 10 + Habilidade Relacionada ao Poder + PP’s gastos/5 OU Você realiza um ataque contra o alvo mas usando uma habilidade à sua escolha.",
  tipoCusto: 'dados', // Sinaliza que o custo é baseado em dados
  labelDados: 'Dados de Dano',
  ppPorDado: 2,
  phRegra: (pp) => pp < 8 ? 0 : Math.floor(pp / 2), // Função para a regra de custo de PH
  modificadores: [
    { nome: "Dano em Área", custo: 4, descricao: "O dano afeta uma área de 1,5m de raio (apenas para ataque com base em TR)." },
    { nome: "Penetrante (5)", custo: 10, descricao: "O dano ignora RD de um valor igual a 5." },
    { nome: "Penetrante (10)", custo: 20, descricao: "O dano ignora RD de um valor igual a 10." },
    { nome: "Distância Curta", custo: 2, descricao: "O dano é um ataque que alcança até 9m." },
    { nome: "Distância Média", custo: 5, descricao: "O dano é um ataque que alcança até 18m." },
    { nome: "Distância Longa", custo: 10, descricao: "O dano é um ataque que alcança até 36m." },
  ]
};
