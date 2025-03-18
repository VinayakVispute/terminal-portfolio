"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Terminal,
  Hash,
} from "lucide-react";

interface HistoryCommandProps {
  commandHistory: string[];
  filterArg?: string;
}

const HistoryCommand: React.FC<HistoryCommandProps> = ({
  commandHistory,
  filterArg,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(filterArg || "");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Adjust items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(5);
      } else {
        setItemsPerPage(10);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter commands based on grep-like syntax
  const filteredCommands = useMemo(() => {
    if (!filter) return commandHistory;

    try {
      // Support regex if pattern is between slashes /pattern/
      if (filter.startsWith("/") && filter.endsWith("/") && filter.length > 2) {
        const regexPattern = filter.slice(1, -1);
        const regex = new RegExp(regexPattern, "i");
        return commandHistory.filter((cmd) => regex.test(cmd));
      }

      // Simple string includes matching
      return commandHistory.filter((cmd) =>
        cmd.toLowerCase().includes(filter.toLowerCase())
      );
    } catch (error) {
      // If regex is invalid, fall back to simple matching
      return commandHistory.filter((cmd) =>
        cmd.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }, [commandHistory, filter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredCommands.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCommands = filteredCommands.slice(startIndex, endIndex);

  // Handle pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Initialize filter from filterArg if provided
  useEffect(() => {
    if (filterArg) {
      setFilter(filterArg);
    }
  }, [filterArg]);

  return (
    <div className="font-mono text-foreground space-y-3">
      {/* Header with stats */}
      <div className="flex items-center justify-between">
        <h3 className="text-accent flex items-center">
          <Terminal size={18} className="mr-2" />
          Command History
        </h3>
        <span className="text-muted-foreground text-sm">
          <Hash size={14} className="inline mr-1" />
          {filteredCommands.length}{" "}
          {filteredCommands.length === 1 ? "command" : "commands"}
          {filter && " matched"}
        </span>
      </div>

      {/* Filter input */}
      <div className="relative">
        <div className="absolute left-2 top-2.5 text-muted-foreground">
          <Search size={16} />
        </div>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1); // Reset to first page when filtering
          }}
          placeholder="Filter commands (grep syntax supported)"
          className="w-full pl-8 pr-4 py-2 bg-base01/50 rounded-md outline-none focus:ring-1 focus:ring-accent text-sm"
        />
      </div>

      {/* No results message */}
      {filteredCommands.length === 0 && (
        <div className="text-muted-foreground text-center py-4">
          No commands match your filter.
        </div>
      )}

      {/* Command list */}
      <div className="space-y-1">
        {currentCommands.map((command, index) => (
          <div key={index} className="flex items-center">
            <span className="text-muted-foreground text-xs mr-2 w-5 text-right">
              {startIndex + index + 1}
            </span>
            <p className="break-all">{command}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls - show only if we have more than one page */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2 border-t border-base01">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`flex items-center px-2 py-1 rounded ${
              currentPage === 1
                ? "text-muted-foreground cursor-not-allowed"
                : "text-accent hover:bg-base01"
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            Prev
          </button>

          <span className="text-muted-foreground text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center px-2 py-1 rounded ${
              currentPage === totalPages
                ? "text-muted-foreground cursor-not-allowed"
                : "text-accent hover:bg-base01"
            }`}
          >
            Next
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      )}

      {/* Command tip */}
      <p className="text-xs text-muted-foreground mt-2">
        <span className="text-cyan">Tip:</span> Use{" "}
        <span className="text-yellow">history [filter]</span> to search or
        <span className="text-yellow"> /regex/</span> for advanced filtering
      </p>
    </div>
  );
};

export default HistoryCommand;
