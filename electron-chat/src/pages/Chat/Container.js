import React from "react";
import { useParams } from "react-router-dom";

import ChatUsersList from "./ChatUserList";
import ChatMessagesList from "./ChatMessagesList";
import { ViewTitle } from "../../common/components";

const ChatPage = () => {
  const params = useParams();

  return (
    <div className='row no-gutters fh'>
      {params.id}
      <div className='col-3 fh'>
        <ChatUsersList />
      </div>
      <div className='col-9 fh'>
        <ViewTitle />
        <ChatMessagesList />
      </div>
    </div>
  );
};

export default ChatPage;
