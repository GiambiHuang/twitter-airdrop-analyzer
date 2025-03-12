import cron from 'node-cron';
import twitterService from '@/services/twitter.service';
import aiService from '@/services/ai.service';

// const twitterService = new TwitterService();
// const aiService = new AIService();

export function tweetScheduler() {
  // Run every hour
  cron.schedule('0 * * * *', async () => {
    try {
      console.log('Starting tweet analysis...');
      const tweets = await twitterService.searchAirdropTweets();
      for (const tweet of tweets) {
        const enableTweetLink = await twitterService.getTweetLink(tweet.author_id || '', tweet.id);
        const isLegitimate = await aiService.analyzeTweet(tweet.text);
        if (isLegitimate) {
          console.log('Legitimate airdrop found:', tweet.text);
          // Here you can add additional logic like storing in database
          // or sending notifications
          // enableTweetLink
        }
      }
    } catch (error) {
      console.error('Error in tweet analysis:', error);
    }
  });
}