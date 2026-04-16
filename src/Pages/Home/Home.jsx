import React from "react";

import StateCard from "../../Component/StateCard/StateCard.jsx";
import Friends from "../../Component/Friends/Friends.jsx";
import Banner from "../../Component/Banner/Banner.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <StateCard />
      <Friends />
    </div>
  );
};

export default Home;