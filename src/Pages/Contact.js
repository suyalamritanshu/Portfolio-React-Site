import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactItem from "../Components/ContactItem";
import InputField from '../Components/InputField';
import TextareaField from '../Components/TextareaField';
import SEO from '../Components/SEO';
import breakpoints from '../styles/breakpoints';

const CONTACT_EMAIL = 'amritanshu.suyall2@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const email = <EmailIcon />;
  const linkedin = <LinkedInIcon />;
  const location = <LocationOnIcon />;
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = values.fullName.trim();
    const trimmedEmail = values.email.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage || !EMAIL_REGEX.test(trimmedEmail)) {
      setStatus('INVALID');
      return;
    }

    const subjectLine = values.subject.trim()
      ? `Portfolio enquiry — ${values.subject.trim()}`
      : 'Portfolio enquiry';
    const body = `From: ${trimmedName} (${trimmedEmail})\n\n${trimmedMessage}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus('OPENING');
  }

  useEffect(() => {
    if (status === 'OPENING' || status === 'INVALID') {
      setTimeout(() => {
        setStatus('');
      }, 10000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Clipboard API unavailable/denied — the mailto link above still works.
    }
  }

  const renderAlert = () => {
    if (status === 'OPENING') {
      return <div className="form-alert form-alert--success">Opening your email client with a prefilled draft. If nothing happens, use the direct link below.</div>;
    }
    if (status === 'INVALID') {
      return <div className="form-alert form-alert--error">Please fill in your name, a valid email, and a message before composing.</div>;
    }
    return null;
  }

  return (
    <MainLayout>
      <SEO
        title="Contact | Amritanshu Suyal"
        description="Get in touch with Amritanshu Suyal via email or LinkedIn."
        path="/contact"
      />
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            {renderAlert()}
            <div className="contact-title">
              <h3>Get In Touch</h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="fullName">Enter your name*</label>
                <InputField value={values.fullName} handleChange={handleChange} name="fullName" type="text" placeholder="Full Name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <InputField value={values.email} handleChange={handleChange} name="email" type="email" placeholder="E-mail" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <InputField value={values.subject} handleChange={handleChange} name="subject" type="text" placeholder="Subject" required={false} />
              </div>
              <div className="form-field">
                <label htmlFor="message">Enter your Message*</label>
                <TextareaField value={values.message} handleChange={handleChange} name="message" />
              </div>
              <div className="form-field">
                <button type="submit">Compose Email</button>
              </div>

            </form>
            <p className="fallback-note">
              or email me directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <button type="button" className="copy-btn" onClick={handleCopyEmail}>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </p>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}
            />
            <ContactItem
              title={"LinkedIn"}
              icon={linkedin}
              cont1={
                <a href="https://www.linkedin.com/in/amritanshu-suyal-04/" target="_blank" rel="noreferrer">
                  linkedin.com/in/amritanshu-suyal-04
                </a>
              }
            />
            <ContactItem
              title={"Location"}
              icon={location}
              cont1={"Hyderabad, India"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .form-alert {
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    text-align: center;
    &.form-alert--success {
      background-color: rgba(76, 175, 125, 0.15);
      color: #4CAF7D;
      border: 1px solid #4CAF7D;
    }
    &.form-alert--error {
      background-color: rgba(220, 53, 69, 0.15);
      color: #f47c88;
      border: 1px solid #dc3545;
    }
  }
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: ${breakpoints.px978}) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: ${breakpoints.mobileHeading}) {
        width: 70%;
      }
    }
    .contact-title {
      h3 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: ${breakpoints.mobileHeading}) {
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
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          &:focus-visible {
            border-color: var(--white-color);
            box-shadow: 0 0 0 3px rgba(232, 233, 237, 0.15);
          }
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          &:focus-visible {
            border-color: var(--white-color);
            box-shadow: 0 0 0 3px rgba(232, 233, 237, 0.15);
          }
        }
        button{
          outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: background-color .4s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: .6rem;
    }
        }
      }
    }
    .fallback-note {
      margin-top: 1rem;
      font-size: var(--font-size-small);
      opacity: 0.75;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      a {
        color: var(--primary-color-light);
        text-decoration: underline;
        transition: color 0.3s ease;
        &:hover {
          color: var(--white-color);
        }
      }
      .copy-btn {
        border: 1px solid var(--border-color);
        background: transparent;
        color: var(--font-light-color);
        font-size: var(--font-size-small);
        padding: 0.15rem 0.6rem;
        cursor: pointer;
        transition: border-color 0.3s ease, color 0.3s ease;
        &:hover {
          border-color: var(--primary-color-light);
          color: var(--primary-color-light);
        }
      }
    }
  }
`;

export default Contact;
