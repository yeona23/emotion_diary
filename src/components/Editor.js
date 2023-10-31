import { emotionList, getFormattedDate } from "../util";
import "./Editor.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handelChangeEmotion = (emotionId) => [
    setState({
      ...state,
      emotionId,
    }),
  ];

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>Today's Date</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>Today's Emotion</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((el) => (
            <EmotionItem
              key={el.id}
              {...el}
              onClick={handelChangeEmotion}
              isSelected={(state.emotionId = el.id)}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>Today's Diary</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="How was it today?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom-section">
        <Button text={"CANCEL"} onClick={handleGoBack} />
        <Button text={"SUBMIT"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
