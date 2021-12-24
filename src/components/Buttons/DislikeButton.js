export function DislikeButton({ onClick }) {
  return (
    <button className={"button"} onClick={() => onClick()}>
      Yuck NO
    </button>
  );
}
