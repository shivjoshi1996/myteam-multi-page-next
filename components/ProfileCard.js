import { useState } from 'react';
import styled from 'styled-components';

const StyledProfileCardContainer = styled.div`
  height: 281px;
  width: 100%;
  background-color: transparent;
  position: relative;
`;

const StyledProfileContentContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 32px 24px 56px 24px;
  height: 253px;
  background-color: ${(props) => props.theme.colors.secondary4};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledProfileOuterContent = styled.div`
  text-align: center;
  display: ${(props) => (props.isToggled ? 'none' : 'block')};

  img {
    width: 96px;
    height: 96px;
    border: 2px solid white;
    border-radius: 100px;
    margin-bottom: 16px;
  }

  h3 {
    color: ${(props) => props.theme.colors.secondary1};
    line-height: 28px;
  }

  p {
    font-style: italic;
    color: white;
    font-weight: 15px;
    font-weight: 500;
    line-height: 25px;
  }
`;

const StyledProfileInnerContent = styled.div`
  /* position: absolute; */
  display: ${(props) => (props.isToggled ? 'block' : 'none')};

  text-align: center;

  h3 {
    line-height: 28px;
    color: ${(props) => props.theme.colors.secondary1};
    margin-bottom: 8px;
  }

  p {
    color: white;
    font-weight: 500;
    line-height: 25px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 24px;
  }
`;

const StyledProfileButton = styled.button`
  height: 56px;
  width: 56px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isToggled ? `#79C8C7` : `#F67E7E`)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  position: absolute;
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
  gap: 16px;
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
            <img src="/icon-twitter.svg" alt="" />
            <img src="/icon-linkedin.svg" alt="" />
          </StyledSocialMediaContainer>
        </StyledProfileInnerContent>
      </StyledProfileContentContainer>
      <StyledProfileButton
        onClick={() => setIsToggled(!isToggled)}
        isToggled={isToggled}
      >
        <img src="/icon-cross.svg" alt="" />
      </StyledProfileButton>
    </StyledProfileCardContainer>
  );
}
