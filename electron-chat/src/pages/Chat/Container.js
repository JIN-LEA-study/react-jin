import React from "react";

import ChatUsersList from "./ChatUserList";
import ViewTitle from "../../common/components/ViewTitle";
import ChatMessagesList from "./ChatMessagesList";

const ChatPage = () => {
  return (
    <div className='row no-gutters fh'>
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
