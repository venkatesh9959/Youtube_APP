import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addTwoMessages } from "../../store/MessageSlice";
import { addMessageToChat } from "../../store/MessageData";
import Header from "../../component/Header";

const LiveChat = () => {
  const [dataMessage, setDataMessage] = useState();
  const [numMessagesToAdd, setNumMessagesToAdd] = useState(0);
  const [handlerMessage, setHandleMessage] = useState("");
  const dispatch = useDispatch();
  const [prevDataLength, setPrevDataLength] = useState(0);

  const chatContainerRef = useRef(null);
  const data = useSelector((state) => state?.messages?.message);
  const allComment = useSelector((state) => state?.allMessages?.initialData);
  const handleSubmit = () => {
    const MessageObj = {
      id: Date.now(),
      name: "Venkatesh",
      picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
      latest_timestamp: "10:00 AM",
      lastChat: handlerMessage,
    };
    dispatch(addMessageToChat(MessageObj));
  };
  useEffect(() => {
    const data = allComment;

    setDataMessage(data.slice(0, numMessagesToAdd));
  }, [numMessagesToAdd]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addTwoMessages(dataMessage));
      setNumMessagesToAdd((prevNumMessages) => prevNumMessages + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, dataMessage]);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="watchPage LiveChat">
        <div className="player">
          <iframe
            src={
              "https://www.youtube.com/embed/" + "_HGQZlK08gQ" + "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>

        <div className="live-chat" ref={chatContainerRef}>
          {data &&
            data.map((chatmessage) => {
              return (
                <>
                  {" "}
                  <ChatMessage key={chatmessage.id} {...chatmessage} />
                </>
              );
            })}
        </div>
        <div className="Messages">
          <input
            type="text"
            onChange={(e) => setHandleMessage(e.target.value)}
            className="inputMessage"
            placeholder="Write here"
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
