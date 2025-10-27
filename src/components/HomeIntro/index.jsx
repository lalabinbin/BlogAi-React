import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HomeIntro({ toggleTheme, theme }) {
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-3xl font-bold text-foreground">
                AI Blog Generator
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your ideas into compelling blog posts with AI
                assistance. Generate outlines, write content, and export
                beautiful articles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-foreground">
                  AI-Powered
                </h3>
                <p className="text-muted-foreground text-[14px]">
                  Generate blog outlines and content suggestions using advanced
                  AI
                </p>
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-foreground">
                  Rich Editor
                </h3>
                <p className="text-muted-foreground text-[14px]">
                  Full-featured text editor with formatting tools and live
                  preview
                </p>
              </div>
              <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-foreground">
                  Export Ready
                </h3>
                <p className="text-muted-foreground text-[14px]">
                  Export your finished articles in multiple formats
                </p>
              </div>
            </div>
            <div className="pt-8">
              <Link to="/editor" data-discover="true">
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 py-3"
                >
                  Start Writing
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default HomeIntro;
