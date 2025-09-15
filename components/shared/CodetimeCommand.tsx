"use client";

import React, { useState, useEffect } from "react";
import { Clock, Code, ExternalLink } from "lucide-react";

const CodetimeCommand = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.codetime.dev/v3/users/shield?uid=30061&minutes=1440",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch CodeTime data");
        const data = await res.json();
        setMessage(data?.message || "");
      } catch (e) {
        setMessage("");
      } finally {
        setLoading(false);
      }
    };
    fetchMessage();
  }, []);

  return (
    <div className="font-mono text-foreground space-y-4">
      <div className="flex items-center mb-3">
        <Clock className="text-cyan mr-2" size={18} />
        <h3 className="text-accent font-semibold">Coding Activity</h3>
      </div>

      <div className="bg-base02 p-4 rounded-md">
        <div className="mb-4">
          <h4 className="font-semibold text-yellow flex items-center">
            <Code size={16} className="mr-2" />
            Today&apos;s Coding Time
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            Tracked via CodeTime VS Code extension
          </p>
        </div>

        <div className="flex justify-center items-center py-3 bg-black/30 rounded-md mb-4 min-h-[40px]">
          {loading ? (
            <span className="text-muted-foreground text-sm">Loading…</span>
          ) : message ? (
            <span className="text-green font-semibold">{message}</span>
          ) : (
            <span className="text-muted-foreground text-sm">
              No data available
            </span>
          )}
        </div>

        <div className="text-sm space-y-2">
          <p className="text-muted-foreground">
            This shows how much time I&apos;ve spent coding today, tracked
            automatically by the CodeTime extension in VS Code.
          </p>
        </div>
      </div>

      <div className="text-sm">
        <a
          href="https://codetime.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue flex items-center hover:underline"
        >
          <ExternalLink size={14} className="mr-1" />
          View detailed stats on CodeTime.dev
        </a>
      </div>
    </div>
  );
};

export default CodetimeCommand;
