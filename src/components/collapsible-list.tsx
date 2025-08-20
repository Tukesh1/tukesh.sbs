"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface CollapsibleListProps<T> {
  items: T[];
  max?: number;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}

export function CollapsibleList<T>({
  items,
  max = 3,
  keyExtractor,
  renderItem,
}: CollapsibleListProps<T>) {
  return (
    <Collapsible.Root>
      {/* Show initial items */}
      {items.slice(0, max).map((item, index) => (
        <div
          key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
          className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
        >
          {renderItem(item)}
        </div>
      ))}

      {/* Collapsible additional items */}
      <Collapsible.Content>
        {items.slice(max).map((item, index) => (
          <div
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(item)
                : max + index
            }
            className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
          >
            {renderItem(item)}
          </div>
        ))}
      </Collapsible.Content>

      {/* Show More/Less Button */}
      {items.length > max && (
        <div className="flex h-12 items-center justify-center pb-px border-t border-gray-200 dark:border-gray-800">
          <Collapsible.Trigger asChild>
            <button className="group/collapsible-trigger flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              <span className="hidden group-data-[state=closed]/collapsible-trigger:block">
                Show More
              </span>
              <span className="hidden group-data-[state=open]/collapsible-trigger:block">
                Show Less
              </span>
              <ChevronDown
                className="w-4 h-4 group-data-[state=open]/collapsible-trigger:rotate-180 transition-transform"
                aria-hidden
              />
            </button>
          </Collapsible.Trigger>
        </div>
      )}
    </Collapsible.Root>
  );
}
