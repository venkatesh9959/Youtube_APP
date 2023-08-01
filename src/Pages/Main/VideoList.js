import { Link } from "react-router-dom";

const VideoList = ({ snippet, statistics, id }) => {
  // Inline validation
  const videoSnippet = snippet ?? {
    title: "Video Title",
    channelTitle: "Channel Name",
    thumbnails: {
      maxres: {
        url: "default-thumbnail-url",
      },
    },
  };
  const videoStatistics = statistics ?? {
    viewCount: 0,
  };

  return (
    <div className="video_card">
      <div className="video_box">
        <div className="image-box">
          <Link to={`/watch?v=${id}`}>
            <img
              src={videoSnippet?.thumbnails?.maxres?.url}
              alt="thumbnail"
              className="img_card"
            />
          </Link>
        </div>
        <div className="video-text-section">
          <h6>{videoSnippet.title}</h6>
          <p>{videoSnippet.channelTitle}</p>
          <p className="Views">
            {Math.round(videoStatistics.viewCount / 1000000)}M views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
