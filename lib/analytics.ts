"use client";

import { v4 as uuidv4 } from "uuid";

// Generate a unique visitor ID and store it in localStorage
export const getVisitorId = (): string => {
  if (typeof window === "undefined") return "";

  const visitorId = localStorage.getItem("terminal_visitor_id");
  if (!visitorId) {
    const newVisitorId = uuidv4();
    localStorage.setItem("terminal_visitor_id", newVisitorId);
    return newVisitorId;
  }
  return visitorId;
};

// Track a page visit
export const trackVisit = async (): Promise<void> => {
  try {
    const visitorId = getVisitorId();
    await fetch("/api/stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "visit",
        visitorId,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Failed to track visit:", error);
  }
};

// Track a command execution
export const trackCommand = async (command: string): Promise<void> => {
  try {
    const visitorId = getVisitorId();
    await fetch("/api/stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "command",
        command,
        visitorId,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Failed to track command:", error);
  }
};

// Fetch current stats
export const getStats = async (): Promise<any> => {
  try {
    const response = await fetch("/api/stats");
    if (!response.ok) {
      throw new Error("Failed to fetch stats");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to get stats:", error);
    return null;
  }
};
