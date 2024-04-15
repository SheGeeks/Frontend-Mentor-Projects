export default function Toggle() {
  return (
    <button aria-labelledby="toggle-label" id="toggle">
      <span id="toggle-label" hidden>
        Toggle color mode
      </span>
    </button>
  );
}
