import { OpenAI } from 'langchain/llms/openai';

class AIService {
  private model: OpenAI;

  constructor() {
    this.model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY || '',
      temperature: 0.1,
      modelName: 'gpt-3.5-turbo'
    });
  }

  async analyzeTweet(tweetText: string): Promise<boolean> {
    const prompt = `
      Analyze the following tweet and determine if it's a legitimate airdrop announcement.
      Consider the following criteria:
      1. Contains specific instructions for participation
      2. Mentions legitimate blockchain projects or tokens
      3. Has verifiable links or addresses
      4. Doesn't show signs of scam (like asking for direct deposits)
      
      Tweet: "${tweetText}"
      
      Return true if it's legitimate, false if it's not.
    `;

    const response = await this.model.call(prompt);
    return response.toLowerCase().includes('true');
  }
}

export default new AIService();
