import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "emailjs-com";

const Result = () => {
  return <p>You will be contacted soon.</p>;
};

function Contact() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5px6wq4",
        "template_cq8jpwc",
        form.current,
        "user_fZPLFYJdxP6PsGNc3haqa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="fullname">Enter your name*</label>
                <input type="text" name="fullname" id="fullname" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" name="subject" id="subject" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Enter your Message*</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send Email"} />
              </div>
              <div class="row">{result ? <Result /> : null}</div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+91 9799097816"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"amritanshu.suyall2@gmail.com"}
              cont2={"suyalamritanshu@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={
                "B2/3 Officer Colony Kumbhi Chini Mill, Kumbhi Distt: Lakhimpur-Kheri"
              }
              cont2={"India"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default Contact;
