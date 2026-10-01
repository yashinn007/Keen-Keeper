import { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      //   console.log("data", data);
      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);
  return { friends, loading };
};

export default useFriendsData;
