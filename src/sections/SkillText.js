const SkillText = () => {
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
    <section className="skill-text">
      <h1 className="skill-title">
        {getSpans("Skills &").map((e) => e)} <br />
        {getSpans("Experience").map((e) => e)}
      </h1>
      <div className="skill-contents">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was .
      </div>
    </section>
  );
};

export default SkillText;
