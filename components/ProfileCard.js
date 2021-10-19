import { useState } from 'react';
import styled from 'styled-components';

const StyledProfileCardContainer = styled.div`
  height: 281px;
  width: 100%;
  background-color: transparent;
  position: relative;
`;

const StyledProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  height: 253px;
  padding: 2rem 1.5rem 3.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.secondary4};
`;
const StyledProfileOuterContent = styled.div`
  text-align: center;
  display: ${(props) => (props.isToggled ? 'none' : 'block')};

  img {
    width: 96px;
    height: 96px;
    border: 2px solid white;
    border-radius: 100px;
    margin-bottom: 1rem;
  }

  h3 {
    color: ${(props) => props.theme.colors.secondary1};
    line-height: 28px;
  }

  p {
    font-style: italic;
    color: ${(props) => props.theme.colors.primary3};
    font-weight: 500;
    line-height: 25px;
  }
`;

const StyledProfileInnerContent = styled.div`
  display: ${(props) => (props.isToggled ? 'block' : 'none')};
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
    line-height: 28px;
    color: ${(props) => props.theme.colors.secondary1};
  }

  p {
    margin: 0 auto;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.primary3};
    width: 80%;
    font-weight: 500;
    line-height: 25px;
  }
`;

const StyledProfileButton = styled.button`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isToggled ? `#79C8C7` : `#F67E7E`)};
  border-radius: 100px;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => (props.isToggled ? `#F67E7E` : `#79C8C7`)};
  }

  img {
    width: 16px;
    height: 16px;
    transition: 0.5s;

    transform: ${(props) =>
      props.isToggled ? 'rotate(45deg)' : 'rotate(0deg)'};
  }
`;

const StyledSocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

// eslint-disable-next-line react/prop-types
export default function ProfileCard({ profileImage, name, title, quote }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <StyledProfileCardContainer>
      <StyledProfileContentContainer>
        <StyledProfileOuterContent isToggled={isToggled}>
          <img src={profileImage} alt="" />
          <h3>{name}</h3>
          <p>{title}</p>
        </StyledProfileOuterContent>
        <StyledProfileInnerContent isToggled={isToggled}>
          <h3>{name}</h3>
          <p>{quote}</p>
          <StyledSocialMediaContainer>
            <img
              src="/icon-twitter.svg"
              alt={`link to twitter profile for ${name}`}
            />
            <img
              src="/icon-linkedin.svg"
              alt={`link to linkedin profile for ${name}`}
            />
          </StyledSocialMediaContainer>
        </StyledProfileInnerContent>
      </StyledProfileContentContainer>
      <StyledProfileButton
        onClick={() => setIsToggled(!isToggled)}
        isToggled={isToggled}
      >
        <img
          src="/icon-cross.svg"
          alt="open and close button for profile card"
        />
      </StyledProfileButton>
    </StyledProfileCardContainer>
  );
}
