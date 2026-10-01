import useFriendsData from "../../hooks/useFriendsData";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
  // created a hook and push all fetching codes & get API data and loading.
  const { friends, loading } = useFriendsData();
  console.log(friends);
  return (
    <div className="my-15 ">
      <h4 className="text-2xl font-semibold">Your Friends:</h4>
      {/* card section */}
      {loading ? (
        <div className="h-[50vh] flex justify-center items-center">
          <span className="loading loading-infinity loading-xl text-[#244d3fFF]"></span>
        </div>
      ) : (
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mt-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend}></FriendCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsSection;
