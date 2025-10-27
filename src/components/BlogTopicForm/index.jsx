import React from "react";
import { Spinner } from "@/components/ui/spinner";

const BlogTopicForm = ({
  inputValue,
  handleCreate,
  setInputValue,
  isLoading,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Editor</h1>
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div className="px-6 grid">
          <div className="text-2xl font-bold mb-6">Chủ đề Blog</div>
          <div className="w-full flex gap-2">
            <div className="w-full flex align-center justify-center gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 min-w-0 bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập chủ đề blog của bạn (ví dụ: Lợi ích của thiền định)"
                type="text"
              />
            </div>
            <button
              onClick={handleCreate}
              data-slot="button"
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2  h-full`} disabled={isLoading}
            >
              {isLoading ? (
                <>
                  {" "}
                  <Spinner /> Tạo Nội Dung{" "}
                </>
              ) : (
                "Tạo Nội Dung"
              )}
            </button>
          </div>
          <label className="mt-4 text-sm text-muted-foreground">
            AI sẽ tạo ra nội dung blog dựa trên chủ đề bạn nhập
          </label>
        </div>
      </div>
    </div>
  );
};

export default BlogTopicForm;
