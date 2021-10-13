import styled from 'styled-components';

const StyledHomepageHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.primary3};
  height: 80vh;
  max-height: 500px;

  background-image: url('bg-pattern-home-2.svg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 358px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1080px) {
    background-image: url('bg-pattern-home-2.svg'), url('bg-pattern-home-1.svg');
    background-size: 358px, 200px;
    background-position: calc(80%) 100%, calc(0% - 100px) 50%;
    text-align: left;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    width: 65%;
    margin: 0 auto;
    margin-top: 3.125rem;
    margin-bottom: 1.125rem;

    @media (min-width: 768px) {
      font-size: 4rem;
      max-width: 683px;
      margin-bottom: 1.5rem;
    }

    @media (min-width: 1080px) {
      font-size: 100px;
      width: 60%;
      margin-bottom: unset;
      margin-top: unset;
    }
  }
  span {
    color: ${(props) => props.theme.colors.primary2};
  }
  p {
    width: 95%;
    margin: 0 auto;
    line-height: 28px;

    @media (min-width: 768px) {
      max-width: 457px;
    }

    @media (min-width: 1080px) {
      font-size: 1.125rem;
      width: 40%;
    }
  }
`;

const StyledHomepageHeroContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1080px) {
    display: flex;
    align-items: flex-end;
    gap: 60px;
    width: 80%;
    max-width: 1110px;
  }
`;

export default function HomepageHero() {
  return (
    <StyledHomepageHeroWrapper>
      <StyledHomepageHeroContentWrapper>
        <h1>
          Find the best <span>talent</span>
        </h1>
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </StyledHomepageHeroContentWrapper>
    </StyledHomepageHeroWrapper>
  );
}
