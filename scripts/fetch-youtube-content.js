const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

// YouTube API configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UC_YOUR_CHANNEL_ID'; // Replace with your channel ID

if (!YOUTUBE_API_KEY) {
  console.error('❌ Error: YOUTUBE_API_KEY environment variable is required');
  process.exit(1);
}

/**
 * Fetch data from YouTube API
 */
async function fetchYouTubeData(endpoint, params) {
  const queryParams = new URLSearchParams({
    ...params,
    key: YOUTUBE_API_KEY,
  });

  const url = `https://www.googleapis.com/youtube/v3/${endpoint}?${queryParams}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from ${endpoint}:`, error.message);
    throw error;
  }
}

/**
 * Get channel ID from handle or return channel ID if already in correct format
 */
async function getChannelId(channelIdentifier) {
  // If it's already a channel ID (starts with UC), return it
  if (channelIdentifier.startsWith('UC')) {
    return channelIdentifier;
  }

  // If it's a handle (starts with @), fetch the channel ID
  if (channelIdentifier.startsWith('@')) {
    const handle = channelIdentifier.substring(1); // Remove @ prefix
    console.log(`🔍 Converting handle @${handle} to channel ID...`);

    const channelData = await fetchYouTubeData('channels', {
      part: 'id',
      forHandle: handle,
    });

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error(`Channel not found for handle: ${channelIdentifier}`);
    }

    const channelId = channelData.items[0].id;
    console.log(`✅ Found channel ID: ${channelId}`);
    return channelId;
  }

  // Otherwise, assume it's a channel ID without UC prefix (legacy format)
  return channelIdentifier;
}

/**
 * Fetch all videos from the channel
 */
async function fetchChannelVideos(channelId) {
  console.log('📹 Fetching channel videos...');

  // First, get the uploads playlist ID
  const channelData = await fetchYouTubeData('channels', {
    part: 'contentDetails,snippet',
    id: channelId,
  });

  if (!channelData.items || channelData.items.length === 0) {
    throw new Error('Channel not found');
  }

  const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
  const channelTitle = channelData.items[0].snippet.title;
  const channelDescription = channelData.items[0].snippet.description;

  console.log(`✅ Found channel: ${channelTitle}`);

  // Fetch videos from uploads playlist
  const playlistItems = await fetchYouTubeData('playlistItems', {
    part: 'snippet,contentDetails',
    playlistId: uploadsPlaylistId,
    maxResults: 50, // Adjust as needed
  });

  const videos = playlistItems.items.map(item => ({
    id: item.contentDetails.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
    link: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
  }));

  console.log(`✅ Fetched ${videos.length} videos`);
  return { videos, channelTitle, channelDescription };
}

/**
 * Fetch all playlists from the channel
 */
async function fetchChannelPlaylists(channelId) {
  console.log('📋 Fetching channel playlists...');

  const playlistsData = await fetchYouTubeData('playlists', {
    part: 'snippet,contentDetails',
    channelId: channelId,
    maxResults: 50,
  });

  const playlists = playlistsData.items.map(item => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
    itemCount: item.contentDetails.itemCount,
    publishedAt: item.snippet.publishedAt,
    link: `https://www.youtube.com/playlist?list=${item.id}`,
  }));

  console.log(`✅ Fetched ${playlists.length} playlists`);
  return playlists;
}

/**
 * Main function to fetch all YouTube content
 */
async function main() {
  console.log('🚀 Starting YouTube content fetch...\n');

  try {
    // First, resolve the channel ID (handles @username conversion)
    const resolvedChannelId = await getChannelId(CHANNEL_ID);

    // Fetch videos and playlists in parallel
    const [videoData, playlists] = await Promise.all([
      fetchChannelVideos(resolvedChannelId),
      fetchChannelPlaylists(resolvedChannelId),
    ]);

    const { videos, channelTitle, channelDescription } = videoData;

    // Prepare the data object
    const youtubeData = {
      channel: {
        id: resolvedChannelId,
        title: channelTitle,
        description: channelDescription,
        url: `https://youtube.com/channel/${resolvedChannelId}`,
      },
      videos,
      playlists,
      lastUpdated: new Date().toISOString(),
    };

    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, '../src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write to JSON file
    const outputPath = path.join(dataDir, 'youtube-content.json');
    fs.writeFileSync(outputPath, JSON.stringify(youtubeData, null, 2));

    console.log(`\n✅ Successfully saved YouTube data to ${outputPath}`);
    console.log(`\n📊 Summary:`);
    console.log(`   - Channel: ${channelTitle}`);
    console.log(`   - Videos: ${videos.length}`);
    console.log(`   - Playlists: ${playlists.length}`);
    console.log(`   - Last Updated: ${youtubeData.lastUpdated}`);

  } catch (error) {
    console.error('\n❌ Error fetching YouTube content:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
