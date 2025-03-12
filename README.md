# Twitter Airdrop Analyzer

An automated system that monitors Twitter for cryptocurrency airdrop opportunities and analyzes their legitimacy using AI.

## Features

- 🤖 Automated hourly monitoring of Twitter for airdrop-related tweets
- 🧠 AI-powered analysis of tweet legitimacy using OpenAI
- 🔍 Smart filtering for blockchain and cryptocurrency-related content
- ⏰ Scheduled scanning using node-cron
- 🛡️ Built with TypeScript for type safety

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Twitter API credentials
- OpenAI API key


## Environment variables
Configure environment variables: Create a .env file in the root directory and add your API credentials:

```bash
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
OPENAI_API_KEY=your_openai_api_key
```

## Usage
Development Mode
```bash
npm run dev
```
