import React from "react";
import { Trash, Eye } from "lucide-react";
export default function HistoryList({
  historyList,
  handleDelete,
  handleSeeTopic,
}) {
  return (
    <>
      <div>
        <div
          data-rht-toaster=""
          style={{
            position: "fixed",
            zIndex: 9999,
            inset: "16px",
            pointerEvents: "none",
          }}
        ></div>
        <main className="container mx-auto px-4 py-12">
          <div className="grid gap-6">
            <h1 className="text-3xl font-bold">Hi, here is your history</h1>
            {historyList.length > 0 ? (
              historyList.map((item) => (
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                  <div class="bg-card w-full text-card-foreground gap-6 justify-between rounded-xl border p-6 shadow-sm">
                    <h2 class="text-2xl font-bold mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
                      {item.topic}
                    </h2>
                    <p class="text-sm text-ellipsis line-clamp-3">
                      {" "}
                      {item.content}
                    </p>
                    <div class="flex justify-start gap-2 mt-4">
                      <button
                        onClick={() => handleSeeTopic(item.id)}
                        data-slot="button"
                        class="inline-flex items-center hover:cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-primary text-primary-foreground px-4 py-2 rounded-md"
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-eye w-4 h-4"
                          aria-hidden="true"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg> */}
                        <Eye size={48} color="white" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        data-slot="button"
                        class="inline-flex items-center hover:cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-destructive text-destructive-foreground px-4 py-2 rounded-md"
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trash2 lucide-trash-2 w-4 h-4 stroke-amber-50"
                          aria-hidden="true"
                        >
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg> */}
                        <Trash size={48} color="white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-lg text-muted-foreground">
                No history found
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
