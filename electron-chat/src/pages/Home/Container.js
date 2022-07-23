import React from "react";

import AvailableChatsList from "./AvailableChatsList";
import JoinedChatsList from "./JoinedChatsList";
import { ViewTitle } from "../../common/components";

const HomePage = () => {
  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <JoinedChatsList />
      </div>
      <div className='col-9 fh'>
        <ViewTitle />
        <div className='container-fluid'>
          <AvailableChatsList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
