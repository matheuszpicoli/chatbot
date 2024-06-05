//- Next
import type { NextApiRequest, NextApiResponse } from "next"

type ModelQuestionAndAnswer = {
	question: string
	answer: string
}

type ResponseData = {
	data: ModelQuestionAndAnswer[]
}

const questionsAndAnswers: ModelQuestionAndAnswer[] = [
	{
		question: "Qual cidade tem a maior expectativa de vida no mundo?",
		answer: "Hong Kong"
	},
	{
		question: "Em que cidade você estaria se estivesse nas Escadarias da Praça da Espanha?",
		answer: "Roma"
	},
	{
		question: "Qual idioma tem mais falantes nativos: Inglês ou espanhol?",
		answer: "Espanhol"
	},
	{
		question: "Qual é o sobrenome mais comum nos Estados Unidos?",
		answer: "Smith"
	},
	{
		question: "Que doença comumente se espalha em navios piratas?",
		answer: "Escorbuto"
	},
	{
		question: "Quem era o antigo Deus Grego do Sol?",
		answer: "Apolo"
	},
	{
		question: "Qual era o nome do chefe do crime que liderava a Chicago Outfit (Máfia de Chicago)?",
		answer: "Al Capone"
	},
	{
		question: "Em que ano foi criada a ONU?",
		answer: "1945"
	},
	{
		question: "Quem ganhou o maior número total de Óscares?",
		answer: "Walt Disney"
	},
	{
		question: "Qual artista tem mais transmissões no Spotify?",
		answer: "Drake"
	},
	{
		question: "Qual fabricante de automóveis teve a maior receita em 2020?",
		answer: "Volkswagen"
	},
	{
		question: "Quantos elementos existem na tabela periódica?",
		answer: "118"
	},
	{
		question: "Qual empresa foi originalmente chamada de \"Cadabra\"?",
		answer: "Amazon"
	},
	{
		question: "Quantas faces tem um Dodecaedro?",
		answer: "12"
	},
	{
		question: "O guitarrista do Queen, Brian May, também é especialista em que área científica?",
		answer: "Astrofísica"
	},
	{
		question: "Aureolin é um tom de que cor?",
		answer: "Amarelo"
	},
	{
		question: "Quantos fantasmas perseguem o Pac-Man no início de cada jogo?",
		answer: "4"
	},
	{
		question: "Que artista renascentista está enterrado no Panteão de Roma?",
		answer: "Rafael"
	},
	{
		question: "Qual marca de calçados fabrica o \"Mexico 66\"?",
		answer: "Onitsuka Tiger"
	},
	{
		question: "Qual estúdio de jogos faz a série Red Dead Redemption?",
		answer: "Rockstar Games"
	},
	{
		question: "Quem foi o último czar da Rússia?",
		answer: "Nicolau II"
	},
	{
		question: "Que personagem Robert Downey Jr. e Benedict Cumberbatch interpretaram?",
		answer: "Sherlock Holmes"
	},
	{
		question: "Qual país tem o maior consumo de café per capita?",
		answer: "Finlândia"
	},
	{
		question: "Qual é o planeta mais quente da Via Láctea?",
		answer: "Vênus"
	},
	{
		question: "Qual é a 4ª letra do alfabeto grego?",
		answer: "Delta"
	},
	{
		question: "Qual empresa de carros esportivos fabrica o 911?",
		answer: "Porsche"
	},
	{
		question: "Qual cidade é conhecida como \"A Cidade Eterna\"?",
		answer: "Roma"
	},
	{
		question: "Roald Amundsen foi o primeiro homem a chegar ao Polo Sul. De que país ele era?",
		answer: "Noruega"
	},
	{
		question: "Qual filme teve a maior audiência no IMDb em 1º de janeiro de 2022?",
		answer: "Um Sonho de Liberdade"
	},
	{
		question: "Quem descobriu que a Terra gira em torno do Sol?",
		answer: "Nicolau Copérnico"
	},
	{
		question: "Qual empresa foi inicialmente conhecida como \"Blue Ribbon Sports\"?",
		answer: "Nike"
	},
	{
		question: "Que forma de arte é descrita como \"caligrafia decorativa ou letras manuscritas\"?",
		answer: "Caligrafia"
	},
	{
		question: "Qual planeta tem o maior número de luas?",
		answer: "Saturno"
	},
	{
		question: "Kratos é o personagem principal de qual série de videogame?",
		answer: "God of War"
	},
	{
		question: "Em que país fica o Monte Kilimanjaro?",
		answer: "Tanzânia"
	},
	{
		question: "Como é conhecido um grupo de pandas?",
		answer: "Uma ursada"
	},
	{
		question: "Qual país europeu registrou o maior índice de queda de natalidade entre 2015 e 2020?",
		answer: "Lituânia"
	},
	{
		question: "Quantos ossos temos em uma orelha?",
		answer: "3"
	},
	{
		question: "Quem ficou conhecido por cruzar os Alpes com elefantes a caminho da guerra com os romanos?",
		answer: "Hannibal"
	},
	{
		question: "Verdadeiro ou falso: O Dia das Bruxas teve origem como um antigo festival irlandês.",
		answer: "Verdadeiro"
	},
	{
		question: "Qual programa da Netflix teve mais visualizações em 2021?",
		answer: "Squid Game"
	},
	{
		question: "Qual rapper nova-iorquino indicado ao Grammy morreu em abril de 2021?",
		answer: "DMX"
	},
	{
		question: "Qual empresa de software tem a sede em Redmond, Washington?",
		answer: "Microsoft"
	},
	{
		question: "Qual é a maior cidade de língua espanhola do mundo?",
		answer: "Cidade do México"
	},
	{
		question: "Qual é o pássaro mais rápido do mundo?",
		answer: "Falcão-peregrino"
	},
	{
		question: "Em que país está localizada a usina nuclear de Chernobyl?",
		answer: "Ucrânia"
	},
	{
		question: "Os mármores do Partenon encontram-se, controversamente, em que museu?",
		answer: "Museu Britânico"
	},
	{
		question: "Como é chamado um grupo de corvos?",
		answer: "Bando"
	},
	{
		question: "Ao analisar o peso corporal, qual animal é o mais forte? Besouro do esterco, elefante, formiga ou vaca?",
		answer: "Besouro do esterco"
	},
	{
		question: "Quantos pontos podemos encontrar em um par de dados?",
		answer: "42"
	},
	{
		question: "Qual é a única parte do corpo que está totalmente formada no nascimento?",
		answer: "Olho"
	},
	{
		question: "Em que consiste a acrofobia?",
		answer: "Altura"
	},
	{
		question: "Qual país tem o maior número de ilhas?",
		answer: "Suécia (270 mil)"
	},
	{
		question: "Na Austrália, o que é comumente conhecido como \"Bottle- o\"?",
		answer: "Uma loja sem licença / de bebidas"
	},
	{
		question: "Quantos corações tem um polvo?",
		answer: "3"
	},
	{
		question: "O dia 26 de dezembro é conhecido por quais nomes na Irlanda?",
		answer: "Dia de Santo Estêvão"
	},
	{
		question: "Qual planeta está mais próximo do sol?",
		answer: "Mercúrio"
	},
	{
		question: "Onde fica localizado o músculo humano mais forte?",
		answer: "Mandíbula"
	},
	{
		question: "Qual empresa telefônica produziu o celular 3310?",
		answer: "Nokia"
	},
	{
		question: "Qual é o único continente com terra nos quatro hemisférios?",
		answer: "África"
	},
	{
		question: "Qual é o nome do rio que atravessa Londres?",
		answer: "Rio Tâmisa"
	},
	{
		question: "Em que país se encontra o Salto Ángel, a maior cachoeira do mundo?",
		answer: "Venezuela"
	},
	{
		question: "Qual é a capital do estado de Nova Iorque?",
		answer: "Albany"
	},
	{
		question: "Em que continente se encontra o maior deserto do mundo?",
		answer: "Antártica"
	},
	{
		question: "Qual é a capital da Irlanda?",
		answer: "Dublin"
	},
	{
		question: "Qual é o tipo de árvore mais alta?",
		answer: "Sequoioideae"
	},
	{
		question: "Verdadeiro ou falso: A Holanda é uma região dos Países Baixos?",
		answer: "Verdadeiro"
	},
	{
		question: "O Danúbio atravessa quantas capitais europeias?",
		answer: "4"
	},
	{
		question: "Qual é a capital do Canadá?",
		answer: "Ottawa"
	},
	{
		question: "Na capital de qual país se encontra a estátua da Pequena Sereia?",
		answer: "Copenhague"
	},
	{
		question: "Em que continente se encontra a cidade de Baku?",
		answer: "Ásia"
	},
	{
		question: "Qual é o único país cuja bandeira não tem quatro lados?",
		answer: "Nepal"
	},
	{
		question: "Quantas estrelas há na bandeira da China?",
		answer: "5"
	},
	{
		question: "Quantas cores tem a bandeira da África do Sul?",
		answer: "6"
	},
	{
		question: "Quais são as cores da bandeira da Organização das Nações Unidas?",
		answer: "Azul e branco"
	},
	{
		question: "Qual país tem a imagem de um naufrágio na sua bandeira nacional?",
		answer: "Bermudas"
	},
	{
		question: "Quantas doses de Gordon Gin leva um Martini Vesper (James Bond)?",
		answer: "3"
	},
	{
		question: "Cacio e Pepe é a base da culinária de qual cidade italiana?",
		answer: "Roma"
	},
	{
		question: "Em que país se originou o sushi?",
		answer: "China"
	},
	{
		question: "O que é Beaujolais?",
		answer: "Um tipo de vinho tinto"
	},
	{
		question: "Qual dos seguintes molhos não é tradicionalmente vegano: hoisin, worcestershire, mostarda, wasabi?",
		answer: "Worcestershire"
	},
	{
		question: "Qual é a cerveja stout mais vendida do mundo?",
		answer: "Guinness"
	},
	{
		question: "Qual país tem o maior consumo de café?",
		answer: "Finlândia"
	},
	{
		question: "Que carne é usada na cottage pie?",
		answer: "Cordeiro"
	},
	{
		question: "Qual é a diferença entre aguardente e conhaque?",
		answer: "O conhaque é produzido na região de Cognac, na França"
	},
	{
		question: "Pink Ladies e Granny Smiths são tipos de qual fruta?",
		answer: "Maçã"
	},
	{
		question: "O que \"FIFA\" significa em inglês?",
		answer: "International Federation of Association Football (Federação Internacional de Futebol)"
	},
	{
		question: "Quem foi o atleta mais bem pago do mundo em 2021?",
		answer: "Conor McGregor"
	},
	{
		question: "Em que cidade está localizado o Hall da Fama da NFL?",
		answer: "Canton, Ohio"
	},
	{
		question: "Simone Biles é famosa por sua habilidade em que esporte?",
		answer: "Ginástica"
	},
	{
		question: "Onde termina o Tour de France a cada ano?",
		answer: "Avenida Champs-Élysées em Paris"
	},
	{
		question: "Qual é o primeiro nome da estrela do futebol argentino Maradona?",
		answer: "Diego"
	},
	{
		question: "Que altura tem uma cesta de basquete da NBA?",
		answer: "10 pés / 3,02 metros"
	},
	{
		question: "Qual é o esporte nacional do Japão?",
		answer: "Sumô"
	},
	{
		question: "Vestir-se totalmente de branco é o código de vestimenta rigoroso de qual evento esportivo?",
		answer: "Wimbledon"
	},
	{
		question: "Onde fica o parque temático europeu da Disney?",
		answer: "Paris, França"
	},
	{
		question: "Qual filme da Disney teve mais sequências?",
		answer: "Toy Story (4)"
	},
	{
		question: "Que personagem Glen Close e Emma Stone interpretaram?",
		answer: "Cruella de Vil"
	},
	{
		question: "Quem foi a primeira princesa da Disney?",
		answer: "Branca de Neve"
	},
	{
		question: "Qual é a cor dos sapatos do Mickey Mouse?",
		answer: "Amarelo"
	},
	{
		question: "O personagem Sabidão estrela em qual filme?",
		answer: "A Pequena Sereia"
	},
	{
		question: "Em que ano foi lançado o filme Cinderela?",
		answer: "1950"
	},
	{
		question: "Qual foi o primeiro nome de Mickey Mouse?",
		answer: "Mortimer Mouse"
	},
	{
		question: "Quantos \"Óscares de Melhor Canção Original\" a Disney ganhou?",
		answer: "14"
	},
]

export default function handler(
	request: NextApiRequest,
	response: NextApiResponse<ResponseData | ModelQuestionAndAnswer>
) {
	const { question } = request.query

	if (question) {
		const answer = questionsAndAnswers.find(item => item.question === question)

		if (answer) response.status(200).json(answer)

	} else {
		response.status(200).json({
			data: questionsAndAnswers
		})
	}
}
