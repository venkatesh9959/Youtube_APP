import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeToggle } from "../../store/ToggleSlice";
import { useSearchParams } from "react-router-dom";
import CommentDisplay from "../../Pages/CommentSection/CommentDisplay";
import { useNavigate } from "react-router-dom";
const VideoWatchPage = () => {
  const dispatch = useDispatch();
  const [urlSearchParams] = useSearchParams();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(closeToggle());
  }, []);
  const navigationLiveChannel = () => {
    navigation("/LiveChannel");
  };
  return (
    <div className="watchPage">
      <div className="player">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            urlSearchParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
      <div className="comments-section">
        <CommentDisplay id={urlSearchParams.get("v")} />
      </div>

      <div className="Live_Page">
        <button onClick={navigationLiveChannel}> Go TO LIVE CHANNEL </button>
      </div>
    </div>
  );
};

export default VideoWatchPage;
