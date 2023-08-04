const YOUTUBE_API_KEY = "AIzaSyCFH4w82Vv0GlDvMEk3mp57XPPYout9Hn4";


// Endpoint for autocomplete search suggestions
export const YOUTUBE_AUTOCOMPLETE_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

// Endpoint for fetching popular videos
export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

// Endpoint for fetching comments for a video
export const YOUTUBE_VIDEO_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

// Endpoint for fetching channel details including logo
export const YOUTUBE_CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=`;


export const Colors=[
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008080",
  "#C0C0C0",
  "#808080",
  "#800000",
  "#808000",
  "#008000",
  "#000080",
  "#800000",
  "#FFD700",
  "#A52A2A",
  "#FF4500",
  "#2E8B57",
  "#DAA520",
  "#D2691E",
  "#5F9EA0",
  "#4B0082",
  "#B22222",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
];