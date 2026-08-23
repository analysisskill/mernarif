import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Skill.scss";

const Skill = ({ data }) => {
  const { title, text, skills } = data;
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">{text}</div>
                <div
                  className="st-hero-btn"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <br />

                  {/* Link to Upwork */}
                  <a
                    className="st-btn st-style1 st-color1  mr-5"
                    href="https://www.upwork.com/freelancers/~01ddab9c58238186a0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire me on Upwork
                  </a>

                  {/* Link to Fiverr */}
                  <a
                    className="st-btn st-style1 st-color3"
                    href="https://www.fiverr.com/tracking_by_gtm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire me on Fiverr
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {skills.map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos={element.effect}
                  data-aos-duration={element.duration}
                  data-aos-delay={element.delay}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.title}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.progress}
                    </div>
                  </div>
                  <div className="st-progressbar" data-progress="95">
                    <div className="st-progressbar-in "></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
