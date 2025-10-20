import { GoogleGenAI } from '@google/genai';
import { NextApiRequest, NextApiResponse } from 'next';

// O SDK do GoogleGenAI lê automaticamente a chave GEMINI_API_KEY
// do seu arquivo .env.local.
const ai = new GoogleGenAI({});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // A rota só aceita o método POST para segurança e envio de dados.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  // Extrai a categoria do corpo da requisição (JSON enviado pelo Main.tsx).
  const { category } = req.body;
  
  if (!category) {
    return res.status(400).json({ error: 'Categoria é obrigatória.' });
  }

  // Instrução detalhada para o modelo Gemini.
  const prompt = `Gere uma única frase inspiradora e motivacional sobre o tema de "${category}". O retorno DEVE ser APENAS o texto da frase, sem aspas ou o nome do autor, e deve ter até 25 palavras.`;

  try {
    // Chama a API Gemini.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    // A linha abaixo estava falhando porque 'response' estava vazio devido à chave de API incorreta.
    // O .trim() só é chamado se a propriedade 'text' for válida.
    const quoteText = response.text.trim();
    
    // Retorna a resposta formatada para o frontend.
    res.status(200).json({ 
      text: quoteText,
      author: 'Entrelinhas AI' // Autor fixo
    });

  } catch (error) {
    // Este log aparecerá no console do seu terminal (servidor)
    // e é a chave para diagnosticar problemas de API Key ou de limite.
    console.error('ERRO DETALHADO NA API GEMINI:', error); 
    
    // Retorna uma resposta de erro para o frontend.
    res.status(500).json({ 
      error: 'Falha ao gerar citação. Por favor, verifique se sua GEMINI_API_KEY está correta e se o serviço está ativo.' 
    });
  }
}