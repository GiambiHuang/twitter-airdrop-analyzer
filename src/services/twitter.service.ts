import { TwitterApi } from 'twitter-api-v2';
import { TwitterApiRateLimitPlugin } from '@twitter-api-v2/plugin-rate-limit'

const rateLimitPlugin = new TwitterApiRateLimitPlugin();

class TwitterService {
  private client: TwitterApi;

  constructor() {
    // this.client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN || '', { plugins: [rateLimitPlugin] });
    this.client = new TwitterApi(
      {
        appKey: process.env.TWITTER_APP_KEY || '',
        appSecret: process.env.TWITTER_APP_SECRET || '',
        accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
        accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
      },
      { plugins: [rateLimitPlugin] },
    );
  }

  async searchAirdropTweets() {
    const query = '(airdrop OR 空投) (crypto OR blockchain OR NFT)';
    const tweets = await this.client.v2.search({
      query,
      max_results: 10,
      'tweet.fields': ['created_at', 'author_id', 'text'],
    });
    return tweets.data.data;
  }

  async getTweetLink(author_id: string, id: string) {
    if (!author_id) return '';
    try {
      const twitterUser = await this.client.v2.user(author_id);
      if (twitterUser.data) {
        return `https://twitter.com/${twitterUser.data.username}/status/${id}`;
      }
    } catch (error) {
      console.log('-----', error);
    }
    return '';
  }
}

export default new TwitterService();
