import db from "./firestore";

const extractSnapshotData = snapshot =>
  snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

export const fetchChats = () =>
  db
    .collection("chats")
    .get()
    // .then(snapshot => {
    //   // If you are fetching collection then data are provided under snapshot.docs
    //   const data = snapshot.docs.map(doc => {
    //     return doc.data();
    //   });
    //   return data;
    // });
    .then(extractSnapshotData);
