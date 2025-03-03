// app/about/github.tsx
import React from "react";
import GitHubCalendar from "react-github-calendar";

// Define custom props interface for TypeScript
interface GitHubCalendarProps {
  username: string;
  blockSize?: number;
  blockMargin?: number;
  color?: string;
  fontSize?: number;
  theme?: {
    light: string[];
    dark: string[];
  };
  showTotalCount?: boolean;
  dateFormat?: string;
  startDate?: Date;
  endDate?: Date;
}

// Type the component
const GitHubCalendarTyped = GitHubCalendar as React.ComponentType<GitHubCalendarProps>;

export function Github() {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setMonth(today.getMonth() - 12);

  return (
    <div className="flex flex-col items-center pb-2 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4">
        Days I <span className="text-green-600 dark:text-green-400">Code</span>
      </h1>
      <div className="p-4  bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 w-full overflow-hidden flex justify-center">
        <div className="inline-block">
          <GitHubCalendarTyped
            username="tukesh1"
            blockSize={10}
            blockMargin={2}
            color="#239a3b" // Green-600 as the primary color
            fontSize={16}
            theme={{
              light: [
                "#ebedf0", // Inactive: Gray-200
                "#c6e48b", // Low: Light green
                "#7bc96f", // Moderate: Medium green
                "#239a3b", // High: Green-600
                "#196127", // Very High: Green-800
              ],
              dark: [
                "#4b5563", // Inactive: Gray-600
                "#bef264", // Low: Lighter green (lime-300)
                "#84cc16", // Moderate: Green-500
                "#52d726", // High: Green-400
                "#3f9c1f", // Very High: Slightly darker green
              ],
            }}
            showTotalCount={true}
            dateFormat="yyyy-mm-dd"
            startDate={startDate}
            endDate={today}
          />
        </div>
      </div>
    </div>
  );
}