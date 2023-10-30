import emotion1 from "./img/emotion1.svg";
import emotion2 from "./img/emotion2.svg";
import emotion3 from "./img/emotion3.svg";
import emotion4 from "./img/emotion4.svg";
import emotion5 from "./img/emotion5.svg";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = (targetDate.getMonth() + 1).toString().padStart(2, "0");
  let date = targetDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${date}`;
};
