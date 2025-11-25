# YouTube Content Integration Setup

This guide explains how to automatically fetch and display your YouTube videos and playlists on your portfolio website.

## Overview

The YouTube integration consists of:
- **Script:** `scripts/fetch-youtube-content.js` - Fetches data from YouTube API
- **Data Storage:** `src/data/youtube-content.json` - Stores fetched content
- **Display:** `src/app/content/page.tsx` - Renders the content on your website

## Setup Instructions

### 1. Get Your YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the **YouTube Data API v3**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key
   - (Optional but recommended) Restrict the key to YouTube Data API v3

### 2. Get Your YouTube Channel ID

**Method 1: From YouTube Studio**
1. Go to [YouTube Studio](https://studio.youtube.com/)
2. Click "Settings" > "Channel" > "Advanced settings"
3. Copy your Channel ID

**Method 2: From Your Channel URL**
- If your URL is `youtube.com/channel/UC...`, the part after `/channel/` is your Channel ID
- If your URL is `youtube.com/@username`, you'll need to use Method 1 or 3

**Method 3: Using the API**
```bash
curl "https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=aghilish&key=YOUR_API_KEY"
```

### 3. Configure Environment Variables

Edit the `.env.local` file in your project root and add your credentials:

```bash
# YouTube API Configuration
YOUTUBE_API_KEY=AIzaSy...your-actual-api-key-here

# Your YouTube Channel ID
YOUTUBE_CHANNEL_ID=UC...your-channel-id-here
```

**⚠️ Important:** Never commit your `.env.local` file to Git! It's already in `.gitignore`.

### 4. Run the Script

Fetch your YouTube content:

```bash
npm run fetch-youtube
```

This will:
- Fetch all your public videos (up to 50)
- Fetch all your public playlists (up to 50)
- Save the data to `src/data/youtube-content.json`

**Expected Output:**
```
🚀 Starting YouTube content fetch...

📹 Fetching channel videos...
✅ Found channel: Your Channel Name
✅ Fetched 25 videos

📋 Fetching channel playlists...
✅ Fetched 5 playlists

✅ Successfully saved YouTube data to /path/to/src/data/youtube-content.json

📊 Summary:
   - Channel: Your Channel Name
   - Videos: 25
   - Playlists: 5
   - Last Updated: 2025-11-25T12:34:56.789Z
```

### 5. View Your Content

Start your development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000/content` to see your YouTube content!

## Data Structure

The fetched data is stored in `src/data/youtube-content.json`:

```json
{
  "channel": {
    "id": "UC...",
    "title": "Your Channel Name",
    "description": "Channel description",
    "url": "https://youtube.com/channel/UC..."
  },
  "videos": [
    {
      "id": "video-id",
      "title": "Video Title",
      "description": "Video description",
      "thumbnail": "https://...",
      "publishedAt": "2025-11-25T12:00:00Z",
      "link": "https://www.youtube.com/watch?v=video-id"
    }
  ],
  "playlists": [
    {
      "id": "playlist-id",
      "title": "Playlist Title",
      "description": "Playlist description",
      "thumbnail": "https://...",
      "itemCount": 10,
      "publishedAt": "2025-11-25T12:00:00Z",
      "link": "https://www.youtube.com/playlist?list=playlist-id"
    }
  ],
  "lastUpdated": "2025-11-25T12:34:56.789Z"
}
```

## Customization

### Change the Number of Videos/Playlists

Edit `scripts/fetch-youtube-content.js`:

```javascript
// Fetch more or fewer videos
const playlistItems = await fetchYouTubeData('playlistItems', {
  part: 'snippet,contentDetails',
  playlistId: uploadsPlaylistId,
  maxResults: 100, // Change this (max 50 per request, use pagination for more)
});

// Fetch more or fewer playlists
const playlistsData = await fetchYouTubeData('playlists', {
  part: 'snippet,contentDetails',
  channelId: CHANNEL_ID,
  maxResults: 100, // Change this
});
```

### Limit Videos Displayed on Website

Edit `src/app/content/page.tsx`:

```tsx
{videos.slice(0, 8).map((video) => ( // Display only 8 videos
  // ...
))}
```

### Update Frequency

**Manual Update:** Run `npm run fetch-youtube` whenever you want to refresh the data.

**Automated (CI/CD):** Add a GitHub Action or cron job:

```yaml
# .github/workflows/fetch-youtube.yml
name: Fetch YouTube Content
on:
  schedule:
    - cron: '0 0 * * *' # Daily at midnight
  workflow_dispatch: # Allow manual trigger

jobs:
  fetch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run fetch-youtube
        env:
          YOUTUBE_API_KEY: ${{ secrets.YOUTUBE_API_KEY }}
          YOUTUBE_CHANNEL_ID: ${{ secrets.YOUTUBE_CHANNEL_ID }}
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore: update YouTube content"
          file_pattern: "src/data/youtube-content.json"
```

## Troubleshooting

### Error: `YOUTUBE_API_KEY environment variable is required`
- Make sure `.env.local` exists and contains your API key
- Verify the file is in the project root
- Restart your terminal after creating `.env.local`

### Error: `YouTube API error: 403 Forbidden`
- Your API key might be invalid or restricted
- Check quota limits in [Google Cloud Console](https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas)
- Make sure YouTube Data API v3 is enabled

### Error: `Channel not found`
- Verify your `YOUTUBE_CHANNEL_ID` is correct
- Make sure your channel is public

### Videos/Playlists not showing on website
- Run `npm run fetch-youtube` to fetch data first
- Check that `src/data/youtube-content.json` contains data
- Restart the dev server: `npm run dev`

## API Quota Limits

YouTube Data API v3 has daily quota limits:
- **Default quota:** 10,000 units per day
- **Script cost per run:** ~10-20 units
- You can run the script ~500-1000 times per day

For more details: [YouTube API Quota Calculator](https://developers.google.com/youtube/v3/determine_quota_cost)

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** to your hosting platform
2. **Run the script** before building:
   ```json
   {
     "scripts": {
       "prebuild": "npm run fetch-youtube",
       "build": "next build"
     }
   }
   ```
3. **Or commit the JSON file** (if you prefer to version control the data)

## License

MIT
