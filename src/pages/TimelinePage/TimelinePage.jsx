// import { useContext } from "react";
// import { FriendsContext } from "../../context/FriendsContext";
import Call from "../../assets/images/call.png";
import Text from "../../assets/images/text.png";
import Video from "../../assets/images/video.png";
import useFilterFriends from "../../hooks/useFilterFriends";

const TimelinePage = () => {
  //get context data-----------------------
  // const { calledFriend, setCalledFriend } = useContext(FriendsContext);
  const { call, text, video, calledFriend } = useFilterFriends();
  console.log(calledFriend, "calledFriend");
  return (
    <div className="container mx-auto my-6 md:my-10 lg:my-20 px-3 md:px-5">
      <h3 className="text-5xl font-bold mb-6">Timeline</h3>
      {calledFriend.length === 0 ? (
        <div className="h-[50vh] flex justify-center items-center">
          <h3 className="text-xl  text-gray-500 font-semibold">
            History is empty
          </h3>
        </div>
      ) : (
        <div className="min-h-[50vh]">
          {calledFriend.map((friend, index) => (
            <div
              className=" flex justify-start items-center gap-4 p-3 my-6 pl-6"
              key={index}
            >
              <div>
                <img
                  src={
                    (friend.contact == "call" && Call) ||
                    (friend.contact == "text" && Text) ||
                    (friend.contact == "video" && Video)
                  }
                  alt="call icon"
                />
              </div>
              <div>
                <h4 className="text-[#64748bFF] font-normal">
                  <span className="text-[#244d3fFF] font-medium text-[20px] mr-2">
                    {(friend.contact == "call" && "Call") ||
                      (friend.contact == "text" && "Text") ||
                      (friend.contact == "video" && "Video")}
                  </span>
                  with {friend.name}
                </h4>
                <p className="text-[#64748bFF] font-normal">
                  {friend.called_at}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
