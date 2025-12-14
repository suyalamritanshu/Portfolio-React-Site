import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import InputField from '../Components/InputField';
import TextareaField from '../Components/TextareaField';
import emailjs from '@emailjs/browser';

function Contact() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_yvpj3t3', 'template_cq8jpwc', values, 'user_fZPLFYJdxP6PsGNc3haqa')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 100000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
      <p>I'll get back to you</p>
    </div>
  )

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            {status && renderAlert()}
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="fullname">Enter your name*</label>
                <InputField value={values.fullName} handleChange={handleChange} name="fullName" type="text" placeholder="Full Name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <InputField value={values.email} handleChange={handleChange} name="email" type="email" placeholder="E-mail" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <InputField value={values.subject} handleChange={handleChange} name="subject" type="text" placeholder="Subject" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Enter your Message*</label>
                <TextareaField value={values.message} handleChange={handleChange} name="message" />
              </div>
              <div className="form-field">
                <button type="submit">Send Email</button>
              </div>

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
                "Ayyappa Society, Madhapur, Hyderabad, Telangana"
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
        button{
          outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
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
  }
`;

export default Contact;
