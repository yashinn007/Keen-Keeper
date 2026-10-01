import FriendsSection from "../../components/homepage/FriendsSection";
import HeroSection from "../../components/homepage/HeroSection";

const Homepage = () => {
  return (
    <div className="container mx-auto my-6 md:my-10 lg:my-20 px-3 md:px-5">
      <HeroSection></HeroSection>
      <FriendsSection></FriendsSection>
    </div>
  );
};

export default Homepage;
