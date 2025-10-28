import HistoryList from "@/components/HistoryList";
import ConfirmDelete from "@/components/ConfirmDelete";
import DialogTopic from "@/components/DialogTopic";
import React, { useState } from "react";
import { Dialog } from "@radix-ui/react-dialog";
const History = () => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenPreview, setIsOpenPreview] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [historyList, setHistoryList] = useState(
    () => JSON.parse(localStorage.getItem("historyList")) || []
  );
  const handleOpenDelete = (id) => {
    setIsOpenDelete(true);
    setSelectedId(id);
  };
  const handleDelete = () => {
    const updatedHistoryList = historyList.filter(
      (item) => item.id !== selectedId
    );
    localStorage.setItem("historyList", JSON.stringify(updatedHistoryList));
    setHistoryList(updatedHistoryList);
    setIsOpenDelete(false);
    setSelectedId(null);
  };
  const handleSeeTopic = (id) => {
    const topic = historyList.find((item) => item.id === id);
    if (topic) {
      const text = topic.content.replace(/<[^>]*>/g, "");
      setSelectedTopic(text);
      setIsOpenPreview(true);
    }
  };
  return (
    <div>
      <HistoryList
        handleOpenDelete={handleOpenDelete}
        handleSeeTopic={handleSeeTopic}
        historyList={historyList}
      />
      <ConfirmDelete
        handleDelete={handleDelete}
        isOpenDelete={isOpenDelete}
        setIsOpenDelete={setIsOpenDelete}
      />
      <DialogTopic
        isOpenPreview={isOpenPreview}
        setIsOpenPreview={setIsOpenPreview}
        topic={selectedTopic}
      ></DialogTopic>
    </div>
  );
};
export default History;
