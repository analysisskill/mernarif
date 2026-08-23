import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { default as React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Contact.scss";

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;

  // const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_marketerarif", "template_marketerarif", form.current, {
        publicKey: "N7Y46Ae8ohwnjMdSV",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Show the heart popup and start animation
          setShowPopup(true);

          // Hide the popup and scroll to top after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 3000);

          // Redirect to Thank You page
          // navigate('https://google.com');
          // window.location.href = 'https://google.com';
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Clear form data
        }
      );
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>

            {/* 
            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="st-contact-form"
              id="contact-form"
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  required
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </form>

            {/* 
<form ref={form} onSubmit={sendEmail} className="st-contact-form" id="contact-form">
  <div className="st-form-field">
    <input
      type="text"
      id="name"
      value={formData.user_name} // Corrected to formData.user_name
      name="user_name"
      placeholder="Your Name"
      onChange={handleChange}
      required
    />
  </div>
  <div className="st-form-field">
    <input
      type="email"
      id="email"
      value={formData.user_email} // Corrected to formData.user_email
      name="user_email"
      placeholder="Your Email"
      onChange={handleChange}
      required
    />
  </div>
  <div className="st-form-field">
    <input
      type="text"
      id="subject"
      value={formData.subject} // Corrected to formData.subject
      name="subject"
      placeholder="Your Subject"
      onChange={handleChange}
      required
    />
  </div>
  <div className="st-form-field">
    <textarea
      cols="30"
      rows="10"
      id="msg"
      value={formData.message} // Corrected to formData.message
      name="message"
      placeholder="Your Message"
      onChange={handleChange}
      required
    ></textarea>
  </div>
  <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">Send Message</button>
</form>

 */}

            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="mail:office.tbgtm@gmail.com">
                    office.tbgtm@gmail.com
                  </Link>
                  <Link to="mail:info@trackingbygtm.com">
                    info@trackingbygtm.com
                  </Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>
                    <a target="_blank" href="https://wa.me/8801749827904">
                      +88 0174-9827904
                    </a>
                  </span>
                  <span>
                    <a target="_blank" href="https://wa.me/+8801571059860">
                      +88 0157-1059860
                    </a>
                  </span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    Nilphamari Rangpur
                    <br />
                    Bangladesh 5300
                  </span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
      {/* Heart Popup */}
      {showPopup && (
        <div className="popup">
          <span role="img" aria-label="heart" className="heart">
            ❤️
          </span>
        </div>
      )}
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;
