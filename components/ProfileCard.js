import { useState } from 'react';
import styled from 'styled-components';

const StyledProfileCardContainer = styled.div`
  opacity: 0;
  transform: translateY(25px);
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

  svg {
    cursor: pointer;

    path {
      transition: 0.5s;
    }

    &:hover {
      path {
        fill: ${(props) => props.theme.colors.primary2};
      }
    }
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
    <StyledProfileCardContainer className="profile-card">
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
            <a href="https://www.twitter.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <title id="twitterTitle">Twitter Icon for {name}</title>
                <path
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <title id="linkedInTitle">LinkedIn Icon for {name}</title>
                <path
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </a>
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
