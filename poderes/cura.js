AVAILABLE_POWERS.cura = {
  nome: "Cura",
  tipo: "Ação Padrão",
  descricao: "Você restaura Pontos de Vida, remove condições ou estabiliza um alvo. Um teste bem-sucedido de Cura remove uma condição de dano.",
  tipoCusto: 'dados', // Sinaliza que o custo é baseado em dados
  labelDados: 'Dados de Cura (d6)',
  ppPorDado: 5,
  phRegra: (pp) => Math.floor(pp / 5) * 2, // 2 PH por dado de cura (5 PP)
  modificadores: [
    { nome: "Cura à Distância", custo: 5, descricao: "Você pode usar o poder à distância de até 9m." },
    { nome: "Restauração de Condição", custo: 10, descricao: "Permite remover uma condição que aflige um alvo. Custo em PH é 10." },
    { nome: "Restauração de Atributo", custo: 10, descricao: "Permite curar o dano a um atributo (como Força ou Destreza)." },
  ]
};
