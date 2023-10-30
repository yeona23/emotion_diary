import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  return <div>HOME</div>;
};

export default Home;
