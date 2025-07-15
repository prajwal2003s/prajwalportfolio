import personaldata from "./personal.json";

function Resume() {
  return (
    <section id="resume">
      <h2>Download My Resume</h2>
      <a href={personal.resume.pdf} download>
        <button>Download PDF</button>
      </a>
      <a href={personal.resume.doc} download>
        <button>Download Word</button>
      </a>
    </section>
  );
}

export default Resume;