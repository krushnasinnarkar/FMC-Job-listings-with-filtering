import "./App.css";
import {
  MobileHeaderBackgroundImage,
  DesktopHeaderBackgroundImage,
} from "./assets/images";
import { JobCard } from "./components/JobCard";
import { JobFilterButton } from "./components/JobFilterButton";
import { clearFilter, removeFilterTag, store } from "./store";
import { filterTags } from "./store";
import { For, Show } from "solid-js";

export function App() {
  const filteredJobs = () => {
    const f = [...filterTags];
    return store.jobs.filter((job) => {
      const tags = new Set([
        job.role,
        job.level,
        ...job.tools,
        ...job.languages,
      ]);
      return f.every((tag) => tags.has(tag));
    });
  };

  return (
    <>
      <picture class="hero-wrapper">
        <source
          srcset={DesktopHeaderBackgroundImage}
          media="(min-width: 40em)"
        />
        <img src={MobileHeaderBackgroundImage} alt="Header image" />
      </picture>
      <div class="job-container">
        <Show
          when={filterTags.size > 0}
          fallback={<div class="filter-hide"></div>}
        >
          <div class="filter-container">
            <div class="filter-wrapper">
              <For each={Array.from(filterTags)}>
                {(selectedRole) => (
                  <JobFilterButton
                    label={selectedRole}
                    onRemove={removeFilterTag}
                  />
                )}
              </For>
            </div>
            <button onclick={clearFilter} class="filter-clear-btn">
              Clear
            </button>
          </div>
        </Show>
        <For each={filteredJobs()}>{(job) => <JobCard job={job} />}</For>
      </div>
    </>
  );
}
