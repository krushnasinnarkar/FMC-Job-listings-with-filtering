import "./JobTagButton.css";

interface JobTagButtonProps {
  label: string;
  onSelect: (label: string) => void;
}
export function JobTagButton(props: JobTagButtonProps) {
  return (
    <button class="job-tag-btn" onclick={() => props.onSelect(props.label)}>
      {props.label}
    </button>
  );
}
