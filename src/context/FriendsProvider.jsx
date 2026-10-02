import { useState } from "react";
import { FriendsContext } from "./FriendsContext";

const FriendsProvider = ({ children }) => {
  const [calledFriend, setCalledFriend] = useState([]);

  const data = {
    calledFriend,
    setCalledFriend,
  };

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
