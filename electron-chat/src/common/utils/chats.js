import db from "./firestore";
import { collection, getDocs } from "firebase/firestore";

export const chatsApi = async () => {
  const chatCol = collection(db, "chats");
  const chatSnap = await getDocs(chatCol);
  const chatList = chatSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  // console.log("Running doc view", chatList);
  return chatList;
};


