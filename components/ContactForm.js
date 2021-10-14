import styled from 'styled-components';

const StyledContactForm = styled.form`
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;

  input[type='text'],
  input[type='email'],
  textarea {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #79c8c7;
    padding-bottom: 21px;
  }

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
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
  }
`;

export default function ContactForm() {
  return (
    <StyledContactForm>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Company Name:
        <input type="text" name="company" />
      </label>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Message:
        <textarea />
      </label>
      <input type="submit" value="submit" />
    </StyledContactForm>
  );
}
