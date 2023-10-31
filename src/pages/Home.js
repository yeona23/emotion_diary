import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  return (
    <div>
      <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => alert("complete")}
      />
      {/* <Header
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
      /> */}
    </div>
  );
};

export default Home;
