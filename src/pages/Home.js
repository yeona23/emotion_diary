import React from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            type="positive"
            text={"POSITIVE"}
            onClick={() => alert("positive button")}
          />
        }
        rightChild={
          <Button
            type="negative"
            text={"NEGATIVE"}
            onClick={() => alert("negative button")}
          />
        }
      />
    </div>
  );
};

export default Home;
