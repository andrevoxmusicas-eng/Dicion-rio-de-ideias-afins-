// Base de dados do Dicionário de Ideias Afins
// Cada entrada representa um "conceito": um conjunto de termos (sinônimos/variações),
// frases que expressam a ideia, e ids de conceitos relacionados (ideias afins).
const CONCEPTS = [
  {
    id: "felicidade",
    termos: ["felicidade", "feliz", "alegria", "contentamento", "júbilo", "satisfação", "leveza"],
    frases: [
      "sentir-se bem com a vida",
      "estar em paz consigo mesmo",
      "viver um momento de plenitude",
      "sorrir sem motivo aparente",
      "sentir o coração leve",
      "estar tudo em harmonia por dentro"
    ],
    relacionados: ["euforia", "gratidao", "esperanca", "amor", "calma", "alivio"]
  },
  {
    id: "tristeza",
    termos: ["tristeza", "triste", "melancolia", "abatimento", "desânimo", "pesar", "aflição"],
    frases: [
      "sentir um peso no peito",
      "chorar sem saber bem o motivo",
      "estar com os ânimos em baixa",
      "ver tudo cinza",
      "sentir um nó na garganta",
      "não ter vontade de fazer nada"
    ],
    relacionados: ["saudade", "solidao", "desespero", "tedio", "vergonha", "frustracao"]
  },
  {
    id: "medo",
    termos: ["medo", "temor", "pavor", "receio", "susto", "apreensão", "insegurança"],
    frases: [
      "sentir um frio na barriga",
      "ter as pernas bambas",
      "não conseguir dar o primeiro passo",
      "ficar paralisado diante do perigo",
      "sentir os pelos arrepiarem",
      "travar na hora de agir"
    ],
    relacionados: ["ansiedade", "coragem", "surpresa", "desespero", "ignorancia", "duvida"]
  },
  {
    id: "raiva",
    termos: ["raiva", "ira", "fúria", "irritação", "indignação", "revolta", "aborrecimento"],
    frases: [
      "ver tudo vermelho",
      "perder a paciência",
      "sentir o sangue ferver",
      "explodir por dentro",
      "não engolir aquilo",
      "sair fumaça pelas orelhas"
    ],
    relacionados: ["odio", "ciume", "justica", "paciencia", "orgulho", "frustracao"]
  },
  {
    id: "surpresa",
    termos: ["surpresa", "espanto", "assombro", "perplexidade", "estranhamento"],
    frases: [
      "ficar de queixo caído",
      "não acreditar no que os olhos veem",
      "levar um susto bom",
      "arregalar os olhos",
      "ficar sem reação",
      "tomar um choque"
    ],
    relacionados: ["medo", "felicidade", "destino", "sorte", "mudanca", "curiosidade"]
  },
  {
    id: "nojo",
    termos: ["nojo", "repugnância", "aversão", "repulsa", "enjoo"],
    frases: [
      "torcer o nariz",
      "sentir o estômago embrulhar",
      "não suportar nem olhar",
      "afastar-se com repulsa",
      "dar vontade de vomitar",
      "ficar de cabelo em pé de nojo"
    ],
    relacionados: ["odio", "vergonha", "raiva", "ignorancia", "rejeicao"]
  },
  {
    id: "amor",
    termos: ["amor", "carinho", "afeto", "paixão", "amar", "ternura", "amor-próprio"],
    frases: [
      "gostar de alguém de coração",
      "sentir borboletas no estômago",
      "querer bem sem esperar nada em troca",
      "cuidar como se fosse seu",
      "não conseguir tirar do pensamento",
      "sentir o peito quentinho perto da pessoa"
    ],
    relacionados: ["amizade", "familia", "gratidao", "felicidade", "confianca", "reconciliacao"]
  },
  {
    id: "odio",
    termos: ["ódio", "aversão profunda", "rancor", "detestar", "repúdio"],
    frases: [
      "guardar mágoa por anos",
      "não conseguir perdoar",
      "desejar mal ao outro",
      "sentir raiva transformada em rancor",
      "não suportar nem ouvir o nome da pessoa",
      "guardar isso como uma pedra no sapato"
    ],
    relacionados: ["raiva", "ciume", "traicao", "nojo", "vergonha", "rejeicao"]
  },
  {
    id: "ansiedade",
    termos: ["ansiedade", "aflição", "apreensão", "nervosismo", "angústia", "inquietação"],
    frases: [
      "roer as unhas de nervoso",
      "sentir o coração acelerado",
      "antecipar o pior antes de acontecer",
      "não conseguir ficar parado",
      "a mente correr mais rápido que o corpo",
      "sentir um aperto no peito antes de algo importante"
    ],
    relacionados: ["medo", "calma", "desespero", "tristeza", "paciencia", "estresse"]
  },
  {
    id: "calma",
    termos: ["calma", "tranquilidade", "serenidade", "paz", "sossego", "quietude"],
    frases: [
      "respirar fundo e deixar passar",
      "manter a cabeça no lugar",
      "encontrar um porto seguro",
      "estar em paz com tudo",
      "deixar a água baixar antes de agir",
      "sentir tudo mais leve por dentro"
    ],
    relacionados: ["paciencia", "felicidade", "sabedoria", "confianca", "natureza", "alivio"]
  },
  {
    id: "esperanca",
    termos: ["esperança", "otimismo", "fé", "expectativa positiva", "confiança no futuro"],
    frases: [
      "acreditar em dias melhores",
      "não perder a fé mesmo no escuro",
      "enxergar luz no fim do túnel",
      "manter a chama acesa",
      "acordar acreditando que vai dar certo",
      "plantar hoje o que quer colher amanhã"
    ],
    relacionados: ["felicidade", "coragem", "sonho", "perseveranca", "destino", "fe"]
  },
  {
    id: "desespero",
    termos: ["desespero", "desesperança", "aflição extrema", "angústia profunda", "pânico"],
    frases: [
      "não ver saída para o problema",
      "sentir o chão desabar",
      "estar à beira do abismo",
      "perder as forças de vez",
      "não saber mais para onde correr",
      "sentir que tudo desmorona ao mesmo tempo"
    ],
    relacionados: ["tristeza", "medo", "ansiedade", "fracasso", "solidao", "urgencia"]
  },
  {
    id: "ciume",
    termos: ["ciúme", "possessividade", "insegurança afetiva", "desconfiança"],
    frases: [
      "não suportar ver o outro com o que é seu",
      "sentir o peito apertar de ciúme",
      "comparar-se o tempo todo com o outro",
      "desconfiar sem motivo real",
      "sentir medo de perder o que é seu",
      "vigiar cada passo do outro"
    ],
    relacionados: ["raiva", "amor", "traicao", "confianca", "odio", "inveja"]
  },
  {
    id: "inveja",
    termos: ["inveja", "cobiça", "despeito"],
    frases: [
      "querer o que o outro tem",
      "não suportar ver o sucesso alheio",
      "torcer o nariz para a felicidade do outro",
      "sentir um aperto ao ver o outro crescer",
      "comparar a própria vida com a dos outros",
      "desejar em silêncio o que não é seu"
    ],
    relacionados: ["ciume", "ganancia", "admiracao", "competicao", "gratidao"]
  },
  {
    id: "vergonha",
    termos: ["vergonha", "constrangimento", "acanhamento", "timidez", "embaraço"],
    frases: [
      "ficar vermelho na hora",
      "querer que o chão se abra",
      "evitar o olhar dos outros",
      "sentir-se pequeno diante da situação",
      "não saber onde enfiar a cara",
      "gaguejar de tão sem graça"
    ],
    relacionados: ["orgulho", "medo", "humildade", "tristeza", "culpa"]
  },
  {
    id: "orgulho",
    termos: ["orgulho", "brio", "amor-próprio", "vaidade", "altivez"],
    frases: [
      "encher o peito de satisfação",
      "não abaixar a cabeça",
      "sentir-se realizado com a própria conquista",
      "levantar o queixo com dignidade",
      "não admitir estar errado",
      "usar aquilo como troféu"
    ],
    relacionados: ["felicidade", "sucesso", "humildade", "vergonha", "gratidao", "vaidade"]
  },
  {
    id: "vaidade",
    termos: ["vaidade", "narcisismo", "presunção", "autoestima exagerada"],
    frases: [
      "se olhar no espelho várias vezes ao dia",
      "querer ser sempre o centro das atenções",
      "cuidar da aparência acima de tudo",
      "gostar de ser admirado",
      "não sair de casa sem se arrumar",
      "achar que é sempre o melhor da sala"
    ],
    relacionados: ["orgulho", "beleza", "admiracao", "competicao"]
  },
  {
    id: "gratidao",
    termos: ["gratidão", "reconhecimento", "agradecimento", "apreço"],
    frases: [
      "reconhecer o que a vida deu",
      "agradecer pelas pequenas coisas",
      "valorizar quem esteve ao lado",
      "sentir-se abençoado",
      "olhar para trás e agradecer o caminho",
      "dar valor ao que se tem antes de perder"
    ],
    relacionados: ["felicidade", "amor", "humildade", "esperanca", "abundancia"]
  },
  {
    id: "saudade",
    termos: ["saudade", "nostalgia", "falta", "lembrança querida", "reminiscência"],
    frases: [
      "sentir falta de um tempo que já passou",
      "lembrar com um aperto no coração",
      "desejar reviver um momento",
      "olhar fotos antigas e suspirar",
      "sentir um vazio de quem não está mais por perto",
      "voltar num pensamento para um lugar que já não existe mais"
    ],
    relacionados: ["tristeza", "amor", "familia", "amizade", "tempo", "infancia"]
  },
  {
    id: "solidao",
    termos: ["solidão", "isolamento", "vazio", "desamparo", "solitude"],
    frases: [
      "sentir-se sozinho mesmo cercado de gente",
      "não ter com quem dividir o dia",
      "o silêncio que pesa",
      "faltar alguém para conversar",
      "comer sozinho olhando para a parede",
      "sentir que ninguém entenderia"
    ],
    relacionados: ["tristeza", "desespero", "amizade", "tedio", "silencio"]
  },
  {
    id: "tedio",
    termos: ["tédio", "monotonia", "enfado", "aborrecimento", "apatia"],
    frases: [
      "os dias parecem todos iguais",
      "não ter o que fazer",
      "sentir o tempo andar devagar",
      "bocejar de puro cansaço mental",
      "rolar a tela sem realmente ver nada",
      "sentir que nada empolga mais"
    ],
    relacionados: ["solidao", "preguica", "tristeza", "criatividade", "rotina"]
  },
  {
    id: "euforia",
    termos: ["euforia", "êxtase", "empolgação", "entusiasmo", "vibração"],
    frases: [
      "sentir uma explosão de alegria",
      "não caber em si de tanta empolgação",
      "vibrar de emoção",
      "estar no auge da felicidade",
      "pular de alegria sem conseguir se controlar",
      "sentir uma descarga de adrenalina boa"
    ],
    relacionados: ["felicidade", "sucesso", "amor", "surpresa", "diversao"]
  },
  {
    id: "coragem",
    termos: ["coragem", "bravura", "valentia", "audácia", "destemor", "ousadia"],
    frases: [
      "enfrentar o medo de frente",
      "dar o primeiro passo mesmo tremendo",
      "encarar o desafio sem recuar",
      "ter peito para dizer a verdade",
      "tomar a decisão difícil mesmo com medo",
      "seguir em frente mesmo sem garantias"
    ],
    relacionados: ["medo", "perseveranca", "honestidade", "esperanca", "orgulho", "superacao"]
  },
  {
    id: "honestidade",
    termos: ["honestidade", "sinceridade", "franqueza", "verdade pessoal", "transparência"],
    frases: [
      "falar a verdade mesmo quando dói",
      "não esconder nada por trás",
      "ser fiel à própria palavra",
      "olhar nos olhos e não mentir",
      "dizer as coisas como elas são",
      "não maquiar a real situação"
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
      "defender mesmo quando não é fácil",
      "não virar as costas quando a maré vira",
      "ficar do lado de quem sempre esteve do seu"
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
      "não fechar os olhos para a injustiça",
      "julgar sem favorecer ninguém",
      "colher o que se plantou, para o bem ou para o mal"
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
      "decidir por si mesmo",
      "não precisar pedir permissão para viver a própria vida",
      "sair do lugar quando bem entender"
    ],
    relacionados: ["responsabilidade", "coragem", "sonho", "destino", "individualidade"]
  },
  {
    id: "igualdade",
    termos: ["igualdade", "equivalência", "paridade"],
    frases: [
      "todos terem as mesmas chances",
      "não haver diferença de tratamento",
      "reconhecer que ninguém vale mais que ninguém",
      "dividir de forma justa",
      "tratar rico e pobre do mesmo jeito",
      "ninguém ficar para trás na fila"
    ],
    relacionados: ["justica", "respeito", "solidariedade", "humildade", "diversidade"]
  },
  {
    id: "respeito",
    termos: ["respeito", "consideração", "reverência", "deferência"],
    frases: [
      "ouvir o outro sem julgar",
      "tratar com educação mesmo discordando",
      "reconhecer o valor de cada um",
      "não ultrapassar os limites do outro",
      "pedir licença antes de opinar sobre a vida alheia",
      "tratar o outro como gostaria de ser tratado"
    ],
    relacionados: ["humildade", "honestidade", "igualdade", "confianca", "justica", "limite"]
  },
  {
    id: "humildade",
    termos: ["humildade", "simplicidade", "modéstia"],
    frases: [
      "reconhecer os próprios limites",
      "não se achar melhor que ninguém",
      "aceitar ajuda sem vergonha",
      "aprender mesmo já sabendo muito",
      "admitir quando não sabe",
      "dar valor às coisas simples da vida"
    ],
    relacionados: ["respeito", "sabedoria", "gratidao", "vergonha", "orgulho", "aceitacao"]
  },
  {
    id: "generosidade",
    termos: ["generosidade", "altruísmo", "bondade", "desprendimento"],
    frases: [
      "dar sem esperar receber",
      "estender a mão a quem precisa",
      "dividir o pouco que se tem",
      "pensar no bem do outro",
      "abrir mão do próprio conforto por alguém",
      "doar o tempo que também é escasso"
    ],
    relacionados: ["solidariedade", "amor", "gratidao", "respeito", "gentileza", "compaixao"]
  },
  {
    id: "paciencia",
    termos: ["paciência", "tolerância", "serenidade", "persistência calma"],
    frases: [
      "esperar sem se desesperar",
      "contar até dez antes de reagir",
      "dar tempo ao tempo",
      "manter a calma mesmo sob pressão",
      "não perder a cabeça mesmo irritado",
      "esperar a fruta amadurecer no seu tempo"
    ],
    relacionados: ["calma", "perseveranca", "sabedoria", "raiva", "rotina"]
  },
  {
    id: "perseveranca",
    termos: ["perseverança", "persistência", "determinação", "força de vontade"],
    frases: [
      "não desistir mesmo depois de cair",
      "continuar tentando até conseguir",
      "levantar a cada queda",
      "manter o foco no objetivo",
      "seguir mesmo quando ninguém mais acredita",
      "insistir até a porta se abrir"
    ],
    relacionados: ["coragem", "esperanca", "sucesso", "fracasso", "paciencia", "superacao"]
  },
  {
    id: "sabedoria",
    termos: ["sabedoria", "sensatez", "discernimento", "prudência"],
    frases: [
      "aprender com os próprios erros",
      "saber a hora certa de agir",
      "enxergar além do óbvio",
      "pensar antes de falar",
      "saber quando ficar calado",
      "entender que nem tudo precisa de resposta imediata"
    ],
    relacionados: ["conhecimento", "humildade", "calma", "paciencia", "crescimento"]
  },
  {
    id: "integridade",
    termos: ["integridade", "retidão de caráter", "coerência"],
    frases: [
      "agir do mesmo jeito quando ninguém está vendo",
      "ser fiel aos próprios valores",
      "não se corromper por interesse",
      "manter a palavra em qualquer situação",
      "fazer o certo mesmo quando o errado seria mais fácil",
      "não vender os princípios por vantagem"
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
      "fazer a parte que cabe a você",
      "colocar a mão na consciência",
      "não deixar para amanhã o que é urgente hoje"
    ],
    relacionados: ["integridade", "liberdade", "trabalho", "justica", "organizacao"]
  },
  {
    id: "tempo",
    termos: ["tempo", "passagem do tempo", "temporalidade", "duração"],
    frases: [
      "o tempo não para para ninguém",
      "cada coisa no seu momento",
      "o relógio da vida correndo",
      "deixar o tempo curar as feridas",
      "perceber que o tempo voou sem avisar",
      "correr contra o relógio"
    ],
    relacionados: ["mudanca", "saudade", "destino", "vida", "urgencia", "rotina"]
  },
  {
    id: "mudanca",
    termos: ["mudança", "transformação", "renovação", "virada"],
    frases: [
      "virar a página",
      "nada é para sempre",
      "sair da zona de conforto",
      "recomeçar do zero",
      "deixar para trás o que já não serve",
      "encarar um novo capítulo"
    ],
    relacionados: ["tempo", "coragem", "destino", "sonho", "recomeco", "crescimento"]
  },
  {
    id: "recomeco",
    termos: ["recomeço", "novo começo", "reinício", "renascimento"],
    frases: [
      "virar a página e começar outro capítulo",
      "levantar a poeira e seguir em frente",
      "dar a si mesmo uma segunda chance",
      "reconstruir do zero depois de um fim",
      "plantar de novo depois da colheita ruim",
      "acordar disposto a tentar de novo"
    ],
    relacionados: ["mudanca", "superacao", "esperanca", "coragem", "alivio"]
  },
  {
    id: "destino",
    termos: ["destino", "sina", "fado", "desígnio"],
    frases: [
      "o que está escrito, se cumpre",
      "cada um tem seu caminho traçado",
      "as voltas que a vida dá",
      "acreditar que tudo acontece por um motivo",
      "encontrar alguém no momento certo por acaso",
      "seguir o rumo que a vida escolheu"
    ],
    relacionados: ["sorte", "tempo", "mudanca", "vida", "sonho", "fe"]
  },
  {
    id: "sorte",
    termos: ["sorte", "acaso", "fortuna", "coincidência"],
    frases: [
      "estar no lugar certo na hora certa",
      "ganhar sem nem esperar",
      "as coisas se encaixarem por acaso",
      "sorte grande de última hora",
      "cair do céu bem na hora que precisava",
      "dar certo sem nem ter planejado"
    ],
    relacionados: ["destino", "surpresa", "sucesso", "fracasso", "abundancia"]
  },
  {
    id: "verdade",
    termos: ["verdade", "veracidade", "realidade dos fatos"],
    frases: [
      "os fatos como realmente aconteceram",
      "nada a esconder",
      "a verdade sempre vem à tona",
      "falar sem rodeios",
      "não maquiar os fatos",
      "dizer o que é, sem enfeitar"
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
      "criar uma versão diferente dos fatos",
      "inventar uma desculpa na hora",
      "maquiar a realidade para não magoar"
    ],
    relacionados: ["verdade", "traicao", "vergonha", "odio", "duvida"]
  },
  {
    id: "duvida",
    termos: ["dúvida", "incerteza", "indecisão", "hesitação"],
    frases: [
      "não saber para que lado ir",
      "ficar em cima do muro",
      "pesar os prós e contras sem chegar a lugar nenhum",
      "sentir um pé atrás sem saber por quê",
      "não confiar totalmente no que ouviu",
      "bater o pé sem convicção"
    ],
    relacionados: ["decisao", "medo", "confianca", "mentira", "curiosidade"]
  },
  {
    id: "decisao",
    termos: ["decisão", "escolha", "resolução", "deliberação"],
    frases: [
      "bater o martelo de uma vez",
      "pesar os prós e contras antes de agir",
      "seguir o coração ou a razão",
      "tomar coragem e escolher um caminho",
      "não voltar atrás depois de decidido",
      "assumir as consequências da escolha feita"
    ],
    relacionados: ["duvida", "coragem", "responsabilidade", "destino", "planejamento"]
  },
  {
    id: "conhecimento",
    termos: ["conhecimento", "saber", "aprendizado", "instrução"],
    frases: [
      "quanto mais se aprende, mais se percebe o que falta saber",
      "estudar para entender o mundo",
      "buscar respostas para as próprias perguntas",
      "guardar o que a experiência ensina",
      "juntar teoria e prática na cabeça",
      "nunca parar de se atualizar"
    ],
    relacionados: ["sabedoria", "ignorancia", "criatividade", "verdade", "curiosidade"]
  },
  {
    id: "ignorancia",
    termos: ["ignorância", "desconhecimento", "falta de informação"],
    frases: [
      "não saber o que não sabe",
      "agir sem entender as consequências",
      "confundir opinião com fato",
      "fechar os olhos para o óbvio",
      "falar com convicção sobre o que não conhece",
      "recusar-se a aprender por teimosia"
    ],
    relacionados: ["conhecimento", "medo", "raiva", "nojo"]
  },
  {
    id: "curiosidade",
    termos: ["curiosidade", "interesse", "vontade de saber", "inquietação intelectual"],
    frases: [
      "querer saber como as coisas funcionam",
      "não resistir a espiar o que está escondido",
      "fazer perguntas até entender de verdade",
      "ficar intrigado com o que não faz sentido ainda",
      "seguir o rastro de uma pergunta sem resposta",
      "sentir vontade de abrir e ver por dentro"
    ],
    relacionados: ["conhecimento", "surpresa", "criatividade", "duvida"]
  },
  {
    id: "poder",
    termos: ["poder", "autoridade", "domínio", "influência"],
    frases: [
      "ter a palavra final",
      "estar no comando da situação",
      "mandar mais do que os outros",
      "controlar o rumo das coisas",
      "decidir o destino de quem está ao redor",
      "ter a última palavra em qualquer discussão"
    ],
    relacionados: ["liberdade", "justica", "dinheiro", "responsabilidade", "controle"]
  },
  {
    id: "controle",
    termos: ["controle", "domínio próprio", "autocontrole", "gestão"],
    frases: [
      "manter as rédeas da situação",
      "não deixar a emoção tomar conta",
      "ter tudo sob controle mesmo no caos",
      "segurar a onda até passar",
      "conduzir as coisas sem perder o rumo",
      "não deixar a situação escapar das mãos"
    ],
    relacionados: ["poder", "calma", "organizacao", "disciplina", "foco"]
  },
  {
    id: "dinheiro",
    termos: ["dinheiro", "riqueza", "fortuna financeira", "capital"],
    frases: [
      "ganhar o suficiente para viver bem",
      "juntar para o futuro",
      "não deixar faltar o essencial",
      "dinheiro não traz felicidade, mas ajuda",
      "fechar o mês no azul",
      "guardar para os dias de chuva"
    ],
    relacionados: ["trabalho", "sucesso", "poder", "sorte", "abundancia", "escassez"]
  },
  {
    id: "abundancia",
    termos: ["abundância", "fartura", "prosperidade", "excesso positivo"],
    frases: [
      "ter mais do que o suficiente",
      "a mesa nunca ficar vazia",
      "colher mais do que se plantou",
      "sentir que falta nada",
      "viver na fartura depois de tempos difíceis",
      "não precisar contar para ver se dá"
    ],
    relacionados: ["dinheiro", "sorte", "gratidao", "sucesso", "luxo"]
  },
  {
    id: "escassez",
    termos: ["escassez", "falta", "carência", "penúria"],
    frases: [
      "não ter o suficiente para todos",
      "contar cada centavo até o fim do mês",
      "sentir que sempre falta alguma coisa",
      "dividir o pouco que sobrou",
      "apertar o cinto para chegar até o fim do mês",
      "viver na base do essencial"
    ],
    relacionados: ["dinheiro", "fracasso", "urgencia", "responsabilidade"]
  },
  {
    id: "luxo",
    termos: ["luxo", "requinte", "extravagância", "opulência"],
    frases: [
      "se dar ao luxo de não se preocupar com o preço",
      "viver rodeado de conforto",
      "querer sempre o melhor do melhor",
      "gastar sem culpa numa ocasião especial",
      "cercar-se de coisas caras e refinadas",
      "dar-se um mimo de vez em quando"
    ],
    relacionados: ["abundancia", "beleza", "vaidade", "dinheiro"]
  },
  {
    id: "ganancia",
    termos: ["ganância", "avareza", "cobiça", "sofreguidão"],
    frases: [
      "nunca achar que é o suficiente",
      "querer sempre mais, custe o que custar",
      "não dividir por medo de ficar com menos",
      "passar por cima de outros para ganhar mais",
      "guardar tudo para si mesmo",
      "não conseguir se contentar com o que já tem"
    ],
    relacionados: ["inveja", "dinheiro", "poder", "competicao"]
  },
  {
    id: "sucesso",
    termos: ["sucesso", "êxito", "triunfo", "vitória", "realização"],
    frases: [
      "colher os frutos do esforço",
      "alcançar o que sempre sonhou",
      "chegar lá depois de muita luta",
      "ser reconhecido pelo que fez",
      "ver o trabalho duro finalmente valer a pena",
      "cruzar a linha de chegada depois de tanto esforço"
    ],
    relacionados: ["fracasso", "perseveranca", "orgulho", "trabalho", "dinheiro", "superacao"]
  },
  {
    id: "fracasso",
    termos: ["fracasso", "derrota", "insucesso", "decepção"],
    frases: [
      "não conseguir apesar do esforço",
      "ver o plano desmoronar",
      "cair depois de tentar tanto",
      "aprender com o tombo",
      "sair de mãos vazias depois de tanto investir",
      "sentir que todo o esforço foi em vão"
    ],
    relacionados: ["sucesso", "desespero", "perseveranca", "tristeza", "arrependimento"]
  },
  {
    id: "arrependimento",
    termos: ["arrependimento", "remorso", "pesar por algo feito"],
    frases: [
      "desejar poder voltar atrás no tempo",
      "não conseguir parar de pensar no que fez",
      "sentir que deveria ter agido diferente",
      "pedir desculpas tarde demais",
      "carregar aquilo como um peso na consciência",
      "olhar para trás e se perguntar 'e se'"
    ],
    relacionados: ["culpa", "fracasso", "perdao", "tristeza"]
  },
  {
    id: "culpa",
    termos: ["culpa", "peso na consciência", "responsabilidade por um erro"],
    frases: [
      "não conseguir se perdoar",
      "sentir que fez algo errado",
      "carregar aquilo nas costas",
      "achar que a culpa é sempre sua",
      "revirar a mesma cena na cabeça sem parar",
      "pedir desculpas mesmo sem saber se é o suficiente"
    ],
    relacionados: ["arrependimento", "vergonha", "perdao", "responsabilidade"]
  },
  {
    id: "perdao",
    termos: ["perdão", "reconciliação", "absolvição", "clemência"],
    frases: [
      "soltar o que machucou para poder seguir",
      "dar uma segunda chance",
      "deixar a mágoa de lado",
      "entender sem precisar concordar",
      "fazer as pazes consigo mesmo",
      "escolher não carregar aquele peso para sempre"
    ],
    relacionados: ["culpa", "reconciliacao", "amor", "alivio", "compaixao"]
  },
  {
    id: "reconciliacao",
    termos: ["reconciliação", "reaproximação", "fazer as pazes"],
    frases: [
      "voltar a se falar depois de um tempo calado",
      "estender a mão primeiro",
      "deixar o orgulho de lado para se reaproximar",
      "conversar até entender o outro lado",
      "curar a ferida com uma conversa sincera",
      "recomeçar depois de uma briga feia"
    ],
    relacionados: ["perdao", "amor", "amizade", "familia", "confianca"]
  },
  {
    id: "morte",
    termos: ["morte", "falecimento", "fim da vida", "partida"],
    frases: [
      "dizer o último adeus",
      "a vida que se apaga",
      "ficar só a lembrança",
      "o ciclo natural que chega para todos",
      "a ausência que dói todo dia",
      "guardar a pessoa viva na memória"
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
      "seguir em frente apesar de tudo",
      "dar valor ao tempo que se tem",
      "encarar cada fase como ela vem"
    ],
    relacionados: ["morte", "tempo", "sonho", "felicidade", "destino", "crescimento"]
  },
  {
    id: "sonho",
    termos: ["sonho", "aspiração", "ambição", "desejo de realização"],
    frases: [
      "correr atrás do que se deseja",
      "imaginar um futuro melhor",
      "não desistir do que se planeja",
      "acreditar que é possível",
      "guardar aquilo no fundo do coração até realizar",
      "trabalhar duro por algo que ainda não existe"
    ],
    relacionados: ["esperanca", "sucesso", "perseveranca", "liberdade", "criatividade", "inspiracao"]
  },
  {
    id: "amizade",
    termos: ["amizade", "companheirismo", "camaradagem", "confraternização"],
    frases: [
      "ter alguém para contar tudo",
      "estar junto nos bons e maus momentos",
      "rir das mesmas piadas há anos",
      "poder contar de verdade com alguém",
      "aparecer quando mais precisa, sem precisar chamar",
      "ter aquele amigo que entende sem precisar explicar"
    ],
    relacionados: ["amor", "lealdade", "confianca", "solidao", "familia", "gentileza"]
  },
  {
    id: "familia",
    termos: ["família", "parentes", "lar", "raízes"],
    frases: [
      "ter um porto seguro para voltar",
      "sangue que puxa mesmo de longe",
      "criar laços que duram a vida toda",
      "casa é onde a família está",
      "sentar à mesa todo domingo com todo mundo junto",
      "saber que sempre tem para onde voltar"
    ],
    relacionados: ["amor", "amizade", "saudade", "respeito", "infancia"]
  },
  {
    id: "confianca",
    termos: ["confiança", "credibilidade", "segurança na relação"],
    frases: [
      "poder contar com alguém de olhos fechados",
      "acreditar na palavra do outro",
      "não precisar duvidar",
      "construir uma relação sólida aos poucos",
      "dormir tranquilo sabendo que pode contar com aquela pessoa",
      "entregar as chaves de casa sem pensar duas vezes"
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
      "descobrir que foi enganado o tempo todo",
      "ser passado para trás por quem menos esperava",
      "perceber tarde demais que era tudo mentira"
    ],
    relacionados: ["confianca", "mentira", "odio", "ciume", "lealdade"]
  },
  {
    id: "rejeicao",
    termos: ["rejeição", "recusa", "exclusão pessoal", "desprezo"],
    frases: [
      "não ser escolhido",
      "sentir a porta se fechar na cara",
      "ouvir um não depois de se abrir",
      "sentir-se descartado",
      "não ser convidado para o grupo",
      "ficar de fora sem entender o motivo"
    ],
    relacionados: ["tristeza", "vergonha", "exclusao", "aceitacao", "solidao"]
  },
  {
    id: "aceitacao",
    termos: ["aceitação", "acolhimento", "pertencimento", "reconhecimento do outro"],
    frases: [
      "sentir que finalmente pertence a algum lugar",
      "ser recebido de braços abertos",
      "não precisar fingir ser outra pessoa",
      "encontrar um lugar onde se encaixa",
      "sentir-se em casa mesmo longe de casa",
      "ser aceito exatamente como é"
    ],
    relacionados: ["pertencimento", "amizade", "familia", "respeito", "rejeicao"]
  },
  {
    id: "pertencimento",
    termos: ["pertencimento", "senso de comunidade", "identidade coletiva"],
    frases: [
      "sentir que faz parte de algo maior",
      "reconhecer-se num grupo",
      "ter um lugar que é seu de verdade",
      "sentir a torcida do time como parte de si",
      "reconhecer a própria história numa comunidade",
      "sentir orgulho de onde veio"
    ],
    relacionados: ["aceitacao", "familia", "amizade", "individualidade", "diversidade"]
  },
  {
    id: "exclusao",
    termos: ["exclusão", "isolamento social", "marginalização"],
    frases: [
      "ficar de fora do grupo",
      "não ser convidado para nada",
      "sentir-se invisível para os outros",
      "ser deixado de lado por ser diferente",
      "não encontrar espaço em lugar nenhum",
      "ser o último escolhido sempre"
    ],
    relacionados: ["rejeicao", "solidao", "tristeza", "diversidade"]
  },
  {
    id: "diversidade",
    termos: ["diversidade", "pluralidade", "diferença", "multiplicidade"],
    frases: [
      "cada um com sua própria história",
      "encontrar beleza no que é diferente",
      "muitas vozes formando um só coro",
      "reconhecer que ninguém precisa ser igual",
      "somar forças mesmo sendo tão diferentes",
      "aprender com quem enxerga o mundo de outro jeito"
    ],
    relacionados: ["igualdade", "respeito", "individualidade", "pertencimento", "empatia"]
  },
  {
    id: "individualidade",
    termos: ["individualidade", "autenticidade", "identidade própria", "singularidade"],
    frases: [
      "ser quem é sem pedir desculpas",
      "não seguir a maioria só para se encaixar",
      "ter um jeito só seu de ver as coisas",
      "não ter vergonha do que faz diferente",
      "seguir a própria voz mesmo contra a maré",
      "construir um caminho que ninguém mais trilhou"
    ],
    relacionados: ["liberdade", "criatividade", "diversidade", "coragem"]
  },
  {
    id: "empatia",
    termos: ["empatia", "compreensão do outro", "sensibilidade"],
    frases: [
      "se colocar no lugar do outro",
      "sentir a dor do outro como se fosse sua",
      "entender antes de julgar",
      "escutar de verdade, sem pensar na resposta",
      "perceber o que o outro não conseguiu dizer",
      "chorar junto sem precisar de explicação"
    ],
    relacionados: ["compaixao", "solidariedade", "generosidade", "respeito", "gentileza"]
  },
  {
    id: "compaixao",
    termos: ["compaixão", "piedade", "misericórdia", "solidariedade afetiva"],
    frases: [
      "sofrer junto ao ver o sofrimento alheio",
      "estender a mão mesmo sem ser pedido",
      "não conseguir ficar indiferente à dor do outro",
      "acolher sem julgar",
      "querer aliviar a dor de quem sofre",
      "abraçar quem está caído"
    ],
    relacionados: ["empatia", "generosidade", "perdao", "gentileza"]
  },
  {
    id: "gentileza",
    termos: ["gentileza", "delicadeza", "cortesia", "afabilidade"],
    frases: [
      "tratar bem mesmo sem ser obrigado",
      "ceder o lugar sem pensar duas vezes",
      "falar com doçura mesmo num dia difícil",
      "fazer o bem sem esperar aplausos",
      "abrir a porta e sorrir para um estranho",
      "ter um gesto pequeno que muda o dia de alguém"
    ],
    relacionados: ["generosidade", "empatia", "respeito", "compaixao"]
  },
  {
    id: "admiracao",
    termos: ["admiração", "reverência", "respeito profundo", "encantamento"],
    frases: [
      "olhar para alguém como exemplo a seguir",
      "ficar impressionado com a competência do outro",
      "querer ser um pouco como aquela pessoa",
      "aplaudir de pé por dentro",
      "guardar aquela pessoa como referência",
      "sentir orgulho alheio como se fosse próprio"
    ],
    relacionados: ["gratidao", "inspiracao", "respeito", "sucesso"]
  },
  {
    id: "inspiracao",
    termos: ["inspiração", "estímulo criativo", "chama interior", "faísca"],
    frases: [
      "sentir a ideia surgir do nada",
      "olhar para alguém e querer fazer mais",
      "sentir vontade de criar depois de ver algo bonito",
      "a centelha que acende um projeto novo",
      "ver um exemplo e pensar 'eu também consigo'",
      "encontrar motivo para começar algo novo"
    ],
    relacionados: ["criatividade", "admiracao", "motivacao", "sonho", "arte"]
  },
  {
    id: "motivacao",
    termos: ["motivação", "estímulo", "ânimo", "impulso"],
    frases: [
      "acordar com vontade de vencer o dia",
      "encontrar um motivo para continuar",
      "sentir a energia para começar de novo",
      "ter um objetivo que puxa para frente",
      "sentir a vontade de ir além renovada",
      "lembrar por que começou quando bate o cansaço"
    ],
    relacionados: ["esperanca", "perseveranca", "trabalho", "sonho", "foco"]
  },
  {
    id: "preguica",
    termos: ["preguiça", "indolência", "procrastinação", "moleza"],
    frases: [
      "deixar tudo para depois",
      "não ter vontade de sair do lugar",
      "adiar o que precisa ser feito",
      "ficar na cama mesmo sabendo que devia levantar",
      "empurrar a tarefa para amanhã de novo",
      "achar qualquer desculpa para não começar"
    ],
    relacionados: ["tedio", "motivacao", "responsabilidade", "distracao", "cansaco"]
  },
  {
    id: "cansaco",
    termos: ["cansaço", "exaustão", "fadiga", "esgotamento"],
    frases: [
      "não ter mais energia para nada",
      "sentir o corpo pedindo descanso",
      "chegar no fim do dia sem forças",
      "precisar de uma pausa antes de continuar",
      "arrastar-se até o fim da tarefa",
      "sentir o peso do dia nas costas"
    ],
    relacionados: ["estresse", "preguica", "alivio", "rotina"]
  },
  {
    id: "estresse",
    termos: ["estresse", "tensão", "sobrecarga", "pressão"],
    frases: [
      "sentir que tudo acontece ao mesmo tempo",
      "não dar conta de tantas cobranças",
      "viver no limite entre uma tarefa e outra",
      "sentir o corpo tenso o dia inteiro",
      "explodir por qualquer coisinha de tão sobrecarregado",
      "sentir que falta hora no dia"
    ],
    relacionados: ["ansiedade", "cansaco", "urgencia", "controle", "alivio"]
  },
  {
    id: "alivio",
    termos: ["alívio", "descanso", "desafogo", "respiro"],
    frases: [
      "sentir um peso sair das costas",
      "finalmente poder respirar fundo",
      "relaxar depois de tanta tensão",
      "sentir que passou o pior",
      "soltar o ar que nem sabia que estava prendendo",
      "sentir o corpo relaxar de uma vez"
    ],
    relacionados: ["calma", "felicidade", "gratidao", "cansaco"]
  },
  {
    id: "frustracao",
    termos: ["frustração", "decepção", "contrariedade", "desapontamento"],
    frases: [
      "esperar uma coisa e receber outra bem diferente",
      "não conseguir o que tanto queria",
      "sentir que o esforço não valeu a pena",
      "bater a cabeça na parede sem sair do lugar",
      "sentir a vontade de desistir de tudo",
      "engolir em seco quando o plano não dá certo"
    ],
    relacionados: ["raiva", "tristeza", "fracasso", "arrependimento"]
  },
  {
    id: "superacao",
    termos: ["superação", "resiliência", "virada por cima", "vitória sobre a adversidade"],
    frases: [
      "transformar a dor em força",
      "sair mais forte depois da queda",
      "virar o jogo quando tudo parecia perdido",
      "provar para si mesmo que era capaz",
      "levantar poeira e seguir mesmo machucado",
      "fazer da dificuldade um degrau"
    ],
    relacionados: ["coragem", "perseveranca", "sucesso", "crescimento", "recomeco"]
  },
  {
    id: "crescimento",
    termos: ["crescimento", "evolução pessoal", "amadurecimento", "desenvolvimento"],
    frases: [
      "ser hoje melhor do que era ontem",
      "aprender algo novo sobre si mesmo",
      "sair da própria zona de conforto para evoluir",
      "olhar para trás e ver o quanto mudou",
      "encarar os erros como degraus para melhorar",
      "amadurecer depois de uma boa dor de cabeça"
    ],
    relacionados: ["sabedoria", "mudanca", "superacao", "conhecimento", "vida"]
  },
  {
    id: "limite",
    termos: ["limite", "fronteira pessoal", "linha vermelha"],
    frases: [
      "saber até onde pode ir",
      "dizer não sem sentir culpa",
      "não deixar passarem por cima de você",
      "reconhecer quando é hora de parar",
      "proteger o próprio espaço",
      "traçar uma linha que ninguém deve cruzar"
    ],
    relacionados: ["respeito", "responsabilidade", "controle", "liberdade"]
  },
  {
    id: "foco",
    termos: ["foco", "concentração", "atenção plena", "empenho direcionado"],
    frases: [
      "não desviar o olhar do objetivo",
      "bloquear tudo que distrai para terminar a tarefa",
      "mergulhar de cabeça no que precisa ser feito",
      "deixar o celular de lado para se concentrar",
      "manter o alvo sempre em vista",
      "não perder o fio da meada"
    ],
    relacionados: ["motivacao", "disciplina", "organizacao", "distracao", "controle"]
  },
  {
    id: "distracao",
    termos: ["distração", "dispersão", "desatenção", "devaneio"],
    frases: [
      "perder o fio da meada no meio da tarefa",
      "olhar o celular a cada dois minutos",
      "viajar no pensamento no meio da conversa",
      "esquecer o que estava fazendo",
      "deixar a mente vagar para longe do assunto",
      "não conseguir manter o foco em nada"
    ],
    relacionados: ["foco", "preguica", "criatividade", "caos"]
  },
  {
    id: "organizacao",
    termos: ["organização", "ordem", "método", "planejamento prático"],
    frases: [
      "ter um lugar para cada coisa",
      "planejar antes de sair fazendo",
      "colocar a casa em ordem",
      "fazer uma lista antes de começar",
      "não deixar nada acumular para depois",
      "arrumar tudo antes que vire bagunça"
    ],
    relacionados: ["responsabilidade", "foco", "planejamento", "caos", "controle"]
  },
  {
    id: "planejamento",
    termos: ["planejamento", "estratégia", "preparação", "antecipação"],
    frases: [
      "pensar em cada passo antes de agir",
      "traçar um plano antes de sair do lugar",
      "prever os obstáculos antes que apareçam",
      "organizar o caminho até o objetivo",
      "não deixar nada ao acaso",
      "montar o roteiro antes da viagem"
    ],
    relacionados: ["organizacao", "decisao", "foco", "responsabilidade"]
  },
  {
    id: "caos",
    termos: ["caos", "bagunça", "desordem", "confusão"],
    frases: [
      "tudo acontecendo ao mesmo tempo e fora de ordem",
      "não achar mais nada no meio da bagunça",
      "sentir que a casa (ou a vida) virou de cabeça para baixo",
      "perder o controle da situação",
      "não saber por onde começar a arrumar",
      "viver apagando incêndio o dia inteiro"
    ],
    relacionados: ["organizacao", "estresse", "urgencia", "distracao"]
  },
  {
    id: "urgencia",
    termos: ["urgência", "pressa", "emergência", "imediatismo"],
    frases: [
      "não poder esperar nem mais um minuto",
      "correr contra o tempo",
      "resolver agora ou vai ser tarde demais",
      "sentir que cada segundo conta",
      "deixar tudo de lado para apagar aquele incêndio",
      "não ter tempo a perder"
    ],
    relacionados: ["tempo", "estresse", "caos", "decisao"]
  },
  {
    id: "rotina",
    termos: ["rotina", "cotidiano", "hábito diário", "costume"],
    frases: [
      "fazer sempre a mesma coisa no mesmo horário",
      "seguir o roteiro de todo santo dia",
      "acordar, trabalhar, dormir, repetir",
      "encontrar conforto em fazer sempre igual",
      "sentir que os dias se repetem sem parar",
      "ter aquele ritual que nunca falha"
    ],
    relacionados: ["tedio", "organizacao", "disciplina", "tempo"]
  },
  {
    id: "trabalho",
    termos: ["trabalho", "emprego", "labuta", "ofício", "profissão"],
    frases: [
      "ganhar o pão de cada dia",
      "dar duro para conquistar algo",
      "vestir a camisa da empresa",
      "equilibrar trabalho e vida pessoal",
      "bater meta depois de virar noites",
      "levantar cedo para não perder o horário"
    ],
    relacionados: ["dinheiro", "sucesso", "responsabilidade", "criatividade", "motivacao", "rotina"]
  },
  {
    id: "criatividade",
    termos: ["criatividade", "inventividade", "imaginação", "originalidade"],
    frases: [
      "pensar fora da caixa",
      "encontrar soluções onde ninguém via",
      "transformar ideias em algo novo",
      "ver o comum de um jeito diferente",
      "juntar duas coisas que ninguém tinha juntado antes",
      "improvisar uma solução na hora"
    ],
    relacionados: ["conhecimento", "sonho", "trabalho", "liberdade", "arte", "inspiracao"]
  },
  {
    id: "arte",
    termos: ["arte", "expressão artística", "criação estética"],
    frases: [
      "colocar num quadro o que as palavras não dizem",
      "transformar a dor em algo bonito de se ver",
      "encontrar beleza onde ninguém procurou",
      "expressar o que sente através das mãos",
      "criar algo que emociona quem vê",
      "dar forma ao que só existia na imaginação"
    ],
    relacionados: ["criatividade", "beleza", "inspiracao", "musica"]
  },
  {
    id: "musica",
    termos: ["música", "melodia", "canção", "ritmo"],
    frases: [
      "sentir a letra descrever exatamente o que sente",
      "cantar no chuveiro como se ninguém estivesse ouvindo",
      "lembrar de alguém só de ouvir uma canção",
      "deixar o corpo balançar no ritmo sem pensar",
      "arrepiar com aquele refrão certo na hora certa",
      "sentir a batida tomar conta do corpo"
    ],
    relacionados: ["arte", "felicidade", "saudade", "diversao"]
  },
  {
    id: "silencio",
    termos: ["silêncio", "quietude", "mudez", "ausência de som"],
    frases: [
      "ouvir só o próprio pensamento",
      "ficar quieto sem precisar preencher o vazio",
      "sentir a paz de um ambiente sem barulho",
      "o silêncio que fala mais alto que qualquer palavra",
      "escutar o vento entre as árvores",
      "ficar em paz sem precisar dizer nada"
    ],
    relacionados: ["calma", "solidao", "natureza", "espiritualidade"]
  },
  {
    id: "natureza",
    termos: ["natureza", "meio ambiente", "mundo natural", "paisagem"],
    frases: [
      "o silêncio de uma trilha na mata",
      "o som do mar acalmando a mente",
      "sentir o vento no rosto",
      "respirar ar puro no campo",
      "ver o sol nascer atrás das montanhas",
      "sentir os pés na areia molhada"
    ],
    relacionados: ["calma", "vida", "liberdade", "tempo", "silencio", "viagem"]
  },
  {
    id: "viagem",
    termos: ["viagem", "jornada", "aventura", "deslocamento"],
    frases: [
      "fazer as malas para um lugar novo",
      "descobrir um cantinho do mundo que não conhecia",
      "sentir o gostinho de liberdade na estrada",
      "trocar a rotina por um mapa novo",
      "voltar diferente do que era antes de partir",
      "perder-se de propósito só para descobrir"
    ],
    relacionados: ["liberdade", "curiosidade", "natureza", "recomeco"]
  },
  {
    id: "beleza",
    termos: ["beleza", "estética", "encanto", "formosura"],
    frases: [
      "algo que prende o olhar sem explicação",
      "ver graça até no mais simples",
      "sentir-se tocado pela harmonia das formas",
      "parar só para admirar",
      "encontrar charme no que os outros nem reparam",
      "sentir que aquilo merece ser fotografado"
    ],
    relacionados: ["arte", "natureza", "vaidade", "admiracao"]
  },
  {
    id: "saude",
    termos: ["saúde", "bem-estar físico", "vitalidade", "disposição"],
    frases: [
      "acordar disposto para o dia",
      "sentir o corpo respondendo bem",
      "cuidar de si para viver mais e melhor",
      "dar valor a cada exame que sai bom",
      "sentir energia para fazer o que gosta",
      "dormir bem e acordar renovado"
    ],
    relacionados: ["vida", "calma", "disciplina", "cansaco"]
  },
  {
    id: "juventude",
    termos: ["juventude", "mocidade", "vigor jovem", "energia da idade nova"],
    frases: [
      "sentir que o mundo inteiro está pela frente",
      "ter energia de sobra para tudo",
      "viver como se nada fosse dar errado",
      "correr atrás de tudo sem medo do cansaço",
      "sentir a vida ainda toda por descobrir",
      "acreditar que dá tempo para tudo"
    ],
    relacionados: ["vida", "sonho", "liberdade", "velhice"]
  },
  {
    id: "velhice",
    termos: ["velhice", "terceira idade", "maturidade avançada", "envelhecimento"],
    frases: [
      "olhar para trás com a bagagem de uma vida inteira",
      "contar histórias de um tempo que já passou",
      "sentir o corpo pedir mais calma",
      "ter a paciência que só o tempo ensina",
      "guardar sabedoria em cada ruga",
      "viver no ritmo que o corpo agora pede"
    ],
    relacionados: ["sabedoria", "tempo", "saudade", "juventude"]
  },
  {
    id: "infancia",
    termos: ["infância", "meninice", "puerícia"],
    frases: [
      "brincar sem se preocupar com mais nada",
      "acreditar em coisas simples de coração aberto",
      "correr descalço no quintal até escurecer",
      "rir por qualquer bobagem",
      "não ter noção do tamanho dos problemas do mundo",
      "guardar aquele gosto de infância em uma lembrança"
    ],
    relacionados: ["saudade", "familia", "diversao", "curiosidade"]
  },
  {
    id: "diversao",
    termos: ["diversão", "entretenimento", "distração boa", "lazer"],
    frases: [
      "rir até doer a barriga",
      "esquecer os problemas por um tempo curtindo algo gostoso",
      "aproveitar o momento sem se preocupar com mais nada",
      "sair da rotina para simplesmente se divertir",
      "curtir a companhia de quem gosta",
      "perder a noção do tempo se divertindo"
    ],
    relacionados: ["euforia", "humor", "amizade", "musica"]
  },
  {
    id: "humor",
    termos: ["humor", "comédia", "graça", "riso"],
    frases: [
      "rir de si mesmo antes de rir dos outros",
      "encontrar graça até nos perrengues",
      "contar uma piada na hora certa para aliviar o clima",
      "não conseguir segurar o riso",
      "achar engraçado até quando não devia",
      "usar o riso para atravessar um dia difícil"
    ],
    relacionados: ["diversao", "alivio", "criatividade", "felicidade"]
  },
  {
    id: "competicao",
    termos: ["competição", "disputa", "rivalidade", "concorrência"],
    frases: [
      "querer vencer a qualquer custo",
      "medir forças com o adversário",
      "não aceitar ficar em segundo lugar",
      "dar o seu melhor só para superar o outro",
      "sentir a adrenalina da disputa",
      "jogar para ganhar, não só para participar"
    ],
    relacionados: ["ganancia", "sucesso", "orgulho", "inveja"]
  },
  {
    id: "disciplina",
    termos: ["disciplina", "autodisciplina", "rigor pessoal", "constância"],
    frases: [
      "fazer o que precisa ser feito mesmo sem vontade",
      "manter a rotina mesmo quando ninguém está cobrando",
      "não pular o treino mesmo cansado",
      "cumprir o combinado consigo mesmo",
      "repetir o hábito até virar automático",
      "escolher o difícil hoje para colher fácil amanhã"
    ],
    relacionados: ["foco", "responsabilidade", "perseveranca", "rotina", "controle"]
  },
  {
    id: "fe",
    termos: ["fé", "crença", "devoção espiritual", "convicção religiosa"],
    frases: [
      "acreditar em algo maior que não se pode ver",
      "confiar que existe um propósito por trás de tudo",
      "rezar pedindo forças para seguir",
      "sentir que não está sozinho nessa caminhada",
      "confiar mesmo sem entender o motivo",
      "entregar aquilo que não está mais nas próprias mãos"
    ],
    relacionados: ["esperanca", "espiritualidade", "destino", "gratidao"]
  },
  {
    id: "espiritualidade",
    termos: ["espiritualidade", "vida interior", "conexão espiritual", "transcendência"],
    frases: [
      "buscar um sentido maior para a existência",
      "sentir-se conectado com algo além do visível",
      "meditar em busca de paz interior",
      "sentir uma energia maior guiando os passos",
      "olhar para dentro em busca de respostas",
      "encontrar quietude num momento de oração ou silêncio"
    ],
    relacionados: ["fe", "silencio", "calma", "sabedoria"]
  },
  {
    id: "solidariedade",
    termos: ["solidariedade", "cooperação", "ajuda mútua"],
    frases: [
      "estender a mão a quem precisa",
      "sentir a dor do outro como se fosse sua",
      "ajudar sem esperar nada em troca",
      "unir forças por uma causa comum",
      "doar o que puder para quem tem menos",
      "juntar-se a outros para carregar um peso maior"
    ],
    relacionados: ["generosidade", "igualdade", "amizade", "respeito", "empatia"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONCEPTS;
}
