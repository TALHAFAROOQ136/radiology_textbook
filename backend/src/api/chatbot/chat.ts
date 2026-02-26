import { Request, Response } from 'express';
import OpenAI from 'openai';
import { contentService } from '../../services/content-service';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * POST /api/chatbot/ask
 * Chat with the radiology textbook
 */
export const chatWithBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { question, userId, context } = req.body;

    // Validate input
    if (!question) {
      res.status(400).json({ error: 'Question is required' });
      return;
    }

    // Search for relevant content in the textbook based on the question
    let textbookContext = '';

    try {
      // Attempt to search for content related to the question
      const searchResults = await contentService.searchContent({
        query: question,
        limit: 5
      });

      if (searchResults && Array.isArray(searchResults) && searchResults.length > 0) {
        // Build context from search results
        textbookContext = searchResults.map((content: any) => {
          return `
Section Title: ${content.title || 'Untitled'}
Section Type: ${content.type || 'Unknown'}
Content Preview: ${content.content ? content.content.substring(0, 800) : 'No content available'}
          `.trim();
        }).join('\n\n---\n\n');
      } else {
        // If no specific content found, get some general content for context
        const generalResult = await contentService.getContent(
          { isPublished: true },
          { page: 1, limit: 3 },
          { field: 'orderNumber', order: 'ASC' }
        );

        if (generalResult && generalResult.content && Array.isArray(generalResult.content)) {
          textbookContext = generalResult.content.map((content: any) => {
            return `
Section Title: ${content.title || 'Untitled'}
Section Type: ${content.type || 'Unknown'}
Content Preview: ${content.content ? content.content.substring(0, 500) : 'No content available'}
            `.trim();
          }).join('\n\n---\n\n');
        }
      }
    } catch (searchError) {
      console.warn('Content search failed, using general context:', searchError);
      // Fallback to general content
      try {
        const generalResult = await contentService.getContent(
          { isPublished: true },
          { page: 1, limit: 2 },
          { field: 'orderNumber', order: 'ASC' }
        );

        if (generalResult && generalResult.content && Array.isArray(generalResult.content)) {
          textbookContext = generalResult.content.map((content: any) => {
            return `
Section Title: ${content.title || 'Untitled'}
Section Type: ${content.type || 'Unknown'}
Content Preview: ${content.content ? content.content.substring(0, 500) : 'No content available'}
            `.trim();
          }).join('\n\n---\n\n');
        }
      } catch (fallbackError) {
        console.error('Failed to get fallback content:', fallbackError);
        textbookContext = 'General radiology textbook content is available for reference.';
      }
    }

    // Construct the prompt for the AI model
    const systemPrompt = `
You are an expert radiology educator and AI assistant for the Radiology Textbook platform.
Your purpose is to answer questions about radiology based on the textbook content provided.
Be helpful, accurate, and educational. If the provided context doesn't contain the answer,
acknowledge this limitation and suggest consulting the relevant sections of the textbook
or seeking advice from qualified medical professionals.
Always emphasize that the information is for educational purposes and not a substitute for professional medical advice.
Be concise but comprehensive in your responses.
`;

    const userPrompt = `
Question: ${question}

Relevant Textbook Context:
${textbookContext || 'No specific textbook content found for this topic.'}

Please provide an accurate, educational response based on the textbook content and your radiology knowledge.
If the context doesn't contain specific information about the question, provide general radiology knowledge
while noting that the textbook context was limited for this particular question.
`;

    // Verify OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      res.status(500).json({
        error: 'Chatbot service is not configured. Please contact the administrator to set up the OpenAI API key.'
      });
      return;
    }

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.3,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const answer = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response to your question.';

    res.status(200).json({
      message: 'Answer generated successfully',
      question: question,
      answer: answer,
      contextUsed: !!textbookContext.trim(), // Indicate if context was used
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    if (error instanceof Error) {
      res.status(500).json({ error: `Chatbot service error: ${error.message}` });
    } else {
      res.status(500).json({ error: 'Internal server error in chatbot service' });
    }
  }
};