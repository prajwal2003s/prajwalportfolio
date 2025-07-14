import "./Skills.css";
import personaldata from "./personal.json";
const Skills = () => {
  const data = personaldata.skills;

  return (
    <section id={data.section.id} className="skills">
      <div className="container">
        <div className="section-header">
          <h2>{data.section.title}</h2>
          <p>{data.section.subtitle}</p>
        </div>

        <div className="skills-grid">
          {data.list.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Skills;
