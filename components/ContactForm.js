import styled from 'styled-components';
import { useState } from 'react';

const StyledContactForm = styled.form`
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  input[type='text'],
  input[type='email'],
  textarea {
    border: none;
    border-bottom: 1px solid #79c8c7;
    border-radius: 0;
    background-color: transparent;
    padding-bottom: 0px;
    color: white;
    font-family: ${(props) => props.theme.font};
    font-size: 1rem;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }

  textarea {
    resize: none;
    padding-bottom: 25px;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 5px;
    font-size: 14px;
    color: #ffffff99;
  }

  input[type='submit'] {
    background-color: white;
    border: none;
    font-size: 18px;
    font-family: ${(props) => props.theme.font};
    color: #004047;
    width: 123px;
    height: 48px;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const StyledErrorMessage = styled.p`
  color: #f67e7e;
  font-size: 10px;
  font-style: italic;
  height: 10px;
  font-weight: bold;
  margin-top: 8px;
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
    <StyledContactForm>
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
