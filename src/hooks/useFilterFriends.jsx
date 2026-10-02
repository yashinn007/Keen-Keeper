import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";

const useFilterFriends = () => {
  const { calledFriend } = useContext(FriendsContext);
  // filter call text & video from the array of calledFriend
  const call = calledFriend.filter((friend) => friend.contact == "call");
  const text = calledFriend.filter((friend) => friend.contact == "text");
  const video = calledFriend.filter((friend) => friend.contact == "video");
  return { call, text, video, calledFriend };
};

export default useFilterFriends;
