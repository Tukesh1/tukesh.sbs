"use client";

import { useState, useEffect } from "react";
import { siteMetadata } from "@/data/siteMetadata";

interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      message: string;
      author: {
        name: string;
        email: string;
      };
      url: string;
    }>;
    size?: number;
    repository?: {
      name: string;
      full_name: string;
      description: string;
      language: string;
      stargazers_count: number;
    };
    repository_breakdown?: Array<{
      name: string;
      commits: number;
    }>;
    pull_request?: {
      number: number;
      title: string;
      body: string;
      html_url: string;
      state: string;
      comments: number;
      additions: number;
      deletions: number;
      changed_files: number;
    };
  };
  created_at: string;
}

interface ActivityGroup {
  date: string;
  events: GitHubEvent[];
}

// Activity Icons
const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'PushEvent':
      return (
        <div className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l1.394-.903a.25.25 0 0 1 .287.38l-1.75 1.14a.25.25 0 0 1-.274 0l-1.75-1.14a.25.25 0 0 1 .287-.38L7.5 7.742V4.75a.25.25 0 0 1 .5 0Z"/>
          </svg>
        </div>
      );
    case 'CreateEvent':
      return (
        <div className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
          </svg>
        </div>
      );
    case 'PullRequestEvent':
      return (
        <div className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
          </svg>
        </div>
      );
    case 'ForkEvent':
      return (
        <div className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>
          </svg>
        </div>
      );
  }
};

// GitHub Timeline Activity Item
function GitHubTimelineItem({ event }: { 
  event: GitHubEvent;
}) {
  const getEventDescription = () => {
    const repoName = event.repo.name.split('/')[1];
    const fullRepoName = event.repo.name;
    
    switch (event.type) {
      case 'PushEvent':
        const commitCount = event.payload.commits?.length || event.payload.size || 0;
        const pushRepoCount = event.payload.repository_breakdown?.length || 1;
          
        return (
          <span className="text-neutral-700 dark:text-neutral-300">
            Created <strong>{commitCount} commit{commitCount !== 1 ? 's' : ''}</strong> in <strong>{pushRepoCount} repositor{pushRepoCount !== 1 ? 'ies' : 'y'}</strong>
          </span>
        );
      case 'CreateEvent':
        const createRepoCount = event.payload.repository_breakdown?.length || 1;
        return (
          <span className="text-neutral-700 dark:text-neutral-300">
            Created <strong>{createRepoCount} repositor{createRepoCount !== 1 ? 'ies' : 'y'}</strong>
          </span>
        );
      case 'PullRequestEvent':
        return (
          <span className="text-neutral-700 dark:text-neutral-300">
            Created a pull request in <strong>{fullRepoName}</strong> that received <strong>{event.payload.pull_request?.comments || 0} comment{event.payload.pull_request?.comments !== 1 ? 's' : ''}</strong>
          </span>
        );
      case 'ForkEvent':
        const forkCount = event.payload.repository_breakdown?.length || 1;
        if (forkCount > 1) {
          return (
            <span className="text-neutral-700 dark:text-neutral-300">
              Forked <strong>{forkCount} repositories</strong>
            </span>
          );
        }
        return (
          <span className="text-neutral-700 dark:text-neutral-300">
            Forked <strong>{fullRepoName}</strong>
          </span>
        );
      default:
        return <span className="text-neutral-700 dark:text-neutral-300">Activity in <strong>{repoName}</strong></span>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };



  return (
    <div className="flex mb-6">
      {/* Timeline line and icon */}
      <div className="flex flex-col items-center mr-4">
        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-900 rounded-full flex items-center justify-center">
          <ActivityIcon type={event.type} />
        </div>
        <div className="w-0.5 bg-neutral-200 dark:bg-neutral-700 flex-1 mt-2 min-h-[40px]"></div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="text-sm mb-3">
          {getEventDescription()}
        </div>

        {/* Repository/commit details */}
        {event.type === 'PushEvent' && (
          <div className="space-y-2">
            {/* Show repository breakdown if available (multiple repos) */}
            {event.payload.repository_breakdown ? (
              event.payload.repository_breakdown.map((repo) => (
                <div key={repo.name} className="flex items-center space-x-3">
                  <a
                    href={`https://github.com/${repo.name}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium min-w-0 truncate"
                  >
                    {repo.name.split('/')[1]}
                  </a>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm whitespace-nowrap">
                    {repo.commits} commit{repo.commits !== 1 ? 's' : ''}
                  </span>
                  <div className="flex-1 flex justify-end">
                    <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              ))
            ) : (
              /* Single repository */
              <div className="flex items-center space-x-3">
                <a
                  href={`https://github.com/${event.repo.name}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium min-w-0 truncate"
                >
                  {event.repo.name.split('/')[1]}
                </a>
                <span className="text-neutral-600 dark:text-neutral-400 text-sm whitespace-nowrap">
                  {event.payload.commits?.length || event.payload.size || 1} commit{(event.payload.commits?.length || event.payload.size || 1) !== 1 ? 's' : ''}
                </span>
                <div className="flex-1 flex justify-end">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Repository creation details */}
        {event.type === 'CreateEvent' && (
          <div className="space-y-2">
            {event.payload.repository_breakdown ? (
              event.payload.repository_breakdown.map((repo) => (
                <div key={repo.name} className="flex items-center space-x-3">
                  <div className="w-4 h-4">
                    <svg fill="currentColor" viewBox="0 0 16 16" className="text-neutral-500 dark:text-neutral-400">
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
                    </svg>
                  </div>
                  <a
                    href={`https://github.com/${repo.name}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {repo.name.split('/')[1]}
                  </a>
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center space-x-1">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: '#3178c6' }}
                      ></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        TypeScript
                      </span>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {formatDate(event.created_at)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 16 16" className="text-neutral-500 dark:text-neutral-400">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
                  </svg>
                </div>
                <a
                  href={`https://github.com/${event.repo.name}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {event.repo.name.split('/')[1]}
                </a>
                <div className="flex items-center space-x-2 ml-auto">
                  <div className="flex items-center space-x-1">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: '#3178c6' }}
                    ></div>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      TypeScript
                    </span>
                  </div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(event.created_at)}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Fork details */}
        {event.type === 'ForkEvent' && (
          <div className="space-y-2">
            {event.payload.repository_breakdown ? (
              event.payload.repository_breakdown.map((repo) => (
                <div key={repo.name} className="flex items-center space-x-3">
                  <div className="w-4 h-4">
                    <svg fill="currentColor" viewBox="0 0 16 16" className="text-neutral-500 dark:text-neutral-400">
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
                    </svg>
                  </div>
                  <a
                    href={`https://github.com/${repo.name}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {repo.name.split('/')[1]}
                  </a>
                  <div className="flex items-center space-x-2 ml-auto">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {formatDate(event.created_at)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 16 16" className="text-neutral-500 dark:text-neutral-400">
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
                  </svg>
                </div>
                <a
                  href={`https://github.com/${event.repo.name}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {event.repo.name.split('/')[1]}
                </a>
                <div className="flex items-center space-x-2 ml-auto">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(event.created_at)}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pull Request details */}
        {event.type === 'PullRequestEvent' && event.payload.pull_request && (
          <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700 mt-2">
            <div className="flex items-start space-x-3 mb-3">
              <span className="text-orange-400 text-sm">🔗</span>
              <div className="flex-1">
                <a
                  href={event.payload.pull_request.html_url}
                  className="text-blue-400 hover:underline font-medium block mb-2"
                >
                  {event.payload.pull_request.title}
                </a>
                <p className="text-sm text-neutral-400">
                  Description: {event.payload.pull_request.body?.substring(0, 150) || 'Added a new term entry for Python\'s .removeprefix() method under the strings concept. This documentation covers the method introduced...'}
                  {event.payload.pull_request.body && event.payload.pull_request.body.length > 150 && '...'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <span className="text-green-400">
                +{event.payload.pull_request.additions || 0}
              </span>
              <span className="text-red-400">
                -{event.payload.pull_request.deletions || 0}
              </span>
              <span>
                📄📄📄📄📄 lines changed
              </span>
              <span>• {event.payload.pull_request.comments} comment{event.payload.pull_request.comments !== 1 ? 's' : ''}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ActivityGroup({ group }: { 
  group: ActivityGroup;
}) {
  return (
    <div className="mb-8">
      <div className="text-neutral-600 dark:text-neutral-400 text-sm font-medium mb-4 flex items-center">
        <span className="mr-2">{group.date}</span>
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700"></div>
      </div>
      
      {group.events.map((event) => (
        <GitHubTimelineItem
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default function Activity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [showMoreActivity, setShowMoreActivity] = useState(false);

  const githubUsername = siteMetadata.social.githubLink.split('/').pop() || 'tukesh1';

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch recent events
        const eventsResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/events?per_page=50`
        );
        
        if (!eventsResponse.ok) {
          throw new Error('Failed to fetch GitHub activity');
        }
        
        const eventsData = await eventsResponse.json();
        // Filter for relevant event types
        const relevantEvents = eventsData.filter((event: GitHubEvent) => 
          ['PushEvent', 'CreateEvent', 'PullRequestEvent', 'ForkEvent'].includes(event.type)
        );
        setEvents(relevantEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, [githubUsername]);



  const processEventsForGitHubDisplay = (events: GitHubEvent[]): GitHubEvent[] => {
    const activityGroups: { [key: string]: GitHubEvent[] } = {};
    
    events.forEach(event => {
      const date = new Date(event.created_at);
      const dateKey = date.toDateString(); // Use date string for grouping
      
      // Create unique key for grouping similar activities
      let groupKey = '';
      if (event.type === 'PushEvent') {
        groupKey = `${dateKey}-push`;
      } else if (event.type === 'CreateEvent') {
        groupKey = `${dateKey}-create`;
      } else if (event.type === 'ForkEvent') {
        groupKey = `${dateKey}-fork`;
      } else {
        groupKey = `${dateKey}-${event.type}-${event.id}`;
      }
      
      if (!activityGroups[groupKey]) {
        activityGroups[groupKey] = [];
      }
      activityGroups[groupKey].push(event);
    });

    const result: GitHubEvent[] = [];
    
    Object.entries(activityGroups).forEach(([groupKey, groupEvents]) => {
      if (groupKey.includes('-push')) {
        // Handle push events
        const repoGroups: { [repoName: string]: GitHubEvent[] } = {};
        groupEvents.forEach(event => {
          if (!repoGroups[event.repo.name]) {
            repoGroups[event.repo.name] = [];
          }
          repoGroups[event.repo.name].push(event);
        });
        
        const repoNames = Object.keys(repoGroups);
        const totalCommits = groupEvents.reduce((acc, event) => 
          acc + (event.payload.commits?.length || event.payload.size || 0), 0
        );
        
        const summaryEvent: GitHubEvent = {
          ...groupEvents[0],
          id: `activity-${groupEvents[0].created_at}`,
          payload: {
            ...groupEvents[0].payload,
            commits: groupEvents.flatMap(e => e.payload.commits || []),
            size: totalCommits,
            repository_breakdown: repoNames.map(repoName => {
              const repoEvents = repoGroups[repoName];
              const repoCommits = repoEvents.reduce((acc, e) => acc + (e.payload.commits?.length || e.payload.size || 0), 0);
              return {
                name: repoName,
                commits: repoCommits
              };
            })
          }
        };
        result.push(summaryEvent);
        
      } else if (groupKey.includes('-create')) {
        if (groupEvents.length === 1) {
          result.push(groupEvents[0]);
        } else {
          // Multiple repository creations on same day
          const createSummary: GitHubEvent = {
            ...groupEvents[0],
            id: `create-summary-${groupEvents[0].created_at}`,
            payload: {
              ...groupEvents[0].payload,
              repository_breakdown: groupEvents.map(event => ({
                name: event.repo.name,
                commits: 0 // For create events
              }))
            }
          };
          result.push(createSummary);
        }
        
      } else if (groupKey.includes('-fork')) {
        if (groupEvents.length === 1) {
          result.push(groupEvents[0]);
        } else {
          const forkSummary: GitHubEvent = {
            ...groupEvents[0],
            id: `fork-summary-${groupEvents[0].created_at}`,
            payload: {
              ...groupEvents[0].payload,
              repository_breakdown: groupEvents.map(event => ({
                name: event.repo.name,
                commits: 0
              }))
            }
          };
          result.push(forkSummary);
        }
        
      } else {
        groupEvents.forEach(event => result.push(event));
      }
    });
    
    return result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  };

  // Group events by date
  const groupEventsByDate = (events: GitHubEvent[]): ActivityGroup[] => {
    const processedEvents = processEventsForGitHubDisplay(events);
    
    const groups: { [key: string]: GitHubEvent[] } = {};
    
    processedEvents.forEach(event => {
      const date = new Date(event.created_at);
      const dateKey = date.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      });
      
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(event);
    });

    // Sort groups by date 
    return Object.entries(groups)
      .sort(([a], [b]) => {
        const dateA = new Date(a + ' 1');
        const dateB = new Date(b + ' 1');
        return dateB.getTime() - dateA.getTime();
      })
      .map(([date, events]) => ({
        date,
        events: events.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      }));
  };

  // Filter events by year
  const filterEventsByYear = (events: GitHubEvent[], year: number): GitHubEvent[] => {
    return events.filter(event => {
      const eventYear = new Date(event.created_at).getFullYear();
      return eventYear === year;
    });
  };

  // Get available years from events
  const getAvailableYears = (events: GitHubEvent[]): number[] => {
    const years = events.map(event => new Date(event.created_at).getFullYear());
    const uniqueYears = Array.from(new Set(years)).sort((a, b) => b - a);
    return uniqueYears.length > 0 ? uniqueYears : [new Date().getFullYear()];
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Contribution activity
          </h1>
        </div>
        
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex space-x-4">
              <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="bg-neutral-200 dark:bg-neutral-800 h-4 rounded animate-pulse"></div>
                <div className="bg-neutral-200 dark:bg-neutral-800 h-16 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Contribution activity
          </h1>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            Unable to load GitHub activity
          </h3>
          <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
          <p className="text-sm text-red-600 dark:text-red-400">
            This might be due to API rate limits or network issues. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const availableYears = getAvailableYears(events);
  const filteredEvents = filterEventsByYear(events, selectedYear);
  const groupedEvents = groupEventsByDate(filteredEvents);
  
  
  const totalActivities = groupedEvents.reduce((acc, group) => acc + group.events.length, 0);
  
  
  const displayLimit = 4;
  
  let eventsToShow: ActivityGroup[];
  const hasMoreEvents = totalActivities > displayLimit;
  
  if (showMoreActivity) {
    eventsToShow = groupedEvents;
  } else {
    eventsToShow = [];
    let activityCount = 0;
    
    for (const group of groupedEvents) {
      if (activityCount >= displayLimit) break;
      
      const remainingSlots = displayLimit - activityCount;
      if (group.events.length <= remainingSlots) {
        // Include entire group
        eventsToShow.push(group);
        activityCount += group.events.length;
      } else {
        // Include partial group
        eventsToShow.push({
          date: group.date,
          events: group.events.slice(0, remainingSlots)
        });
        activityCount += remainingSlots;
        break;
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Contribution activity
        </h1>
        <div className="flex space-x-4 text-sm">
          {availableYears.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ${
                selectedYear === year 
                  ? 'text-neutral-900 dark:text-neutral-100 font-medium' 
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {eventsToShow.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              No activity found for {selectedYear}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {selectedYear === new Date().getFullYear() 
                ? "Start coding and your activity will appear here!" 
                : `No activity recorded in ${selectedYear}.`}
            </p>
          </div>
        ) : (
          <>
            {eventsToShow.map((group) => (
              <ActivityGroup
                key={group.date}
                group={group}
              />
            ))}
            
            {hasMoreEvents && !showMoreActivity && (
              <div className="text-center py-6">
                <button
                  onClick={() => setShowMoreActivity(true)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Show more activity
                </button>
              </div>
            )}
            
            {showMoreActivity && hasMoreEvents && (
              <div className="text-center py-6">
                <button
                  onClick={() => setShowMoreActivity(false)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Show less activity
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}