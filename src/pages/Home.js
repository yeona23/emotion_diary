import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [fiteredData, setFilteredData] = useState([]);
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      return setFilteredData([]);
    }
  }, [data, pivotDate]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
    </div>
  );
};

export default Home;
