import "../App.scss";

export default function Home() {
  return (
    <div className="home-body">
      <div className="text">
        <h1 className="non-highlight">The</h1>
        <h1 className="highlight">efficient</h1>
        <h1 className="non-highlight">way to</h1>
        <h1 className="highlight">develop</h1>
        <button className="cta">
          Learn more <i className="fa-solid fa-arrow-down-long"></i>
        </button>
      </div>
      <img src="../../images/butterfly.png" alt="Butterfly" />
    </div>
  );
}
