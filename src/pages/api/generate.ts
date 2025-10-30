import { GoogleGenAI } from '@google/genai';
import { NextApiRequest, NextApiResponse } from 'next';

const ai = new GoogleGenAI({});

const quoteSchema = {
  type: "object",
  properties: {
    frase: {
      type: "string",
      description: "Uma frase inspiradora, motivacional, aleatória ou de engraçada(que faz uma pessoa rir).",
    },
    autor: {
      type: "string",
      description: "O nome completo do autor da frase, pode ser um personagem histórico, fictício, desconhecido ou adequado ao tema famoso.",
    },
  },
  required: ["frase", "autor"],
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { category } = req.body;
  
  if (!category) {
    return res.status(400).json({ error: 'Categoria é obrigatória.' });
  }

  let specificInstruction = '';


  switch (category.toLowerCase()) {
    case 'humor':  
      specificInstruction = `Gere uma piada, piada de bar, piadas de tio, ou cite um meme brasileiro.`;
      break;
      
    case 'Livros':
      specificInstruction = `Gere uma citação inspiradora de livros com alto reconhecimento cultural.
      de clássicos amplamente conhecidos, best-selllers com popularidade de leitura neste momento.
     `
    break;
      
    case 'motivational': 
      specificInstruction = `Gere uma frase motivacional que inspire, motive e faça a pessoa refletir sobre a vida ou não querer desistir dos seus sonhos/objetivos. 
      ` 
    break; 

    case 'random': 
    case 'surpreenda-me':
      specificInstruction = 'Gere uma frase sobre um tema completamente inusitado que não se encaixe nas categorias Humor, Motivacional e de Livros.';
    break;
    
    default:
      specificInstruction = `Gere uma única frase inspiradora e de impacto sobre o tema de "${category}". O autor deve ser uma figura notável ou um mentor.`;
      break;
  }
  

  const baseInstruction = `
    Você é Entrelinhas AI, um curador de frases que fornece aos usuários citações dos temas que eles desejam conhecer, reler ou reouvir.
    Sua única função é criar uma única citação em português do Brasil (BR-PT) no tema EXATO solicitado pelo usuário.
    
    REGRAS RÍGIDAS DE SAÍDA E FORMATO:
    1. A citação deve ter no MÍNIMO 25 caracteres e no MÁXIMO 50 caracteres.
    2. O autor deve ser famoso, levando em conta quem é famoso em 2025. Deve ter nome completo, ser notável ou fictício, e relevante ao tema.
    3. Você DEVE retornar APENAS o objeto JSON, sem nenhum texto introdutório, aspas simples ou Markdown ao redor do JSON.

    REGRAS RÍGIDAS DE CONTEÚDO ÉTICO E COMPORTAMENTO: 
    * Humor Ético: As piadas geradas devem ser eticamente neutras, respeitosas e universalmente inclusivas. É estritamente proibido gerar qualquer conteúdo que seja misógino, 
    racista, xenofóbico, homofóbico, capacitista, ou que de qualquer outra forma constitua discriminação, assédio, discurso de ódio ou depreciação de qualquer pessoa ou grupo humano.
    * Motivação Responsável: É rigorosamente proibido:
        * Toxicidade Positiva: Evite mensagens que minimizem lutas legítimas, problemas de saúde mental ou trauma (ex: "é só querer", "não há desculpas").
        * Clichês Prejudiciais: Não utilize frases que culpem a vítima ou que coloquem a responsabilidade de situações sistêmicas inteiramente sobre o indivíduo.
        * Temas Médicos/Psicológicos: É proibido dar "conselhos" médicos, diagnósticos ou sugestões de tratamento para condições de saúde física ou mental.
        * A meta é gerar mensagens que promovam autocompaixão, resiliência e ação responsável.
    `;

  const prompt = `${specificInstruction} ${baseInstruction}`;

  try {
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quoteSchema,
      },
    });
    

    const responseText = response.text.trim();
    const generatedData = JSON.parse(responseText);

    
    res.status(200).json({ 
        text: generatedData.frase,  
        author: generatedData.autor,
        categorySlug: category
    });

  } catch (error) {

    console.error('ERRO DETALHADO NA API GEMINI:', error); 
    
    res.status(500).json({ 
      error: 'Falha ao gerar citação. Por favor, verifique se sua GEMINI_API_KEY está correta.' 
    });
  }
}