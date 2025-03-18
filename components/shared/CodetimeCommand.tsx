"use client";

import React, { useState, useEffect } from "react";
import { Clock, Code, ExternalLink, RefreshCw } from "lucide-react";

const CodetimeCommand = () => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Codetime badge URL
  const codetimeBadgeUrl =
    "https://img.shields.io/endpoint?style=flat-square&color=222&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D30061%26project%3D%26in=86400000";

  // Refresh the data (simulated)
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <div className="font-mono text-foreground space-y-4">
      <div className="flex items-center mb-3">
        <Clock className="text-cyan mr-2" size={18} />
        <h3 className="text-accent font-semibold">Coding Activity</h3>
      </div>

      <div className="bg-base02 p-4 rounded-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-yellow flex items-center">
              <Code size={16} className="mr-2" />
              Today's Coding Time
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Tracked via CodeTime VS Code extension
            </p>
          </div>

          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="mt-2 md:mt-0 px-3 py-1 bg-base01 text-cyan hover:bg-base0 transition-colors rounded-md text-sm flex items-center"
          >
            <RefreshCw
              size={14}
              className={`mr-1 ${refreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </button>
        </div>

        <div className="flex justify-center py-3 bg-black/30 rounded-md mb-4">
          <img
            src={codetimeBadgeUrl}
            alt="CodeTime Badge"
            className={`${
              refreshing ? "opacity-50" : "opacity-100"
            } transition-opacity`}
          />
        </div>

        <div className="text-sm space-y-2">
          <p className="text-muted-foreground">
            This badge shows how much time I've spent coding today, tracked
            automatically by the CodeTime extension in VS Code.
          </p>

          <div className="flex flex-wrap gap-y-2 gap-x-4 pt-2 text-xs">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Extension:</span>
              <span className="text-cyan">CodeTime</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Tracking:</span>
              <span className="text-green">Active</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Period:</span>
              <span className="text-yellow">Last 24 hours</span>
            </div>
          </div>
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
