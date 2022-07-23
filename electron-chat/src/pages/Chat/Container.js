import React from "react";
import { useParams } from "react-router-dom";

import ChatUsersList from "./ChatUserList";
import ChatMessagesList from "./ChatMessagesList";
import { ViewTitle } from "../../common/components";

const ChatPage = () => {
  const { id } = useParams();

  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <ChatUsersList />
      </div>
      <div className='col-9 fh'>
        <ViewTitle text={`Joined channel: ${id}`} />
        <ChatMessagesList />
      </div>
    </div>
  );
};

export default ChatPage;
