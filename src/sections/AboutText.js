const AboutText = () => {
  const getSpans = (text) => {
    let spans = [];
    for (let i = 0; i < text.length; i++) {
      spans.push(
        <span className="t" key={i.toString()}>
          {text[i]}
        </span>
      );
    }
    return spans;
  };
  return (
    <section className="about-text">
      <h1 className="about-title">{getSpans("About me")}</h1>
      <div className="about-contents">
        Excepteur id exercitation reprehenderit dolor est. Officia ut tempor
        aliquip dolore minim nisi enim laborum officia consequat deserunt est
        minim. Consectetur eiusmod aute officia esse do do labore duis. Culpa
        aliquip quis tempor dolor non aliquip ipsum do quis et tempor esse
        proident non.
      </div>
    </section>
  );
};

export default AboutText;
