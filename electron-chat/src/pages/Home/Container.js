import React, { useEffect } from "react";

import AvailableChatsList from "./AvailableChatsList";
import JoinedChatsList from "./JoinedChatsList";
import { ViewTitle } from "../../common/components";

import { useDispatch, useSelector } from "react-redux";

import { fetchChats } from "../../common/redux/actions/chats";

const HomePage = () => {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => {
    debugger;
    // console.log(chats.items)
    return chats.items;
  });
  // const chats = useSelector(state => state.chats.items);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        {JSON.stringify(chats)}
        <JoinedChatsList />
      </div>
      <div className='col-9 fh'>
        <div className='container-fluid'>
          <ViewTitle text='Choose your channel' />
          <AvailableChatsList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
