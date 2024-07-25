import { addFilterTag } from "../store";
import { Job } from "../types/Job";
import "./JobCard.css";
import { JobTagButton } from "./JobTagButton";
import { For, Show } from "solid-js";

interface JobCardProps {
  job: Job;
}

export function JobCard(props: JobCardProps) {
  return (
    <div class="job-wrapper">
      <Show when={props.job.featured}>
        <span class="featured-pattern"></span>
      </Show>
      <section class="job-content-wrapper">
        <div class="company-logo-wrapper">
          <img src={props.job.logo} alt={`${props.job.company} logo`} />
        </div>
        <div>
          <div class="company-name-wrapper">
            <p class="company-name">{props.job.company}</p>
            <div class="badge-wrapper">
              <Show when={props.job.new}>
                <span class="badge new">New!</span>
              </Show>
              <Show when={props.job.featured}>
                <span class="badge featured">Featured</span>
              </Show>
            </div>
          </div>
          <h4 class="position-name">
            <a href="/">{props.job.position}</a>
          </h4>
          <div class="detail-wrapper">
            <p class="posted_at"> {props.job.postedAt}</p>
            <p class="contract-type">{props.job.contract}</p>
            <p class="work-location">{props.job.location}</p>
          </div>
        </div>
      </section>
      <div class="job-tag-wrapper">
        <JobTagButton onSelect={addFilterTag} label={props.job.role} />
        <JobTagButton onSelect={addFilterTag} label={props.job.level} />
        <For each={props.job.tools}>
          {(tool) => <JobTagButton onSelect={addFilterTag} label={tool} />}
        </For>
        <For each={props.job.languages}>
          {(lang) => <JobTagButton onSelect={addFilterTag} label={lang} />}
        </For>
      </div>
    </div>
  );
}
