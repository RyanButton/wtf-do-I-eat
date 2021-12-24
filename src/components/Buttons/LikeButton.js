export function LikeButton({ onClick }) {
  return (
    <button className={"button"} onClick={() => onClick()}>
      I want that!
    </button>
  );
}
