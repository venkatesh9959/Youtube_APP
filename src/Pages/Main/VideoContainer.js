import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../../utilities/constants";
import Button from "../../component/Button";
import { Shimmer } from "../../component/Shimmer";
import { IndiaPopularVideos } from "../../utilities/VideoData";
import VideoList from "./VideoList";

const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  const fetchPopularVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_POPULAR_VIDEOS_API);

      const data = await response.json();
      setPopularVideos(data?.items);
    } catch (error) {
      setPopularVideos(IndiaPopularVideos);
      console.error("Error fetching videos:", error.message);
    }
  };
  useEffect(() => {
    fetchPopularVideos();
  }, []);

  return (
    <div className="col-10 main-menu">
      <Button />
      <div className="wrapper">
        <div className="videoContainer">
          {popularVideos.length === 0 ? (
            <Shimmer />
          ) : (
            popularVideos &&
            popularVideos.map((videos) => {
              return <VideoList key={videos.id} {...videos} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
