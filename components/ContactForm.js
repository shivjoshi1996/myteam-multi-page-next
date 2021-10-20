import styled from 'styled-components';
import { useState } from 'react';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary3};
  opacity: 0;

  input[type='text'],
  input[type='email'],
  textarea {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary3};
    font-family: ${(props) => props.theme.font};
    padding-bottom: 0rem;
    border: none;
    border-bottom: 1px solid #79c8c7;
    border-radius: 0;
    background-color: transparent;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }

  textarea {
    resize: none;
    padding-bottom: 1.5625rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.875rem;
    text-align: left;
    color: #ffffff99;
  }

  input[type='submit'] {
    font-size: 1.125rem;
    font-family: ${(props) => props.theme.font};
    color: ${(props) => props.theme.colors.secondary3};
    background-color: white;
    border: none;
    width: 7.6875rem;
    height: 3rem;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const StyledErrorMessage = styled.p`
  margin-top: 0.5rem;
  height: 10px;
  color: ${(props) => props.theme.colors.primary2};
  font-size: 0.625rem;
  font-style: italic;
  font-weight: bold;
`;

export default function ContactForm() {
  const [errorMessages, setErrorMessages] = useState({
    name: null,
    email: null,
    company: null,
    title: null,
    message: null,
  });

  function validationCheck(e) {
    // Get value and trim
    let { value } = e.target;
    value = value.trim();
    // check if empty
    if (value === '') {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: 'This field is required',
      }));
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: null,
      }));
    }
  }

  return (
    <StyledContactForm className="contact-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          required
          onClick={validationCheck}
          onChange={validationCheck}
        />
        <StyledErrorMessage>{errorMessages.name}</StyledErrorMessage>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          onClick={validationCheck}
          onChange={validationCheck}
        />
        <StyledErrorMessage>{errorMessages.email}</StyledErrorMessage>
      </label>
      <label>
        Company Name:
        <input
          type="text"
          name="company"
          required
          onClick={validationCheck}
          onChange={validationCheck}
        />
        <StyledErrorMessage>{errorMessages.company}</StyledErrorMessage>
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          required
          onClick={validationCheck}
          onChange={validationCheck}
        />
        <StyledErrorMessage>{errorMessages.title}</StyledErrorMessage>
      </label>
      <label>
        Message:
        <textarea
          name="message"
          required
          onClick={validationCheck}
          onChange={validationCheck}
        />
        <StyledErrorMessage>{errorMessages.message}</StyledErrorMessage>
      </label>
      <input type="submit" value="submit" />
    </StyledContactForm>
  );
}
