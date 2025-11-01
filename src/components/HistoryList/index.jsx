import React from "react";
import { Trash, Eye } from "lucide-react";
import Lottie from "lottie-react";
import TrashDefault from "../../assets/notFound.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function HistoryList({
  historyList,
  handleSeeTopic,
  handleOpenDelete,
}) {
  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-6">
          <h1 className="text-3xl font-bold">Hi, here is your history</h1>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {historyList.length > 0 ? (
              historyList.map((item) => (
                <div
                  key={item.id}
                  className="bg-card w-full text-card-foreground gap-6 justify-between rounded-xl border p-6 shadow-sm"
                >
                  <h2 className="text-2xl font-bold mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
                    {item.topic}
                  </h2>
                  <div className="text-sm text-ellipsis line-clamp-3">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {item.content}
                    </ReactMarkdown>
                  </div>
                  <div className="flex justify-start gap-2 mt-4">
                    <button
                      onClick={() => handleSeeTopic(item.id)}
                      className="inline-flex items-center hover:cursor-pointer justify-center bg-primary text-white px-4 py-2 rounded-md"
                    >
                      <Eye size={24} color="white" />
                    </button>
                    <button
                      onClick={() => handleOpenDelete(item.id)}
                      className="inline-flex items-center justify-center bg-destructive text-white px-4 py-2 rounded-md"
                    >
                      <Trash size={24} color="white" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-lg text-muted-foreground">
                <div style={{ width: 200, height: 200, margin: "auto" }}>
                  <Lottie animationData={TrashDefault} loop={true} />
                </div>
                No history found
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
