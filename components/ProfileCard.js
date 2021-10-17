import { useState } from 'react';
import styled from 'styled-components';

const StyledProfileCardContainer = styled.div`
  height: 281px;
  width: 100%;
  background-color: red;
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
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondary1};
    font-weight: bold;
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
    font-size: 18px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.secondary1};
    font-weight: 700;
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

const StyledProfileButton = styled.div`
  height: 56px;
  width: 56px;
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

export default function ProfileCard() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled(!isToggled);
    console.log(isToggled);
  }

  return (
    <StyledProfileCardContainer>
      <StyledProfileContentContainer>
        <StyledProfileOuterContent isToggled={isToggled}>
          <img src="/avatar-nikita.jpg" alt="" />
          <h3>Nikita Marks</h3>
          <p>Founder & CEO</p>
        </StyledProfileOuterContent>
        <StyledProfileInnerContent isToggled={isToggled}>
          <h3>Aden Allan</h3>
          <p>
            “Empowered teams create truly amazing products. Set the north star
            and let them follow it.”
          </p>
          <StyledSocialMediaContainer>
            <img src="/icon-twitter.svg" alt="" />
            <img src="/icon-linkedin.svg" alt="" />
          </StyledSocialMediaContainer>
        </StyledProfileInnerContent>
      </StyledProfileContentContainer>
      <StyledProfileButton onClick={handleToggle} isToggled={isToggled}>
        <img src="/icon-cross.svg" alt="" />
      </StyledProfileButton>
    </StyledProfileCardContainer>
  );
}
