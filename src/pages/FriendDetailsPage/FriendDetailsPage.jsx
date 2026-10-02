import { useParams } from "react-router";
import useFriendsData from "../../hooks/useFriendsData";
import { MdAddCall } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { toast } from "react-toastify";

const FriendDetailsPage = () => {
  //get friendDetails id by useParams();
  const { friendId } = useParams();
  // get all friends data by custom hook
  const { friends, loading } = useFriendsData();

  //get context data-----------------------
  const { calledFriend, setCalledFriend } = useContext(FriendsContext);

  // display loading (importent) return
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl text-[#244d3fFF]"></span>
      </div>
    );
  }
  //get the clicked friend data
  const expectedFriend = friends.find(
    (friend) => friend.id === Number(friendId),
  );
  // handel call buttons
  // 2 data i have to add, click date and contect type.
  const handelCallBtn = (type) => {
    const newExpectedFriend = {
      ...expectedFriend,
      contact: type,
      called_at: new Date().toISOString().split("T")[0],
    };
    setCalledFriend([...calledFriend, newExpectedFriend]);
    toast.success(
      `${newExpectedFriend.contact} with ${newExpectedFriend.name}`,
    );
  };

  const {
    picture,
    name,
    days_since_contact,
    tags,
    status,
    goal,
    next_due_date,
  } = expectedFriend;

  return (
    <div className="container mx-auto my-6 md:my-10 lg:my-20 px-3 md:px-5 ">
      {/* grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-0 space-y-5 md:space-5 md:space-x-5 w-full mx-auto">
        {/* grid-1 */}
        <div className="rounded-lg row-span-3 bg-white space-y-5 ">
          <div className="flex flex-col justify-center items-center gap-3 py-6 shadow-sm rounded-lg">
            <div className="rounded-full w-20 h-20  overflow-hidden">
              <img src={picture} alt={name} className=" object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-center">{name}</h3>
              <div className="space-x-2 flex justify-center items-center ">
                {tags.map((tag, index) => (
                  <span
                    className="bg-[#cbfadbFF] py-2 px-3 rounded-xl text-[#244d3fFF] text-[12px]"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p
              className={`${(status == "overdue" && "bg-[#ef4444FF]") || (status == "on-track" && "bg-[#244d3fFF]") || (status == "almost due" && "bg-[#efad44FF]")} py-2 px-3 rounded-xl text-white text-[12px]`}
            >
              {status}
            </p>
          </div>
          <div className="space-y-2">
            <button className="btn w-full bg-white">Snooze 2 weeks</button>
            <button className="btn w-full bg-white">Archive</button>
            <button className="btn w-full bg-white text-red-500">Delete</button>
          </div>
        </div>
        {/* grid-2 */}
        <div className="col-span-2 w-full flex justify-between items-center gap-2 md:gap-5 items-stretch">
          <div className="flex-1 min-w-0 rounded-lg flex flex-col justify-center bg-white items-center gap-2 shadow-lg p-2 md:p-8 w-70">
            <h5 className="text-[#244d3fFF] font-semibold text-lg md:text-3xl">
              {days_since_contact}
            </h5>
            <p className="text-[#64748bFF] text-center">Days Since Contact</p>
          </div>
          <div className="flex-1 min-w-0 rounded-lg flex flex-col justify-center bg-white items-center gap-2 shadow-lg p-2 md:p-8 w-70">
            <h5 className="text-[#244d3fFF] font-semibold text-lg md:text-3xl">
              {goal}
            </h5>
            <p className="text-[#64748bFF] text-center">Goal (Days)</p>
          </div>
          <div className="flex-1 min-w-0 rounded-lg flex flex-col bg-white justify-center items-center gap-2 shadow-lg p-2 md:p-8 w-70">
            <h5 className="text-[#244d3fFF] font-semibold text-lg md:text-3xl">
              {next_due_date}
            </h5>
            <p className="text-[#64748bFF] text-center">Next Due</p>
          </div>
        </div>
        {/* grid-3 */}
        <div className="rounded-lg col-span-2 bg-white p-5 space-y-5 shadow-lg w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-xl font-medium text-[#244d3fFF]">
              Relationship Goal
            </h2>
            <button className="btn">Edit</button>
          </div>
          <h2 className="text-[#64748bFF]">
            Connect every <span className="font-semibold">30 days</span>
          </h2>
        </div>
        {/* grid-4 */}
        <div className="rounded-lg col-span-2 bg-white p-5 space-y-5 w-full shadow-lg">
          <h2 className="text-xl font-medium text-[#244d3fFF]">
            Quick Check-In
          </h2>
          <div className="flex space-y-0 space-x-2  md:space-5 justify-between items-center ">
            <button
              onClick={() => handelCallBtn("call")}
              className="flex flex-1 min-w-0 justify-center items-center flex-col space-y-2 py-4 rounded-lg bg-base-200"
            >
              <MdAddCall className="text-3xl" />
              <p>Call</p>
            </button>
            <button
              onClick={() => handelCallBtn("text")}
              className="flex flex-1 min-w-0 justify-center items-center flex-col  space-y-2 py-4 rounded-lg bg-base-200"
            >
              <IoMdText className="text-3xl" />
              <p>Text</p>
            </button>
            <button
              onClick={() => handelCallBtn("video")}
              className="flex flex-1 min-w-0 justify-center items-center flex-col space-y-2 py-4 rounded-lg bg-base-200"
            >
              <FaVideo className="text-3xl" />
              <p>Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
