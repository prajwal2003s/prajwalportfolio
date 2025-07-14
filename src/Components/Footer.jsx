import "./Footer.css";
import personaldata from "./personal.json";

const Footer = () => {
  const data = personaldata.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>{data.text}</p>
          <div className="footer-social">
            {data.social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={item.icon}></i>
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
    </footer>
  );
};



export default Footer;
