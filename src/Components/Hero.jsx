import "./Hero.css"
import personaldata from "./personal.json";
const Hero = () => {
  const data = personaldata.hero;

  return (
    <section id={data.id} className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src={data.image.src} alt={data.image.alt} />
          </div>

          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">{data.name}</span>
            </h1>
            <p className="hero-subtitle">{data.subtitle}</p>

            <div className="hero-buttons">
              {data.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  className={`btn btn-${btn.type}`}
                >
                  {btn.label}
                </a>
              ))}
            </div>

            <div className="social-links">
              {data.social.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                  <i className={item.icon} style={{ marginRight: "8px" }}></i>
                  <img
                    src={item.img}
                    alt={item.alt}
                    style={{ height: "40px", width: "40px", objectFit: "contain" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
