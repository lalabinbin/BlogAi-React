import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "react-hot-toast";

const PreviewTopic = ({ contentBlock, inputValue }) => {
  const handleCopy = async () => {
    if (!contentBlock) return alert("Vui lượng tạo bài về trên");
    // Dùng Clipboard API của trình duyệt để ghi text vào bộ nhớ tạm
    await navigator.clipboard.writeText(contentBlock);
    toast.success("Sao chép thành công!");
  };
  const handleDownload = () => {
    if (!contentBlock) return alert("Vui lòng tạo bài về trên");
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
    toast.success("Tải xuống thành công!");
  };
  return (
    <div>
      <div className=" w-full text-card-foreground gap-6 justify-between rounded-xl  bg-card border shadow-sm p-6">
        <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-8 border-b pb-6">
          <div className="text-2xl mb-0 font-bold flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            Xem trước &amp; Xuất
          </div>
          <div className="flex gap-2 justify-start md:justify-end">
            <button
              onClick={() => {
                handleCopy();
                handleClick();
              }}
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
              Sao chép
            </button>
            <button
              onClick={() => {
                handleDownload();
                handleClick();
              }}
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              Tải xuống
            </button>
          </div>
        </div>
        <div className="grid gap-8 min-h-28">
          {contentBlock ? (
            <div className="prose max-w-none prose-headings:scroll-mt-24 dark:prose-invert">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {contentBlock}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Chưa có nội dung để hiển thị.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewTopic;
