// Base de dados do Dicionário de Ideias Afins
// Cada entrada representa um "conceito": um conjunto de termos (sinônimos/variações),
// frases que expressam a ideia, e ids de conceitos relacionados (ideias afins).
const CONCEPTS = [
  {
    id: "felicidade",
    termos: ["felicidade", "feliz", "alegria", "contentamento", "júbilo"],
    frases: [
      "sentir-se bem com a vida",
      "estar em paz consigo mesmo",
      "viver um momento de plenitude",
      "sorrir sem motivo aparente"
    ],
    relacionados: ["euforia", "gratidao", "esperanca", "amor", "calma"]
  },
  {
    id: "tristeza",
    termos: ["tristeza", "triste", "melancolia", "abatimento", "desânimo"],
    frases: [
      "sentir um peso no peito",
      "chorar sem saber bem o motivo",
      "estar com os ânimos em baixa",
      "ver tudo cinza"
    ],
    relacionados: ["saudade", "solidao", "desespero", "tedio", "vergonha"]
  },
  {
    id: "medo",
    termos: ["medo", "temor", "pavor", "receio", "susto"],
    frases: [
      "sentir um frio na barriga",
      "ter as pernas bambas",
      "não conseguir dar o primeiro passo",
      "ficar paralisado diante do perigo"
    ],
    relacionados: ["ansiedade", "coragem", "surpresa", "desespero", "ignorancia"]
  },
  {
    id: "raiva",
    termos: ["raiva", "ira", "fúria", "irritação", "indignação"],
    frases: [
      "ver tudo vermelho",
      "perder a paciência",
      "sentir o sangue ferver",
      "explodir por dentro"
    ],
    relacionados: ["odio", "ciume", "justica", "paciencia", "orgulho"]
  },
  {
    id: "surpresa",
    termos: ["surpresa", "espanto", "assombro", "perplexidade"],
    frases: [
      "ficar de queixo caído",
      "não acreditar no que os olhos veem",
      "levar um susto bom",
      "arregalar os olhos"
    ],
    relacionados: ["medo", "felicidade", "destino", "sorte", "mudanca"]
  },
  {
    id: "nojo",
    termos: ["nojo", "repugnância", "aversão", "repulsa"],
    frases: [
      "torcer o nariz",
      "sentir o estômago embrulhar",
      "não suportar nem olhar",
      "afastar-se com repulsa"
    ],
    relacionados: ["odio", "vergonha", "raiva", "ignorancia"]
  },
  {
    id: "amor",
    termos: ["amor", "carinho", "afeto", "paixão", "amar"],
    frases: [
      "gostar de alguém de coração",
      "sentir borboletas no estômago",
      "querer bem sem esperar nada em troca",
      "cuidar como se fosse seu"
    ],
    relacionados: ["amizade", "familia", "gratidao", "felicidade", "confianca"]
  },
  {
    id: "odio",
    termos: ["ódio", "aversão profunda", "rancor", "detestar"],
    frases: [
      "guardar mágoa por anos",
      "não conseguir perdoar",
      "desejar mal ao outro",
      "sentir raiva transformada em rancor"
    ],
    relacionados: ["raiva", "ciume", "traicao", "nojo", "vergonha"]
  },
  {
    id: "ansiedade",
    termos: ["ansiedade", "aflição", "apreensão", "nervosismo", "angústia"],
    frases: [
      "roer as unhas de nervoso",
      "sentir o coração acelerado",
      "antecipar o pior antes de acontecer",
      "não conseguir ficar parado"
    ],
    relacionados: ["medo", "calma", "desespero", "tristeza", "paciencia"]
  },
  {
    id: "calma",
    termos: ["calma", "tranquilidade", "serenidade", "paz", "sossego"],
    frases: [
      "respirar fundo e deixar passar",
      "manter a cabeça no lugar",
      "encontrar um porto seguro",
      "estar em paz com tudo"
    ],
    relacionados: ["paciencia", "felicidade", "sabedoria", "confianca", "natureza"]
  },
  {
    id: "esperanca",
    termos: ["esperança", "otimismo", "fé", "expectativa positiva"],
    frases: [
      "acreditar em dias melhores",
      "não perder a fé mesmo no escuro",
      "enxergar luz no fim do túnel",
      "manter a chama acesa"
    ],
    relacionados: ["felicidade", "coragem", "sonho", "perseveranca", "destino"]
  },
  {
    id: "desespero",
    termos: ["desespero", "desesperança", "aflição extrema", "angústia profunda"],
    frases: [
      "não ver saída para o problema",
      "sentir o chão desabar",
      "estar à beira do abismo",
      "perder as forças de vez"
    ],
    relacionados: ["tristeza", "medo", "ansiedade", "fracasso", "solidao"]
  },
  {
    id: "ciume",
    termos: ["ciúme", "inveja", "cobiça", "possessividade"],
    frases: [
      "não suportar ver o outro com o que é seu",
      "sentir o peito apertar de ciúme",
      "comparar-se o tempo todo com o outro",
      "desconfiar sem motivo real"
    ],
    relacionados: ["raiva", "amor", "traicao", "confianca", "odio"]
  },
  {
    id: "vergonha",
    termos: ["vergonha", "constrangimento", "acanhamento", "timidez"],
    frases: [
      "ficar vermelho na hora",
      "querer que o chão se abra",
      "evitar o olhar dos outros",
      "sentir-se pequeno diante da situação"
    ],
    relacionados: ["orgulho", "medo", "humildade", "tristeza"]
  },
  {
    id: "orgulho",
    termos: ["orgulho", "brio", "amor-próprio", "vaidade"],
    frases: [
      "encher o peito de satisfação",
      "não abaixar a cabeça",
      "sentir-se realizado com a própria conquista",
      "levantar o queixo com dignidade"
    ],
    relacionados: ["felicidade", "sucesso", "humildade", "vergonha", "gratidao"]
  },
  {
    id: "gratidao",
    termos: ["gratidão", "reconhecimento", "agradecimento"],
    frases: [
      "reconhecer o que a vida deu",
      "agradecer pelas pequenas coisas",
      "valorizar quem esteve ao lado",
      "sentir-se abençoado"
    ],
    relacionados: ["felicidade", "amor", "humildade", "esperanca"]
  },
  {
    id: "saudade",
    termos: ["saudade", "nostalgia", "falta", "lembrança querida"],
    frases: [
      "sentir falta de um tempo que já passou",
      "lembrar com um aperto no coração",
      "desejar reviver um momento",
      "olhar fotos antigas e suspirar"
    ],
    relacionados: ["tristeza", "amor", "familia", "amizade", "tempo"]
  },
  {
    id: "solidao",
    termos: ["solidão", "isolamento", "vazio", "desamparo"],
    frases: [
      "sentir-se sozinho mesmo cercado de gente",
      "não ter com quem dividir o dia",
      "o silêncio que pesa",
      "faltar alguém para conversar"
    ],
    relacionados: ["tristeza", "desespero", "amizade", "tedio"]
  },
  {
    id: "tedio",
    termos: ["tédio", "monotonia", "enfado", "aborrecimento"],
    frases: [
      "os dias parecem todos iguais",
      "não ter o que fazer",
      "sentir o tempo andar devagar",
      "bocejar de puro cansaço mental"
    ],
    relacionados: ["solidao", "preguica", "tristeza", "criatividade"]
  },
  {
    id: "euforia",
    termos: ["euforia", "êxtase", "empolgação", "entusiasmo"],
    frases: [
      "sentir uma explosão de alegria",
      "não caber em si de tanta empolgação",
      "vibrar de emoção",
      "estar no auge da felicidade"
    ],
    relacionados: ["felicidade", "sucesso", "amor", "surpresa"]
  },
  {
    id: "coragem",
    termos: ["coragem", "bravura", "valentia", "audácia", "destemor"],
    frases: [
      "enfrentar o medo de frente",
      "dar o primeiro passo mesmo tremendo",
      "encarar o desafio sem recuar",
      "ter peito para dizer a verdade"
    ],
    relacionados: ["medo", "perseveranca", "honestidade", "esperanca", "orgulho"]
  },
  {
    id: "honestidade",
    termos: ["honestidade", "sinceridade", "franqueza", "verdade pessoal"],
    frases: [
      "falar a verdade mesmo quando dói",
      "não esconder nada por trás",
      "ser fiel à própria palavra",
      "olhar nos olhos e não mentir"
    ],
    relacionados: ["verdade", "integridade", "confianca", "coragem", "respeito"]
  },
  {
    id: "lealdade",
    termos: ["lealdade", "fidelidade", "devoção", "companheirismo"],
    frases: [
      "estar ao lado nas horas difíceis",
      "não trair a confiança de quem confiou",
      "manter a palavra dada",
      "defender mesmo quando não é fácil"
    ],
    relacionados: ["confianca", "amizade", "honestidade", "traicao", "respeito"]
  },
  {
    id: "justica",
    termos: ["justiça", "equidade", "imparcialidade", "retidão"],
    frases: [
      "dar a cada um o que é seu",
      "tratar todos com as mesmas regras",
      "corrigir o que estava errado",
      "não fechar os olhos para a injustiça"
    ],
    relacionados: ["igualdade", "honestidade", "respeito", "raiva", "responsabilidade"]
  },
  {
    id: "liberdade",
    termos: ["liberdade", "autonomia", "independência", "livre-arbítrio"],
    frases: [
      "poder escolher o próprio caminho",
      "não depender de ninguém para viver",
      "voar sem correntes",
      "decidir por si mesmo"
    ],
    relacionados: ["responsabilidade", "coragem", "sonho", "destino"]
  },
  {
    id: "igualdade",
    termos: ["igualdade", "equivalência", "paridade"],
    frases: [
      "todos terem as mesmas chances",
      "não haver diferença de tratamento",
      "reconhecer que ninguém vale mais que ninguém",
      "dividir de forma justa"
    ],
    relacionados: ["justica", "respeito", "solidariedade", "humildade"]
  },
  {
    id: "respeito",
    termos: ["respeito", "consideração", "reverência", "deferência"],
    frases: [
      "ouvir o outro sem julgar",
      "tratar com educação mesmo discordando",
      "reconhecer o valor de cada um",
      "não ultrapassar os limites do outro"
    ],
    relacionados: ["humildade", "honestidade", "igualdade", "confianca", "justica"]
  },
  {
    id: "humildade",
    termos: ["humildade", "simplicidade", "modéstia"],
    frases: [
      "reconhecer os próprios limites",
      "não se achar melhor que ninguém",
      "aceitar ajuda sem vergonha",
      "aprender mesmo já sabendo muito"
    ],
    relacionados: ["respeito", "sabedoria", "gratidao", "vergonha", "orgulho"]
  },
  {
    id: "generosidade",
    termos: ["generosidade", "solidariedade", "altruísmo", "bondade"],
    frases: [
      "dar sem esperar receber",
      "estender a mão a quem precisa",
      "dividir o pouco que se tem",
      "pensar no bem do outro"
    ],
    relacionados: ["solidariedade", "amor", "gratidao", "respeito"]
  },
  {
    id: "paciencia",
    termos: ["paciência", "tolerância", "serenidade", "persistência calma"],
    frases: [
      "esperar sem se desesperar",
      "contar até dez antes de reagir",
      "dar tempo ao tempo",
      "manter a calma mesmo sob pressão"
    ],
    relacionados: ["calma", "perseveranca", "sabedoria", "raiva"]
  },
  {
    id: "perseveranca",
    termos: ["perseverança", "persistência", "determinação", "força de vontade"],
    frases: [
      "não desistir mesmo depois de cair",
      "continuar tentando até conseguir",
      "levantar a cada queda",
      "manter o foco no objetivo"
    ],
    relacionados: ["coragem", "esperanca", "sucesso", "fracasso", "paciencia"]
  },
  {
    id: "sabedoria",
    termos: ["sabedoria", "sensatez", "discernimento", "prudência"],
    frases: [
      "aprender com os próprios erros",
      "saber a hora certa de agir",
      "enxergar além do óbvio",
      "pensar antes de falar"
    ],
    relacionados: ["conhecimento", "humildade", "calma", "paciencia"]
  },
  {
    id: "integridade",
    termos: ["integridade", "retidão de caráter", "coerência"],
    frases: [
      "agir do mesmo jeito quando ninguém está vendo",
      "ser fiel aos próprios valores",
      "não se corromper por interesse",
      "manter a palavra em qualquer situação"
    ],
    relacionados: ["honestidade", "responsabilidade", "justica", "confianca"]
  },
  {
    id: "responsabilidade",
    termos: ["responsabilidade", "comprometimento", "dever", "obrigação"],
    frases: [
      "assumir as consequências dos próprios atos",
      "cumprir o que foi prometido",
      "não jogar a culpa nos outros",
      "fazer a parte que cabe a você"
    ],
    relacionados: ["integridade", "liberdade", "trabalho", "justica"]
  },
  {
    id: "tempo",
    termos: ["tempo", "passagem do tempo", "temporalidade", "duração"],
    frases: [
      "o tempo não para para ninguém",
      "cada coisa no seu momento",
      "o relógio da vida correndo",
      "deixar o tempo curar as feridas"
    ],
    relacionados: ["mudanca", "saudade", "destino", "vida"]
  },
  {
    id: "mudanca",
    termos: ["mudança", "transformação", "renovação", "virada"],
    frases: [
      "virar a página",
      "nada é para sempre",
      "sair da zona de conforto",
      "recomeçar do zero"
    ],
    relacionados: ["tempo", "coragem", "destino", "sonho"]
  },
  {
    id: "destino",
    termos: ["destino", "sina", "fado", "desígnio"],
    frases: [
      "o que está escrito, se cumpre",
      "cada um tem seu caminho traçado",
      "as voltas que a vida dá",
      "acreditar que tudo acontece por um motivo"
    ],
    relacionados: ["sorte", "tempo", "mudanca", "vida", "sonho"]
  },
  {
    id: "sorte",
    termos: ["sorte", "acaso", "fortuna", "coincidência"],
    frases: [
      "estar no lugar certo na hora certa",
      "ganhar sem nem esperar",
      "as coisas se encaixarem por acaso",
      "sorte grande de última hora"
    ],
    relacionados: ["destino", "surpresa", "sucesso", "fracasso"]
  },
  {
    id: "verdade",
    termos: ["verdade", "veracidade", "realidade dos fatos"],
    frases: [
      "os fatos como realmente aconteceram",
      "nada a esconder",
      "a verdade sempre vem à tona",
      "falar sem rodeios"
    ],
    relacionados: ["honestidade", "mentira", "conhecimento", "integridade"]
  },
  {
    id: "mentira",
    termos: ["mentira", "falsidade", "engano", "inverdade"],
    frases: [
      "contar uma história que não é real",
      "esconder a verdade por trás",
      "enganar para não se comprometer",
      "criar uma versão diferente dos fatos"
    ],
    relacionados: ["verdade", "traicao", "vergonha", "odio"]
  },
  {
    id: "conhecimento",
    termos: ["conhecimento", "saber", "aprendizado", "instrução"],
    frases: [
      "quanto mais se aprende, mais se percebe o que falta saber",
      "estudar para entender o mundo",
      "buscar respostas para as próprias perguntas",
      "guardar o que a experiência ensina"
    ],
    relacionados: ["sabedoria", "ignorancia", "criatividade", "verdade"]
  },
  {
    id: "ignorancia",
    termos: ["ignorância", "desconhecimento", "falta de informação"],
    frases: [
      "não saber o que não sabe",
      "agir sem entender as consequências",
      "confundir opinião com fato",
      "fechar os olhos para o óbvio"
    ],
    relacionados: ["conhecimento", "medo", "raiva", "nojo"]
  },
  {
    id: "poder",
    termos: ["poder", "autoridade", "domínio", "influência"],
    frases: [
      "ter a palavra final",
      "estar no comando da situação",
      "mandar mais do que os outros",
      "controlar o rumo das coisas"
    ],
    relacionados: ["liberdade", "justica", "dinheiro", "responsabilidade"]
  },
  {
    id: "dinheiro",
    termos: ["dinheiro", "riqueza", "fortuna financeira", "capital"],
    frases: [
      "ganhar o suficiente para viver bem",
      "juntar para o futuro",
      "não deixar faltar o essencial",
      "dinheiro não traz felicidade, mas ajuda"
    ],
    relacionados: ["trabalho", "sucesso", "poder", "sorte"]
  },
  {
    id: "sucesso",
    termos: ["sucesso", "êxito", "triunfo", "vitória", "realização"],
    frases: [
      "colher os frutos do esforço",
      "alcançar o que sempre sonhou",
      "chegar lá depois de muita luta",
      "ser reconhecido pelo que fez"
    ],
    relacionados: ["fracasso", "perseveranca", "orgulho", "trabalho", "dinheiro"]
  },
  {
    id: "fracasso",
    termos: ["fracasso", "derrota", "insucesso", "decepção"],
    frases: [
      "não conseguir apesar do esforço",
      "ver o plano desmoronar",
      "cair depois de tentar tanto",
      "aprender com o tombo"
    ],
    relacionados: ["sucesso", "desespero", "perseveranca", "tristeza"]
  },
  {
    id: "morte",
    termos: ["morte", "falecimento", "fim da vida", "partida"],
    frases: [
      "dizer o último adeus",
      "a vida que se apaga",
      "ficar só a lembrança",
      "o ciclo natural que chega para todos"
    ],
    relacionados: ["vida", "saudade", "tristeza", "tempo", "destino"]
  },
  {
    id: "vida",
    termos: ["vida", "existência", "jornada", "trajetória"],
    frases: [
      "viver um dia de cada vez",
      "aproveitar cada momento",
      "a vida é feita de escolhas",
      "seguir em frente apesar de tudo"
    ],
    relacionados: ["morte", "tempo", "sonho", "felicidade", "destino"]
  },
  {
    id: "sonho",
    termos: ["sonho", "aspiração", "ambição", "desejo de realização"],
    frases: [
      "correr atrás do que se deseja",
      "imaginar um futuro melhor",
      "não desistir do que se planeja",
      "acreditar que é possível"
    ],
    relacionados: ["esperanca", "sucesso", "perseveranca", "liberdade", "criatividade"]
  },
  {
    id: "amizade",
    termos: ["amizade", "companheirismo", "camaradagem", "confraternização"],
    frases: [
      "ter alguém para contar tudo",
      "estar junto nos bons e maus momentos",
      "rir das mesmas piadas há anos",
      "poder contar de verdade com alguém"
    ],
    relacionados: ["amor", "lealdade", "confianca", "solidao", "familia"]
  },
  {
    id: "familia",
    termos: ["família", "parentes", "lar", "raízes"],
    frases: [
      "ter um porto seguro para voltar",
      "sangue que puxa mesmo de longe",
      "criar laços que duram a vida toda",
      "casa é onde a família está"
    ],
    relacionados: ["amor", "amizade", "saudade", "respeito"]
  },
  {
    id: "confianca",
    termos: ["confiança", "credibilidade", "segurança na relação"],
    frases: [
      "poder contar com alguém de olhos fechados",
      "acreditar na palavra do outro",
      "não precisar duvidar",
      "construir uma relação sólida aos poucos"
    ],
    relacionados: ["lealdade", "honestidade", "amizade", "traicao", "amor"]
  },
  {
    id: "traicao",
    termos: ["traição", "deslealdade", "infidelidade", "quebra de confiança"],
    frases: [
      "apunhalar pelas costas",
      "quebrar a confiança de quem acreditava",
      "trair quem sempre esteve ao lado",
      "descobrir que foi enganado o tempo todo"
    ],
    relacionados: ["confianca", "mentira", "odio", "ciume", "lealdade"]
  },
  {
    id: "trabalho",
    termos: ["trabalho", "emprego", "labuta", "ofício", "profissão"],
    frases: [
      "ganhar o pão de cada dia",
      "dar duro para conquistar algo",
      "vestir a camisa da empresa",
      "equilibrar trabalho e vida pessoal"
    ],
    relacionados: ["dinheiro", "sucesso", "responsabilidade", "criatividade", "motivacao"]
  },
  {
    id: "criatividade",
    termos: ["criatividade", "inventividade", "imaginação", "originalidade"],
    frases: [
      "pensar fora da caixa",
      "encontrar soluções onde ninguém via",
      "transformar ideias em algo novo",
      "ver o comum de um jeito diferente"
    ],
    relacionados: ["conhecimento", "sonho", "trabalho", "liberdade"]
  },
  {
    id: "natureza",
    termos: ["natureza", "meio ambiente", "mundo natural", "paisagem"],
    frases: [
      "o silêncio de uma trilha na mata",
      "o som do mar acalmando a mente",
      "sentir o vento no rosto",
      "respirar ar puro no campo"
    ],
    relacionados: ["calma", "vida", "liberdade", "tempo"]
  },
  {
    id: "solidariedade",
    termos: ["solidariedade", "cooperação", "ajuda mútua", "empatia"],
    frases: [
      "estender a mão a quem precisa",
      "sentir a dor do outro como se fosse sua",
      "ajudar sem esperar nada em troca",
      "unir forças por uma causa comum"
    ],
    relacionados: ["generosidade", "igualdade", "amizade", "respeito"]
  },
  {
    id: "motivacao",
    termos: ["motivação", "estímulo", "inspiração", "ânimo"],
    frases: [
      "acordar com vontade de vencer o dia",
      "encontrar um motivo para continuar",
      "sentir a energia para começar de novo",
      "ter um objetivo que puxa para frente"
    ],
    relacionados: ["esperanca", "perseveranca", "trabalho", "sonho"]
  },
  {
    id: "preguica",
    termos: ["preguiça", "indolência", "procrastinação", "moleza"],
    frases: [
      "deixar tudo para depois",
      "não ter vontade de sair do lugar",
      "adiar o que precisa ser feito",
      "ficar na cama mesmo sabendo que devia levantar"
    ],
    relacionados: ["tedio", "motivacao", "responsabilidade"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONCEPTS;
}
