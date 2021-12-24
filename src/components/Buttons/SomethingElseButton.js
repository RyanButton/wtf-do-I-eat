export function SomethingElseButton({ onClick }) {
  return (
    <button className={"something-else-button"} onClick={() => onClick()}>
      I want something else!
    </button>
  );
}
