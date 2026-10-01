import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { picture, name, days_since_contact, tags, status } = friend;
  return (
    <Link
      to={`/friendDetals/${friend.id}`}
      className="flex flex-col justify-center items-center gap-3 py-6 shadow-sm hover:shadow-xl rounded-2xl"
    >
      <div className="rounded-full w-20 h-20  overflow-hidden">
        <img src={picture} alt={name} className=" object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-center">{name}</h3>
        <p className="text-[12px] text-[#64748bFF] text-center">
          {days_since_contact}d ago
        </p>
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
    </Link>
  );
};

export default FriendCard;
