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
    setIsLoading(true);
    console.log(inputValue);
    const prompt = `Write a detailed blog post about ${inputValue}. Include an introduction, several main points with explanations, and a conclusion. Use a friendly and engaging tone.`;
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = model.generateContent(prompt);
    result
      .then((res) => {
        const text = res.response.candidates[0].content.parts[0].text;
        console.log(text);
        setContentBlock(text);
        const newItem = { id: Date.now(), topic: inputValue, content: text };
        const updatedHistoryList = [...historyList, newItem];
        localStorage.setItem("historyList", JSON.stringify(updatedHistoryList));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleCopy = async () => {
    // Dùng Clipboard API của trình duyệt để ghi text vào bộ nhớ tạm
    await navigator.clipboard.writeText(contentBlock);
  };
  const handleDownload = () => {
    // 1️⃣ Tạo blob từ nội dung
    const blob = new Blob([contentBlock], { type: "text/plain" });

    // 2️⃣ Tạo URL tạm thời cho blob
    const url = URL.createObjectURL(blob);

    // 3️⃣ Tạo thẻ <a> để mô phỏng hành động tải xuống
    const a = document.createElement("a");
    a.href = url;
    const filename = `${inputValue}.txt`;
    a.download = filename;

    // 4️⃣ Thêm vào DOM và click tự động
    document.body.appendChild(a);
    a.click();

    // 5️⃣ Dọn dẹp
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="grid gap-4">
      <BlogTopicForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCreate={handleCreate}
        isLoading={isLoading}
      />
      <PreviewTopic
        handleCopy={handleCopy}
        handleDownload={handleDownload}
        contentBlock={contentBlock}
      />
    </div>
  );
};
export default Editor;
