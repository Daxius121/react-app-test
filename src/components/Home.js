import HighlightCard from "./HighlightCard";

export default function Home() {
  return (
    <div>
      <h1 className="HeaderText">Movie Finder!</h1>
      <h2 style={{ fontStyle: "italic", marginTop: 40 }}>
        Best Movies on the web!
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HighlightCard title="Select a Holiday" description="Cool Movie" />
        <HighlightCard title="Pick a Design" description="Really Cool Movie" />
        <HighlightCard
          title="Let Us Deliver It"
          description="Giga Cool Movie"
        />
      </div>
    </div>
  );
}
