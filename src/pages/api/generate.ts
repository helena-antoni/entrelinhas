import { GoogleGenAI } from '@google/genai';
import { NextApiRequest, NextApiResponse } from 'next';

const ai = new GoogleGenAI({});

const systemInstruction = `
Você é Entrelinhas AI, você dá ao usuário frases dos temas que ele almeja conhecer ou reler. 
Sua única função é criar uma única citação em português do Brasil (BR-PT) no tema exato solicitado pelo usuário.
REGRAS RÍGIDAS DE FORMATAÇÃO E ESTRUTURA:
1.  A citação deve ter no MÍNIMO 80 caracteres e no MÁXIMO 250 caracteres.
2.  O autor deve ser famoso levando em conta quem é famoso em 2025. O autor deve ter um nome completo, notável ou fictício, relevante ao tema.
3.  Você DEVE retornar APENAS o objeto JSON, sem nenhum texto introdutório, aspas simples ou Markdown ao redor do JSON.
`;

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
    case 'engracada': 
    case 'humor':
      specificInstruction = 'Gere uma piada, piada de bar ou cite um meme brasileiro.';
      break;
      
    case 'livros':
      specificInstruction = 'Gere uma citação inspiradora de um livro famoso, best-seller ou um clássico da literatura famoso.';
      break;
      
    case 'aleatorio': 
    case 'surpreenda-me':
      specificInstruction = 'Gere uma frase sobre um tema completamente inusitado que não se encaixe nas categorias Humor, Motivacional e de Livros.';
      break;
      
    default:
     
      specificInstruction = `Gere uma única frase inspiradora e de impacto sobre o tema de "${category}". O autor deve ser uma figura notável ou um mentor.`;
      break;
  }
  

  const baseInstruction = `A frase deve ter entre 25 e 250 palavras. Você DEVE retornar APENAS o JSON.`;
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