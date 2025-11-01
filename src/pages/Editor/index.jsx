import BlogTopicForm from "@/components/BlogTopicForm";
import PreviewTopic from "@/components/PreviewTopic";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = () => {
  const [inputValue, setInputValue] = useState("");
  const [contentBlock, setContentBlock] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [historyList, setHistoryList] = useState(
    JSON.parse(localStorage.getItem("historyList")) || []
  );
  const handleCreate = () => {
    if (!inputValue) return alert("Vui lượng nhập nội dung tạo blog");
    setIsLoading(true);
    console.log(inputValue);
    const prompt = `Write a detailed blog post about ${inputValue}. Include an introduction, several main points with explanations, and a conclusion. Use a friendly and engaging tone.`;
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = model.generateContent(prompt);
    result
      .then((res) => {
        const text = res.response.candidates[0].content.parts[0].text;
        setContentBlock(text);
        const newItem = { id: Date.now(), topic: inputValue, content: text };
        const updatedHistoryList = [...historyList, newItem];
        localStorage.setItem("historyList", JSON.stringify(updatedHistoryList));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="grid gap-4">
      <BlogTopicForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCreate={handleCreate}
        isLoading={isLoading}
      />
      <PreviewTopic contentBlock={contentBlock} inputValue={inputValue} />
    </div>
  );
};
export default Editor;
