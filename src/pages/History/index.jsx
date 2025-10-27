import HistoryList from "@/components/HistoryList";
import React, { useState } from "react";
const History = () => {
  const [historyList, setHistoryList] = useState(
    () => JSON.parse(localStorage.getItem("historyList")) || []
  );
  const handleDelete = (id) => {
    const updatedHistoryList = historyList.filter((item) => item.id !== id);
    localStorage.setItem("historyList", JSON.stringify(updatedHistoryList));
    setHistoryList(updatedHistoryList);
  };
  const handleSeeTopic = (topic) => {
    console.log(topic);
    alert(topic);
  };
  return (
    <div>
      <HistoryList handleDelete={handleDelete} handleSeeTopic={handleSeeTopic} historyList={historyList} />
    </div>
  );
};
export default History;
