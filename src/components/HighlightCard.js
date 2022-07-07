export default function HighlightCard(props) {
  return (
    <div className="HighlightCard">
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
}
