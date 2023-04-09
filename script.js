/* Faça uma lista de estudantes que deverá conter:]
- Nome;
- Nota da primeira prova;
- Nota da segunda prova;

Após isso deverá sair a média do aluno e uma mensagem se foi aprovado ou não, sendo essa média de 7.*/

const alunos = [
    {
      nome: "Joel Silva",
      primeiraProva: 8,
      segundaProva: 6,
    },
    {
      nome: "Manoel Aragão",
      primeiraProva: 9,
      segundaProva: 7,
    },
    {
      nome: "Renata Goteira",
      primeiraProva: 10,
      segundaProva: 9,
    },
    {
      nome: "Manoela Pincel",
      primeiraProva: 6,
      segundaProva: 10,
    },
    {
      nome: "Alexsandro Mendes",
      primeiraProva: 9,
      segundaProva: 1,
    }
  ]
  
  function media(nota1, nota2, nomeDoAluno) {
    const media = ((nota1 + nota2) / 2).toFixed(2);
    const result = (nota1 + nota2) / 2 >= 7;
    if (result) {
      return `A média do aluno(a) ${nomeDoAluno} é: ${media}.\n Parabéns ${nomeDoAluno}! Você foi aprovado no concurso!`
    }
  
    return `A média do aluno(a) ${nomeDoAluno} é: ${media}.\n Nõo foi dessa vez ${nomeDoAluno}! Tente novamente!`
  }
  
  alunos.map((aluno) => {
    alert(media(aluno.primeiraProva, aluno.segundaProva, aluno.nome));
  });