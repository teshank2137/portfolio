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
        Hello, I'm a Third Year Computer Engineering student at D.Y. Patil
        College of Engineering, Pune. I am a self-motivated person who is always
        looking for new challenges and new ways to improve myself.
        <br />
        <br /> I was born and raised in Nagpur, India. I love to play guitar and
        ukulele and in my free time I like to read books, watch movies and play
        video games.
      </div>
    </section>
  );
};

export default AboutText;
