import React, { useEffect, useState } from "react";
import {
  YOUTUBE_POPULAR_VIDEOS_API,
  YOUTUBE_VIDEO_COMMENTS_API,
  YOUTUBE_CHANNEL_DETAILS_API,
} from "../../utilities/constants";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { PiDotsThreeBold } from "react-icons/pi";
import { Colors } from "../../utilities/constants";
import UsersComments from "./UsersComments";
const CommentDisplay = ({ id }) => {
  const [commentList, setCommentList] = useState([]);
  const [channelData, setChannelData] = useState(null);
  const [channellogo, setChannelLogo] = useState(null);
  const [showMore, setshowMore] = useState(true);

  const fetchVideoData = async () => {
    try {
      const response = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
      const json = await response.json();
      const channel = json?.items.find((item) => item?.id === id);

      if (channel) {
        setChannelData(channel);
        await getChannelLogo(channel?.snippet?.channelId);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_VIDEO_COMMENTS_API}${id}&key=AIzaSyCFH4w82Vv0GlDvMEk3mp57XPPYout9Hn4`
      );
      const json = await response.json();
      setCommentList(json?.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const getChannelLogo = async (logo) => {
    try {
      const response = await fetch(
        `${YOUTUBE_CHANNEL_DETAILS_API}${logo}&key=AIzaSyCFH4w82Vv0GlDvMEk3mp57XPPYout9Hn4`
      );
      const json = await response.json();
      setChannelLogo(json?.items[0]);
    } catch (error) {
      console.error("Error fetching channel logo:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchVideoData();
    fetchComments();
  }, [id]);

  const RecursiveCommentRenderer = ({ comments }) => {
    return (
      <div className="">
        {comments &&
          comments.map((comment, index) => (
            <div key={index}>
              <UsersComments data={comment} index={index} />
              <div style={{ marginLeft: "50px" }}>
                <RecursiveCommentRenderer comments={comment?.replies?.comments} />
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  const likes = channelData?.statistics?.likeCount;
  const convertedLikes =
    likes > 1000000
      ? Math.floor(likes / 1000000) + "m"
      : Math.floor(likes / 10000) + "k";

  return (
    <div className="comment-footer">
      <h1>{channelData?.title}</h1>
      <div className="channel-heading">
        <div className="channel-heading-text">
          <button className="channel-logo">
            <img
              src={channellogo?.snippet?.thumbnails?.default?.url}
              alt="logo"
              className="channel-img"
            />
          </button>
          <p style={{ fontSize: "15px,", marginLeft: "-30px" }}>
            {channelData?.snippet?.channelTitle}
          </p>
          <button className="channel-subscribe">Subscribe</button>
        </div>
        <div className="channel-heading-button">
          <button className="combine">
            <AiOutlineLike className="channel-icons" />
            <span className="span-1">{convertedLikes}</span>
          </button>
          <button className="button-2">
            <AiOutlineDislike className="channel-icons" />
          </button>
          <button className="button-3">
            <PiShareFatLight className="channel-icons" />
            <span className="span-1">Share</span>
          </button>
          <button className="button-4">
            <PiDotsThreeBold className="channel-icons" />
          </button>
        </div>
      </div>
      {channellogo?.snippet?.description && (
        <div className="decription">
          {showMore === true ? (
            <p>
              {channellogo?.snippet?.description.slice(0, 200)}
              <button onClick={() => setshowMore(false)} className="showText">
                ShowMore
              </button>
            </p>
          ) : (
            <p>
              {channellogo?.snippet?.description}
              <button onClick={() => setshowMore(true)} className="showText">
                Show Less
              </button>
            </p>
          )}
        </div>
      )}

      <div>
        <h1>{commentList?.length} Comments</h1>
      </div>
      <RecursiveCommentRenderer comments={commentList} color={Colors} />
    </div>
  );
};

export default CommentDisplay;
