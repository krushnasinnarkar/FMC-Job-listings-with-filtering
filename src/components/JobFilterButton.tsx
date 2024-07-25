import { IconRemove } from "../assets/icons";
import "./JobFilterButton.css";

interface JobFilterButton {
  label: string;
  onRemove: (label: string) => void;
}

export function JobFilterButton(props: JobFilterButton) {
  return (
    <div class="job-filter-btn">
      <span>{props.label}</span>
      <button onclick={() => props.onRemove(props.label)}>
        <img src={IconRemove} alt="Remove icon" />
      </button>
    </div>
  );
}
